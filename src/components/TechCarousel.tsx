import {
  siNodedotjs, siNestjs, siExpress, siFastify, siOpenjdk, siSpringboot, siPython, siDjango, siLaravel, siTypescript,
  siJavascript, siKotlin, siReact, siNextdotjs, siFlutter, siDart, siAngular, siVuedotjs, siPwa, siTailwindcss, siVite,
  siPostgresql, siMysql, siMongodb, siRedis, siElasticsearch, siPrisma, siHibernate, siFirebase,
  siDocker, siKubernetes, siHelm, siAmazonwebservices, siGooglecloud, siRailway, siCloudflare, siNginx, siLinux,
  siGithubactions, siGitlab, siBitbucket, siApachekafka, siRabbitmq, siGraphql,
  siAnaconda, siPandas, siNumpy, siScikitlearn, siJupyter, siClaude, siGooglegemini,
  siStripe, siWhatsapp, siCypress, siJunit5, siPostman, siSwagger, siGit,
  type SimpleIcon,
} from 'simple-icons';

// Dos filas que se desplazan en sentidos contrarios. La lista se repite dos veces
// para que el ciclo no tenga cortes; se detiene al pasar el mouse.
const fila1: [SimpleIcon, string][] = [
  [siNodedotjs, 'Node.js'], [siNestjs, 'NestJS'], [siExpress, 'Express'], [siFastify, 'Fastify'], [siOpenjdk, 'Java'],
  [siSpringboot, 'Spring Boot'], [siPython, 'Python'], [siDjango, 'Django'], [siLaravel, 'Laravel'], [siTypescript, 'TypeScript'],
  [siJavascript, 'JavaScript'], [siKotlin, 'Kotlin'], [siReact, 'React'], [siNextdotjs, 'Next.js'], [siFlutter, 'Flutter'],
  [siDart, 'Dart'], [siAngular, 'Angular'], [siVuedotjs, 'Vue'], [siPwa, 'PWA'], [siTailwindcss, 'Tailwind'], [siVite, 'Vite'],
  [siPostgresql, 'PostgreSQL'], [siMysql, 'MySQL'], [siMongodb, 'MongoDB'], [siRedis, 'Redis'], [siElasticsearch, 'Elasticsearch'],
  [siPrisma, 'Prisma'], [siHibernate, 'Hibernate'], [siFirebase, 'Firebase'],
];
const fila2: [SimpleIcon, string][] = [
  [siDocker, 'Docker'], [siKubernetes, 'Kubernetes'], [siHelm, 'Helm'], [siAmazonwebservices, 'AWS'], [siGooglecloud, 'Google Cloud'],
  [siRailway, 'Railway'], [siCloudflare, 'Cloudflare'], [siNginx, 'Nginx'], [siLinux, 'Linux'], [siGithubactions, 'GitHub Actions'],
  [siGitlab, 'GitLab CI'], [siBitbucket, 'Bitbucket'], [siApachekafka, 'Kafka'], [siRabbitmq, 'RabbitMQ'], [siGraphql, 'GraphQL'],
  [siClaude, 'Claude'], [siGooglegemini, 'Gemini'], [siAnaconda, 'Anaconda'], [siJupyter, 'Jupyter'], [siPandas, 'Pandas'],
  [siNumpy, 'NumPy'], [siScikitlearn, 'scikit-learn'], [siStripe, 'Stripe'], [siWhatsapp, 'WhatsApp API'], [siCypress, 'Cypress'],
  [siJunit5, 'JUnit'], [siPostman, 'Postman'], [siSwagger, 'Swagger'], [siGit, 'Git'],
];

function Fila({ items, reversa }: { items: [SimpleIcon, string][]; reversa?: boolean }) {
  return (
    <div className="carrusel group relative overflow-hidden">
      <ul className={`carrusel-pista flex w-max gap-3 ${reversa ? 'carrusel-reversa' : ''}`}>
        {[...items, ...items].map(([icono, nombre], i) => (
          <li
            key={`${nombre}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-2.5 rounded-md border border-linea bg-white px-3.5 py-2.5"
            style={{ ['--marca' as string]: `#${icono.hex}` }}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-tinta/70 transition-colors" role="img" aria-label={nombre}>
              <path d={icono.path} />
            </svg>
            <span className="whitespace-nowrap text-sm text-tinta/80">{nombre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <section aria-label="Tecnologías con las que he trabajado" className="border-b border-linea py-10 sm:py-12">
      <div className="seccion mb-6 flex items-baseline justify-between gap-4">
        <p className="etiqueta">Tecnologías con las que he trabajado</p>
        <a href="#stack" className="hidden text-sm text-gris underline-offset-4 hover:text-tinta hover:underline sm:inline">
          Ver detalle
        </a>
      </div>
      <div className="space-y-3">
        <Fila items={fila1} />
        <Fila items={fila2} reversa />
      </div>
    </section>
  );
}
