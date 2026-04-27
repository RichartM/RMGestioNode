'use client';

import { Code2, Zap, Target, Users, Braces, GitBranch, Database, Cloud, Server, Box, Network } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Code2, title: 'Desarrollo Full Stack', description: 'Desarrollo web y móvil con tecnologías modernas' },
    { icon: Zap, title: 'Automatización', description: 'Optimización de procesos con RPA y scripts inteligentes' },
    { icon: Target, title: 'Gestión de Procesos', description: 'Análisis y mejora de flujos operacionales' },
    { icon: Users, title: 'Consultoría', description: 'Asesoramiento técnico y estrategia digital' },
  ];

  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              En <span className="text-accent font-semibold">RMGestioNode</span> nos apasiona la <span className="text-accent font-semibold">automatización inteligente</span> y 
              la gestión eficiente de procesos. Con más de 5 años de experiencia, hemos trabajado con 
              empresas de distintos sectores, desde startups hasta grandes corporaciones.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Mi objetivo es transformar desafíos empresariales en soluciones tecnológicas robustas y 
              escalables que generen valor real. Creo en la <span className="text-accent font-semibold">personalización</span> y 
              en entender profundamente las necesidades de cada cliente.
            </p>
            <p className="text-lg text-gray-300">
              Ubicados en <span className="text-accent font-semibold">Cuernavaca, México</span>, estamos disponibles 
              para proyectos locales e internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-secondary/10 rounded-lg border border-secondary/30 hover:border-accent/50 hover:bg-secondary/20 transition"
                >
                  <Icon className="text-accent mb-3" size={32} />
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg p-8 border border-secondary/30">
          <h3 className="text-2xl font-bold mb-6">Tecnologías & Herramientas</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: 'JavaScript', icon: Braces },
              { name: 'TypeScript', icon: Braces },
              { name: 'React', icon: Code2 },
              { name: 'Next.js', icon: Code2 },
              { name: 'Python', icon: Code2 },
              { name: 'Node.js', icon: Server },
              { name: 'SQL', icon: Database },
              { name: 'MongoDB', icon: Database },
              { name: 'Docker', icon: Box },
              { name: 'AWS', icon: Cloud },
              { name: 'Git', icon: GitBranch },
              { name: 'APIs REST', icon: Network },
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={index} 
                  className="px-4 py-3 bg-primary/50 rounded-lg text-center text-gray-300 border border-secondary/20 hover:border-accent/50 hover:bg-secondary/10 transition flex flex-col items-center gap-2"
                >
                  <Icon size={24} className="text-accent" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
