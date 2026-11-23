const datos = [
  { t: 'Ahora', v: 'OpticaSaaS — SaaS para ópticas en producción', href: 'https://opticasaas.com' },
  { t: 'Último puesto', v: 'Programador backend · Exos Technology' },
  { t: 'Formación', v: 'Ing. en Desarrollo de Software · UTEZ' },
  { t: 'Ubicación', v: 'Cuernavaca, Morelos · remoto o presencial' },
];

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-linea pt-28 sm:pt-36">
      <div className="seccion grid gap-12 pb-16 sm:pb-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <p className="etiqueta">Desarrollador Full Stack</p>
          <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Luis Ricardo
            <br />
            Medina Villagómez
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gris">
            Construyo software completo: la API, la base de datos, la app web o móvil y la infraestructura para que
            corra en producción. Mi fuerte es el backend con Node.js, NestJS, Spring Boot y Django.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gris">
            Trabajé en una arquitectura de más de nueve microservicios con Kafka, Elasticsearch y Kubernetes. Hoy
            mantengo <span className="text-tinta">OpticaSaaS</span>, un sistema para ópticas que diseñé y programé
            desde cero y que opera en producción con pagos, facturación electrónica e IA.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#opticasaas" className="rounded-md bg-tinta px-5 py-2.5 text-sm font-medium text-papel transition hover:bg-acento">
              Ver el proyecto
            </a>
            <a href="#contacto" className="rounded-md border border-tinta/20 px-5 py-2.5 text-sm font-medium transition hover:border-tinta">
              Contacto
            </a>
            <a
              href="https://github.com/RichartM"
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2.5 text-sm font-medium text-gris underline-offset-4 transition hover:text-tinta hover:underline"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <dl className="self-end border-t border-linea lg:border-t-0">
          {datos.map((d) => (
            <div key={d.t} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-linea py-3.5 text-sm">
              <dt className="etiqueta pt-0.5">{d.t}</dt>
              <dd>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noreferrer" className="underline decoration-linea underline-offset-4 hover:decoration-tinta">
                    {d.v}
                  </a>
                ) : (
                  d.v
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
