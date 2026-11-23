import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

const grupos = [
  { t: 'Backend', v: ['Node.js', 'NestJS', 'Express', 'Fastify', 'Java · Spring Boot', 'Spring Batch', 'Python · Django', 'Laravel'] },
  { t: 'Frontend y móvil', v: ['React', 'Next.js', 'TypeScript', 'PWA', 'React Native', 'Flutter · Dart', 'Angular', 'Vue'] },
  { t: 'Datos', v: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Prisma', 'Hibernate / JPA', 'Firebase'] },
  {
    t: 'IA y ciencia de datos',
    v: ['Integración de modelos (Claude, Gemini)', 'Agentes y bots conversacionales', 'Tool use', 'Embeddings', 'Pinecone · Chroma · Weaviate', 'Anaconda', 'Pandas · NumPy', 'Machine Learning'],
  },
  { t: 'DevOps y nube', v: ['Docker', 'Kubernetes · Helm', 'AWS (EC2, S3, Lambda, Amplify)', 'GCP', 'Railway', 'Cloudflare', 'Nginx', 'Linux'] },
  { t: 'CI/CD y calidad', v: ['GitHub Actions', 'GitLab CI', 'Bitbucket Pipelines', 'JUnit · Mockito', 'Cypress', 'REST Assured', 'Postman', 'Swagger / OpenAPI'] },
  { t: 'Arquitectura', v: ['Microservicios', 'REST', 'GraphQL', 'Event-driven', 'Kafka · RabbitMQ', 'CQRS', 'BFF', 'Clean Architecture'] },
];

export default function Stack() {
  return (
    <section id="stack" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion">
        <SectionTitle
          n="04"
          nombre="Stack"
          titulo="Del backend al celular, y de ahí a la nube."
          bajada="Lo que uso a diario y lo que ya llevé a producción. Aprendo rápido lo que haga falta para el proyecto."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g, i) => (
            <Reveal key={g.t} delay={(i % 3) * 90} className="h-full">
              <div className="h-full rounded-xl border border-linea bg-white p-5">
                <p className="flex items-baseline gap-2 font-medium">
                  <span className="font-mono text-xs text-acento">{String(i + 1).padStart(2, '0')}</span>
                  {g.t}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.v.map((v) => (
                    <span key={v} className="rounded bg-papel px-2 py-0.5 text-[13px] text-tinta/80">{v}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
