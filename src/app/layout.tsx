import type { Metadata } from 'next';
import { IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

const descripcion =
  'Desarrollador Full Stack en Cuernavaca, Morelos. Backend con Node.js, NestJS, Spring Boot y Django; frontend y móvil con React, Next.js, React Native y Flutter. Creador de OpticaSaaS.';

export const metadata: Metadata = {
  title: 'Luis Ricardo Medina — Desarrollador Full Stack',
  description: descripcion,
  authors: [{ name: 'Luis Ricardo Medina Villagómez' }],
  openGraph: {
    title: 'Luis Ricardo Medina — Desarrollador Full Stack',
    description: descripcion,
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${mono.variable}`}>
      <body className="bg-papel font-sans text-tinta">{children}</body>
    </html>
  );
}
