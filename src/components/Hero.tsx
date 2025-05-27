
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin, ExternalLink, User, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslations();

  return (
    <section id="hero" className="px-4 sm:px-8 py-16 sm:py-24 pt-24 sm:pt-32 min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 font-medium">Hoş geldiniz</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                {t('name')}
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-6 leading-relaxed">
              {t('title')}
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-base sm:text-lg max-w-2xl">
              {t('description')}
            </p>
            
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://twitter.com/mehmetkurdi" 
                className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-7 h-7 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              </a>
              <a 
                href="https://github.com/mehmetkurdi" 
                className="group text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-7 h-7 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              </a>
              <a 
                href="https://linkedin.com/in/mehmetkurdi" 
                className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-7 h-7 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              </a>
            </div>
          </div>
          
          <div className="relative flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              {/* 3D Background Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-tr from-purple-500/10 to-blue-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 p-1 transform hover:scale-105 transition-all duration-300 hover:rotate-3">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
                  
                  {/* Avatar Content */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                      <User className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />
                      <Code2 className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-purple-400" />
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-1/2 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-blue-400/30 rounded-full blur-sm"></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-purple-400/30 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
