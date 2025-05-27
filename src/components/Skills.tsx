
import { useTranslations } from '@/hooks/useTranslations';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Cloud, Wrench, Terminal, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslations();

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Go", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Web3 & Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "MetaMask"],
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS", "Vercel", "GitHub Actions"],
      icon: Cloud,
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "Terminal", "Postman", "Figma", "Webpack", "Vite"],
      icon: Terminal,
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="skills" className="px-4 sm:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {t('skills')}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className="bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 px-3 py-2 text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm justify-center"
                    >
                      {skill}
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
