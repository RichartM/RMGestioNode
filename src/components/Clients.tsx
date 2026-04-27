'use client';

import { Star } from 'lucide-react';

export default function Clients() {
  const testimonials = [
    {
      name: 'Juan García',
      company: 'TechStart Mexico',
      role: 'CEO',
      testimonial: 'Ricardo entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas. Altamente recomendado.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=1'
    },
    {
      name: 'María López',
      company: 'Retail Solutions',
      role: 'Directora de Operaciones',
      testimonial: 'La automatización de procesos que implementó nos ahorro 40 horas semanales. Un cambio transformacional para nuestro negocio.',
      rating: 5,
      image: 'https://i.pravatar.cc/100?img=2'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Clientes & Testimonios</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mx-auto"></div>
        </div>

        {/* Testimonios */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl grid gap-8">
            {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-primary/50 rounded-lg border border-secondary/30 hover:border-accent/50 transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Empresas */}
        <div className="bg-secondary/10 rounded-lg p-8 border border-secondary/30 mt-8">
          <h3 className="text-2xl font-bold text-center mb-8">Empresas con las que he trabajado</h3>
          <div className="flex justify-center">
            <div className="p-6 bg-primary/50 rounded-lg border border-secondary/20 hover:border-accent/50 transition flex items-center gap-4">
              <img 
                src="https://exos.mx/favicon.ico" 
                alt="exos Technology"
                className="h-12 w-12 object-contain"
              />
              <p className="text-lg font-semibold">exos Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
