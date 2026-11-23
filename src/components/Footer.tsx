export default function Footer() {
  return (
    <footer className="bg-tinta">
      <div className="seccion flex flex-wrap items-center justify-between gap-3 py-8 border-t border-papel/10 font-mono text-xs text-papel/45">
        <p>© {new Date().getFullYear()} Luis Ricardo Medina Villagómez</p>
        <p>Cuernavaca, Morelos · Hecho con Next.js</p>
      </div>
    </footer>
  );
}
