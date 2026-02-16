import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, Calendar, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import TransitionLink from '../../components/TransitionLink';
import SEO from '../../components/SEO';

const articles = [
  {
    id: 'excel-errores-nomina',
    slug: 'excel-errores-nomina',
    category: 'Errores Costosos',
    categoryColor: 'bg-red-500',
    readTime: '6 min',
    date: '10 Feb 2026',
    title: 'Por qué el Excel te está costando miles de euros en nómina cada año',
    excerpt: 'Cada error de cálculo es dinero que nunca recuperarás. Descubre el verdadero costo oculto.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    id: 'gestion-turnos-hospitalarios',
    slug: 'gestion-turnos-hospitalarios',
    category: 'Sector Salud',
    categoryColor: 'bg-cyan-500',
    readTime: '8 min',
    date: '8 Feb 2026',
    title: 'El fin del caos en turnos de enfermería',
    excerpt: 'Cómo eliminar el estrés de las guardias médicas con automatización inteligente.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 'roi-software-gestion-turnos',
    slug: 'roi-software-gestion-turnos',
    category: 'Estrategia',
    categoryColor: 'bg-purple-500',
    readTime: '8 min',
    date: '25 Ene 2026',
    title: 'Cómo recuperar tu inversión en 3 meses',
    excerpt: 'Calcula tu ROI y descubre cuánto dinero estás dejando de ganar.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-br from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'automatizacion-whatsapp-rrhh',
    slug: 'automatizacion-whatsapp-rrhh',
    category: 'Automatización',
    categoryColor: 'bg-emerald-500',
    readTime: '6 min',
    date: '28 Ene 2026',
    title: 'WhatsApp para RRHH: Reduce consultas un 70%',
    excerpt: 'Libera a tu departamento con agentes virtuales inteligentes.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 'reducir-ausentismo-laboral',
    slug: 'reducir-ausentismo-laboral',
    category: 'Productividad',
    categoryColor: 'bg-green-500',
    readTime: '5 min',
    date: '2 Feb 2026',
    title: 'Reduce el ausentismo un 40% sin aumentar sueldos',
    excerpt: 'Estrategias probadas para mejorar la asistencia y satisfacción del equipo.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-br from-green-500/20 to-lime-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    id: 'sistemas-24-7-vs-humanos',
    slug: 'sistemas-24-7-vs-humanos',
    category: 'Tecnología',
    categoryColor: 'bg-blue-500',
    readTime: '7 min',
    date: '5 Feb 2026',
    title: 'Sistemas 24/7 vs Personal Humano',
    excerpt: 'La comparativa definitiva sobre automatización y costes operativos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    color: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
  },
];

const categories = [
  { name: 'Errores Costosos', color: 'bg-red-500/10 text-red-500 border-red-500/20' },
  { name: 'Sector Salud', color: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' },
  { name: 'Estrategia', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  { name: 'Automatización', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  { name: 'Productividad', color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  { name: 'Tecnología', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
];

const BlogIndex = () => {
  const { isDark } = useTheme();
  const featuredArticle = articles.find(a => a.featured);
  const sideArticles = articles.filter(a => !a.featured).slice(0, 2);
  const bottomArticles = articles.filter(a => !a.featured).slice(2, 4);

  return (
    <>
      <SEO 
        title="Blog de Gestión de Turnos | AioTek"
        description="Artículos sobre gestión de turnos, reducción de errores de nómina y tecnología autónoma. Consejos prácticos para optimizar tu operativa."
      />
      
      <section className={`relative min-h-screen py-12 sm:py-16 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#050505]' : 'bg-zinc-50'
      }`}>
        {/* Background Grid */}
        <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-10' : 'opacity-5'}`} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-10"
          >
            <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              BLOG
            </h1>
            <TransitionLink
              to="/"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-all ${
                isDark 
                  ? 'border-white/20 text-white hover:bg-white/5' 
                  : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              Volver al inicio
              <ArrowRight className="w-4 h-4" />
            </TransitionLink>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Featured Article - Large Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              <TransitionLink
                to={`/blog/${featuredArticle?.slug}`}
                className="group block h-full"
              >
                <div className={`relative h-full rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                  isDark 
                    ? 'border-white/10 hover:border-[#00F0FF]/50' 
                    : 'border-zinc-200 hover:border-[#00F0FF]/50 shadow-xl'
                }`}>
                  {/* Image */}
                  <div className="relative h-[400px] sm:h-[500px] lg:h-full">
                    <img 
                      src={featuredArticle?.image} 
                      alt={featuredArticle?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 ${
                      isDark 
                        ? 'bg-gradient-to-t from-black via-black/50 to-transparent' 
                        : 'bg-gradient-to-t from-white via-white/60 to-transparent'
                    }`} />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    {/* Hot Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isDark ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        HOT
                      </span>
                      <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {featuredArticle?.category}
                      </span>
                      <span className={isDark ? 'text-zinc-600' : 'text-zinc-300'}>•</span>
                      <span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        {featuredArticle?.date}
                      </span>
                    </div>
                    
                    <h2 className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight group-hover:text-[#00F0FF] transition-colors ${
                      isDark ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {featuredArticle?.title}
                    </h2>
                    
                    <p className={`text-sm sm:text-base mb-4 max-w-xl ${
                      isDark ? 'text-zinc-300' : 'text-zinc-600'
                    }`}>
                      {featuredArticle?.excerpt}
                    </p>
                    
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      isDark ? 'text-[#00F0FF]' : 'text-[#00B8D4]'
                    }`}>
                      Leer artículo
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </TransitionLink>
            </motion.div>

            {/* Right Side - Stacked Cards */}
            <div className="lg:col-span-5 grid gap-6">
              {sideArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <TransitionLink
                    to={`/blog/${article.slug}`}
                    className="group block h-full"
                  >
                    <div className={`relative h-full rounded-3xl p-6 border transition-all duration-500 overflow-hidden ${
                      isDark 
                        ? `${article.color} ${article.borderColor} hover:scale-[1.02]` 
                        : `bg-white ${article.borderColor} shadow-lg hover:scale-[1.02]`
                    }`}>
                      {/* Category & Arrow */}
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          isDark ? 'bg-black/30 border-white/10 text-white' : 'bg-white border-zinc-200 text-zinc-700'
                        }`}>
                          {article.category}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                          isDark 
                            ? 'bg-white/10 group-hover:bg-white/20' 
                            : 'bg-zinc-100 group-hover:bg-zinc-200'
                        }`}>
                          <ArrowUpRight className={`w-5 h-5 ${isDark ? 'text-white' : 'text-zinc-700'}`} />
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`font-display text-xl sm:text-2xl font-bold mb-3 leading-tight ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className={`text-sm mb-4 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        {article.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className={`flex items-center gap-3 text-xs ${
                        isDark ? 'text-zinc-400' : 'text-zinc-500'
                      }`}>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </span>
                      </div>

                      {/* Background Image Hint */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
                        style={{ background: article.categoryColor.replace('bg-', '') === 'red-500' ? '#ef4444' : 
                                          article.categoryColor === 'bg-cyan-500' ? '#06b6d4' :
                                          article.categoryColor === 'bg-purple-500' ? '#a855f7' :
                                          article.categoryColor === 'bg-emerald-500' ? '#10b981' :
                                          article.categoryColor === 'bg-green-500' ? '#22c55e' : '#3b82f6' }} 
                      />
                    </div>
                  </TransitionLink>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row - More Articles + Categories */}
          <div className="grid lg:grid-cols-12 gap-6 mt-6">
            
            {/* Bottom Articles */}
            {bottomArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="lg:col-span-4"
              >
                <TransitionLink
                  to={`/blog/${article.slug}`}
                  className="group block h-full"
                >
                  <div className={`relative rounded-3xl overflow-hidden border transition-all h-full ${
                    isDark 
                      ? 'border-white/10 hover:border-[#00F0FF]/30' 
                      : 'border-zinc-200 hover:border-[#00F0FF]/30 shadow-lg'
                  }`}>
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 ${
                        isDark ? 'bg-gradient-to-t from-[#050505] to-transparent' : 'bg-gradient-to-t from-zinc-50 to-transparent'
                      }`} />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                          isDark ? 'bg-black/50 border-white/10 text-white' : 'bg-white border-zinc-200 text-zinc-700'
                        }`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className={`font-semibold mb-2 line-clamp-2 group-hover:text-[#00F0FF] transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {article.title}
                      </h3>
                      <div className={`flex items-center gap-3 text-xs ${
                        isDark ? 'text-zinc-500' : 'text-zinc-500'
                      }`}>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readTime}
                        </span>
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                </TransitionLink>
              </motion.div>
            ))}

            {/* Categories Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-4"
            >
              <div className={`h-full rounded-3xl p-6 border ${
                isDark 
                  ? 'bg-gradient-to-br from-[#00F0FF]/10 to-purple-500/10 border-[#00F0FF]/20' 
                  : 'bg-gradient-to-br from-[#00F0FF]/10 to-purple-500/10 border-[#00F0FF]/30'
              }`}>
                <h3 className={`font-semibold mb-4 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  <Sparkles className="w-5 h-5 text-[#00F0FF]" />
                  Explorar por categoría
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer hover:scale-105 transition-transform ${cat.color}`}
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>

                <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                  <TransitionLink
                    to="/contacto"
                    className={`flex items-center justify-between group p-4 rounded-2xl transition-all ${
                      isDark 
                        ? 'bg-white/5 hover:bg-white/10' 
                        : 'bg-white hover:bg-zinc-50'
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                        ¿Necesitas ayuda personalizada?
                      </p>
                      <p className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        Agenda una consulta gratuita
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-[#00F0FF] text-black' : 'bg-[#00B8D4] text-white'
                    }`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </TransitionLink>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl border ${
              isDark 
                ? 'bg-[#0a0a0a] border-white/10' 
                : 'bg-white border-zinc-200 shadow-lg'
            }`}
          >
            {[
              { value: '6', label: 'Artículos', suffix: '' },
              { value: '2.5K', label: 'Lectores', suffix: '+' },
              { value: '40%', label: 'Reducción', suffix: ' promedio' },
              { value: '15', label: 'Min', suffix: ' lectura' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {stat.value}
                  <span className="text-[#00F0FF]">{stat.suffix}</span>
                </p>
                <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
