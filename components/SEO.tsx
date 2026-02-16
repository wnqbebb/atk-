import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

/**
 * SEO Component
 * 
 * Componente reutilizable para gestionar meta tags dinámicos en cada página.
 * Inyecta título y descripción en el <head> del documento.
 */
const SEO = ({ title, description }: SEOProps) => {
  const siteTitle = "AioTek - Sistemas de Gestión";
  const defaultDescription = "Software de gestión de turnos inteligente y automatización para empresas.";

  return (
    <Helmet>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${title} | ${siteTitle}`} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
};

export default SEO;
