import { motion } from 'framer-motion';
import { Shield, User, Lock, Mail, Clock, Share2, FileText, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import TransitionLink from '../components/TransitionLink';

const Privacy = () => {
  const { isDark } = useTheme();

  return (
    <>
      <SEO 
        title="Política de Privacidad | AioTek" 
        description="Conoce cómo AioTek protege y gestiona tus datos personales. Compromiso total con el RGPD y normativa española."
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
              <Shield className="w-4 h-4 text-[#00F0FF]" />
              <span className={`text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                Protección de Datos
              </span>
            </div>
            
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Política de Privacidad
            </h1>
            
            <p className={isDark ? 'text-zinc-500' : 'text-zinc-400'}>
              Última actualización: Febrero 2026
            </p>
          </motion.div>

          {/* Content */}
          <div className="space-y-12">
            {/* 1. Responsable del tratamiento */}
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
                  <User className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  1. Responsable del tratamiento
                </h2>
              </div>
              <div className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <p className="mb-4">
                  <strong className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>Titular del servicio:</strong> AioTek
                </p>
                <p className="mb-4">
                  <strong className={isDark ? 'text-zinc-200' : 'text-zinc-800'}>Correo electrónico de contacto:</strong>{' '}
                  <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">info@aiotek.es</a>
                </p>
                <p>
                  AioTek es responsable del tratamiento de los datos personales recogidos a través del 
                  presente sitio web y del software AioTek Shift Manager.
                </p>
              </div>
            </motion.div>

            {/* 2. Finalidad del tratamiento */}
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
                  <FileText className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  2. Finalidad del tratamiento
                </h2>
              </div>
              <div className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <p className="mb-4">
                  Los datos personales facilitados serán tratados con las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Gestión de solicitudes de información.</li>
                  <li>Prestación de servicios solicitados.</li>
                  <li>Gestión de usuarios del software.</li>
                  <li>Soporte técnico.</li>
                  <li>Seguridad del sistema.</li>
                </ul>
              </div>
            </motion.div>

            {/* 3. Base legal del tratamiento */}
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
                  <Lock className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  3. Base legal del tratamiento
                </h2>
              </div>
              <div className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <p className="mb-4">
                  El tratamiento de los datos se realiza sobre la base de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Consentimiento del usuario.</li>
                  <li>Ejecución de la relación contractual.</li>
                  <li>Cumplimiento de obligaciones legales.</li>
                  <li>Interés legítimo del responsable.</li>
                </ul>
              </div>
            </motion.div>

            {/* 4. Datos tratados */}
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
                  <User className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  4. Datos tratados
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Podrán tratarse datos identificativos y de contacto necesarios para la prestación del servicio 
                o atención de solicitudes.
              </p>
            </motion.div>

            {/* 5. Conservación de datos */}
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
                  <Clock className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  5. Conservación de datos
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Los datos se conservarán durante el tiempo necesario para cumplir la finalidad del 
                tratamiento o las obligaciones legales correspondientes.
              </p>
            </motion.div>

            {/* 6. Cesión de datos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Share2 className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  6. Cesión de datos
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                No se cederán datos a terceros salvo obligación legal o necesidad técnica para la 
                prestación del servicio.
              </p>
            </motion.div>

            {/* 7. Derechos del usuario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Mail className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  7. Derechos del usuario
                </h2>
              </div>
              <div className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <p className="mb-4">
                  Los usuarios pueden ejercer los derechos de <strong>acceso, rectificación, supresión, oposición, 
                  limitación y portabilidad</strong> mediante solicitud a:
                </p>
                <p className="mb-4">
                  <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">info@aiotek.es</a>
                </p>
                <p>
                  Asimismo, podrán presentar reclamación ante la{' '}
                  <a 
                    href="https://www.aepd.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                  >
                    Agencia Española de Protección de Datos
                    <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
              </div>
            </motion.div>

            {/* 8. Seguridad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <Lock className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  8. Seguridad
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                AioTek adopta medidas técnicas y organizativas adecuadas para proteger los datos 
                personales.
              </p>
            </motion.div>

            {/* 9. Modificaciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className={`border-t pt-8 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-zinc-900 border border-white/10' : 'bg-white border border-zinc-200'
                }`}>
                  <FileText className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  9. Modificaciones
                </h2>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                AioTek podrá actualizar la presente política para adaptarla a cambios legales o técnicos.
              </p>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={`mt-16 p-8 rounded-2xl border ${
              isDark ? 'bg-zinc-900 border-white/10' : 'bg-white border-zinc-200'
            }`}
          >
            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Contacto sobre Privacidad
            </h2>
            <p className={`mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Si tienes preguntas sobre esta Política de Privacidad, contacta con nosotros en{' '}
              <a href="mailto:info@aiotek.es" className="text-[#00F0FF] hover:underline">info@aiotek.es</a>
            </p>
            <div className="flex flex-wrap gap-4">
              <TransitionLink
                to="/cookies"
                className={`inline-flex items-center px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                  isDark 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                Ver Política de Cookies
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

export default Privacy;
