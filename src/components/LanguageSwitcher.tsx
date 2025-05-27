
import { useTranslations, Language } from '@/hooks/useTranslations';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslations();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ku', label: 'کوردی', flag: '☀️' },
    { code: 'en', label: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label, flag }) => (
        <Button
          key={code}
          variant={language === code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(code)}
          className="text-xs"
        >
          <span className="mr-1">{flag}</span>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
