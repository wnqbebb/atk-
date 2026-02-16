import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from '../components/TransitionLink';
import ThemeToggle from '../components/ThemeToggle';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Web Design', href: '/web-design' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const navBg = isDark 
    ? (isScrolled ? 'bg-[#050505]/95' : 'bg-[#050505]/60')
    : (isScrolled ? 'bg-white/95' : 'bg-white/70');
  
  const textColor = isDark ? 'text-white' : 'text-zinc-900';
  const subTextColor = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const borderColor = isDark ? 'border-white/10' : 'border-zinc-200';
  const hoverBg = isDark ? 'hover:bg-white/10' : 'hover:bg-zinc-100';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4"
    >
      <motion.nav
        animate={{ backgroundColor: navBg }}
        transition={{ duration: 0.3 }}
        className={`flex items-center justify-between max-w-6xl mx-auto px-6 py-3 rounded-full border backdrop-blur-md ${borderColor} ${textColor}`}
      >
        {/* Logo */}
        <TransitionLink to="/" className="flex items-center gap-1">
          <span className="font-display text-lg font-bold tracking-tight">
            Aio<span className={isDark ? 'text-white' : 'text-zinc-900'}>Tek</span>
          </span>
          <motion.span 
            className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </TransitionLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.name}
              to={link.href}
              className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-full ${
                isActive(link.href)
                  ? isDark ? 'text-white bg-white/10' : 'text-zinc-900 bg-zinc-200'
                  : `${subTextColor} ${hoverBg}`
              }`}
            >
              {link.name}
            </TransitionLink>
          ))}
        </div>

        {/* Right side: Theme Toggle + CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <TransitionLink
            to="/contacto"
            className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
          >
            Consultar
          </TransitionLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors ${hoverBg}`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className={`rounded-2xl p-4 shadow-2xl border backdrop-blur-xl ${
              isDark 
                ? 'bg-[#0a0a0a] border-white/10' 
                : 'bg-white border-zinc-200'
            }`}>
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <TransitionLink
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      isActive(link.href)
                        ? isDark 
                          ? 'text-white bg-white/10 font-medium'
                          : 'text-zinc-900 bg-zinc-100 font-medium'
                        : isDark
                          ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                          : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                    }`}
                  >
                    {link.name}
                  </TransitionLink>
                </motion.div>
              ))}
              
              {/* Theme Toggle Mobile */}
              <div className={`mt-3 pt-3 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                <div className="px-4 py-2">
                  <ThemeToggle />
                </div>
              </div>
              
              <div className={`mt-3 pt-3 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                <TransitionLink
                  to="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
                >
                  Solicitar Demo
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
