import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface TransitionLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * TransitionLink Component
 * 
 * Un link simple que navega a otra página sin transiciones.
 * Navegación instantánea y rápida.
 * 
 * Uso:
 * <TransitionLink to="/servicios" className="...">
 *   Servicios
 * </TransitionLink>
 */
const TransitionLink = ({ to, children, className = '', onClick }: TransitionLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={className}
    >
      {children}
    </Link>
  );
};

export default TransitionLink;
