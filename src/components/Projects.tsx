import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const proyectos = [
  {
    t: 'Agencia de vehículos — app web y móvil',
    d: 'Simula la operación de una agencia, del registro del vehículo al cierre de la venta. Tres roles (gerente, agente y cliente) con permisos distintos, historial de compras y ventas, autenticación con JWT y Firebase. Desplegada en AWS con entrega continua.',
    stack: ['React Native', 'React', 'Firebase', 'AWS', 'JWT'],
  },
  {
    t: 'Gestión de almacén',
    d: 'Entradas y salidas de productos con trazabilidad de movimientos, proveedores, áreas y unidades de medida. Roles de almacenista y supervisor, validaciones de negocio y persistencia con Hibernate sobre MySQL.',
    stack: ['Java', 'Spring Boot', 'Hibernate / JPA', 'MySQL', 'JSP'],
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion">
        <SectionTitle n="03" nombre="Otros proyectos" titulo="Antes de OpticaSaaS, ya resolvía problemas reales." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {proyectos.map((p, i) => (
            <Reveal key={p.t} delay={i * 120} className="h-full">
            <article className="h-full rounded-xl border border-linea bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(22,24,29,0.45)] sm:p-7">
              <h3 className="text-lg font-medium">{p.t}</h3>
              <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-gris">{p.d}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
