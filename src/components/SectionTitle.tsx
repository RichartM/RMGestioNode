import Reveal from './Reveal';

// Encabezado de sección: número, nombre y una frase que engancha.
export default function SectionTitle({ n, nombre, titulo, bajada, oscuro }: { n: string; nombre: string; titulo: string; bajada?: string; oscuro?: boolean }) {
  return (
    <Reveal>
      <p className={`font-mono text-xs uppercase tracking-[0.14em] ${oscuro ? 'text-papel/50' : 'text-gris'}`}>
        <span className="text-acento-claro">{n}</span> — {nombre}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-[2.75rem]">{titulo}</h2>
      {bajada && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${oscuro ? 'text-papel/65' : 'text-gris'}`}>{bajada}</p>}
    </Reveal>
  );
}
