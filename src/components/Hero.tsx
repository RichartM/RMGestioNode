'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 gradient-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-semibold">
            Bienvenido a mi portafolio
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Ricardo Medina
          <br />
          <span className="gradient-text">Desarrollo & Automatización</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Especialista en desarrollo de software y automatización de procesos inteligentes. 
          Transformo ideas en soluciones tecnológicas que impulsan tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition"
          >
            Ver Proyectos <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition"
          >
            Contactarme
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold gradient-text">20+</p>
            <p className="text-gray-400">Proyectos Completados</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">10+</p>
            <p className="text-gray-400">Clientes Satisfechos</p>
          </div>
          <div>
            <p className="text-4xl font-bold gradient-text">2+</p>
            <p className="text-gray-400">Años de Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
