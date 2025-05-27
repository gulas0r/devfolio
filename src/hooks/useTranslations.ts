
import { portfolioConfig } from '@/config/portfolio';

export const useTranslations = () => {
  const t = (key: string): string => {
    const translations: { [key: string]: string } = {
      name: portfolioConfig.name,
      title: portfolioConfig.title,
      description: portfolioConfig.description,
      navigation: "Home,Projects,Skills,Achievements,Contact",
      projects: "Projects",
      skills: "Skills",
      achievements: "Achievements",
      contact: "Contact",
      viewAllProjects: "View All Projects on GitHub",
      contactDescription: "Let's build something amazing together! Reach out via email:",
      footer: "This portfolio is open source and available on",
      madeBy: "Made with ❤️ by",
      githubProjects: "My GitHub Projects"
    };
    
    return translations[key] || key;
  };

  const getNavItems = (): string[] => {
    return t('navigation').split(',');
  };

  return {
    t,
    getNavItems,
    config: portfolioConfig
  };
};
