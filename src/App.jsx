import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './custom.css';
import Lenis from '@studio-freight/lenis';

import Home from './views/Home';

export default function App() {
  useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }, []);

    return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:language' element={<Home />} />
        <Route path='/:language/home' element={<Home />} />
      </Routes>
  );
}