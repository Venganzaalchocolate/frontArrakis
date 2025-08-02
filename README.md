# 🎨 Arrakis Frontend · Vite + React

Frontend moderno y ligero con **Vite** y **React**, listo para arrancar rápido y escalar con tus componentes.

<p align="left">
  <img src="https://img.shields.io/badge/Vite-4.x-646CFF?logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-enabled-4B32C3?logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/Prettier-enabled-F7B93E?logo=prettier&logoColor=black" />
</p>

---

## 🔍 Estructura del proyecto

```
frontArrakis/
├─ public/                📂 Recursos estáticos 
├─ src/
│  ├─ assets/             🖼️ Imágenes, fuentes, estilos globales
│  ├─ components/         🧩 Componentes reutilizables
│  ├─ hooks/              🪝 Custom React Hooks
│  ├─ services/           ⚙️ Lógica de llamadas a APIs
│  ├─ styles/             🎨 Variables y mixins de CSS/SASS
│  ├─ utils/              🛠️ Funciones auxiliares
│  ├─ App.jsx             🚀 Componente raíz
│  └─ main.jsx            🎬 Punto de entrada para React + Vite
├─ .env                   🗝️ Variables de entorno
├─ vite.config.js         ⚙️ Configuración de Vite
├─ package.json           📦 Dependencias y scripts
└─ tsconfig.json          📝 Configuración de TypeScript
```

> Ajusta rutas o nombres 

---

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz con las claves necesarias para tu entorno:

```env
VITE_API_BASE_URL=https://api.tu-dominio.com
```

- Todos los que empiecen con `VITE_` se exponen en `import.meta.env`.
- **Nunca** incluyas secretos (`JWT_SECRET`, claves privadas, etc.).

---

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu-usuario/frontArrakis.git
cd frontArrakis

# Instala dependencias
npm install
# o con pnpm
pnpm install
# o con Yarn
yarn
```

---

## 🧰 Scripts disponibles

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,css,scss,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

- `npm run dev` → servidor de desarrollo en `http://localhost:5173`  
- `npm run build` → construcción para producción en `/dist`  
- `npm run preview` → previa local de la build  

---

## 🧩 Código principal (copiar y pegar)

### 🚀 `src/main.jsx`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 🖼️ `public/index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arrakis Frontend</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="root"></div>
    <!-- Vite inyecta scripts aquí -->
  </body>
</html>
```

### ⚙️ `vite.config.js`

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

---

## 🐞 Troubleshooting

- **`Failed to resolve import`:**  
  Revisa rutas relativas o alias en `tsconfig.json` / `vite.config.js`.
- **CORS bloqueado al llamar a la API:**  
  Asegúrate de que tu backend permita `http://localhost:5173` en CORS.
- **Errores de TypeScript:**  
  Ejecuta `npm run type-check` para detectar y corregir problemas de tipos.
- **Estilos no aplicados:**  
  Comprueba que importas tu CSS/SCSS en `main.jsx` o en el componente.

---

Hecho con ⚛️ + ⚡️ + ❤️  
