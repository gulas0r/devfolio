
import { useTranslations } from '@/hooks/useTranslations';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Cloud, Terminal, Globe } from 'lucide-react';

const Skills = () => {
  const { t, config } = useTranslations();

  const iconMap = {
    Code,
    Database,
    Smartphone,
    Cloud,
    Terminal,
    Globe
  };

  // Technology-specific icons mapping
  const techIcons: { [key: string]: string } = {
    // Frontend
    'React': '⚛️',
    'TypeScript': '📘',
    'Next.js': '▲',
    'Tailwind CSS': '🎨',
    'Vue.js': '💚',
    'HTML5': '🌐',
    'CSS3': '🎨',
    'JavaScript': '💛',
    
    // Backend
    'Node.js': '💚',
    'Go': '🐹',
    'Python': '🐍',
    'Express.js': '🚂',
    'PostgreSQL': '🐘',
    'MongoDB': '🍃',
    'Redis': '🔴',
    'MySQL': '🐬',
    
    // Web3 & Blockchain
    'Solidity': '💎',
    'Ethereum': '⟠',
    'Web3.js': '🔗',
    'Hardhat': '⚒️',
    'IPFS': '📦',
    'MetaMask': '🦊',
    
    // DevOps & Cloud
    'Docker': '🐳',
    'Git': '📝',
    'Linux': '🐧',
    'AWS': '☁️',
    'Vercel': '▲',
    'GitHub Actions': '⚡',
    'Kubernetes': '☸️',
    
    // Mobile
    'React Native': '📱',
    'Flutter': '🐦',
    'iOS': '🍎',
    'Android': '🤖',
    
    // Tools
    'VS Code': '💻',
    'Terminal': '⌨️',
    'Postman': '📮',
    'Figma': '🎨',
    'Webpack': '📦',
    'Vite': '⚡'
  };

  return (
    <section id="skills" className="px-4 sm:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {t('skills')}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {config.skills.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Code;
            return (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-2xl`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="bg-gray-900/70 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 px-4 py-3 text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm justify-start group cursor-pointer"
                    >
                      <span className="text-lg mr-2 group-hover:scale-125 transition-transform duration-200">
                        {techIcons[skill] || '🔧'}
                      </span>
                      <span className="font-medium">{skill}</span>
                    </Badge>
                  ))}
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
