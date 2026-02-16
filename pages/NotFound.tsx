import { AlertTriangle } from 'lucide-react';
import TransitionLink from '../components/TransitionLink';
import SEO from '../components/SEO';

/**
 * NotFound Page (404) - Dark Mode
 * 
 * Página de error estilo "System Failure" minimalista y brutal.
 */
const NotFound = () => {
  return (
    <>
      <SEO title="Error 404" description="Página no encontrada" />
      
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Grid técnica */}
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center animate-in fade-in zoom-in duration-500">
          {/* Icono */}
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 border border-red-500/20 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          
          {/* Código 404 */}
          <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-4 font-mono">
            404
          </h1>
          
          {/* Mensaje */}
          <h2 className="text-xl md:text-2xl text-zinc-400 font-medium tracking-tight mb-12 max-w-md">
            SISTEMA NO ENCONTRADO
            <span className="block text-sm text-zinc-600 mt-2 font-mono">
              Error: Ruta de navegación inválida o recurso eliminado.
            </span>
          </h2>

          {/* Botón de reinicio */}
          <TransitionLink 
            to="/" 
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-950 px-8 font-medium text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-[#050505]"
          >
            <span className="mr-2">Reiniciar Sistema</span>
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="transition-transform group-hover:rotate-180"
            >
              <path 
                d="M1.5 7.5C1.5 7.22386 1.72386 7 2 7H13C13.2761 7 13.5 7.22386 13.5 7.5C13.5 7.77614 13.2761 8 13 8H2C1.72386 8 1.5 7.77614 1.5 7.5Z" 
                fill="currentColor" 
                fillRule="evenodd" 
                clipRule="evenodd"
              />
            </svg>
          </TransitionLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
