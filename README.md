# Ricardo Medina - Landing Page

Sitio web profesional para mostrar servicios de desarrollo de software y automatización de procesos.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Gradientes y animaciones suave
- 📱 Completamente mobile-friendly
- ⚡ Optimizado para Vercel
- 🔍 SEO listo
- 💼 Secciones completas (Sobre, Servicios, Proyectos, Clientes, Contacto)

## 📋 Requisitos

- Node.js 16+ 
- npm o yarn

## 🛠️ Instalación Local

1. **Clona el repositorio o copia los archivos a tu máquina**

```bash
cd my-company-landing
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

4. **Abre tu navegador en**

```
http://localhost:3000
```

## 📦 Build para Producción

```bash
npm run build
npm run start
```

## 🚀 Despliegue en Vercel

### Opción 1: Mediante GitHub

1. **Sube tu código a GitHub**
   - Crea un repositorio en GitHub
   - Push de tu código

2. **Conecta a Vercel**
   - Ve a https://vercel.com
   - Inicia sesión con tu cuenta
   - Haz clic en "New Project"
   - Selecciona tu repositorio de GitHub
   - Haz clic en "Import"
   - Vercel detectará automáticamente que es un proyecto Next.js
   - Haz clic en "Deploy"

### Opción 2: Mediante Vercel CLI

1. **Instala la CLI de Vercel**

```bash
npm install -g vercel
```

2. **Inicia sesión en Vercel**

```bash
vercel login
```

3. **Despliega tu proyecto**

```bash
vercel
```

Sigue las instrucciones en la terminal. Vercel te dará una URL de tu sitio.

## 📝 Personalizaciones

### Cambiar el nombre de la empresa

Edita los siguientes archivos:

- `src/components/Header.tsx` - Cambiar "RM Dev"
- `src/components/Footer.tsx` - Actualizar información
- `src/app/layout.tsx` - Actualizar metadatos

### Añadir tus proyectos reales

Edita `src/components/Projects.tsx` y reemplaza los proyectos en el array `projects` con tus trabajos reales:

```typescript
const projects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción de tu proyecto',
    tech: ['React', 'Node.js'],
    link: 'https://tu-proyecto.com',
    github: 'https://github.com/tu-usuario/proyecto',
    image: 'url-de-tu-imagen'
  },
  // ... más proyectos
];
```

### Actualizar clientes y testimonios

Edita `src/components/Clients.tsx` con información real de tus clientes.

### Cambiar colores

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  primary: "#0F172A",    // Azul oscuro (fondo)
  secondary: "#1E40AF",  // Azul
  accent: "#06B6D4",     // Cyan (resalte)
}
```

### Actualizar información de contacto

Edita `src/components/Contact.tsx` y `src/components/Header.tsx` con tu email y teléfono real.

## 🌐 Dominio personalizado

1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio personalizado
4. Sigue las instrucciones para configurar DNS

## 📧 Formulario de contacto

El formulario actual es un placeholder. Para funcionalidad real, conecta a un servicio como:

- **EmailJS** - Envío de emails sin backend
- **Formspree** - Servicio de formularios
- **SendGrid** - Servicio de email empresarial
- **Tu propio backend** - Node.js/Express

## 📂 Estructura del Proyecto

```
my-company-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página principal
│   │   └── globals.css      # Estilos globales
│   └── components/
│       ├── Header.tsx       # Barra de navegación
│       ├── Hero.tsx         # Sección hero
│       ├── About.tsx        # Sobre mí
│       ├── Services.tsx     # Servicios
│       ├── Projects.tsx     # Proyectos
│       ├── Clients.tsx      # Clientes & testimonios
│       ├── Contact.tsx      # Formulario de contacto
│       └── Footer.tsx       # Pie de página
├── public/                  # Archivos estáticos
├── package.json            # Dependencias
├── tailwind.config.js      # Configuración Tailwind
├── next.config.js          # Configuración Next.js
└── vercel.json            # Configuración Vercel
```

## 🎯 Próximos pasos

1. ✅ Personalizar contenido
2. ✅ Añadir imágenes reales de proyectos
3. ✅ Configurar formulario de contacto
4. ✅ Añadir tu dominio personalizado
5. ✅ Enviar a amigos y clientes

## 💡 Tips

- Las imágenes de proyectos están usando placeholders. Reemplázalas con URLs reales o carga imágenes en la carpeta `public/`
- El menú es responsive automáticamente
- Todos los enlaces de contacto funcional (email, teléfono)
- Vercel ofrece SSL automático - tu sitio será HTTPS

## 📞 Soporte

Para problemas con Next.js: https://nextjs.org/docs
Para problemas con Vercel: https://vercel.com/support

---

¡Listo para desplegar! 🚀
