
import { useTranslations } from '@/hooks/useTranslations';
import { Github, Twitter, Linkedin, Mail, ExternalLink, MessageCircle, Send, Heart } from 'lucide-react';

const Contact = () => {
  const { t, config } = useTranslations();

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/${config.social.twitter}`,
      color: "hover:text-blue-400 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      bgColor: "hover:bg-blue-500/10"
    },
    {
      name: "GitHub",
      icon: Github,
      url: `https://github.com/${config.social.github}`,
      color: "hover:text-purple-400 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      bgColor: "hover:bg-purple-500/10"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://linkedin.com/in/${config.social.linkedin}`,
      color: "hover:text-cyan-400 hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      bgColor: "hover:bg-cyan-500/10"
    }
  ];

  return (
    <section id="contact" className="px-4 sm:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {t('contact')}
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Email Contact */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-6 text-center">
                {t('contactDescription')}
              </p>
              <a 
                href={`mailto:${config.email}`}
                className="flex items-center justify-center space-x-2 text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 group/email"
              >
                <span>{config.email}</span>
                <Send className="w-5 h-5 text-blue-400 group-hover/email:text-purple-500 transition-colors duration-300 transform group-hover/email:translate-x-1" />
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-purple-400" />
                Follow My Journey
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url} 
                      className={`flex items-center space-x-4 p-4 rounded-lg border border-gray-700 ${social.bgColor} transition-all duration-300 transform hover:scale-105 hover:border-gray-600 group/social`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className={`w-6 h-6 text-gray-400 transition-all duration-300 ${social.color}`} />
                      <span className="text-gray-300 group-hover/social:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover/social:text-gray-300 transition-colors duration-300 ml-auto" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
