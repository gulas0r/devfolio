
import { useTranslations } from '@/hooks/useTranslations';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const { t } = useTranslations();

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Go", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Web3 & Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "MetaMask"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS", "Vercel", "GitHub Actions"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android"]
    }
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">{t('skills')}</h2>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  variant="outline" 
                  className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
