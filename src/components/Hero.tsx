
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslations();

  return (
    <section id="hero" className="px-8 py-24 pt-32">
      <div className="flex justify-between items-start">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t('name')}
            </span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            {t('title')}
          </p>
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            {t('description')}
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110">
              <Github className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-8 h-8 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]" />
            </a>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
              <div className="text-white text-4xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                MK
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
