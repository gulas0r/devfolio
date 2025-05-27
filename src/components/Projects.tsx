
import { useTranslations } from '@/hooks/useTranslations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Star, GitFork, Code, Globe, Zap, Rocket } from 'lucide-react';

const Projects = () => {
  const { t, config } = useTranslations();

  const iconMap = {
    Code,
    Globe,
    Zap,
    Rocket
  };

  // In a real implementation, you would fetch from GitHub API
  // For now, we'll use the featured projects from config
  const projects = config.featuredProjects.map((project, index) => ({
    ...project,
    icon: Object.values(iconMap)[index % Object.values(iconMap).length],
    color: [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500", 
      "from-green-500 to-emerald-500"
    ][index % 3],
    github: `${config.social.github}/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    stars: Math.floor(Math.random() * 200) + 10,
    forks: Math.floor(Math.random() * 50) + 5
  }));

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
                className="bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105 backdrop-blur-sm group cursor-pointer"
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
                        href={project.demoUrl}
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
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-gray-800/80 text-gray-300 hover:bg-gray-700 transition-colors"
                      >
                        {tech}
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
            href={`https://github.com/${config.social.github}`}
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
