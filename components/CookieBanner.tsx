import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
}

const CookieBanner = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      preferences: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(allAccepted);
    setIsVisible(false);
    if (allAccepted.analytics) {
      enableAnalytics();
    }
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      preferences: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(onlyNecessary);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
    if (preferences.analytics) {
      enableAnalytics();
    }
  };

  const enableAnalytics = () => {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
            onClick={() => {}}
          />
          
          {!showSettings ? (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed bottom-0 left-0 right-0 z-[201] p-4 sm:p-6 ${
                isDark ? 'bg-[#0a0a0a] border-t border-white/10' : 'bg-white border-t border-zinc-200 shadow-2xl'
              }`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
                  <div className={`hidden sm:flex w-12 h-12 rounded-xl items-center justify-center shrink-0 ${
                    isDark ? 'bg-zinc-900 border border-white/10' : 'bg-zinc-100'
                  }`}>
                    <Cookie className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      Respetamos tu privacidad
                    </h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico 
                      y personalizar el contenido. Puedes aceptar todas las cookies, rechazar las no esenciales 
                      o configurar tus preferencias. Para más información, consulta nuestra{' '}
                      <a href="/cookies" className="text-[#00F0FF] hover:underline">Política de Cookies</a>.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <button
                      onClick={() => setShowSettings(true)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isDark 
                          ? 'text-zinc-300 hover:text-white hover:bg-white/10' 
                          : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                      }`}
                    >
                      <Settings className="w-4 h-4" />
                      Configurar
                    </button>
                    
                    <button
                      onClick={handleRejectAll}
                      className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                        isDark 
                          ? 'text-zinc-400 hover:text-white border border-white/20 hover:border-white/40' 
                          : 'text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      Rechazar
                    </button>
                    
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 text-sm font-semibold text-black bg-[#00F0FF] rounded-lg hover:bg-[#00D4E5] transition-colors shadow-lg shadow-[#00F0FF]/20"
                    >
                      Aceptar todas
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed bottom-0 left-0 right-0 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[202] rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl ${
                isDark ? 'bg-[#0a0a0a] border border-white/10' : 'bg-white border border-zinc-200'
              }`}
            >
              <div className={`flex items-center justify-between p-6 border-b ${
                isDark ? 'border-white/10' : 'border-zinc-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-zinc-900 border border-white/10' : 'bg-zinc-100'
                  }`}>
                    <Shield className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      Preferencias de cookies
                    </h3>
                    <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Personaliza tu experiencia
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'hover:bg-white/10 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-500'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className={`p-4 rounded-xl ${isDark ? 'bg-zinc-900/50' : 'bg-zinc-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      Cookies necesarias
                    </span>
                    <div className="w-11 h-6 bg-[#00F0FF] rounded-full relative cursor-not-allowed opacity-60">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Estas cookies son esenciales para el funcionamiento del sitio y no pueden desactivarse.
                  </p>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? 'bg-zinc-900/50' : 'bg-zinc-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      Cookies analíticas
                    </span>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-11 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-[#00F0FF]' : isDark ? 'bg-zinc-700' : 'bg-zinc-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        preferences.analytics ? 'right-1' : 'left-1'
                      }`} />
                    </button>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Nos ayudan a entender cómo utilizas el sitio para mejorar nuestros servicios.
                  </p>
                </div>

                <div className={`p-4 rounded-xl ${isDark ? 'bg-zinc-900/50' : 'bg-zinc-50'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      Cookies de preferencias
                    </span>
                    <button
                      onClick={() => togglePreference('preferences')}
                      className={`w-11 h-6 rounded-full relative transition-colors ${
                        preferences.preferences ? 'bg-[#00F0FF]' : isDark ? 'bg-zinc-700' : 'bg-zinc-300'
                      }`}
                    >
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                        preferences.preferences ? 'right-1' : 'left-1'
                      }`} />
                    </button>
                  </div>
                  <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Permiten recordar tus preferencias como el tema o idioma seleccionado.
                  </p>
                </div>
              </div>

              <div className={`flex items-center justify-between p-6 border-t ${
                isDark ? 'border-white/10' : 'border-zinc-200'
              }`}>
                <button
                  onClick={handleRejectAll}
                  className={`text-sm font-medium transition-colors ${
                    isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Solo necesarias
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2.5 text-sm font-semibold text-black bg-[#00F0FF] rounded-lg hover:bg-[#00D4E5] transition-colors"
                >
                  Guardar preferencias
                </button>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
