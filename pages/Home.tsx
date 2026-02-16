import Hero from '../sections/Hero';
import HighTicketShowcase from '../sections/HighTicketShowcase';
import Process from '../sections/Process';
import HowItWorks from '../sections/HowItWorks';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import SEO from '../components/SEO';

/**
 * Home Page
 * 
 * Página principal de AioTek.
 * Contiene todas las secciones de la landing page original.
 */
const Home = () => {
  return (
    <>
      <SEO 
        title="Software de Gestión de Turnos a Medida"
        description="Elimina el caos en la planificación de turnos. AioTek desarrolla sistemas personalizados que reducen errores de nómina un 40% y ahorran 20h semanales."
      />
      
      {/* Hero Section - Orb + Headline */}
      <Hero />

      {/* High Ticket Showcase - 3D Tilt Dashboard */}
      <HighTicketShowcase />

      {/* Process Section - Deja de perder dinero con sistemas obsoletos */}
      <Process />

      {/* How It Works - Timeline proceso */}
      <HowItWorks />

      {/* Services Section - Interactive Cards */}
      <Services />

      {/* Testimonials Section - Wall of Trust */}
      <Testimonials />

      {/* Contact Section - Light Warp Speed */}
      <Contact />
    </>
  );
};

export default Home;
