import { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import MainLayout from './layouts/MainLayout';
import Preloader from './components/Preloader';

// ===== PÁGINAS CORE =====
import Home from './pages/Home';

// ===== PÁGINAS LAZY =====
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Legal = lazy(() => import('./pages/Legal'));
const Cookies = lazy(() => import('./pages/Cookies'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Blog = lazy(() => import('./pages/Blog'));
const WebDesign = lazy(() => import('./pages/WebDesign'));

// Industry Pages
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const Enterprise = lazy(() => import('./pages/industries/Enterprise'));
const Hospitality = lazy(() => import('./pages/industries/Hospitality'));

// Blog Pages
const ArticleExcel = lazy(() => import('./pages/blog/ArticleExcel'));
const ArticleHospital = lazy(() => import('./pages/blog/ArticleHospital'));
const ArticleAutomation = lazy(() => import('./pages/blog/ArticleAutomation'));
const ArticleAbsenteeism = lazy(() => import('./pages/blog/ArticleAbsenteeism'));
const ArticleWhatsApp = lazy(() => import('./pages/blog/ArticleWhatsApp'));
const ArticleROI = lazy(() => import('./pages/blog/ArticleROI'));

// ===== LOADER =====
const PageLoader = () => (
  <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] flex items-center justify-center transition-colors">
    <div className="w-8 h-8 border-2 border-[#00F0FF]/20 border-t-[#00F0FF] rounded-full animate-spin" />
  </div>
);

// ===== RUTAS SIN TRANSICIÓN =====
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        
        <Route path="servicios" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
        <Route path="web-design" element={<Suspense fallback={<PageLoader />}><WebDesign /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
        <Route path="contacto" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        <Route path="casos" element={<Suspense fallback={<PageLoader />}><CaseStudies /></Suspense>} />
        
        {/* Industrias */}
        <Route path="industrias/sanidad" element={<Suspense fallback={<PageLoader />}><Healthcare /></Suspense>} />
        <Route path="industrias/empresas" element={<Suspense fallback={<PageLoader />}><Enterprise /></Suspense>} />
        <Route path="industrias/hoteles" element={<Suspense fallback={<PageLoader />}><Hospitality /></Suspense>} />
        
        {/* Blog Artículos */}
        <Route path="blog/excel-errores-nomina" element={<Suspense fallback={<PageLoader />}><ArticleExcel /></Suspense>} />
        <Route path="blog/gestion-turnos-hospitalarios" element={<Suspense fallback={<PageLoader />}><ArticleHospital /></Suspense>} />
        <Route path="blog/sistemas-24-7-vs-humanos" element={<Suspense fallback={<PageLoader />}><ArticleAutomation /></Suspense>} />
        <Route path="blog/reducir-ausentismo-laboral" element={<Suspense fallback={<PageLoader />}><ArticleAbsenteeism /></Suspense>} />
        <Route path="blog/automatizacion-whatsapp-rrhh" element={<Suspense fallback={<PageLoader />}><ArticleWhatsApp /></Suspense>} />
        <Route path="blog/roi-software-gestion-turnos" element={<Suspense fallback={<PageLoader />}><ArticleROI /></Suspense>} />
        
        {/* Legales */}
        <Route path="privacidad" element={<Suspense fallback={<PageLoader />}><Privacy /></Suspense>} />
        <Route path="terminos" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
        <Route path="legal" element={<Suspense fallback={<PageLoader />}><Legal /></Suspense>} />
        <Route path="cookies" element={<Suspense fallback={<PageLoader />}><Cookies /></Suspense>} />
        
        {/* 404 */}
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  );
};

// ===== APP PRINCIPAL =====
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
          
          {!loading && <AppRoutes />}
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
