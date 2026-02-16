import BlogLayout from '../../components/BlogLayout';
import { useTheme } from '../../context/ThemeContext';

const ArticleROI = () => {
  const { isDark } = useTheme();
  
  const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
  const textSecondary = isDark ? 'text-zinc-300' : 'text-zinc-700';
  const textMuted = isDark ? 'text-zinc-400' : 'text-zinc-600';
  const bgCard = isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-zinc-200';
  const bgHighlight = isDark ? 'bg-[#00F0FF]/5 border-[#00F0FF]/20' : 'bg-[#00F0FF]/10 border-[#00F0FF]/30';
  const bgMoney = isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200';

  return (
    <BlogLayout
      currentSlug="roi-software-gestion-turnos"
      title="ROI del software de gestión de turnos: Calculadora 2026"
      description="Descubre exactamente cuánto dinero estás dejando de ganar con planificación manual y cómo calcular tu retorno de inversión."
      publishDate="25 de Enero, 2026"
      readTime="8 min"
      author="Javier Ruiz"
      category="Estrategia"
      categoryColor="purple"
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
    >
      <p className={`text-xl leading-relaxed mb-8 ${textSecondary}`}>
        Invertir en tecnología no es un gasto, es una inversión con retorno medible. 
        Vamos a calcular exactamente cuánto dinero estás perdiendo cada mes con planificación 
        manual y cuándo recuperarás tu inversión en automatización.
      </p>

      {/* Calculator Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80" 
          alt="Calculadora financiera"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-1" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Los costos ocultos de la planificación manual
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Cuando hablamos de planificación manual, solo vemos el costo del salario del 
        administrativo que lo hace. Pero eso es solo la punta del iceberg.
      </p>

      {/* Cost Breakdown */}
      <div className={`p-8 rounded-2xl border my-10 ${bgCard}`}>
        <h3 className={`font-semibold mb-6 ${textPrimary}`}>Desglose de costos mensuales (equipo de 50 personas)</h3>
        <div className="space-y-4">
          {[
            { item: 'Horas dedicadas a planificación', cost: '2,400€', desc: '15h semanales × 4 semanas × 40€/h' },
            { item: 'Errores de nómina', cost: '1,200€', desc: 'Horas extras mal calculadas, festivos no pagados' },
            { item: 'Tiempo de corrección de conflictos', cost: '800€', desc: 'Reuniones, emails, llamadas' },
            { item: 'Sanciones por incumplimiento', cost: '500€', desc: 'Promedio mensual de multas' },
            { item: 'Ausentismo por estrés', cost: '1,500€', desc: 'Cobertura de bajas improvisadas' },
          ].map((row, i) => (
            <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b ${isDark ? 'border-white/5' : 'border-zinc-100'} last:border-0`}>
              <div>
                <p className={`font-medium ${textPrimary}`}>{row.item}</p>
                <p className={`text-sm ${textMuted}`}>{row.desc}</p>
              </div>
              <p className="text-red-500 font-semibold">{row.cost}</p>
            </div>
          ))}
          <div className={`flex justify-between pt-4 border-t-2 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
            <p className={`font-bold ${textPrimary}`}>Costo total mensual</p>
            <p className="text-2xl font-bold text-red-500">6,400€</p>
          </div>
        </div>
      </div>

      <h2 id="section-2" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Inversión vs. Ahorro anual
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-10">
        <div className={`p-8 rounded-2xl border ${bgMoney}`}>
          <p className="text-green-500 font-semibold mb-4">💰 AHORRO ANUAL</p>
          <p className={`text-5xl font-bold mb-2 ${textPrimary}`}>76,800€</p>
          <p className={`text-sm ${textMuted}`}>6,400€ × 12 meses</p>
        </div>
        <div className={`p-8 rounded-2xl border ${bgCard}`}>
          <p className="text-[#00F0FF] font-semibold mb-4">💳 INVERSIÓN SOFTWARE</p>
          <p className={`text-5xl font-bold mb-2 ${textPrimary}`}>15,000€</p>
          <p className={`text-sm ${textMuted}`}>Implementación + 12 meses de servicio</p>
        </div>
      </div>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgHighlight}`}>
        <p className={`text-lg mb-2 ${textSecondary}`}>Retorno de inversión (ROI)</p>
        <p className="text-6xl font-bold text-[#00F0FF] mb-2">412%</p>
        <p className={textMuted}>Payback: 2.3 meses</p>
      </div>

      <h2 id="section-3" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Calculadora personalizada
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Usa estos multiplicadores según el tamaño de tu equipo:
      </p>

      <div className="overflow-x-auto my-8">
        <table className={`w-full rounded-2xl border ${bgCard}`}>
          <thead>
            <tr className={`border-b ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
              <th className={`p-4 text-left ${textPrimary}`}>Tamaño equipo</th>
              <th className={`p-4 text-left ${textPrimary}`}>Ahorro mensual</th>
              <th className={`p-4 text-left ${textPrimary}`}>ROI anual</th>
              <th className={`p-4 text-left ${textPrimary}`}>Payback</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: '20-30 personas', saving: '3,200€', roi: '380%', payback: '2.8 meses' },
              { size: '50-80 personas', saving: '6,400€', roi: '412%', payback: '2.3 meses' },
              { size: '100-150 personas', saving: '12,800€', roi: '520%', payback: '1.8 meses' },
              { size: '200+ personas', saving: '24,000€', roi: '650%', payback: '1.4 meses' },
            ].map((row, i) => (
              <tr key={i} className={`border-b ${isDark ? 'border-white/5' : 'border-zinc-100'} last:border-0`}>
                <td className={`p-4 ${textSecondary}`}>{row.size}</td>
                <td className="p-4 text-green-500 font-semibold">{row.saving}</td>
                <td className="p-4 text-[#00F0FF] font-semibold">{row.roi}</td>
                <td className={`p-4 ${textMuted}`}>{row.payback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Image */}
      <div className="my-10">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
          alt="Gráfico de crecimiento"
          className="w-full rounded-2xl shadow-2xl"
        />
      </div>

      <h2 id="section-4" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Beneficios no cuantificables (pero valiosos)
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        {[
          { title: 'Satisfacción del equipo', desc: 'Menos conflictos, más transparencia. Rotación reducida.' },
          { title: 'Cumplimiento legal', desc: 'Descansos respetados, convenio cumplido al 100%.' },
          { title: 'Escalabilidad', desc: 'Crece sin preocuparte de la complejidad administrativa.' },
          { title: 'Datos para decisiones', desc: 'Reportes que revelan patrones y oportunidades de mejora.' },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${bgCard}`}>
            <h3 className={`font-semibold mb-2 ${textPrimary}`}>{item.title}</h3>
            <p className={`text-sm ${textMuted}`}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className={`p-8 rounded-2xl border text-center my-10 ${bgCard}`}>
        <p className={`text-xl mb-2 ${textSecondary}`}>
          ¿Quieres tu cálculo personalizado?
        </p>
        <p className={`mb-6 ${textMuted}`}>
          Te preparamos un informe con tu ROI específico sin compromiso.
        </p>
        <a 
          href="/contacto" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#00F0FF] text-black font-semibold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all"
        >
          Calcular mi ROI →
        </a>
      </div>

      <h2 id="section-5" className={`text-2xl font-bold mt-12 mb-6 ${textPrimary}`}>
        Conclusión
      </h2>

      <p className={`leading-relaxed mb-6 ${textMuted}`}>
        Los números no mienten: la planificación manual tiene un costo real que supera 
        ampliamente la inversión en automatización. Y no solo hablamos de dinero: hablamos 
        de tranquilidad, de tiempo para dedicar a lo estratégico, de un equipo más satisfecho.
      </p>

      <p className={`leading-relaxed ${textMuted}`}>
        En menos de 3 meses habrás recuperado tu inversión. Todo lo demás es ganancia neta 
        que puedes reinvertir en tu negocio o simplemente disfrutar.
      </p>
    </BlogLayout>
  );
};

export default ArticleROI;
