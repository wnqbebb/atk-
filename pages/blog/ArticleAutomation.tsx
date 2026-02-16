import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleAutomation = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgTech = isDark ? 'bg-blue-500/5 border-blue-500/20' : 'bg-blue-50 border-blue-200';

  return (
    <BlogLayout
      currentSlug="sistemas-24-7-vs-humanos"
      title="Sistemas 24/7 vs. Personal Humano: La comparativa definitiva"
      description="¿Realmente necesitas contratar más personal para cubrir turnos nocturnos y festivos? Descubre cómo la automatización complementa al equipo humano."
      publishDate="5 de Febrero, 2026"
      readTime="7 min"
      author="Carlos Martínez"
      category="Tecnología"
      categoryColor="blue"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    >
      <p className={`text-xl leading-relaxed mb-8 ${textSecondary}`}>
        La automatización no viene a reemplazar a las personas, sino a liberarlas de tareas 
        repetitivas para que puedan enfocarse en lo que realmente aporta valor. 
        Veamos los números de esta ecuación.
      </p>

      {/* Hero Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" 
          alt="Robot y humano trabajando juntos"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        El mito del "robot que quita trabajos"
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        En AioTek no creemos en reemplazar humanos con máquinas. Creemos en el 
        <strong className={textPrimary}> potenciamiento humano</strong>: usar la tecnología 
        para eliminar lo tedioso y liberar tiempo para lo estratégico.
      </p>

      {/* Comparison Table */}
      <div className={`rounded-2xl border overflow-hidden my-10 ${bgCard}`}>
        <div className={`p-4 border-b ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
          <h3 className={`font-semibold ${textPrimary}`}>Humanos vs. Sistemas: Dónde brilla cada uno</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-white/5' : 'border-zinc-100'}`}>
                <th className={`p-4 text-left text-sm ${textMuted}`}>Tarea</th>
                <th className={`p-4 text-center text-sm ${textMuted}`}>Humano</th>
                <th className={`p-4 text-center text-sm ${textMuted}`}>Sistema</th>
              </tr>
            </thead>
            <tbody>
              {[
                { task: 'Cálculo de turnos complejos', human: '❌ Lento, propenso a errores', system: '✓ Instantáneo, perfecto' },
                { task: 'Validación de normativas', human: '❌ Puede omitir detalles', system: '✓ 100% de cumplimiento' },
                { task: 'Gestión de emociones del equipo', human: '✓ Empatía natural', system: '❌ No aplica' },
                { task: 'Disponibilidad 24/7', human: '❌ Imposible', system: '✓ Siempre activo' },
                { task: 'Resolución de conflictos', human: '✓ Negociación humana', system: '⚠️ Soporte parcial' },
                { task: 'Reportes y análisis', human: '❌ Horas de trabajo', system: '✓ Automático en segundos' },
              ].map((row, i) => (
                <tr key={i} className={`border-b ${isDark ? 'border-white/5' : 'border-zinc-100'} last:border-0`}>
                  <td className={`p-4 ${textSecondary}`}>{row.task}</td>
                  <td className={`p-4 text-center text-sm ${row.human.includes('✓') ? 'text-green-500' : 'text-red-500'}`}>
                    {row.human}
                  </td>
                  <td className={`p-4 text-center text-sm ${row.system.includes('✓') ? 'text-green-500' : row.system.includes('⚠️') ? 'text-yellow-500' : 'text-red-500'}`}>
                    {row.system}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Costos comparados: La realidad económica
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-10">
        <div className={`p-8 rounded-2xl border ${bgCard}`}>
          <p className="text-red-500 font-semibold mb-4">💰 Contratar más personal</p>
          <ul className={`space-y-3 text-sm ${textMuted}`}>
            <li>• Salario bruto anual: 28,000€</li>
            <li>• Seguridad Social (30%): 8,400€</li>
            <li>• Formación inicial: 1,500€</li>
            <li>• Equipo y materiales: 2,000€</li>
            <li className="pt-3 border-t border-white/10">
              <strong className={textPrimary}>Total primer año: 39,900€</strong>
            </li>
            <li className="text-xs italic">Y solo cubre un turno...</li>
          </ul>
        </div>
        <div className={`p-8 rounded-2xl border ${bgHighlight}`}>
          <p className="text-[#00F0FF] font-semibold mb-4">🤖 Sistema automatizado</p>
          <ul className={`space-y-3 text-sm ${textMuted}`}>
            <li>• Implementación (única): 5,000€</li>
            <li>• Licencia anual: 3,600€</li>
            <li>• Mantenimiento: Incluido</li>
            <li>• Actualizaciones: Automáticas</li>
            <li className="pt-3 border-t border-white/10">
              <strong className={textPrimary}>Total primer año: 8,600€</strong>
            </li>
            <li className="text-xs text-[#00F0FF]">Disponible 24/7/365</li>
          </ul>
        </div>
      </div>

      <div className={`p-6 rounded-2xl border text-center my-10 ${bgTech}`}>
        <p className={`text-3xl font-bold mb-2 ${textPrimary}`}>78% de ahorro</p>
        <p className={textMuted}>El sistema cuesta 5 veces menos que contratar una persona</p>
      </div>

      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Cuándo necesitas automatización real
      </h2>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        {[
          {
            signal: 'Tu equipo > 30 personas',
            desc: 'La complejidad crece exponencialmente',
          },
          {
            signal: 'Cobertura 24/7 necesaria',
            desc: 'Turnos nocturnos, festivos, fines de semana',
          },
          {
            signal: '> 5 cambios semanales',
            desc: 'La planificación cambia constantemente',
          },
          {
            signal: 'Múltiples ubicaciones',
            desc: 'Coordinar personal entre sedes',
          },
          {
            signal: 'Convenios complejos',
            desc: 'Reglas específicas por sector',
          },
          {
            signal: 'Rotación alta',
            desc: 'Personal temporal o eventos',
          },
        ].map((item, i) => (
          <div key={i} className={`p-5 rounded-xl border ${bgCard}`}>
            <p className={`font-semibold mb-1 ${textPrimary}`}>{item.signal}</p>
            <p className={`text-sm ${textMuted}`}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Case Study */}
      <div className={`border-l-4 border-blue-500 p-6 rounded-r-2xl my-10 ${bgTech}`}>
        <p className="text-blue-500 font-semibold mb-2">🚀 Caso: Centro Logístico Valencia</p>
        <p className={textMuted}>
          Tenían 4 coordinadores dedicados full-time a la planificación de 180 operarios 
          en turnos rotativos. Tras implementar automatización, <strong className={textPrimary}>redujeron a 1 coordinador 
          estratégico</strong> y los otros 3 se reconvirtieron a roles de mejora de procesos. 
          Ahorro: 120,000€ anuales + procesos optimizados.
        </p>
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80" 
          alt="Dashboard de automatización"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        El futuro: Colaboración hombre-máquina
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        El modelo que funciona no es "humanos VS máquinas", sino "humanos CON máquinas". 
        Los sistemas manejan la complejidad matemática, los humanos manejan las relaciones 
        y la estrategia.
      </p>

      <div className={`p-8 rounded-2xl border my-8 ${bgHighlight}`}>
        <h3 className={`font-semibold mb-4 ${textPrimary}`}>
          Modelo híbrido recomendado:
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[#00F0FF] font-semibold mb-2">🤖 Sistema maneja:</p>
            <ul className={`space-y-1 text-sm ${textMuted}`}>
              <li>• Cálculo de turnos óptimos</li>
              <li>• Validación de normativas</li>
              <li>• Alertas de conflictos</li>
              <li>• Reportes automáticos</li>
              <li>• Respuestas 24/7 básicas</li>
            </ul>
          </div>
          <div>
            <p className="text-green-500 font-semibold mb-2">👤 Humanos manejan:</p>
            <ul className={`space-y-1 text-sm ${textMuted}`}>
              <li>• Decisiones estratégicas</li>
              <li>• Resolución de conflictos</li>
              <li>• Escuchar al equipo</li>
              <li>• Mejora de procesos</li>
              <li>• Casos excepcionales</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-xl mb-2 ${textSecondary}`}>
          ¿Estás listo para el siguiente nivel?
        </p>
        <p className={`mb-6 ${textMuted}`}>
          Descubre cómo la automatización puede transformar tu operativa.
        </p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
        >
          Ver demo de automatización →
        </a>
      </div>

      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusión
      </h2>

      <p className={`leading-relaxed ${textMuted}`}>
        La automatización no es magia, es matemática. Es la forma inteligente de escalar 
        tu operación sin escalar tus costos. El equipo humano sigue siendo el alma de tu 
        empresa; la tecnología solo elimina lo que les quita tiempo para que puedan 
        brillar donde realmente importa.
      </p>
    </BlogLayout>
  );
};

export default ArticleAutomation;
