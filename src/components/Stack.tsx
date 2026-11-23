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
      <div className="seccion grid gap-10 lg:grid-cols-[16rem_1fr]">
        <div>
          <p className="etiqueta">Stack</p>
          <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-gris">
            Lo que uso a diario y lo que he llevado a producción. Aprendo rápido lo que haga falta para el proyecto.
          </p>
        </div>
        <dl className="border-t border-linea">
          {grupos.map((g) => (
            <div key={g.t} className="grid gap-2 border-b border-linea py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm font-medium">{g.t}</dt>
              <dd className="text-[15px] leading-relaxed text-gris">{g.v.join('  ·  ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
