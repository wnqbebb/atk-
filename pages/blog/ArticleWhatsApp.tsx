import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleWhatsApp = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgWhatsApp = isDark ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200';

  return (
    <BlogLayout
      currentSlug="automatizacion-whatsapp-rrhh"
      title="WhatsApp para RRHH: Reduce consultas repetitivas un 70%"
      description="Tu equipo pierde horas respondiendo las mismas preguntas. Descubre como un agente virtual en WhatsApp puede liberar a tu departamento de RRHH."
      publishDate="28 de Enero, 2026"
      readTime="6 min"
      author="Equipo AioTek"
      category="Automatizacion"
      categoryColor="emerald"
      heroImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
    >
      <p className={`text-xl leading-relaxed mb-8 ${textSecondary}`}>
        "Cuando trabajo?", "Puedo cambiar mi turno?", "Cuantas horas llevo este mes?"... 
        Si trabajas en RRHH, probablemente respondes estas mismas preguntas docenas de veces 
        cada semana. Hay una forma mejor.
      </p>

      {/* Hero Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80" 
          alt="Chat de WhatsApp en movil"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        El problema: Consultas que saturan RRHH
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Un departamento de RRHH de tamano medio recibe entre 50 y 100 consultas diarias 
        de empleados. La mayoria son preguntas repetitivas cuya respuesta ya esta en algun 
        sistema, pero los empleados prefieren preguntar directamente.
      </p>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
        {[
          { value: '75', unit: '/dia', label: 'Consultas promedio', color: 'text-red-500' },
          { value: '70%', label: 'Son repetitivas', color: 'text-[#00F0FF]' },
          { value: '4h', label: 'Perdidas diarias', color: 'text-orange-500' },
          { value: '15s', label: 'Respuesta con bot', color: 'text-emerald-500' },
        ].map((stat, i) => (
          <div key={i} className={`p-6 rounded-2xl border text-center ${bgCard}`}>
            <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
              {stat.value}<span className="text-lg">{stat.unit}</span>
            </div>
            <p className={`text-xs ${textMuted}`}>{stat.label}</p>
          </div>
        ))}
      </div>

      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Preguntas que el bot responde instantaneamente
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          'Cuando es mi proximo turno?',
          'Cuantas horas he trabajado este mes?',
          'Tengo vacaciones pendientes?',
          'Quien cubre mi turno si estoy enfermo?',
          'Cual es mi horario de la semana que viene?',
          'He acumulado horas extras?',
          'Puedo cambiar mi turno con Maria?',
          'Es festivo el proximo lunes?',
        ].map((q, i) => (
          <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border ${bgCard}`}>
            <span className="text-emerald-500 text-xl">💬</span>
            <span className={`text-sm ${textSecondary}`}>{q}</span>
          </div>
        ))}
      </div>

      {/* How it Works */}
      <div className={`p-8 rounded-2xl border my-10 ${bgWhatsApp}`}>
        <h3 className={`font-semibold mb-6 ${textPrimary}`}>Como funciona?</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { step: '1', title: 'Empleado escribe', desc: 'Envia pregunta por WhatsApp' },
            { step: '2', title: 'IA interpreta', desc: 'Sistema entiende la consulta' },
            { step: '3', title: 'Busca datos', desc: 'Consulta calendario y registros' },
            { step: '4', title: 'Responde', desc: 'Respuesta instantanea y precisa' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 ${
                isDark ? 'bg-emerald-500/20 text-emerald-500' : 'bg-emerald-100 text-emerald-600'
              }`}>
                {item.step}
              </div>
              <p className={`font-medium text-sm mb-1 ${textPrimary}`}>{item.title}</p>
              <p className={`text-xs ${textMuted}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Caso real: Hotel Costa Brava
      </h2>

      <div className={`border-l-4 border-emerald-500 p-6 rounded-r-2xl my-8 ${bgWhatsApp}`}>
        <p className="text-emerald-500 font-semibold mb-3">Resultados tras 3 meses</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <p className={`text-2xl font-bold ${textPrimary}`}>-68%</p>
            <p className={`text-sm ${textMuted}`}>Consultas a RRHH</p>
          </div>
          <div>
            <p className={`text-2xl font-bold ${textPrimary}`}>12h</p>
            <p className={`text-sm ${textMuted}`}>Liberadas semanales</p>
          </div>
          <div>
            <p className={`text-2xl font-bold ${textPrimary}`}>4.8★</p>
            <p className={`text-sm ${textMuted}`}>Satisfaccion empleados</p>
          </div>
        </div>
      </div>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        El personal de recepcion y limpieza, muchos de ellos sin acceso facil al sistema 
        de intranet, ahora tienen toda la informacion en su bolsillo. La coordinadora de 
        RRHH paso de pasar 3 horas diarias respondiendo WhatsApps a solo 45 minutos 
        revisando casos excepcionales.
      </p>

      {/* Features */}
      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Funcionalidades del agente virtual
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        {[
          {
            icon: '📅',
            title: 'Consulta de turnos',
            desc: 'Horarios actuales y futuros al instante',
          },
          {
            icon: '🔄',
            title: 'Solicitud de cambios',
            desc: 'Intercambios entre companeros con aprobacion',
          },
          {
            icon: '⏱️',
            title: 'Horas trabajadas',
            desc: 'Acumulados del mes y balance',
          },
          {
            icon: '🏖️',
            title: 'Vacaciones',
            desc: 'Dias disponibles y solicitud de dias',
          },
          {
            icon: '💰',
            title: 'Nomina estimada',
            desc: 'Calculo aproximado del proximo pago',
          },
          {
            icon: '🚨',
            title: 'Bajas y ausencias',
            desc: 'Comunicacion inmediata de incidencias',
          },
        ].map((item, i) => (
          <div key={i} className={`flex gap-4 p-5 rounded-xl border ${bgCard}`}>
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className={`font-semibold mb-1 ${textPrimary}`}>{item.title}</h3>
              <p className={`text-sm ${textMuted}`}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" 
          alt="Persona usando WhatsApp"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Implementacion en 48 horas
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        A diferencia de otros sistemas que requieren meses de implementacion, un agente 
        de WhatsApp puede estar operativo en cuestion de dias. Se integra con tu sistema 
        de gestion de turnos existente y empieza a responder desde el primer momento.
      </p>

      <div className={`p-8 rounded-2xl border my-8 ${bgHighlight}`}>
        <h3 className={`font-semibold mb-4 ${textPrimary}`}>Proceso de activacion:</h3>
        <div className="space-y-3">
          {[
            'Dia 1: Conexion con sistema de turnos y configuracion',
            'Dia 2: Entrenamiento del modelo con FAQs de tu empresa',
            'Dia 3: Pruebas internas con grupo piloto (5-10 personas)',
            'Dia 5: Lanzamiento gradual al resto del equipo',
            'Semana 2: Optimizacion basada en preguntas recibidas',
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[#00F0FF] font-bold">→</span>
              <span className={textSecondary}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-xl mb-2 ${textSecondary}`}>
          Tu equipo de RRHH esta saturado de consultas?
        </p>
        <p className={`mb-6 ${textMuted}`}>
          Descubre cuantas horas podrias liberar con un agente virtual.
        </p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
        >
          Calcular mi ahorro →
        </a>
      </div>

      <h2 id="section-6" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusion
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        WhatsApp es donde ya estan tus empleados. En lugar de forzarles a aprender 
        otro sistema o a llamar durante horario de oficina, lleva la informacion 
        a donde ellos ya estan. Es conveniente para ellos, y liberador para tu 
        equipo de RRHH.
      </p>

      <p className={`leading-relaxed ${textMuted}`}>
        El costo mensual es menor que un dia de salario de un coordinador de RRHH, 
        pero el valor en tiempo liberado y satisfaccion del equipo es incalculable.
      </p>
    </BlogLayout>
  );
};

export default ArticleWhatsApp;
