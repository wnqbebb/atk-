import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import CookieBanner from '../components/CookieBanner';

const MainLayout = () => {
  const { isDark } = useTheme();

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-[#050505] text-white' 
        : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Grid técnica sutil */}
      <div className="fixed inset-0 bg-grid-technical opacity-[0.03] pointer-events-none z-0" />
      
      {/* Glows de marca - solo en dark mode o más sutiles en light */}
      <div className={`fixed top-0 left-0 w-[800px] h-[800px] pointer-events-none z-0 transition-opacity duration-300 ${
        isDark ? 'opacity-100' : 'opacity-30'
      }`}>
        <div className="absolute inset-0 bg-gradient-radial from-[#00F0FF]/5 via-transparent to-transparent" />
      </div>
      <div className={`fixed top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0 transition-opacity duration-300 ${
        isDark ? 'opacity-100' : 'opacity-30'
      }`}>
        <div className="absolute inset-0 bg-gradient-radial from-[#7000FF]/3 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
      
      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
