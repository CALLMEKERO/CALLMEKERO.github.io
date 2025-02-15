import { useState, useEffect } from 'react';
import './App.css';
import Main from './pages/main';
import Lenis from '@studio-freight/lenis';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      // Lenis options
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
    <>
      <Main />
    </>
  );
}

export default App;
