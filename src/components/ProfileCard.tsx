
import { useTranslations } from '@/hooks/useTranslations';
import { Mail, Phone, MapPin, Calendar, Github, Twitter, Linkedin } from 'lucide-react';

const ProfileCard = () => {
  const { config } = useTranslations();

  return (
    <div className="bg-[#1e1e28] rounded-xl p-8">
      {/* Profil Fotoğrafı */}
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
          <span className="text-4xl">👨‍💻</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">{config.name}</h1>
        <p className="text-gray-400 text-sm">Web Developer</p>
      </div>

      {/* İletişim Bilgileri */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-3 p-3 bg-[#2a2a3a] rounded-lg">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide">EMAIL</p>
            <p className="text-sm text-white truncate">{config.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-[#2a2a3a] rounded-lg">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide">PHONE</p>
            <p className="text-sm text-white">+1 (213) 352-7795</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-[#2a2a3a] rounded-lg">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide">BIRTHDAY</p>
            <p className="text-sm text-white">June 23, 1982</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 p-3 bg-[#2a2a3a] rounded-lg">
          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 uppercase tracking-wide">LOCATION</p>
            <p className="text-sm text-white">Sacramento, California, USA</p>
          </div>
        </div>
      </div>

      {/* Sosyal Medya */}
      <div className="flex justify-center space-x-4">
        <a 
          href={`https://github.com/${config.social.github}`}
          className="w-10 h-10 bg-[#2a2a3a] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>
        <a 
          href={`https://twitter.com/${config.social.twitter}`}
          className="w-10 h-10 bg-[#2a2a3a] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>
        <a 
          href={`https://linkedin.com/in/${config.social.linkedin}`}
          className="w-10 h-10 bg-[#2a2a3a] hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
