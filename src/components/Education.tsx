import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const formacion = [
  {
    t: 'Ingeniería en Desarrollo y Gestión de Software Multiplataforma',
    lugar: 'Universidad Tecnológica Emiliano Zapata (UTEZ)',
    fecha: 'sep 2023 — dic 2026',
  },
  {
    t: 'TSU en Desarrollo de Software Multiplataforma',
    lugar: 'UTEZ · cédula profesional 15612092',
    fecha: 'sep 2023 — sep 2025',
  },
];

export default function Education() {
  return (
    <section id="formacion" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion">
        <SectionTitle n="05" nombre="Formación" titulo="Ingeniero en formación, con cédula y experiencia en producción." />
        <Reveal delay={100} className="mt-10">
          <ul className="divide-y divide-linea border-y border-linea">
            {formacion.map((f) => (
              <li key={f.t} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                <div>
                  <p className="font-medium">{f.t}</p>
                  <p className="mt-0.5 text-sm text-gris">{f.lugar}</p>
                </div>
                <p className="font-mono text-sm text-gris">{f.fecha}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gris">
            Inglés B1: lectura técnica y conversación básica-intermedia. Trabajo con Scrum, Kanban y XP.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
