import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './views/Home';
import './custom.css';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

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
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}