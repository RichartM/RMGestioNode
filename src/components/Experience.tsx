const puntos = [
  'Diseño e implementación de una arquitectura de más de 9 microservicios en NestJS y Fastify, desplegados en Kubernetes con Helm y pipelines de CI/CD en Bitbucket.',
  'Servicio de alertas con Apache Kafka (Confluent): productores y consumidores para eventos de transacciones en tiempo real, con avisos por WebSockets, correo SMTP y webhooks de Slack.',
  'Integración de Elasticsearch para consultar, filtrar y analizar grandes volúmenes de transacciones: índices dinámicos, vistas por institución y exportación a Excel.',
  'Procesos batch con GCP Workflows y Cloud Scheduler, con seguimiento de ejecuciones y reintento de procesos fallidos.',
  'Bitácora de actividad distribuida en MongoDB que guarda el antes y después de cada entidad modificada, aplicada de forma transversal en los servicios.',
  'Seguridad con JWT + Okta, Helmet y rate limiting; contratos de API con DTOs validados, errores estandarizados, i18n y documentación en Swagger/OpenAPI para el frontend en Next.js.',
];

export default function Experience() {
  return (
    <section id="experiencia" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion grid gap-10 lg:grid-cols-[16rem_1fr]">
        <div>
          <p className="etiqueta">Experiencia</p>
        </div>
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">Exos Technology</h2>
            <p className="font-mono text-sm text-gris">feb 2025 — may 2026</p>
          </div>
          <p className="mt-1 text-gris">Programador backend · Scrum, code review, ambientes dev / qa / prod</p>
          <ul className="mt-7 space-y-4">
            {puntos.map((p) => (
              <li key={p} className="grid grid-cols-[1.25rem_1fr] text-[15px] leading-relaxed">
                <span className="text-acento">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-1.5">
            {['NestJS', 'Fastify', 'Kafka', 'Elasticsearch', 'MongoDB', 'Kubernetes', 'Helm', 'GCP', 'Okta', 'Socket.IO'].map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
