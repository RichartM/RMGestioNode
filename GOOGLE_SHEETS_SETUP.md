# 📊 Configuración Google Sheets para Formulario de Contacto

## Paso 1: Crear Google Sheets

1. Ve a https://sheets.google.com
2. Haz clic en **"Crear"** (+ Hoja de cálculo en blanco)
3. Nómbralo: **"RMGestioNode - Contactos"**
4. Crea estas columnas en la primera fila:

```
A1: Nombre
B1: Email
C1: Asunto
D1: Mensaje
E1: Fecha
```

---

## Paso 2: Crear Google Apps Script

1. En tu Google Sheet, ve a **Extensiones** → **Apps Script**
2. Copia y pega este código en el editor (elimina lo que está por defecto):

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var data = JSON.parse(e.postData.contents);
  
  var timestamp = new Date();
  
  var row = [
    data.name,
    data.email,
    data.subject,
    data.message,
    timestamp.toLocaleString('es-MX')
  ];
  
  sheet.appendRow(row);
  
  return ContentService.createTextOutput(JSON.stringify({
    status: 'success',
    message: 'Datos guardados correctamente'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Haz clic en **"Guardar"** (icono de disquete)
4. Dale un nombre: **"RMGestioNode Formulario"**
5. Haz clic en **"Deploy"** (arriba a la derecha)
6. Selecciona:
   - Tipo de despliegue: **"Nueva implementación"**
   - Tipo: **"Web app"**
   - Ejecutar como: Tu cuenta
   - Quién tiene acceso: **"Cualquiera"**
7. Haz clic en **"Deploy"**
8. **Copia la URL que aparece** (se vería algo como):
   ```
   https://script.google.com/macros/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z/usercontent
   ```

---

## Paso 3: Agregar la URL a tu código

1. Abre: `src/components/Contact.tsx`
2. Busca esta línea (está en el archivo):
```javascript
const GOOGLE_SCRIPT_URL = 'TU_URL_AQUI';
```

3. Reemplaza `'TU_URL_AQUI'` con la URL que copiaste
4. Guarda el archivo

---

## Paso 4: Probar el Formulario

1. En terminal, asegúrate que está corriendo:
```bash
npm run dev
```

2. Abre http://localhost:3000
3. Rellena el formulario y envía un mensaje de prueba
4. Vuelve a tu Google Sheet
5. Verás que aparece una fila nueva con tus datos ✅

---

## ✅ Verificar que Funciona

1. **Abre tu Google Sheet**: https://sheets.google.com
2. Busca: **"RMGestioNode - Contactos"**
3. Deberías ver filas como:

```
| Ricardo | ricardo@test.com | Prueba | Mensaje de prueba | 27/4/2026 10:30 |
```

---

## 🔒 Consideraciones de Seguridad

El Apps Script está configurado para:
- ✅ Recibir datos de cualquiera (público)
- ✅ Guardar en tu Sheet privado
- ✅ Tu Sheet es solo accesible para ti
- ⚠️ Si quieres mayor seguridad, puedes añadir tokens de validación

---

## 📱 Integración Futura

Cuando tengas los datos en Google Sheets, puedes:
- Usar Zapier para enviar notificaciones a WhatsApp
- Usar Gmail para notificaciones por correo
- Exportar reportes automáticos
- Conectar a CRM

---

## ❓ Problemas Comunes

**El formulario no envía datos:**
- ✅ Verifica que copiaste la URL completa
- ✅ Asegúrate que copiaste después de hacer "Deploy"
- ✅ Recarga la página (`F5`)

**Aparece error CORS:**
- ✅ Normal en desarrollo local, funciona en producción
- ✅ En Vercel funcionará sin problemas

**No veo los datos en el Sheet:**
- ✅ Actualiza la página (F5)
- ✅ Verifica que los Scripts están correctamente instalados
- ✅ Abre la consola (F12) para ver errores

---

## 🎉 ¡Listo!

Tu formulario ya está conectado a Google Sheets. Cada vez que alguien lo llene, los datos se guardan automáticamente.

