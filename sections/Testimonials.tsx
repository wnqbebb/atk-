import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Carlos M.',
    role: 'Director Médico',
    company: 'Hospital Metropolitano',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
    quote: 'Antes de AioTek, los cambios de turno eran una pesadilla diaria. Ahora el sistema lo resuelve solo. Recuperamos el control total.',
    rating: 5,
    logo: 'HM',
  },
  {
    id: 2,
    name: 'Laura G.',
    role: 'Directora RRHH',
    company: 'Cadena Hotelera Premium',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    quote: 'Necesitábamos algo a medida para nuestras 5 sedes. La implementación fue impecable y el soporte es inmediato.',
    rating: 5,
    logo: 'CH',
  },
  {
    id: 3,
    name: 'Javier R.',
    role: 'Gerente de Operaciones',
    company: 'Grupo Industrial Norte',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
    quote: 'Adiós al Excel. La reducción de errores en nómina pagó el software en el primer mes. Imprescindible.',
    rating: 5,
    logo: 'GIN',
  },
  {
    id: 4,
    name: 'Ana P.',
    role: 'CEO',
    company: 'TechStart Chile',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    quote: 'La automatización de nuestros procesos internos nos ahorró 20 horas semanales. El equipo puede enfocarse en lo que realmente importa.',
    rating: 5,
    logo: 'TS',
  },
  {
    id: 5,
    name: 'Roberto S.',
    role: 'Director de TI',
    company: 'Logística Express',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    quote: 'Integraron nuestros sistemas legacy en tiempo récord. La sincronización en tiempo real cambió nuestra operación por completo.',
    rating: 5,
    logo: 'LE',
  },
  {
    id: 6,
    name: 'María C.',
    role: 'Gerente General',
    company: 'Clínica del Valle',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
    quote: 'El sistema de gestión de turnos médicos redujo nuestras cancelaciones en un 40%. Nuestros pacientes están más satisfechos que nunca.',
    rating: 5,
    logo: 'CV',
  },
];

const TestimonialCard = ({ testimonial, isDark }: { testimonial: typeof testimonials[0]; isDark: boolean }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`flex-shrink-0 w-[380px] p-8 rounded-3xl transition-all duration-500 ${
        isDark 
          ? 'bg-[#0a0a0a] border border-white/10 hover:border-[#00F0FF]/30' 
          : 'bg-white border border-zinc-200 hover:border-[#00F0FF]/30 shadow-lg'
      }`}
    >
      {/* Quote Icon */}
      <div className="mb-6">
        <Quote className="w-8 h-8 text-[#00F0FF]/30" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#00F0FF] text-[#00F0FF]" />
        ))}
      </div>

      {/* Quote */}
      <p className={`leading-relaxed mb-8 text-base transition-colors ${
        isDark ? 'text-zinc-300' : 'text-zinc-600'
      }`}>
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className={`flex items-center justify-between pt-6 border-t transition-colors ${
        isDark ? 'border-white/10' : 'border-zinc-200'
      }`}>
        <div className="flex items-center gap-4">
          {/* Avatar - Real photo */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className={`font-semibold transition-colors ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>{testimonial.name}</div>
            <div className={`text-sm transition-colors ${
              isDark ? 'text-zinc-500' : 'text-zinc-500'
            }`}>{testimonial.role}</div>
          </div>
        </div>

        {/* Company Logo */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors ${
          isDark 
            ? 'bg-white/5 border-white/10' 
            : 'bg-zinc-100 border-zinc-200'
        }`}>
          <Building2 className={`w-4 h-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} />
          <span className={`text-xs font-medium ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>{testimonial.logo}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section id="testimonios" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#080808]' : 'bg-zinc-50'
    }`}>
      {/* Grid background */}
      <div className={`absolute inset-0 bg-grid-technical ${isDark ? 'opacity-20' : 'opacity-5'}`} />
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-6"
        >
          <span className={`section-label mb-4 block transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-500'
          }`}>LO QUE DICEN NUESTROS CLIENTES</span>
          <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            Resultados que{' '}
            <span className="text-[#00F0FF]">hablan por sí solos</span>
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors ${
            isDark ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            Empresas que dejaron atrás el caos de la planificación manual y recuperaron el control de sus operaciones.
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden group">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r z-10 pointer-events-none transition-colors ${
            isDark ? 'from-[#080808]' : 'from-zinc-50'
          } to-transparent`} />
          <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l z-10 pointer-events-none transition-colors ${
            isDark ? 'from-[#080808]' : 'from-zinc-50'
          } to-transparent`} />

          {/* Marquee track - se pausa al hover */}
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {/* Primera copia de testimonios */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`row1-${testimonial.id}`} testimonial={testimonial} isDark={isDark} />
            ))}
            {/* Segunda copia (duplicada) para el efecto infinito */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`row2-${testimonial.id}`} testimonial={testimonial} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-20 px-6"
        >
          {[
            { value: '50+', label: 'Empresas satisfechas' },
            { value: '98%', label: 'Reducción de errores' },
            { value: '<30 días', label: 'ROI promedio' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl font-bold mb-1 transition-colors ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}>{stat.value}</div>
              <div className={`text-sm transition-colors ${
                isDark ? 'text-zinc-500' : 'text-zinc-500'
              }`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
