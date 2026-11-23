'use client';

import { useState } from 'react';

const enlaces = [
  { nombre: 'Proyecto', href: '#opticasaas' },
  { nombre: 'Experiencia', href: '#experiencia' },
  { nombre: 'Stack', href: '#stack' },
  { nombre: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-papel/90 backdrop-blur">
      <div className="seccion flex h-14 items-center justify-between">
        <a href="#inicio" className="text-[15px] font-semibold tracking-tight">
          Ricardo Medina
        </a>

        <nav className="hidden items-center gap-7 text-sm text-gris md:flex">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} className="transition hover:text-tinta">
              {e.nombre}
            </a>
          ))}
          <a
            href="mailto:ricardornv07t@gmail.com"
            className="rounded-md bg-tinta px-3.5 py-1.5 text-[13px] font-medium text-papel transition hover:bg-acento"
          >
            Escríbeme
          </a>
        </nav>

        <button
          className="text-sm text-gris md:hidden"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-label="Menú"
        >
          {abierto ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {abierto && (
        <nav className="seccion flex flex-col border-t border-linea pb-3 md:hidden">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} onClick={() => setAbierto(false)} className="py-2.5 text-sm text-gris">
              {e.nombre}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
