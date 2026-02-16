import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { WhatsAppLogo } from './ServiceLogos';

const FloatingWhatsApp = () => {
  const { isDark } = useTheme();
  
  const WHATSAPP_NUMBER = '34643141366';
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20AioTek,%20me%20interesa%20conocer%20más%20sobre%20su%20software`;

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all ${
        isDark 
          ? 'bg-[#25D366] text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]' 
          : 'bg-[#25D366] text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]'
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppLogo className="w-7 h-7" />
      
      {/* Indicador de disponibilidad */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#050505]">
        <span className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></span>
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
