'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

// Cada pestaña cuenta una parte de lo que construí y muestra la pantalla que le toca.
const partes = [
  {
    t: 'App web progresiva',
    corto: 'PWA',
    d: 'React, TypeScript, Vite y Tailwind. Se instala en el celular o la computadora como una app, recibe avisos push y se actualiza sola al publicar una versión nueva.',
    img: 'opticasaas-movil.jpg',
    movil: true,
  },
  {
    t: 'Integración con modelos de IA',
    corto: 'IA',
    d: 'Asistente en WhatsApp (Meta Cloud API + Claude) que contesta a pacientes y agenda citas con tool use. Recordatorios desde el panel, skill de Amazon Alexa y clasificación automática de correos.',
    img: 'opticasaas-dashboard.jpg',
  },
  {
    t: 'Pagos y facturación',
    corto: 'Pagos',
    d: 'Caja con lector de códigos o cámara, anticipos y saldos. Suscripciones con Stripe (webhooks idempotentes, cupones, IVA) y facturación electrónica CFDI 4.0 con Facturapi.',
    img: 'opticasaas-caja.jpg',
  },
  {
    t: 'API y datos',
    corto: 'Backend',
    d: 'Node.js con Express y TypeScript, Prisma sobre PostgreSQL. Multi-tenant por óptica y sucursal, roles, JWT, login con Google, inventario con traspasos entre sucursales y migraciones versionadas.',
    img: 'opticasaas-inventario.jpg',
  },
  {
    t: 'Infraestructura',
    corto: 'Infra',
    d: 'Backend en contenedor sobre Railway, frontend en Cloudflare Workers, archivos en R2 y correo con Resend. Ramas develop y main con despliegue automático a cada ambiente.',
    img: 'opticasaas-agenda.jpg',
  },
];

const stack = ['React', 'TypeScript', 'PWA', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Stripe', 'Claude API', 'WhatsApp Cloud API', 'Cloudflare', 'Railway'];

export default function OpticaSaaS() {
  const [activa, setActiva] = useState(0);
  const [tocado, setTocado] = useState(false);

  // Avanza sola hasta que el visitante elige una pestaña.
  useEffect(() => {
    if (tocado) return;
    const id = setInterval(() => setActiva((a) => (a + 1) % partes.length), 6000);
    return () => clearInterval(id);
  }, [tocado]);

  const p = partes[activa];

  return (
    <section id="opticasaas" className="bg-tinta py-20 text-papel sm:py-28">
      <div className="seccion">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle
            oscuro
            n="01"
            nombre="Proyecto propio"
            titulo="Un SaaS completo, de la base de datos hasta el cobro con tarjeta."
            bajada="OpticaSaaS es software en la nube para ópticas en México: agenda, expedientes con graduación, ventas, caja, inventario y facturación. Lo diseñé, lo programé y lo opero."
          />
          <Reveal delay={150}>
            <a href="https://opticasaas.com" target="_blank" rel="noreferrer" className="rounded-md border border-papel/25 px-4 py-2 text-sm font-medium transition hover:border-papel">
              opticasaas.com ↗
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-8 lg:grid-cols-[22rem_1fr] lg:gap-12">
            {/* Pestañas */}
            <div>
              <p className="font-mono text-xs text-papel/45">Explora lo que construí →</p>
              <ul className="mt-4 space-y-1">
                {partes.map((x, i) => (
                  <li key={x.t}>
                    <button
                      onClick={() => {
                        setActiva(i);
                        setTocado(true);
                      }}
                      className={`relative w-full overflow-hidden rounded-md px-4 py-3 text-left transition ${i === activa ? 'bg-papel/[0.07]' : 'hover:bg-papel/[0.04]'}`}
                    >
                      <span className="flex items-baseline gap-3">
                        <span className={`font-mono text-xs ${i === activa ? 'text-acento-claro' : 'text-papel/35'}`}>{String(i + 1).padStart(2, '0')}</span>
                        <span className={`font-medium ${i === activa ? 'text-papel' : 'text-papel/60'}`}>{x.t}</span>
                      </span>
                      {i === activa && (
                        <>
                          <span className="mt-2 block pl-8 text-[14px] leading-relaxed text-papel/65">{x.d}</span>
                          {!tocado && <span key={activa} className="barra-tiempo absolute bottom-0 left-0 h-[2px] bg-acento-claro" />}
                        </>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pantalla */}
            <div className="relative flex min-h-[18rem] items-center justify-center rounded-xl border border-papel/10 bg-papel/[0.03] p-4 sm:p-8">
              {partes.map((x, i) => (
                <img
                  key={x.img}
                  src={`/proyectos/${x.img}`}
                  alt={x.t}
                  className={`transition-all duration-700 ${i === activa ? 'relative opacity-100' : 'pointer-events-none absolute opacity-0'} ${
                    x.movil ? 'max-h-[30rem] w-auto rounded-[1.6rem] border-[6px] border-papel/90' : 'w-full rounded-lg'
                  } ${i === activa ? 'scale-100' : 'scale-[0.98]'}`}
                  style={i === activa ? undefined : { inset: 0, margin: 'auto' }}
                />
              ))}
              <span className="absolute bottom-3 right-4 font-mono text-[11px] text-papel/40">{p.corto}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap gap-1.5">
            {stack.map((s) => (
              <span key={s} className="rounded border border-papel/15 px-2 py-0.5 font-mono text-[12px] text-papel/70">
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
