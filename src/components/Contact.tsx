'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  // REEMPLAZA ESTA URL CON LA TUYA DE GOOGLE APPS SCRIPT
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyb2hrnBCCWvLIb2ASgGCbzwk9mKkRPwYWqAdgkjohq9XaDkRtBUPIovnaLKaIH5rAp/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Error al enviar. Por favor intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Verifica que la URL de Google Apps Script esté configurada.');
      console.error('Error:', err);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ricardornv07t@gmail.com',
      link: 'mailto:ricardornv07t@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+52 777 211 5635',
      link: 'https://wa.me/527772115635?text=Hola%20me%20interesa%20conocer%20tus%20servicios%20de%20desarrollo%20y%20automatizaci%C3%B3n'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Cuernavaca, México',
      link: '#'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accent to-secondary mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría hablar contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="p-6 bg-secondary/10 rounded-lg border border-secondary/30 hover:border-accent/50 transition text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <p className="text-accent">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-secondary/10 rounded-lg p-8 border border-secondary/30">
          <h3 className="text-2xl font-bold mb-2">Envíame un Mensaje</h3>
          <p className="text-gray-400 mb-6">Llena el formulario y me pondré en contacto lo antes posible.</p>

          {submitted && (
            <div className="mb-6 p-4 bg-accent/20 border border-accent rounded-lg text-accent text-center animate-pulse">
              ✅ ¡Gracias! Tu mensaje fue recibido. Pronto me pondré en contacto contigo.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu Nombre"
                required
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none text-white placeholder-gray-500 transition"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu Email"
                required
                className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none text-white placeholder-gray-500 transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
              required
              className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none text-white placeholder-gray-500 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu Mensaje..."
              rows={6}
              required
              className="w-full px-4 py-3 bg-primary/50 border border-secondary/30 rounded-lg focus:border-accent focus:outline-none text-white placeholder-gray-500 transition resize-none"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-secondary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitted}
            >
              <Send size={20} />
              {submitted ? 'Mensaje Enviado' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
