'use client';

export default function Projects() {
  const projects = [
    {
      title: 'Sistema de Gestión de Inventario',
      description: 'Plataforma web para gestionar inventario con reportes en tiempo real y análisis de datos. Implementación con base de datos escalable.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://thumbs.dreamstime.com/b/control-de-inventarios-por-parte-la-administraci%C3%B3n-sistemas-en-l%C3%ADnea-con-los-productos-demandados-el-profesional-del-trabajador-262774754.jpg'
    },
    {
      title: 'Bot de Automatización RPA',
      description: 'Solución de automatización que redujo procesos manuales en 80%. Integración con sistemas legacy y APIs modernas.',
      tech: ['Python', 'RPA', 'Docker'],
      image: 'https://kinesisco.com/wp-content/uploads/2023/10/tecnologia-empresarial-automatizacion-procesos-rparobotic.jpg'
    },
    {
      title: 'Dashboard Analítico Empresarial',
      description: 'Panel de control avanzado con visualización de datos, métricas en tiempo real y reportes personalizables.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Algunos de los proyectos más relevantes en los que he trabajado recientemente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary/10 rounded-lg overflow-hidden border border-secondary/30 hover:border-accent/50 transition group"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary to-accent">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-accent/20 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">¿Quieres conocer más sobre mis trabajos?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition"
          >
            Solicita una Consulta Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
