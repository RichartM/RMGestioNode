import Counter from './Counter';
import Reveal from './Reveal';

const cifras = [
  { n: 9, s: '+', t: 'microservicios en Kubernetes en los que trabajé en Exos' },
  { n: 1, s: '', t: 'SaaS propio en producción, de la base de datos al cobro' },
  { n: 6, s: '', t: 'APIs externas integradas: Stripe, CFDI, WhatsApp, Claude, Alexa y Google' },
];

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-linea pt-28 sm:pt-36">
      <div className="seccion pb-16 sm:pb-20">
        <Reveal>
          <p className="etiqueta flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acento opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acento" />
            </span>
            Disponible · Desarrollador Full Stack · Cuernavaca, Mor.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-7xl">
            Hola, soy Ricardo.
            <br />
            <span className="text-gris">Llevo ideas del pizarrón</span> a producción.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gris">
            Backend con Node.js, NestJS, Spring Boot y Django; apps web y móviles con React, Next.js, React Native y
            Flutter; y la infraestructura para que todo corra en producción. Mi prueba más reciente: un sistema completo
            para ópticas que diseñé, programé y opero yo mismo.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#opticasaas" className="group rounded-md bg-tinta px-5 py-3 text-sm font-medium text-papel transition hover:bg-acento">
              Ver cómo lo construí <span className="inline-block transition group-hover:translate-y-0.5">↓</span>
            </a>
            <a href="#contacto" className="rounded-md border border-tinta/20 px-5 py-3 text-sm font-medium transition hover:border-tinta">
              Contacto
            </a>
            <a href="https://github.com/RichartM" target="_blank" rel="noreferrer" className="px-2 py-3 text-sm font-medium text-gris underline-offset-4 transition hover:text-tinta hover:underline">
              GitHub ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-linea bg-linea sm:grid-cols-3">
          {cifras.map((c, i) => (
            <Reveal key={c.t} delay={300 + i * 100} className="bg-papel p-6">
              <p className="text-5xl font-semibold tracking-tight">
                <Counter to={c.n} suffix={c.s} />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gris">{c.t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
