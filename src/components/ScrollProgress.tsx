'use client';

import { useEffect, useState } from 'react';

// Línea fina bajo el encabezado que avanza conforme se baja por la página.
export default function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const calc = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    calc();
    window.addEventListener('scroll', calc, { passive: true });
    window.addEventListener('resize', calc);
    return () => {
      window.removeEventListener('scroll', calc);
      window.removeEventListener('resize', calc);
    };
  }, []);
  return <div className="absolute bottom-0 left-0 h-[2px] bg-acento" style={{ width: `${p * 100}%` }} aria-hidden />;
}
