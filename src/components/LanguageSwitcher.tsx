
import { useTranslations, Language } from '@/hooks/useTranslations';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslations();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'TR', flag: '🇹🇷' },
    { code: 'ku', label: 'KU', flag: '☀️' },
    { code: 'en', label: 'EN', flag: '🇺🇸' }
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex gap-1">
        {languages.map(({ code, label, flag }) => (
          <Button
            key={code}
            variant={language === code ? "default" : "ghost"}
            size="sm"
            onClick={() => handleLanguageChange(code)}
            className={`text-xs h-8 px-3 transition-all duration-300 relative ${
              language === code 
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25" 
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <span className="mr-1">{flag}</span>
            {label}
            {language === code && (
              <Check className="w-3 h-3 ml-1" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
