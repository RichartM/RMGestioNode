export default function Footer() {
  return (
    <footer className="border-t border-linea">
      <div className="seccion flex flex-wrap items-center justify-between gap-3 py-8 font-mono text-xs text-gris">
        <p>© {new Date().getFullYear()} Luis Ricardo Medina Villagómez</p>
        <p>Cuernavaca, Morelos · Hecho con Next.js</p>
      </div>
    </footer>
  );
}
