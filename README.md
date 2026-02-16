# AioTek - Sitio Web Corporativo

Sitio web corporativo para AioTek - Soluciones tecnológicas de planificación y gestión.

## 🚀 Tecnologías

- **Framework:** React 19 + Vite
- **Estilos:** Tailwind CSS + shadcn/ui
- **Animaciones:** Framer Motion + GSAP
- **Scroll:** Lenis (smooth scroll)
- **Rutas:** React Router DOM

## 📁 Estructura del Proyecto

```
src/
├── components/      # Componentes reutilizables (UI)
├── context/         # Contextos (Theme, Transitions)
├── hooks/           # Custom hooks
├── layouts/         # Layouts principales
├── lib/             # Utilidades
├── pages/           # Páginas de la aplicación
├── sections/        # Secciones de las páginas
├── App.tsx          # Componente principal
└── main.tsx         # Punto de entrada
```

## 🛠️ Scripts

```bash
npm install          # Instalar dependencias
npm run dev          # Desarrollo local
npm run build        # Build para producción
npm run preview      # Previsualizar build
```

## 🌐 Despliegue en Vercel

### Configuración requerida:

1. **Framework Preset:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install --legacy-peer-deps`

### Fix para rutas (SPA):

El archivo `vercel.json` configura los rewrites para que todas las rutas apunten a `index.html`, solucionando el error 404 en subpáginas.

## 📝 Notas

- El proyecto usa React 19 (última versión)
- Las dependencias se instalan con `--legacy-peer-deps` por compatibilidad
- El carrusel de testimonios es infinito y se pausa al hacer hover
