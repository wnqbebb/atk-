import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimizaciones de build
    target: 'es2020',
    minify: 'esbuild',
    // Code splitting para mejorar carga inicial
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries en chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['framer-motion', 'gsap'],
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
        // Optimizar nombres de archivos con hash
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const assetName = assetInfo.name || 'asset';
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetName)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/i.test(assetName)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // Optimizar tamaño de chunks
    chunkSizeWarningLimit: 1000,
    // Source maps solo en desarrollo
    sourcemap: false,
  },
  // Optimizaciones del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    // Hot module replacement
    hmr: {
      overlay: false,
    },
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
    ],
    exclude: ['@radix-ui/react-icons'],
  },
});
