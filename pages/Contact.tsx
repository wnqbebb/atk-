import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';
import SEO from '../components/SEO';
import { WhatsAppLogo, EmailIcon, PhoneIcon, MapPinIcon } from '../components/ServiceLogos';

const WHATSAPP_NUMBER = '34643141366';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

interface ContactMethod {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  color: string;
  description: string;
  isLogo: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    icon: WhatsAppLogo,
    label: 'WhatsApp',
    value: '+34 643 14 13 66',
    href: `${WHATSAPP_BASE_URL}?text=Hola%20AioTek,%20me%20interesa%20conocer%20más%20sobre%20su%20software%20de%20gestión%20de%20turnos`,
    color: 'bg-[#25D366]',
    description: 'Respuesta en minutos',
    isLogo: true,
  },
  {
    icon: EmailIcon,
    label: 'Email',
    value: 'info@aiotek.es',
    href: 'mailto:info@aiotek.es',
    color: 'bg-blue-500',
    description: 'Para propuestas detalladas',
    isLogo: false,
  },
  {
    icon: PhoneIcon,
    label: 'Teléfono',
    value: '+34 643 14 13 66',
    href: 'tel:+34643141366',
    color: 'bg-purple-500',
    description: 'Lun-Vie 9:00-18:00',
    isLogo: false,
  },
  {
    icon: MapPinIcon,
    label: 'Ubicación',
    value: 'Las Palmas de Gran Canaria',
    href: '#',
    color: 'bg-orange-500',
    description: 'Atendemos toda España',
    isLogo: false,
  },
];

const benefits = [
  { icon: Clock, text: 'Respuesta en menos de 24h' },
  { icon: Shield, text: 'Sin compromiso' },
  { icon: Zap, text: 'Demo personalizada gratuita' },
];

// Animated Card Component with 3D tilt effect
const ContactCard = ({ method, index }: { method: typeof contactMethods[0]; index: number }) => {
  const { isDark } = useTheme();
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={method.href}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative block p-6 rounded-3xl border transition-all duration-300 ${
        isDark 
          ? 'bg-[#0a0a0a]/80 border-white/10 hover:border-[#00F0FF]/50' 
          : 'bg-white/80 border-zinc-200 hover:border-[#00F0FF]/50 shadow-lg'
      }`}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        isDark ? 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent' : 'bg-gradient-to-br from-[#00F0FF]/5 to-transparent'
      }`} />
      
      <div className="relative" style={{ transform: 'translateZ(20px)' }}>
        <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4 shadow-lg`}>
          {method.isLogo ? (
            <method.icon className="w-7 h-7 text-white" />
          ) : (
            <method.icon className="w-7 h-7 text-white" />
          )}
        </div>
        
        <p className={`text-sm font-medium mb-1 ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
          {method.label}
        </p>
        <p className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {method.value}
        </p>
        <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
          {method.description}
        </p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { isDark } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const whatsappMessage = encodeURIComponent(
      `*Nueva consulta desde AioTek.es*\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Empresa:* ${formData.company || 'No especificada'}\n` +
      `*Email:* ${formData.email}\n` +
      `*Teléfono:* ${formData.phone || 'No especificado'}\n` +
      `*Sector:* ${formData.sector || 'No especificado'}\n\n` +
      `*Mensaje:*\n${formData.message}\n\n` +
      `---\n` +
      `Enviado desde el formulario de contacto`
    );
    
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${whatsappMessage}`;
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contacto - Solicita tu Demo Gratuita"
        description="Contacta con AioTek. Solicita una demo personalizada de nuestro software de gestión de turnos. Respuesta en menos de 24 horas."
      />
      
      <section className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grid */}
          <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
          
          {/* Animated orbs */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#00F0FF]/20 via-transparent to-transparent blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#7000FF]/20 via-transparent to-transparent blur-3xl"
          />
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#00F0FF]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
                isDark 
                  ? 'bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00F0FF]' 
                  : 'bg-[#00F0FF]/10 border-[#00F0FF]/30 text-[#00B8D4]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">¿Hablamos?</span>
            </motion.div>
            
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              Solicita tu{' '}
              <span className="text-[#00F0FF]">Demo</span>
            </h1>
            
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
              isDark ? 'text-zinc-400' : 'text-zinc-600'
            }`}>
              Cuéntanos sobre tu operativa y te mostraremos cómo AioTek puede 
              eliminar el caos de tu planificación de turnos.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {benefits.map((benefit, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                    isDark 
                      ? 'bg-white/5 border-white/10 text-zinc-300' 
                      : 'bg-white border-zinc-200 text-zinc-600 shadow-sm'
                  }`}
                >
                  <benefit.icon className="w-4 h-4 text-[#00F0FF]" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Contact Methods - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Otras formas de contacto
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <ContactCard key={method.label} method={method} index={index} />
                ))}
              </div>

              {/* Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`p-6 rounded-3xl border ${
                  isDark 
                    ? 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/20' 
                    : 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30'
                }`}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`text-sm mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  "En menos de 24 horas ya teníamos una propuesta personalizada. 
                  El equipo de AioTek entendió exactamente lo que necesitábamos."
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-white/10' : 'bg-zinc-200'
                  }`}>
                    <span className="text-[#00F0FF] font-bold">M</span>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      María González
                    </p>
                    <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Directora de RRHH, Clínica San Rafael
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`h-full flex flex-col items-center justify-center p-8 sm:p-12 rounded-3xl border ${
                    isDark 
                      ? 'bg-[#0a0a0a] border-[#00F0FF]/30' 
                      : 'bg-white border-[#00F0FF]/30 shadow-xl'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="w-20 h-20 text-[#00F0FF] mb-6" />
                  </motion.div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-4 text-center ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className={`text-center mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Gracias por contactarnos. Un experto se pondrá en contacto contigo 
                    en menos de 24 horas.
                  </p>
                  <TransitionLink
                    to="/"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium ${
                      isDark 
                        ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]' 
                        : 'bg-[#00B8D4] text-white hover:shadow-[0_0_30px_rgba(0,184,212,0.4)]'
                    }`}
                  >
                    Volver al inicio
                    <ArrowRight className="w-4 h-4" />
                  </TransitionLink>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-sm ${
                  isDark 
                    ? 'bg-[#0a0a0a]/80 border-white/10' 
                    : 'bg-white/80 border-zinc-200 shadow-xl'
                }`}>
                  <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    Cuéntanos sobre tu proyecto
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all ${
                          isDark 
                            ? 'bg-black/50 border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                        }`}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all ${
                          isDark 
                            ? 'bg-black/50 border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                        }`}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all ${
                          isDark 
                            ? 'bg-black/50 border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                        }`}
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all ${
                          isDark 
                            ? 'bg-black/50 border-white/10 text-white placeholder:text-zinc-600' 
                            : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                        }`}
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Sector
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all ${
                        isDark 
                          ? 'bg-black/50 border-white/10 text-white' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900'
                      }`}
                    >
                      <option value="">Selecciona tu sector</option>
                      <option value="salud">Sector Salud / Hospitales</option>
                      <option value="hotel">Hoteles / Turismo</option>
                      <option value="retail">Retail / Comercio</option>
                      <option value="industria">Industria / Manufactura</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      ¿Qué necesitas? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 transition-all resize-none ${
                        isDark 
                          ? 'bg-black/50 border-white/10 text-white placeholder:text-zinc-600' 
                          : 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder:text-zinc-400'
                      }`}
                      placeholder="Cuéntanos sobre tu equipo, tus turnos actuales y qué problemas estás enfrentando..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
                      isDark 
                        ? 'bg-[#00F0FF] text-black hover:shadow-[0_0_40px_rgba(0,240,255,0.4)]' 
                        : 'bg-[#00B8D4] text-white hover:shadow-[0_0_40px_rgba(0,184,212,0.4)]'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </>
                    )}
                  </motion.button>

                  <p className={`text-xs text-center mt-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    Al enviar, aceptas nuestra política de privacidad. Te responderemos por WhatsApp o email.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
