import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './custom.css';
import Lenis from '@studio-freight/lenis';

import Home from './views/Home';
import Shop from './views/Shop';
import NotFound from './views/NotFound';

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
        <Route path='/shop' element={<Shop />} />
        <Route path='/:language/shop' element={<Shop />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
  );
}