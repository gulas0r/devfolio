
import { useTranslations } from '@/hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faDatabase, 
  faMobile, 
  faCloud, 
  faTerminal, 
  faGlobe,
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
  faAws,
  faAndroid,
  faApple
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact as faBrandsReact,
  faNodeJs as faBrandsNodeJs,
  faDocker as faBrandsDocker,
  faGitAlt as faBrandsGitAlt,
  faAws as faBrandsAws,
  faAndroid as faBrandsAndroid,
  faApple as faBrandsApple,
  faPython,
  faJs,
  faHtml5,
  faCss3Alt,
  faVuejs,
  faFigma
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const { t, config } = useTranslations();

  const iconMap = {
    Code: faCode,
    Database: faDatabase,
    Smartphone: faMobile,
    Cloud: faCloud,
    Terminal: faTerminal,
    Globe: faGlobe
  };

  // Technology-specific Font Awesome icons mapping
  const techIconsFA: { [key: string]: any } = {
    // Frontend
    'React': faBrandsReact,
    'TypeScript': faJs,
    'Next.js': faBrandsReact,
    'Tailwind CSS': faCss3Alt,
    'Vue.js': faVuejs,
    'HTML5': faHtml5,
    'CSS3': faCss3Alt,
    'JavaScript': faJs,
    
    // Backend
    'Node.js': faBrandsNodeJs,
    'Go': faCode,
    'Python': faPython,
    'Express.js': faBrandsNodeJs,
    'PostgreSQL': faDatabase,
    'MongoDB': faDatabase,
    'Redis': faDatabase,
    'MySQL': faDatabase,
    
    // Web3 & Blockchain
    'Solidity': faCode,
    'Ethereum': faCode,
    'Web3.js': faCode,
    'Hardhat': faTerminal,
    'IPFS': faCloud,
    'MetaMask': faCode,
    
    // DevOps & Cloud
    'Docker': faBrandsDocker,
    'Git': faBrandsGitAlt,
    'Linux': faTerminal,
    'AWS': faBrandsAws,
    'Vercel': faCloud,
    'GitHub Actions': faBrandsGitAlt,
    'Kubernetes': faCloud,
    
    // Mobile
    'React Native': faBrandsReact,
    'Flutter': faMobile,
    'iOS': faBrandsApple,
    'Android': faBrandsAndroid,
    
    // Tools
    'VS Code': faCode,
    'Terminal': faTerminal,
    'Postman': faCode,
    'Figma': faFigma,
    'Webpack': faCode,
    'Vite': faCode
  };

  return (
    <section id="skills" className="px-4 sm:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              What I'm Doing
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {config.skills.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || faCode;
            return (
              <div key={index} className="group">
                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg transform group-hover:scale-110 transition-all duration-300 flex-shrink-0`}>
                      <FontAwesomeIcon icon={IconComponent} className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-3`}>
                        {category.category}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {category.category === "Frontend Development" && "The most modern and high-quality frontend development at a professional level."}
                        {category.category === "Backend Development" && "High-quality server-side development with modern technologies and databases."}
                        {category.category === "Web3 & Blockchain" && "Professional development of decentralized applications and smart contracts."}
                        {category.category === "DevOps & Cloud" && "Scalable cloud infrastructure and automated deployment solutions."}
                        {category.category === "Mobile Development" && "Professional development of applications for iOS and Android platforms."}
                        {category.category === "Development Tools" && "Essential tools and environments for modern software development."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-2 bg-gray-800/50 border border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-700/50 hover:border-gray-500 transition-all duration-300 group cursor-pointer"
                      >
                        <FontAwesomeIcon 
                          icon={techIconsFA[skill] || faCode} 
                          className="w-4 h-4 text-blue-400 group-hover:text-purple-400 transition-colors duration-200" 
                        />
                        <span className="text-gray-300 text-xs font-medium group-hover:text-white transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
