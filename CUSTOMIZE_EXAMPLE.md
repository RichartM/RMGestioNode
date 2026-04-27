# 📝 EJEMPLO: Cómo Personalizar Proyectos

## Ubicación
Archivo: `src/components/Projects.tsx`

## Ejemplo Original (ANTES)

```typescript
const projects = [
  {
    title: 'Sistema de Gestión de Inventario',
    description: 'Plataforma completa para la gestión de inventario con reportes en tiempo real.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '#',
    github: '#',
    image: 'https://via.placeholder.com/400x250?text=Gestión+de+Inventario'
  },
  // ... más proyectos
];
```

## Cómo Reemplazar

### Opción 1: Con URLs de imágenes online

```typescript
const projects = [
  {
    title: 'Mi Tienda Online',
    description: 'E-commerce desarrollado para empresa XYZ con integración de pagos.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    link: 'https://mi-tienda.com',
    github: 'https://github.com/tuusuario/mi-tienda',
    image: 'https://example.com/screenshot-tienda.jpg'  // Tu propia imagen
  },
];
```

### Opción 2: Con imágenes locales

1. Coloca tus imágenes en carpeta `public/`:
```
public/
  ├── proyecto1.jpg
  ├── proyecto2.jpg
  └── proyecto3.jpg
```

2. Usa rutas locales:
```typescript
const projects = [
  {
    title: 'Mi App de Delivery',
    description: 'Aplicación móvil para gestión de entregas con GPS en tiempo real.',
    tech: ['React Native', 'Firebase', 'Google Maps API'],
    link: 'https://deliveryapp.example.com',
    github: 'https://github.com/tuusuario/delivery-app',
    image: '/proyecto1.jpg'  // Ruta local
  },
];
```

---

## Ejemplo Completo: Personalizando 3 Proyectos

```typescript
'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'CRM para Ventas',
      description: 'Sistema CRM personalizado que incrementó la productividad en 45% para empresa de seguros.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      link: 'https://crm-ventas.example.com',
      github: 'https://github.com/tuusuario/crm-ventas',
      image: '/crm-screenshot.jpg'
    },
    {
      title: 'Bot RPA - Procesos Automáticos',
      description: 'Bot que automatiza entrada de datos, reduciendo horas manuales en un 80%.',
      tech: ['Python', 'UiPath', 'Selenium'],
      link: '#',
      github: 'https://github.com/tuusuario/rpa-bot',
      image: '/bot-screenshot.jpg'
    },
    {
      title: 'Dashboard de Analytics',
      description: 'Panel de análisis en tiempo real para seguimiento de métricas empresariales.',
      tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      link: 'https://dashboard.example.com',
      github: 'https://github.com/tuusuario/analytics-dashboard',
      image: '/dashboard-screenshot.jpg'
    },
  ];

  // ... resto del código igual
}
```

---

## Dónde Encontrar URLs de Proyectos

### Si tienes sitio web activo:
- URL del proyecto vivo: `https://tu-proyecto.com`
- Puedes hacer screenshot y subirlo a un hosting (Imgur, CloudFront, etc.)

### Si no tienes sitios activos:
- Usa `#` o `#` en `link` y `github`
- Reemplaza con links cuando tengas

### Para imágenes:
**Opción A:** Usar CDN gratis
- Imgur.com - Sube gratis
- Cloudinary.com - Ideal para portafolios
- imgbb.com - Gratis y sin publicidad

**Opción B:** Usar localmente
- Guarda en carpeta `public/`
- Referencia como `/nombre-imagen.jpg`

---

## Ejemplo: Cambiar Todos los Proyectos

Busca esta línea en `Projects.tsx`:
```typescript
const projects = [
```

Y reemplaza TODO el contenido del array `projects` con:

```typescript
const projects = [
  {
    title: 'Tu Primer Proyecto',
    description: 'Descripción breve de qué hace y qué lo hace especial',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    link: 'URL_donde_se_puede_ver',
    github: 'URL_del_repositorio',
    image: 'URL_o_ruta_de_imagen'
  },
  {
    title: 'Tu Segundo Proyecto',
    description: 'Qué problema resuelve y resultados logrados',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: 'https://github.com/tu-usuario/proyecto2',
    image: '/proyecto2.jpg'
  },
  // Añade tantos como quieras...
];
```

---

## Validación Rápida

Después de cambiar, abre terminal:
```bash
npm run dev
```

Si ves tu sitio en http://localhost:3000 sin errores rojos en consola, ¡está bien! ✅

---

## Tips

💡 **Tecnologías:** Usa las REALES que usaste en cada proyecto
💡 **Descripción:** 1-2 líneas, no más
💡 **Links:** Verifica que funcionen (o usa `#` si no está disponible)
💡 **Imágenes:** Min 400x250px para mejor visual

---

¿Listo? Continúa con los otros componentes: `About.tsx`, `Clients.tsx`, etc.
