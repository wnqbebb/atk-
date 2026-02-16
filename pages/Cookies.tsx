import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, Database, Trash2, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import TransitionLink from '../components/TransitionLink';

const sections = [
  {
    icon: Eye,
    title: '1. ¿Qué son las cookies?',
    content: `Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Las cookies permiten que el sitio web reconozca su dispositivo y recuerde información sobre su visita, como sus preferencias de navegación.`
  },
  {
    icon: Database,
    title: '2. Tipos de cookies que utilizamos',
    content: `En AioTek utilizamos los siguientes tipos de cookies:

• Cookies técnicas/necesarias: Son esenciales para el funcionamiento del sitio web y no pueden desactivarse. Incluyen cookies de sesión y de seguridad.

• Cookies de preferencias: Permiten recordar información que cambia la apariencia o comportamiento del sitio, como su idioma preferido o la región en la que se encuentra.

• Cookies analíticas: Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando información de forma anónima. Utilizamos esta información para mejorar nuestros servicios.`
  },
  {
    icon: Shield,
    title: '3. Cookies de terceros',
    content: `Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. Estos incluyen:

• Servicios de analítica web (Google Analytics)
• Integraciones con redes sociales
• Servicios de comunicación

No controlamos la configuración de estas cookies de terceros. Para más información, consulte las políticas de cookies de los respectivos terceros.`
  },
  {
    icon: Settings,
    title: '4. Gestión de cookies',
    content: `Puede gestionar sus preferencias de cookies en cualquier momento haciendo clic en el botón "Configurar cookies" que aparece en la parte inferior de esta página.

Además, la mayoría de los navegadores web permiten controlar las cookies a través de sus preferencias de configuración. Puede configurar su navegador para:

• Aceptar todas las cookies
• Rechazar todas las cookies
• Eliminar cookies existentes
• Ser notificado cuando se envíe una cookie

Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web.`
  },
  {
    icon: Trash2,
    title: '5. Duración de las cookies',
    content: `Las cookies pueden permanecer en su dispositivo durante diferentes períodos de tiempo:

• Cookies de sesión: Se eliminan automáticamente cuando cierra su navegador.
• Cookies persistentes: Permanecen en su dispositivo durante un período específico o hasta que las elimine manualmente.

La duración máxima de nuestras cookies persistentes es de 13 meses, conforme a la normativa vigente.`
  },
];

const Cookies = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Política de Cookies | AioTek" 
        description="Información sobre el uso de cookies en AioTek. Gestiona tus preferencias de privacidad."
      />
      
      <section className={`min-h-screen py-24 sm:py-32 transition-colors ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-200'
            }`}>
              <Cookie className="w-4 h-4 text-[#00F0FF]" />
              <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Gestión de Cookies
              </span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Política de Cookies
            </h1>
            
            <p className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>
              Última actualización: Febrero 2026
            </p>
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-6 sm:p-8 rounded-2xl border mb-12 ${
              isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <p className={`text-lg leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              En AioTek utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, 
              analizar el tráfico del sitio y personalizar el contenido. Esta política explica qué cookies 
              utilizamos, para qué fines y cómo puede gestionar sus preferencias.
            </p>
            <p className={`mt-4 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta política, 
              salvo que haya configurado su navegador para rechazarlas.
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                  }`}>
                    <section.icon className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <h2 className={`text-xl sm:text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {section.title}
                  </h2>
                </div>
                <p className={`leading-relaxed whitespace-pre-line ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Cookie Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`mt-12 p-6 sm:p-8 rounded-2xl border ${
              isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              6. Lista de cookies utilizadas
            </h2>
            <div className="overflow-x-auto">
              <table className={`w-full text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <thead>
                  <tr className={`border-b ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                    <th className={`text-left py-3 px-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Nombre</th>
                    <th className={`text-left py-3 px-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Tipo</th>
                    <th className={`text-left py-3 px-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Duración</th>
                    <th className={`text-left py-3 px-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`border-b ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                    <td className="py-3 px-2 font-mono text-xs">theme</td>
                    <td className="py-3 px-2">Técnica</td>
                    <td className="py-3 px-2">1 año</td>
                    <td className="py-3 px-2">Recordar preferencia de tema (claro/oscuro)</td>
                  </tr>
                  <tr className={`border-b ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                    <td className="py-3 px-2 font-mono text-xs">cookie_consent</td>
                    <td className="py-3 px-2">Técnica</td>
                    <td className="py-3 px-2">1 año</td>
                    <td className="py-3 px-2">Guardar preferencias de cookies</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 font-mono text-xs">_ga, _gid</td>
                    <td className="py-3 px-2">Analítica</td>
                    <td className="py-3 px-2">2 años / 24 horas</td>
                    <td className="py-3 px-2">Google Analytics - Estadísticas de uso</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`mt-12 p-8 rounded-2xl border ${
              isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#00F0FF]" />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Contacto sobre Cookies
              </h2>
            </div>
            <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
              Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos en{' '}
              <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">
                info@aiotek.es
              </a>
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <TransitionLink
                to="/privacidad"
                className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                Ver Política de Privacidad
              </TransitionLink>
              <TransitionLink
                to="/"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
              >
                Volver al Inicio
              </TransitionLink>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Cookies;
