# 🧪 Pruebas Locales Antes de Desplegar

Antes de desplegar en Vercel, es importante verificar que todo funcione correctamente.

## 1. Instalación de dependencias

```bash
cd my-company-landing
npm install
```

## 2. Inicia el servidor local

```bash
npm run dev
```

Deberías ver algo como:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

## 3. Abre en el navegador

Ve a `http://localhost:3000` y verifica:

### ✅ Checklist de verificación:

- [ ] **Header:**
  - Logo "RM Dev" visible
  - Menú responsive (desktop y mobile)
  - Enlaces de navegación funcionan

- [ ] **Hero Section:**
  - Imagen/gradientes se ven bien
  - Botones funcionan
  - Texto legible

- [ ] **About:**
  - Contenido visible
  - Tarjetas de habilidades
  - Grid de tecnologías

- [ ] **Services:**
  - 4 servicios visibles
  - Icons se cargan correctamente
  - Responsive en móvil

- [ ] **Projects:**
  - 6 proyectos mostrados
  - Imágenes (placeholders) cargadas
  - Botones "Ver" y "Código" funcionan

- [ ] **Clients:**
  - Testimonios visibles
  - Stars (estrellas) se muestran
  - Grid de clientes

- [ ] **Contact:**
  - Formulario aparece
  - Campos se pueden escribir
  - Botón "Enviar" funciona (aunque el email no se enviará sin configurar)

- [ ] **Footer:**
  - Enlaces sociales
  - Año correcto

- [ ] **General:**
  - Sin errores en la consola
  - Responsive en móvil (F12 → Toggle device toolbar)
  - Scroll suave funciona
  - Colores correctos

## 4. Responsive Design

Prueba en diferentes tamaños:

```
Presiona F12 en el navegador
Haz clic en el ícono de dispositivo (esquina superior izquierda)
Prueba: iPhone SE, iPad, Desktop
```

**Verifica que:**
- Menú se colapsa en móvil
- Texto es legible
- Buttons son clickeables
- Imágenes se ajustan

## 5. Performance

```bash
npm run build
```

Si el build termina sin errores, estás listo para Vercel.

Deberías ver:
```
Route (pages)                              Size
○ /                                         XX kB
```

## 6. Prueba de producción local

Para simular el ambiente de Vercel:

```bash
npm run build
npm run start
```

Abre `http://localhost:3000` y verifica que todo siga funcionando.

## 7. Errores comunes y soluciones

### Error: `Cannot find module '@luminix/react'`
- Solución: `npm install`

### Error en Components
- Verifica que todos los imports estén correctos
- Revisa que no falten comillas

### Estilos no se ven
- Limpia caché: Ctrl+Shift+Delete
- Espera a que Tailwind compile

### Imágenes no cargan
- Son placeholders (via.placeholder.com)
- Funcionan solo online
- Para local, reemplaza con URLs reales

## 8. Cambios importantes antes de desplegar

1. **Actualiza el nombre de la empresa**
   - `src/components/Header.tsx` (línea con "RM Dev")
   - `src/components/Footer.tsx`
   - `src/app/layout.tsx` (metadatos)

2. **Añade tu información de contacto real**
   - `src/components/Contact.tsx`
   - `src/components/Header.tsx` (si lo deseas)

3. **Personaliza colores si quieres**
   - `tailwind.config.js`
   - `src/app/globals.css`

4. **Reemplaza contenido de ejemplo**
   - Proyectos: `src/components/Projects.tsx`
   - Clientes: `src/components/Clients.tsx`
   - Sobre mí: `src/components/About.tsx`

## 9. Commit a Git

```bash
git add .
git commit -m "Initial landing page deployment"
```

## 10. Deploy a Vercel

```bash
vercel
```

O via web: https://vercel.com → New Project → Conecta GitHub

---

## 📋 Checklist Final

- [ ] Todo funciona localmente
- [ ] Sin errores en consola
- [ ] Responsive en móvil
- [ ] Build sin errores (`npm run build`)
- [ ] Información personal actualizada
- [ ] Contenido personalizado
- [ ] Colores personalizados (si es necesario)
- [ ] Subido a GitHub
- [ ] Listo para desplegar en Vercel

---

¡Cuando todo esté ✅, estás listo para desplegar! 🚀
