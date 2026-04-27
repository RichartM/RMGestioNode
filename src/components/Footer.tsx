'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: '#', label: 'GitHub' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Mail, url: 'mailto:ricardornv07t@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-primary border-t border-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">RMGestioNode</h3>
            <p className="text-gray-400">Gestión de Procesos y Automatización Inteligente</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-accent transition">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition">Sobre Mí</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-accent transition">Proyectos</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8">
          <p className="text-center text-gray-500">
            © {currentYear} RMGestioNode. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
