
import { useTranslations } from '@/hooks/useTranslations';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslations();

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
      icon: Code,
      color: "from-cyan-400 to-blue-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Go", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
      icon: Database,
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Web3 & Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "MetaMask"],
      icon: Wrench,
      color: "from-purple-400 to-pink-500"
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS", "Vercel", "GitHub Actions"],
      icon: Cloud,
      color: "from-yellow-400 to-orange-500"
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: Smartphone,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('skills')}
        </span>
      </h2>
      
      <div className="space-y-12">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="group">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-2xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className="bg-gray-900/50 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 px-4 py-2 text-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
