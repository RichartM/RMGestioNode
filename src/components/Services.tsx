'use client';

import { Briefcase, Cog, Settings, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Desarrollo de Software',
      description: 'Aplicaciones web, móviles y de escritorio personalizadas según tus necesidades.',
      features: ['Full Stack Web', 'Aplicaciones Móviles', 'Integración de APIs']
    },
    {
      icon: Cog,
      title: 'Automatización de Procesos',
      description: 'Optimiza tu flujo de trabajo con soluciones de automatización inteligente.',
      features: ['RPA', 'Bots automáticos', 'Integración de sistemas']
    },
    {
      icon: Settings,
      title: 'Consultoría Técnica',
      description: 'Asesoramiento experto para tomar mejores decisiones tecnológicas.',
      features: ['Análisis de infraestructura', 'Mejora de procesos', 'Estrategia digital']
    },
    {
      icon: TrendingUp,
      title: 'Optimización & Mantenimiento',
      description: 'Mejora el rendimiento y la estabilidad de tus sistemas.',
      features: ['Auditoría de código', 'Optimización de BD', 'Soporte técnico']
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Mis Servicios</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ofrezco soluciones integrales adaptadas a tu sector y necesidades específicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-primary/50 rounded-lg border border-secondary/30 hover:border-accent/50 hover:bg-primary/80 transition group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Cog className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-accent flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 text-center">
          <p className="text-xl text-gray-300">
            ¿Tienes un proyecto en mente? <span className="text-accent font-bold">Trabajemos juntos</span> para hacerlo realidad.
          </p>
        </div>
      </div>
    </section>
  );
}
