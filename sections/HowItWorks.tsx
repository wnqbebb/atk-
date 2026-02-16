import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tu operativa actual, identificamos los <span class="text-red-500 font-semibold">cuellos de botella</span> y diseñamos un plan de automatización personalizado para tu negocio.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Desarrollo',
    description: 'Construimos el software a medida de tus reglas. Cada funcionalidad se adapta a tu flujo de trabajo, <span class="text-red-500 font-semibold">no al revés</span>.',
    icon: Code,
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Ponemos en marcha las soluciones con capacitación y soporte continuo. Monitoreamos el rendimiento y optimizamos para <span class="text-[#00d4ff] font-semibold">máximos resultados</span>.',
    icon: Rocket,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={sectionRef} className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 ${
      isDark ? 'bg-[#050505]' : 'bg-[#f8f9fa]'
    }`}>
      {/* Nebula background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, transparent 60%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-technical opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-20"
        >
          <span className={`text-sm font-semibold uppercase tracking-widest mb-4 block transition-colors ${
            isDark ? 'text-zinc-500' : 'text-zinc-400'
          }`}>CÓMO FUNCIONA</span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-zinc-900'
          }`}>
            De tu <span className="text-red-500">caos</span> actual a{' '}
            <span className="text-[#00d4ff]">operaciones fluidas</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal Line Container */}
          <div className="relative h-auto lg:h-48 pb-20 lg:pb-0">
            {/* Base Line */}
            <div className={`absolute top-8 lg:top-1/2 left-0 right-0 h-px transition-colors ${
              isDark ? 'bg-white/10' : 'bg-zinc-200'
            }`} />
            
            {/* Animated Progress Line - Laser effect */}
            <motion.div
              className="absolute top-8 lg:top-1/2 left-0 h-px bg-gradient-to-r from-[#00d4ff] to-[#00d4ff]"
              style={{
                width: lineProgress.get() + '%',
                boxShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)',
              }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00d4ff]"
                style={{
                  boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
                }}
              />
            </motion.div>

            {/* Steps */}
            <div className="relative flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 pt-16 lg:pt-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex-1"
                >
                  {/* Connection Point */}
                  <motion.div
                    className="absolute -top-8 lg:top-1/2 lg:-translate-y-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.3 }}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 border-[#00d4ff] shadow-lg shadow-[#00d4ff]/30 transition-colors ${
                      isDark ? 'bg-[#050505]' : 'bg-white'
                    }`}>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#00d4ff]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.2, duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="lg:pt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                  >
                    <div className={`p-6 sm:p-8 rounded-2xl border shadow-sm transition-colors ${
                      isDark 
                        ? 'bg-[#0a0a0a] border-white/10' 
                        : 'bg-white border-zinc-100'
                    }`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-[#00d4ff]" />
                        </div>
                        <span className={`text-5xl font-bold transition-colors ${
                          isDark ? 'text-zinc-800' : 'text-zinc-100'
                        }`}>{step.number}</span>
                      </div>
                      <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        isDark ? 'text-zinc-400' : 'text-zinc-500'
                      }`}
                        dangerouslySetInnerHTML={{ __html: step.description }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;
