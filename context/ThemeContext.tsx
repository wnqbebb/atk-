import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Por defecto: MODO CLARO (false)
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verificar preferencia guardada
    const saved = localStorage.getItem('aiotek-theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      // Por defecto CLARO, no usa preferencia del sistema
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Guardar preferencia
    localStorage.setItem('aiotek-theme', isDark ? 'dark' : 'light');
    
    // Aplicar clase al HTML
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const setDark = (value: boolean) => setIsDark(value);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
