
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslations();

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/mehmetkurdi",
      color: "hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mehmetkurdi",
      color: "hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mehmetkurdi",
      color: "hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]"
    }
  ];

  return (
    <section id="contact" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('contact')}
        </span>
      </h2>
      
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-400 mb-6 text-lg">
            {t('contactDescription')}
          </p>
          <a 
            href="mailto:contact@mehmetkurdi.dev" 
            className="inline-flex items-center space-x-2 text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500 transition-all duration-300 group"
          >
            <span>contact@mehmetkurdi.dev</span>
            <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-purple-500 transition-colors duration-300" />
          </a>
        </div>
        
        <div className="flex justify-center space-x-8 pt-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a 
                key={index}
                href={social.url} 
                className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="w-10 h-10" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
