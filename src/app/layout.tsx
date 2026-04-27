import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RMGestioNode - Gestión de Procesos y Automatización Inteligente",
  description: "Soluciones de desarrollo de software, gestión de procesos y automatización inteligente. Transformamos tu negocio con tecnología.",
  keywords: "desarrollo, software, automatización, procesos, Ricardo Medina",
  authors: [{ name: "Ricardo Medina" }],
  openGraph: {
    title: "RMGestioNode - Gestión de Procesos y Automatización Inteligente",
    description: "Soluciones de desarrollo de software y automatización inteligente para tu empresa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-primary text-white">{children}</body>
    </html>
  );
}
