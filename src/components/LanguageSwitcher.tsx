
import { useTranslations, Language } from '@/hooks/useTranslations';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslations();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'ku', label: 'KU', flag: '☀️' },
    { code: 'en', label: 'EN', flag: '🇺🇸' }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex gap-1">
        {languages.map(({ code, label, flag }) => (
          <Button
            key={code}
            variant={language === code ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage(code)}
            className={`text-xs h-8 px-3 transition-all duration-300 ${
              language === code 
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <span className="mr-1">{flag}</span>
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
