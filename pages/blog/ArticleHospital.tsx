import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleHospital = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgMedical = isDark ? 'bg-cyan-500/5 border-cyan-500/20' : 'bg-cyan-50 border-cyan-200';

  return (
    <BlogLayout
      currentSlug="gestion-turnos-hospitalarios"
      title="Gestión de Turnos Hospitalarios: El fin del caos manual en clínicas"
      description="Los hospitales que planifican turnos manualmente pierden hasta 15 horas semanales. Descubre cómo eliminar el caos en guardias médicas."
      publishDate="8 de Febrero, 2026"
      readTime="8 min"
      author="Dra. María López"
      category="Sector Salud"
      categoryColor="cyan"
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
    >
      <p className={`text-xl leading-relaxed mb-8 ${textSecondary}`}>
        Si trabajas en el sector sanitario, sabes que la planificación de turnos médicos 
        es una de las tareas más estresantes. Las guardias, las urgencias, las bajas 
        imprevistas... todo converge en un rompecabezas que parece imposible de resolver.
      </p>

      {/* Hero Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
          alt="Equipo médico en hospital"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        La realidad de la planificación en hospitales
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        En un hospital promedio, una coordinadora de enfermería dedica entre 12 y 15 horas 
        semanales solo a la planificación de turnos. Y aún así, los cambios de última hora, 
        las bajas por enfermedad y las vacaciones imprevistas convierten cada semana en un 
        campo de batalla.
      </p>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {[
          { value: '15h', label: 'Semanales perdidas', color: 'text-red-500' },
          { value: '40%', label: 'Cambios de última hora', color: 'text-[#00F0FF]' },
          { value: '23%', label: 'Conflictos de personal', color: 'text-purple-500' },
          { value: '8x', label: 'Más complejo que otros sectores', color: 'text-cyan-500' },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${bgCard} text-center`}>
            <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
            <p className={`text-xs ${textMuted}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Desafíos específicos del sector salud
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        {[
          {
            icon: '🏥',
            title: 'Cobertura 24/7 obligatoria',
            desc: 'No puedes quedarte sin personal en UCI o urgencias, nunca.',
          },
          {
            icon: '👩‍⚕️',
            title: 'Especialidades múltiples',
            desc: 'Cada servicio tiene reglas diferentes y personal cualificado específico.',
          },
          {
            icon: '⏰',
            title: 'Guardias complejas',
            desc: 'Turnos de 24h, festivos, fin de semana con cálculos especiales.',
          },
          {
            icon: '📋',
            title: 'Convenio sanitario estricto',
            desc: 'Descansos mínimos, máximo de horas, acumulación de guardias.',
          },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${bgCard}`}>
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className={`font-semibold mb-2 ${textPrimary}`}>{item.title}</h3>
            <p className={`text-sm ${textMuted}`}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Case Study */}
      <div className={`border-l-4 border-cyan-500 p-6 rounded-r-2xl my-10 ${bgMedical}`}>
        <p className="text-cyan-500 font-semibold mb-2">🏥 Caso de éxito: Hospital Universitario</p>
        <p className={textMuted}>
          Implementaron automatización en 3 servicios (Urgencias, UCI y Cirugía). 
          Resultado: <strong className={textPrimary}>reducción del 85% en tiempo de planificación</strong>, 
          eliminación de conflictos por descansos y mejora del 30% en satisfacción del personal médico.
        </p>
      </div>

      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Funcionalidades críticas para hospitales
      </h2>

      <div className={`p-8 rounded-2xl border my-8 ${bgHighlight}`}>
        <h3 className={`font-semibold mb-4 ${textPrimary}`}>
          El sistema debe garantizar:
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            'Cobertura mínima por servicio y especialidad',
            'Respeto estricto de descansos entre guardias (mínimo 36h)',
            'Límite de horas mensuales por convenio',
            'Distribución equitativa de guardias festivas',
            'Gestión de bajas con reposición automática',
            'Histórico de vacaciones y permisos acumulados',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#00F0FF] font-bold">✓</span>
              <span className={textSecondary}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80" 
          alt="Personal médico con sistema digital"
          className="w-full rounded-2xl shadow-2xl"
        />
        <p className={`text-sm mt-3 text-center ${textMuted}`}>
          La tecnología permite al personal médico enfocarse en pacientes, no en papeleo
        </p>
      </div>

      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        ROI en el sector sanitario
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        A diferencia de otros sectores, el retorno de inversión en hospitales se mide 
        también en <strong className={textPrimary}>calidad asistencial</strong>. Menos errores de planificación 
        significan menos personal fatigado, menos rotación y mejores resultados para pacientes.
      </p>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-lg mb-6 ${textSecondary}`}>
          ¿Trabajas en un hospital o clínica con más de 50 trabajadores?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contacto" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
          >
            Ver demo para sector salud →
          </a>
        </div>
      </div>

      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusión
      </h2>

      <p className={`leading-relaxed ${textMuted}`}>
        La planificación de turnos en hospitales no debería ser una fuente de estrés 
        para coordinadores ni de conflictos para el personal médico. Con las herramientas 
        adecuadas, puedes garantizar cobertura 24/7, respetar los derechos de tu equipo 
        y liberar horas de trabajo administrativo para destinarlas a lo que realmente importa: 
        la atención a los pacientes.
      </p>
    </BlogLayout>
  );
};

export default ArticleHospital;
