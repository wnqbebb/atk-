import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
        isDark 
          ? 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-[#00F0FF]/50' 
          : 'bg-white border-zinc-200 text-zinc-600 hover:border-[#25D366]/50 shadow-sm'
      }`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ 
            scale: isDark ? 0 : 1, 
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            scale: isDark ? 1 : 0, 
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5" />
        </motion.div>
      </div>
      <span className="text-sm font-medium">
        {isDark ? 'Oscuro' : 'Claro'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
