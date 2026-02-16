import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Hace scroll al inicio de la página cuando cambia la ruta.
 * Se usa dentro del Router.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // 'auto' para que sea instantáneo durante las transiciones
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
