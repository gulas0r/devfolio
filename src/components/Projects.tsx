
import { useTranslations } from '@/hooks/useTranslations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork, Code, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const { t, language } = useTranslations();

  const projects = [
    {
      title: "Portfolio Website",
      description: {
        tr: "Modern ve responsive kişisel portfolio sitesi",
        ku: "Malpera portfolyoya kesane ya modern û responsive",
        en: "Modern and responsive personal portfolio website"
      },
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      tags: ["React", "TypeScript", "Tailwind"],
      github: "mehmetkurdi/portfolio",
      demo: "#",
      stars: 42,
      forks: 12
    },
    {
      title: "CLI Tools Collection",
      description: {
        tr: "Geliştirici verimliliğini artıran CLI araçları koleksiyonu",
        ku: "Komeka amûrên CLI ku berhemdariya pêşdebiran zêde dike",
        en: "A collection of CLI tools that boost developer productivity"
      },
      icon: Code,
      color: "from-purple-500 to-pink-500",
      tags: ["Go", "CLI", "DevTools"],
      github: "mehmetkurdi/dev-tools",
      demo: "#",
      stars: 128,
      forks: 23
    },
    {
      title: "Web3 Payment Gateway",
      description: {
        tr: "Blockchain tabanlı ödeme sistemi",
        ku: "Pergala dravdanê ya bingehê blockchain",
        en: "Blockchain-based payment system"
      },
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      tags: ["Web3", "Solidity", "React"],
      github: "mehmetkurdi/web3-payments",
      demo: "#",
      stars: 89,
      forks: 34
    }
  ];

  return (
    <section id="projects" className="px-4 sm:px-8 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {t('projects')}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105 backdrop-blur-sm group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      <a 
                        href={`https://github.com/${project.github}`}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800 rounded-lg transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.demo}
                        className="p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-800 rounded-lg transform hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <CardTitle className={`text-xl bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-gray-800/80 text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <a 
            href="https://github.com/mehmetkurdi" 
            className="inline-flex items-center space-x-2 text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-blue-400 group-hover:text-purple-500 transition-colors duration-300" />
            <span>{t('viewAllProjects')} →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
