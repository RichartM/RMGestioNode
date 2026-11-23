const construido = [
  {
    t: 'App web progresiva (PWA)',
    d: 'React, TypeScript, Vite y Tailwind. Se instala en el celular o la computadora, recibe avisos push y se actualiza sola al publicar una versión nueva.',
  },
  {
    t: 'API y datos',
    d: 'Node.js con Express y TypeScript, Prisma sobre PostgreSQL. Multi-tenant por óptica y sucursal, roles, JWT, inicio de sesión con Google y migraciones versionadas.',
  },
  {
    t: 'Pagos y facturación',
    d: 'Suscripciones con Stripe: webhooks idempotentes, cupones con duración, IVA y portal de cliente. Facturación electrónica CFDI 4.0 con Facturapi.',
  },
  {
    t: 'Integración con modelos de IA',
    d: 'Asistente en WhatsApp (Meta Cloud API + Claude) que contesta a pacientes y agenda citas con tool use. También una skill de Amazon Alexa y clasificación automática de correos.',
  },
  {
    t: 'Infraestructura',
    d: 'Backend en contenedor sobre Railway, frontend en Cloudflare Workers, archivos en Cloudflare R2, correo con Resend. Ramas develop y main con despliegue automático.',
  },
  {
    t: 'Herramientas internas',
    d: 'Panel de administración con métricas, comisiones de aliados y un módulo de prospección que usa Google Places API para encontrar clientes potenciales.',
  },
];

const stack = ['React', 'TypeScript', 'PWA', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Claude API', 'WhatsApp Cloud API', 'Cloudflare', 'Railway'];

export default function OpticaSaaS() {
  return (
    <section id="opticasaas" className="border-b border-linea py-20 sm:py-28">
      <div className="seccion">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="etiqueta">Proyecto propio · 2026</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">OpticaSaaS</h2>
            <p className="mt-3 max-w-2xl text-lg text-gris">
              Software en la nube para ópticas en México: agenda, expedientes con graduación, ventas con anticipos,
              caja, inventario por sucursal y facturación. Lo diseñé, lo programé y lo opero.
            </p>
          </div>
          <a
            href="https://opticasaas.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-tinta/20 px-4 py-2 text-sm font-medium transition hover:border-tinta"
          >
            opticasaas.com ↗
          </a>
        </div>

        {/* Capturas */}
        <div className="relative mt-12">
          <figure className="overflow-hidden rounded-lg border border-linea bg-white shadow-[0_1px_0_#e2dfd7,0_20px_40px_-24px_rgba(22,24,29,0.25)]">
            <img src="/proyectos/opticasaas-dashboard.jpg" alt="Panel principal de OpticaSaaS con recordatorios por WhatsApp y ventas" className="block w-full" loading="lazy" />
          </figure>
          <figure className="absolute -bottom-10 right-4 hidden w-[22%] overflow-hidden rounded-[1.4rem] border-[6px] border-tinta bg-white shadow-xl sm:block lg:right-10">
            <img src="/proyectos/opticasaas-movil.jpg" alt="Agenda del día en el celular" className="block w-full" loading="lazy" />
          </figure>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 sm:mt-16 sm:max-w-[72%]">
          {[
            ['opticasaas-agenda.jpg', 'Agenda'],
            ['opticasaas-caja.jpg', 'Caja'],
            ['opticasaas-inventario.jpg', 'Inventario'],
          ].map(([img, t]) => (
            <figure key={img}>
              <img src={`/proyectos/${img}`} alt={t} className="block w-full rounded border border-linea" loading="lazy" />
              <figcaption className="mt-1.5 font-mono text-[11px] text-gris">{t}</figcaption>
            </figure>
          ))}
        </div>

        {/* Qué construí */}
        <div className="mt-16 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {construido.map((c, i) => (
            <div key={c.t} className="border-t border-tinta/80 pt-4">
              <p className="font-mono text-xs text-gris">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-1.5 font-medium">{c.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gris">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
