import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const logros = [
  { t: 'Arquitectura', d: 'Diseño e implementación de más de 9 microservicios en NestJS y Fastify, desplegados en Kubernetes con Helm y pipelines de CI/CD en Bitbucket.' },
  { t: 'Notificaciones', d: 'Avisos en tiempo real por WebSockets (Socket.IO), correo SMTP y webhooks de Slack desde el servicio de alertas.' },
  { t: 'Búsqueda', d: 'Elasticsearch en varios servicios para consultar, filtrar y analizar grandes volúmenes de transacciones: índices dinámicos, vistas por institución y exportación a Excel.' },
  { t: 'Procesos batch', d: 'Flujos automáticos con GCP Workflows y Cloud Scheduler, con seguimiento de ejecuciones y reintento de procesos fallidos.' },
  { t: 'Auditoría', d: 'Bitácora de actividad distribuida en MongoDB que guarda el antes y el después de cada entidad modificada, aplicada de forma transversal.' },
  { t: 'Seguridad y contratos', d: 'JWT + Okta, Helmet y rate limiting. DTOs validados, errores estandarizados, i18n y Swagger/OpenAPI para el frontend en Next.js.' },
];

// Diagrama de la arquitectura: el frontend entra por el gateway y de ahí a los
// microservicios en Kubernetes, que guardan en MongoDB y Elasticsearch.
function DiagramaArquitectura() {
  const servicios = ['Búsqueda', 'Reportes', 'Alertas', 'Batch', 'Bitácora', '+ 4 más'];
  return (
    <div className="rounded-xl border border-linea bg-white p-5 sm:p-7">
      <p className="font-mono text-xs text-gris">Arquitectura · Kubernetes + Helm · CI/CD en Bitbucket</p>
      <div className="mt-6 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
        <Nodo t="Next.js" s="frontend" />
        <Flecha />
        <Nodo t="Gateway" s="JWT + Okta · rate limit" fuerte />
        <Flecha />
        <div className="rounded-lg border border-dashed border-tinta/25 p-3">
          <p className="mb-2 text-center font-mono text-[11px] text-gris">9+ microservicios · NestJS / Fastify</p>
          <div className="grid grid-cols-3 gap-1.5">
            {servicios.map((x) => (
              <span key={x} className="rounded border border-linea px-2 py-1.5 text-center font-mono text-[11px]">{x}</span>
            ))}
          </div>
        </div>
        <Flecha />
        <div className="flex flex-row gap-2 lg:flex-col">
          {['MongoDB', 'Elasticsearch'].map((c) => (
            <span key={c} className="flex-1 rounded-lg bg-papel px-3 py-2 text-center font-mono text-[12px]">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Nodo({ t, s, fuerte }: { t: string; s: string; fuerte?: boolean }) {
  return (
    <div className={`rounded-lg px-4 py-3 text-center ${fuerte ? 'bg-tinta text-papel' : 'border border-linea'}`}>
      <p className="text-sm font-medium">{t}</p>
      <p className={`font-mono text-[11px] ${fuerte ? 'text-papel/60' : 'text-gris'}`}>{s}</p>
    </div>
  );
}

function Flecha() {
  return (
    <div className="relative mx-auto h-6 w-px bg-linea lg:h-px lg:w-auto lg:flex-1">
      <span className="pulso absolute top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-acento lg:block" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion">
        <SectionTitle
          n="02"
          nombre="Experiencia"
          titulo="Más de nueve microservicios trabajando como un solo sistema."
          bajada="En Exos Technology (feb 2025 — may 2026) trabajé como programador backend en una plataforma de microservicios que procesa transacciones para varias instituciones, con Scrum, code review y ambientes dev, qa y prod."
        />

        <Reveal delay={100} className="mt-12">
          <DiagramaArquitectura />
          <p className="mt-3 text-sm text-gris">
            Servicios independientes con contratos REST documentados en Swagger, desplegados por ambiente (dev, qa y prod)
            con Helm charts y pipelines de CI/CD.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {logros.map((l, i) => (
            <Reveal key={l.t} delay={i * 90}>
              <div className="border-t-2 border-tinta pt-4">
                <h3 className="font-medium">{l.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gris">{l.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-1.5">
            {['NestJS', 'Fastify', 'Elasticsearch', 'MongoDB', 'Kubernetes', 'Helm', 'GCP', 'Okta', 'Socket.IO'].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
