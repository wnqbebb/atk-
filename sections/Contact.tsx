import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { WhatsAppLogo, EmailIcon, PhoneIcon, MapPinIcon } from '../components/ServiceLogos';

const WHATSAPP_URL = 'https://wa.me/34643141366?text=Hola%20AioTek,%20me%20interesa%20conocer%20más%20sobre%20su%20software%20de%20gestión%20de%20turnos';

const contactInfo = [
  {
    icon: WhatsAppLogo,
    label: 'WhatsApp',
    value: '+34 643 14 13 66',
    href: WHATSAPP_URL,
    isWhatsApp: true,
  },
  {
    icon: EmailIcon,
    label: 'Email',
    value: 'info@aiotek.es',
    href: 'mailto:info@aiotek.es',
    isWhatsApp: false,
  },
  {
    icon: PhoneIcon,
    label: 'Teléfono',
    value: '+34 643 14 13 66',
    href: 'tel:+34643141366',
    isWhatsApp: false,
  },
  {
    icon: MapPinIcon,
    label: 'Ubicación',
    value: 'Las Palmas de Gran Canaria',
    href: '#',
    isWhatsApp: false,
  },
];

const Contact = () => {
  const { isDark } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-white'
    }`}>
      {/* Fondo Nebulosa Galaxia */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebulosa base */}
        <div className="nebula-bg" />
        {/* Capas de nebulosa animadas */}
        <div className="nebula-layer nebula-layer-1" />
        <div className="nebula-layer nebula-layer-2" />
        <div className="nebula-layer nebula-layer-3" />
        {/* Estrellas */}
        <div className="stars-bg" />
        {/* Partículas flotantes */}
        <div className="floating-particles" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className={`section-label mb-4 block transition-colors ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}>CONTACTO</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-[#00F0FF]">
              Solicita tu Demo Personalizada
            </h2>
            <p className={`max-w-2xl mx-auto text-sm sm:text-base px-2 sm:px-0 transition-colors ${
              isDark ? 'text-zinc-500' : 'text-zinc-600'
            }`}>
              Cuéntanos sobre tu operativa y te mostraremos cómo AioTek puede eliminar el caos de tu planificación de turnos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`h-full flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl border shadow-premium transition-colors ${
                    isDark 
                      ? 'bg-[#0a0a0a] border-aiotek-cyan/30' 
                      : 'bg-white border-aiotek-cyan/30'
                  }`}
                >
                  <CheckCircle className="w-16 h-16 text-aiotek-cyan mb-6" />
                  <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-center transition-colors ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}>¡Mensaje enviado!</h3>
                  <p className={`text-center text-sm sm:text-base transition-colors ${
                    isDark ? 'text-zinc-500' : 'text-zinc-600'
                  }`}>
                    Gracias por contactarnos. Un experto se pondrá en contacto contigo en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={`space-y-5 p-6 sm:p-8 rounded-3xl border shadow-premium transition-colors ${
                  isDark 
                    ? 'bg-[#0a0a0a] border-white/10' 
                    : 'bg-white border-zinc-200'
                }`}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${
                        isDark ? 'text-zinc-300' : 'text-zinc-700'
                      }`}>
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className={`w-full px-4 py-3.5 border rounded-xl transition-all focus:outline-none focus:border-aiotek-cyan/50 focus:ring-2 focus:ring-aiotek-cyan/10 ${
                          isDark 
                            ? 'bg-black border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={`block text-sm font-medium mb-2 transition-colors ${
                        isDark ? 'text-zinc-300' : 'text-zinc-700'
                      }`}>
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className={`w-full px-4 py-3.5 border rounded-xl transition-all focus:outline-none focus:border-aiotek-cyan/50 focus:ring-2 focus:ring-aiotek-cyan/10 ${
                          isDark 
                            ? 'bg-black border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${
                      isDark ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      required
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all focus:outline-none focus:border-aiotek-cyan/50 focus:ring-2 focus:ring-aiotek-cyan/10 ${
                        isDark 
                          ? 'bg-black border-white/10 text-white placeholder:text-zinc-600' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors ${
                      isDark ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                      ¿Qué problema necesitas resolver?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu operativa actual y los desafíos que enfrentas..."
                      rows={4}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all focus:outline-none focus:border-aiotek-cyan/50 focus:ring-2 focus:ring-aiotek-cyan/10 resize-none ${
                        isDark 
                          ? 'bg-black border-white/10 text-white placeholder:text-zinc-600' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-950 placeholder:text-zinc-400'
                      }`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-xl bg-zinc-950 hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Solicitar Demo
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className={`w-full border-t transition-colors ${
                        isDark ? 'border-white/10' : 'border-zinc-200'
                      }`} />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className={`px-2 transition-colors ${
                        isDark ? 'bg-[#0a0a0a] text-zinc-400' : 'bg-white text-zinc-400'
                      }`}>o contacta por WhatsApp</span>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white rounded-xl transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    }}
                  >
                    <WhatsAppLogo className="w-5 h-5" />
                    Hablar por WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors ${
                  isDark ? 'text-white' : 'text-zinc-950'
                }`}>¿Por qué hablar con nosotros?</h3>
                <p className={`text-sm sm:text-base transition-colors ${
                  isDark ? 'text-zinc-500' : 'text-zinc-600'
                }`}>
                  En 30 minutos te mostraremos cómo eliminar el caos de tu planificación y recuperar el control de tu operativa.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.isWhatsApp ? '_blank' : undefined}
                    rel={info.isWhatsApp ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`flex items-start gap-4 p-4 sm:p-5 rounded-2xl border transition-colors group shadow-card ${
                      info.isWhatsApp 
                        ? 'bg-[#25D366]/5 border-[#25D366]/20 hover:bg-[#25D366]/10' 
                        : isDark 
                          ? 'bg-[#0a0a0a] border-white/10 hover:border-aiotek-cyan/30' 
                          : 'bg-white border-zinc-200 hover:border-aiotek-cyan/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      info.isWhatsApp 
                        ? 'bg-[#25D366]/20 group-hover:bg-[#25D366]/30' 
                        : 'bg-aiotek-cyan/10 group-hover:bg-aiotek-cyan/20'
                    }`}>
                      <info.icon className={`w-5 h-5 ${info.isWhatsApp ? 'text-[#128C7E]' : 'text-[#00F0FF]'}`} />
                    </div>
                    <div>
                      <div className={`text-sm mb-1 transition-colors ${
                        isDark ? 'text-zinc-400' : 'text-zinc-400'
                      }`}>{info.label}</div>
                      <div className={`font-medium ${info.isWhatsApp ? 'text-[#128C7E]' : isDark ? 'text-white' : 'text-zinc-900'}`}>
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response time badge */}
              <div className={`mt-8 p-5 sm:p-6 rounded-2xl transition-colors ${
                isDark 
                  ? 'bg-zinc-950 text-white' 
                  : 'bg-zinc-900 text-white'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-zinc-400 mb-1">Tiempo de respuesta</div>
                    <div className="text-2xl sm:text-3xl font-bold">&lt; 24h</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-aiotek-cyan/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-aiotek-cyan animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
