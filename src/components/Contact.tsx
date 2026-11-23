'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Reveal from './Reveal';

// Los mensajes del formulario llegan a una hoja de Google Sheets (ver GOOGLE_SHEETS_SETUP.md).
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyb2hrnBCCWvLIb2ASgGCbzwk9mKkRPwYWqAdgkjohq9XaDkRtBUPIovnaLKaIH5rAp/exec';

const medios = [
  { t: 'Correo', v: 'ricardornv07t@gmail.com', href: 'mailto:ricardornv07t@gmail.com' },
  { t: 'WhatsApp', v: '+52 777 211 5635', href: 'https://wa.me/527772115635' },
  { t: 'GitHub', v: 'github.com/RichartM', href: 'https://github.com/RichartM' },
];

const vacio = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(vacio);
  const [estado, setEstado] = useState<'listo' | 'enviando' | 'enviado' | 'error'>('listo');

  const cambiar = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setEstado('enviando');
    try {
      const r = await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: JSON.stringify(form) });
      if (!r.ok) throw new Error(String(r.status));
      setForm(vacio);
      setEstado('enviado');
    } catch {
      setEstado('error');
    }
  }

  const campo =
    'w-full rounded-md border border-papel/15 bg-papel/[0.05] px-3.5 py-2.5 text-[15px] text-papel outline-none transition placeholder:text-papel/40 focus:border-papel/60';

  return (
    <section id="contacto" className="bg-tinta py-20 text-papel sm:py-28">
      <div className="seccion grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-papel/50"><span className="text-acento-claro">06</span> — Contacto</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">¿Tienes un proyecto o una vacante?</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-papel/65">
            Busco sumarme a un equipo de producto o colaborar en proyectos de backend, web o móvil. Contesto el mismo
            día.
          </p>
          <dl className="mt-10 border-t border-papel/15">
            {medios.map((m) => (
              <div key={m.t} className="grid grid-cols-[6.5rem_1fr] border-b border-papel/15 py-3.5 text-[15px]">
                <dt className="pt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-papel/45">{m.t}</dt>
                <dd>
                  <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="underline decoration-papel/25 underline-offset-4 hover:decoration-papel">
                    {m.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150} className="self-end">
        <form onSubmit={enviar} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input name="name" value={form.name} onChange={cambiar} placeholder="Nombre" required className={campo} />
            <input name="email" type="email" value={form.email} onChange={cambiar} placeholder="Correo" required className={campo} />
          </div>
          <input name="subject" value={form.subject} onChange={cambiar} placeholder="Asunto" required className={campo} />
          <textarea name="message" value={form.message} onChange={cambiar} placeholder="Cuéntame del proyecto o la vacante" rows={6} required className={`${campo} resize-none`} />
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="rounded-md bg-papel px-5 py-2.5 text-sm font-medium text-tinta transition hover:bg-acento-claro disabled:opacity-60"
            >
              {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
            {estado === 'enviado' && <p className="text-sm text-acento-claro">Recibido. Te escribo pronto.</p>}
            {estado === 'error' && <p className="text-sm text-red-300">No se pudo enviar. Escríbeme directo al correo.</p>}
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
