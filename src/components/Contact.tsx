
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslations();

  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">{t('contact')}</h2>
      
      <div className="space-y-8">
        <div>
          <p className="text-gray-400 mb-4">
            {t('contactDescription')}
          </p>
          <a 
            href="mailto:contact@mehmetkurdi.dev" 
            className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
          >
            contact@mehmetkurdi.dev →
          </a>
        </div>
        
        <div className="flex space-x-6 pt-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter size={32} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github size={32} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
