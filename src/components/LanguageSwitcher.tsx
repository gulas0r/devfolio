
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette, Sun, Moon, Sparkles, Zap } from 'lucide-react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('cosmic');

  const themes = [
    { 
      name: 'cosmic', 
      label: 'Cosmic', 
      icon: Sparkles, 
      colors: 'from-purple-600 via-blue-600 to-cyan-500',
      emoji: '🌌'
    },
    { 
      name: 'neon', 
      label: 'Neon', 
      icon: Zap, 
      colors: 'from-pink-500 via-purple-500 to-cyan-500',
      emoji: '⚡'
    },
    { 
      name: 'aurora', 
      label: 'Aurora', 
      icon: Sun, 
      colors: 'from-green-400 via-blue-500 to-purple-600',
      emoji: '🌈'
    },
    { 
      name: 'midnight', 
      label: 'Midnight', 
      icon: Moon, 
      colors: 'from-gray-600 via-blue-700 to-purple-800',
      emoji: '🌙'
    }
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.setProperty('--theme-gradient', 
      themes.find(t => t.name === theme)?.colors || themes[0].colors
    );
  }, [theme]);

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <div className="flex items-center gap-2">
      <Palette className="w-4 h-4 text-gray-400" />
      <div className="flex gap-1">
        {themes.map(({ name, label, emoji }) => (
          <Button
            key={name}
            variant={theme === name ? "default" : "ghost"}
            size="sm"
            onClick={() => handleThemeChange(name)}
            className={`text-xs h-8 px-3 transition-all duration-300 ${
              theme === name 
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <span className="mr-1">{emoji}</span>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
