import { motion } from 'framer-motion';
import { Scale, Building2, Copyright, AlertTriangle, ExternalLink, Gavel, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import TransitionLink from '../components/TransitionLink';

const Legal = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Aviso Legal | AioTek" 
        description="Información legal de AioTek. Datos del titular, propiedad intelectual y condiciones de uso del sitio web."
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
              <Scale className="w-4 h-4 text-[#00F0FF]" />
              <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Información Legal
              </span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Aviso Legal
            </h1>
            
            <p className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>
              En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y 
              Comercio Electrónico (LSSI-CE)
            </p>
          </motion.div>

          {/* Datos del titular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className={`p-6 sm:p-8 rounded-2xl border mb-12 ${
              isDark ? 'bg-zinc-900/50 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-zinc-900 border border-white/10' : 'bg-zinc-100'
              }`}>
                <Building2 className="w-5 h-5 text-[#00F0FF]" />
              </div>
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Datos del titular
              </h2>
            </div>
            <div className={`space-y-3 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              <p><strong className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>Titular del sitio web:</strong> AioTek</p>
              <p>
                <strong className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>Correo electrónico de contacto:</strong>{' '}
                <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">info@aiotek.es</a>
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            {/* 1. Objeto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Gavel className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  1. Objeto
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                El presente sitio web tiene carácter informativo sobre los servicios de AioTek.
              </p>
            </motion.div>

            {/* 2. Propiedad intelectual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Copyright className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  2. Propiedad intelectual
                </h2>
              </div>
              <div className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <p className="mb-4">
                  Todos los contenidos del sitio web son propiedad de AioTek o de sus licenciantes.
                </p>
                <p>
                  Queda prohibida su reproducción sin autorización.
                </p>
              </div>
            </motion.div>

            {/* 3. Responsabilidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <AlertTriangle className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  3. Responsabilidad
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                AioTek no se responsabiliza del uso indebido del sitio web ni de los daños derivados del 
                acceso al mismo.
              </p>
            </motion.div>

            {/* 4. Enlaces externos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <ExternalLink className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  4. Enlaces externos
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                AioTek no se responsabiliza del contenido de sitios externos enlazados.
              </p>
            </motion.div>

            {/* 5. Legislación aplicable */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Scale className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  5. Legislación aplicable
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                La relación entre el usuario y AioTek se regirá por la legislación española.
              </p>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`mt-16 p-8 rounded-2xl border ${
              isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#00F0FF]" />
              <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Contacto
              </h2>
            </div>
            <p className={`mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Para cualquier consulta relacionada con este Aviso Legal, contacta con nosotros en{' '}
              <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">info@aiotek.es</a>
            </p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink
                to="/privacidad"
                className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                Política de Privacidad
              </TransitionLink>
              <TransitionLink
                to="/terminos"
                className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                Términos y Condiciones
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

export default Legal;
