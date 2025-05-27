
import { useTranslations } from '@/hooks/useTranslations';
import { Github } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslations();

  return (
    <footer className="px-8 py-16 border-t border-gray-800">
      <div className="text-center space-y-4">
        <p className="text-gray-400">
          {t('madeBy')} <span className="text-blue-400">Mehmet Kurdi</span>
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span>{t('footer')}</span>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center space-x-1">
            <Github size={16} />
            <span>GitHub →</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
