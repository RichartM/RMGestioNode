# 📧 Configurar Formulario de Contacto

El formulario de contacto es completamente funcional, pero para que los emails lleguen a tu correo, tienes dos opciones:

## Opción 1: EmailJS (RECOMENDADO - Más fácil)

EmailJS permite enviar emails sin necesidad de backend.

### Pasos:

1. **Ve a https://www.emailjs.com/**
2. **Crea una cuenta gratis**

3. **Obtén tu Public Key:**
   - En el menú izquierdo, haz clic en **"Account"** (icono de engranaje)
   - Verás tu **Public Key** (cadena como `xxxx_xxxxxx`)
   - ✅ **Cópiala y guárdala**

4. **Obtén el Service ID:**
   - En el menú, ve a **"Email Services"**
   - Verás tu servicio de Gmail con **Service ID**
   - Busca algo como `service_kx7l11v`
   - ✅ **Cópialo**

5. **Crea una template:**
   - Menú → **"Email Templates"**
   - Haz clic en **"Create New Template"**
   - Personaliza el formato del email
   - Copia el **Template ID** (algo como `template_xxxx`)
   - ✅ **Guárdalo**

6. **Instala emailjs en tu proyecto:**

```bash
npm install @emailjs/browser
```

7. **Actualiza `src/components/Contact.tsx`:**

En el archivo `Contact.tsx`, reemplaza la función `handleSubmit` con esto:

```typescript
import emailjs from '@emailjs/browser';

// Inicializa EmailJS UNA SOLA VEZ
emailjs.init('TU_PUBLIC_KEY_AQUI'); // Ej: 'xxxx_xxxxxxxxxxxxx'

const handleSubmit = async (e: any) => {
  e.preventDefault();
  
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'tu_email@gmail.com', // ⚠️ REEMPLAZA CON TU EMAIL
  };

  try {
    await emailjs.send(
      'service_kx7l11v',      // ⚠️ TU SERVICE_ID
      'template_xxxx',         // ⚠️ TU TEMPLATE_ID
      templateParams
    );
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

---

## 📋 TABLA - Dónde Obtener Cada Dato en EmailJS

| Dato que necesitas | Dónde encontrarlo en EmailJS |
|---|---|
| **Public Key** | Menú izq → "Account" → copiar Public Key |
| **Service ID** | Menú izq → "Email Services" → tu Gmail |
| **Template ID** | Menú izq → "Email Templates" → tu template |
| **Tu email** | Tu correo de Gmail (donde recibirás mensajes) |

---

## ✅ CHECKLIST RÁPIDO

- [ ] Fui a EmailJS Account y copié Public Key
- [ ] Copié Service ID de Email Services
- [ ] Creé un Email Template y copié su ID
- [ ] Instalé: `npm install @emailjs/browser`
- [ ] Actualicé Contact.tsx con los 3 datos
- [ ] Probé localmente: `npm run dev`
- [ ] Envié un test message desde el formulario
- [ ] Recibí el email en mi cuenta

---

## 8. **Deploy en Vercel (Opcional pero Recomendado):**
   - En Vercel → Settings → Environment Variables
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = tu public key
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = tu service id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = tu template id

---

## Opción 2: Formspree (Alternativa simple)

1. **Ve a https://formspree.io/**
2. **Crea una cuenta**
3. **Crea un nuevo form**
4. **Verifica tu email**
5. **Usa el endpoint que te da**

```typescript
const handleSubmit = async (e: any) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  }
};
```

---

## Opción 3: SendGrid (Profesional)

Para empresas que requieren mejor deliverability.

1. **Crea cuenta en https://sendgrid.com/**
2. **Obtén API Key**
3. **Crear un endpoint en un backend (Node.js + Express)**

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'tu_email@gmail.com',
  from: formData.email,
  subject: formData.subject,
  text: formData.message,
};

await sgMail.send(msg);
```

---

## Opción 4: Backend personalizado

Si prefieres control total, puedes crear un endpoint en Vercel Functions:

1. **Crea carpeta:** `api` en `src`
2. **Archivo:** `src/api/send-email.ts`

```typescript
import type { NextApiRequest, NextApiResponse } = require('next');
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'tu_email@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar email' });
  }
}
```

3. **En Contact.tsx:**

```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## Mi recomendación

**Para comenzar: EmailJS**
- ✅ Gratis y fácil
- ✅ No requiere backend
- ✅ Entrega confiable

**Cuando crezcas: SendGrid o tu propio backend**
- ✅ Mejor control
- ✅ Más profesional
- ✅ Tracking y analítica

---

¿Preguntas? Contacta al equipo de soporte de cada servicio.
