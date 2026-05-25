import { useEffect, useState, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const elemento = elementoRef.current;
    if (!elemento) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(elemento);
      }
    }, options);

    observer.observe(elemento);

    return () => {
      if (elemento) observer.unobserve(elemento);
    };
  }, [options]);

  return [elementoRef, isIntersecting];
}