import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function AnimateElement({ children }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'all 0.8s ease-out',
      }}
    >
      {children}
    </div>
  );
}