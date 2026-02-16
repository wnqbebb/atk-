/**
 * Plantilla estándar para páginas de industria
 * 
 * Uso:
 * 1. Copiar este archivo y renombrar (ej: Healthcare.tsx)
 * 2. Modificar el objeto 'content' con los datos específicos
 * 3. Actualizar App.tsx con la nueva ruta
 */

import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

interface IndustryContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  features: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
}

interface IndustryPageProps {
  content: IndustryContent;
  seoTitle: string;
  seoDescription: string;
}

export const IndustryTemplate = ({ content, seoTitle, seoDescription }: IndustryPageProps) => {
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      
      <section className="min-h-screen bg-[#050505]">
        {/* Hero */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00F0FF] mb-4 block">
              {content.subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {content.title}
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              {content.description}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              {content.ctaText}
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="py-12 border-y border-zinc-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {content.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#00F0FF] mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Beneficios específicos para tu sector
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#00F0FF]/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para transformar tu gestión?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Solicita una demo personalizada y descubre cómo AioTek puede adaptarse a tus necesidades específicas.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold text-white rounded-full bg-zinc-950 hover:bg-zinc-800 transition-all"
            >
              {content.ctaText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryTemplate;
