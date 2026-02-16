import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Calendar, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import TransitionLink from './TransitionLink';
import SEO from './SEO';

// Datos de todos los artículos para navegación
export const blogArticles = [
  {
    id: 'excel-errores-nomina',
    slug: 'excel-errores-nomina',
    category: 'Errores Costosos',
    categoryColor: 'red',
    readTime: '6 min',
    date: '10 Feb 2026',
    author: 'Equipo AioTek',
    title: 'Por qué Excel te está costando miles de euros en nómina cada año',
    excerpt: 'Cada error de cálculo en tu planificación es dinero que nunca recuperarás. Descubre el verdadero costo oculto de las hojas de cálculo.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'gestion-turnos-hospitalarios',
    slug: 'gestion-turnos-hospitalarios',
    category: 'Sector Salud',
    categoryColor: 'cyan',
    readTime: '8 min',
    date: '8 Feb 2026',
    author: 'Dra. María López',
    title: 'Gestión de Turnos Hospitalarios: El fin del caos manual en clínicas',
    excerpt: 'Los hospitales que aún planifican turnos manualmente pierden hasta 15 horas semanales en tareas administrativas innecesarias.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'roi-software-gestion-turnos',
    slug: 'roi-software-gestion-turnos',
    category: 'Estrategia',
    categoryColor: 'purple',
    readTime: '8 min',
    date: '25 Ene 2026',
    author: 'Javier Ruiz',
    title: 'ROI del software de gestión de turnos: Calculadora 2026',
    excerpt: 'Descubre exactamente cuánto dinero estás dejando de ganar con planificación manual y cómo calcular tu retorno de inversión.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'reducir-ausentismo-laboral',
    slug: 'reducir-ausentismo-laboral',
    category: 'Productividad',
    categoryColor: 'green',
    readTime: '5 min',
    date: '2 Feb 2026',
    author: 'Laura González',
    title: 'Cómo AioTek reduce el ausentismo laboral un 40% sin aumentar sueldos',
    excerpt: 'El ausentismo no siempre es por enfermedad. La mayoría de las veces, es el resultado de una planificación que ignora las necesidades reales de tu equipo.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'sistemas-24-7-vs-humanos',
    slug: 'sistemas-24-7-vs-humanos',
    category: 'Tecnología',
    categoryColor: 'blue',
    readTime: '7 min',
    date: '5 Feb 2026',
    author: 'Carlos Martínez',
    title: 'Sistemas 24/7 vs. Personal Humano: La comparativa definitiva',
    excerpt: '¿Realmente necesitas contratar más personal para cubrir turnos nocturnos y festivos? La respuesta te sorprenderá.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'automatizacion-whatsapp-rrhh',
    slug: 'automatizacion-whatsapp-rrhh',
    category: 'Automatización',
    categoryColor: 'emerald',
    readTime: '6 min',
    date: '28 Ene 2026',
    author: 'Equipo AioTek',
    title: 'WhatsApp para RRHH: Reduce consultas repetitivas un 70%',
    excerpt: 'Tu equipo pierde horas respondiendo las mismas preguntas. Descubre cómo un agente virtual puede liberar a tu departamento de RRHH.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    thumb: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80',
  },
];

interface BlogLayoutProps {
  children: React.ReactNode;
  currentSlug: string;
  title: string;
  description: string;
  publishDate: string;
  readTime: string;
  author: string;
  category: string;
  categoryColor: string;
  heroImage: string;
}

const categoryColors: Record<string, string> = {
  red: 'bg-red-500/10 text-red-500 border-red-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/30',
  purple: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
  green: 'bg-green-500/10 text-green-500 border-green-500/30',
  blue: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
};

const BlogLayout = ({
  children,
  currentSlug,
  title,
  description,
  publishDate,
  readTime,
  author,
  category,
  categoryColor,
  heroImage,
}: BlogLayoutProps) => {
  const { isDark } = useTheme();
  
  const currentIndex = blogArticles.findIndex(a => a.slug === currentSlug);
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null;
  const relatedArticles = blogArticles.filter(a => a.slug !== currentSlug).slice(0, 4);

  return (
    <>
      <SEO title={title} description={description} />
      
      <article className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Hero Section con Imagen */}
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent'
                : 'bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent'
            }`} />
          </div>
          
          {/* Grid overlay */}
          <div className={`absolute inset-0 bg-grid-technical ${
            isDark ? 'opacity-20' : 'opacity-10'
          }`} />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            {/* Back button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-8 left-4 sm:left-8"
            >
              <TransitionLink 
                to="/blog"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all ${
                  isDark 
                    ? 'bg-black/30 border-white/10 text-white hover:bg-black/50 hover:border-[#00F0FF]/50' 
                    : 'bg-white/80 border-zinc-200 text-zinc-900 hover:bg-white hover:border-[#00F0FF]/50'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </TransitionLink>
            </motion.div>
            
            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Category Badge */}
              <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border mb-6 ${
                categoryColors[categoryColor] || categoryColors.cyan
              }`}>
                <BookOpen className="w-4 h-4" />
                {category}
              </span>
              
              {/* Title */}
              <h1 className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight max-w-4xl ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>
                {title}
              </h1>
              
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    isDark 
                      ? 'bg-zinc-900 border-white/10' 
                      : 'bg-white border-zinc-200'
                  }`}>
                    <span className="text-[#00F0FF] font-bold text-lg">
                      {author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                      {author}
                    </p>
                    <div className={`flex items-center gap-3 text-sm ${
                      isDark ? 'text-zinc-500' : 'text-zinc-500'
                    }`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {publishDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Desktop */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block lg:col-span-3"
            >
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-[#0a0a0a] border-white/10' 
                    : 'bg-white border-zinc-200 shadow-sm'
                }`}>
                  <h3 className={`font-semibold mb-4 flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-zinc-900'
                  }`}>
                    <Sparkles className="w-4 h-4 text-[#00F0FF]" />
                    Contenido
                  </h3>
                  <nav className="space-y-2">
                    {['Introducción', 'El problema real', 'Datos y estadísticas', 'La solución', 'Conclusión'].map((item, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className={`block text-sm py-1.5 px-3 rounded-lg transition-colors ${
                          isDark 
                            ? 'text-zinc-400 hover:text-white hover:bg-white/5' 
                            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                        }`}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Related Articles */}
                <div>
                  <h3 className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    Artículos relacionados
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <TransitionLink
                        key={article.slug}
                        to={`/blog/${article.slug}`}
                        className={`group block p-3 rounded-xl border transition-all ${
                          isDark 
                            ? 'bg-[#0a0a0a] border-white/5 hover:border-[#00F0FF]/30' 
                            : 'bg-white border-zinc-100 hover:border-[#00F0FF]/30 shadow-sm'
                        }`}
                      >
                        <div className="flex gap-3">
                          <img 
                            src={article.thumb} 
                            alt={article.title}
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          />
                          <div>
                            <p className={`text-xs font-medium mb-1 ${
                              isDark ? 'text-[#00F0FF]' : 'text-[#00B8D4]'
                            }`}>
                              {article.category}
                            </p>
                            <p className={`text-sm font-medium line-clamp-2 group-hover:text-[#00F0FF] transition-colors ${
                              isDark ? 'text-white' : 'text-zinc-900'
                            }`}>
                              {article.title}
                            </p>
                          </div>
                        </div>
                      </TransitionLink>
                    ))}
                  </div>
                </div>

                {/* CTA Sidebar */}
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/20' 
                    : 'bg-gradient-to-br from-[#00F0FF]/10 to-transparent border-[#00F0FF]/30'
                }`}>
                  <p className={`text-sm font-medium mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                    ¿Necesitas ayuda con tu gestión?
                  </p>
                  <p className={`text-xs mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                    Agenda una consulta gratuita y descubre cómo optimizar tus procesos.
                  </p>
                  <TransitionLink
                    to="/contacto"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${
                      isDark ? 'text-[#00F0FF]' : 'text-[#00B8D4]'
                    }`}
                  >
                    Solicitar demo
                    <ChevronRight className="w-4 h-4" />
                  </TransitionLink>
                </div>
              </div>
            </motion.aside>

            {/* Article Content */}
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-9"
            >
              <div className={`prose prose-lg max-w-none ${
                isDark ? 'prose-invert' : 'prose-zinc'
              }`}>
                {children}
              </div>

              {/* Article Navigation */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevArticle && (
                    <TransitionLink
                      to={`/blog/${prevArticle.slug}`}
                      className={`group p-6 rounded-2xl border transition-all ${
                        isDark 
                          ? 'bg-[#0a0a0a] border-white/10 hover:border-[#00F0FF]/30' 
                          : 'bg-white border-zinc-200 hover:border-[#00F0FF]/30 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                        <ArrowLeft className="w-4 h-4" />
                        Anterior
                      </div>
                      <p className={`font-medium line-clamp-2 group-hover:text-[#00F0FF] transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {prevArticle.title}
                      </p>
                    </TransitionLink>
                  )}
                  
                  {nextArticle && (
                    <TransitionLink
                      to={`/blog/${nextArticle.slug}`}
                      className={`group p-6 rounded-2xl border transition-all text-right ${
                        isDark 
                          ? 'bg-[#0a0a0a] border-white/10 hover:border-[#00F0FF]/30' 
                          : 'bg-white border-zinc-200 hover:border-[#00F0FF]/30 shadow-sm'
                      } ${!prevArticle ? 'sm:col-start-2' : ''}`}
                    >
                      <div className="flex items-center justify-end gap-2 text-sm text-zinc-500 mb-2">
                        Siguiente
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <p className={`font-medium line-clamp-2 group-hover:text-[#00F0FF] transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {nextArticle.title}
                      </p>
                    </TransitionLink>
                  )}
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogLayout;
