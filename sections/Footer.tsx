import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`relative overflow-hidden transition-colors ${
      isDark ? 'bg-[#050505] text-white' : 'bg-zinc-100 text-zinc-900'
    }`}>
      {/* Grid background */}
      <div className={`absolute inset-0 bg-grid-technical ${
        isDark ? 'opacity-20' : 'opacity-30'
      }`} />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 pb-12 border-b ${
          isDark ? 'border-white/10' : 'border-zinc-200'
        }`}>
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <TransitionLink to="/" className="inline-flex items-center gap-1 mb-4">
              <span className="font-display text-2xl font-bold tracking-tight">
                Aio<span className={isDark ? 'text-white' : 'text-zinc-900'}>Tek</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
            </TransitionLink>
            <p className={`text-sm leading-relaxed max-w-sm mb-6 ${
              isDark ? 'text-zinc-500' : 'text-zinc-600'
            }`}>
              Software de gestión de turnos a medida. Deja atrás el Excel y recupera el control de tu operativa.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@aiotek.es" className={`flex items-center gap-2 text-sm hover:text-[#00F0FF] transition-colors ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <Mail className="w-4 h-4" />
                info@aiotek.es
              </a>
              <a href="tel:+34643141366" className={`flex items-center gap-2 text-sm hover:text-[#00F0FF] transition-colors ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <Phone className="w-4 h-4" />
                +34 643 14 13 66
              </a>
              <div className={`flex items-center gap-2 text-sm ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}>
                <MapPin className="w-4 h-4" />
                Las Palmas de Gran Canaria
              </div>
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>Producto</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Servicios', href: '/servicios' },
                { name: 'Cómo Funciona', href: '/#proceso' },
                { name: 'Casos de Éxito', href: '/casos' },
              ].map((link) => (
                <li key={link.name}>
                  <TransitionLink 
                    to={link.href} 
                    className={`text-sm transition-colors ${
                      isDark ? 'text-zinc-500 hover:text-[#00F0FF]' : 'text-zinc-600 hover:text-[#00b8cc]'
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>Soluciones</h4>
            <ul className="space-y-3">
              {[
                { name: 'Hospitales', href: '/industrias/sanidad' },
                { name: 'Hoteles', href: '/industrias/hoteles' },
                { name: 'Empresas', href: '/industrias/empresas' },
                { name: 'Software a Medida', href: '/servicios' },
              ].map((link) => (
                <li key={link.name}>
                  <TransitionLink 
                    to={link.href} 
                    className={`text-sm transition-colors ${
                      isDark ? 'text-zinc-500 hover:text-[#00F0FF]' : 'text-zinc-600 hover:text-[#00b8cc]'
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>Empresa</h4>
            <ul className="space-y-3">
              {[
                { name: 'Sobre Nosotros', href: '/#inicio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contacto', href: '/contacto' },
                { name: 'Soporte', href: '/contacto' },
              ].map((link) => (
                <li key={link.name}>
                  <TransitionLink 
                    to={link.href} 
                    className={`text-sm transition-colors ${
                      isDark ? 'text-zinc-500 hover:text-[#00F0FF]' : 'text-zinc-600 hover:text-[#00b8cc]'
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Aviso Legal', href: '/legal' },
                { name: 'Privacidad', href: '/privacidad' },
                { name: 'Términos', href: '/terminos' },
                { name: 'Cookies', href: '/cookies' },
              ].map((link) => (
                <li key={link.name}>
                  <TransitionLink 
                    to={link.href} 
                    className={`text-sm transition-colors ${
                      isDark ? 'text-zinc-500 hover:text-[#00F0FF]' : 'text-zinc-600 hover:text-[#00b8cc]'
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className={`pt-8 flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark ? 'text-zinc-600' : 'text-zinc-500'
        }`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <p>© 2026 AioTek. Todos los derechos reservados.</p>
            <span className="hidden sm:inline">•</span>
            <p>Las Palmas de Gran Canaria, Canarias</p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {/* Social icons removed - no social accounts yet */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
