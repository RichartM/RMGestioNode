# 🚀 Guía Rápida de Despliegue en Vercel

## Paso 1: Preparar tu código

```bash
# Verifica que todo funcione localmente
npm install
npm run dev

# Abre http://localhost:3000 en tu navegador
```

## Paso 2: Subir a GitHub

1. Crea un repositorio en GitHub: https://github.com/new
2. En tu terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/nombre-repo.git
git push -u origin main
```

## Paso 3: Desplegar en Vercel

### Forma A: Usando la web (MÁS FÁCIL)

1. Ve a https://vercel.com
2. Haz clic en "Sign Up" (si no tienes cuenta, crea una)
3. Elige "Continue with GitHub"
4. Autoriza a Vercel
5. Haz clic en "Add New" → "Project"
6. Selecciona el repositorio que acabas de crear
7. Haz clic en "Import"
8. ¡Vercel detectará automáticamente que es Next.js!
9. Haz clic en "Deploy"
10. ¡Listo! Obtendrás una URL como: `https://tu-proyecto.vercel.app`

### Forma B: Usando CLI

```bash
# Instala Vercel CLI
npm install -g vercel

# Inicia sesión
vercel login

# Despliega
vercel
```

## Paso 4: Dominio personalizado (Opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Añade tu dominio
4. Vercel te mostrará los registros DNS a configurar

## ✅ Verificar el despliegue

- Tu sitio estará en vivo en: `https://tu-proyecto.vercel.app`
- Cada push a GitHub actualiza automáticamente el sitio
- Los builds se muestran en el panel de Vercel

## 📝 Cambios después del despliegue

Cualquier cambio que hagas en tu código:
1. Edita los archivos localmente
2. `git add .` → `git commit -m "mensaje"` → `git push`
3. Vercel detecta el cambio y redeploya automáticamente
4. ¡Sitio actualizado en 1-2 minutos!

## 🔧 Variables de entorno en Vercel

Si necesitas variables secretas:
1. En Vercel → Settings → Environment Variables
2. Añade tu variable
3. Redeploy automático

## ❓ Problemas comunes

**Build fails:**
- Verifica `npm run build` funciona localmente
- Revisa los logs en Vercel

**Sitio lento:**
- Vercel es muy rápido, probablemente sea el código
- Optimiza imágenes
- Usa next/image para imágenes

**Dominio no funciona:**
- Espera 24-48 horas para propagación DNS
- Verifica los registros DNS correctamente

---

¡Eso es todo! 🎉

Preguntas: https://vercel.com/support
