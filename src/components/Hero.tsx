
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslations();

  return (
    <section className="px-8 py-16">
      <div className="flex justify-between items-start">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('name')}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {t('title')}
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            {t('description')}
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center text-white text-3xl font-bold">
            MK
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
