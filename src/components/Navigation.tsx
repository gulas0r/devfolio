
import { useTranslations } from '@/hooks/useTranslations';
import { Menu, Home, FolderOpen, Award, Trophy, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { getNavItems } = useTranslations();
  const navItems = getNavItems();
  
  const navSections = ['hero', 'projects', 'skills', 'achievements', 'contact'];
  const navIcons = [Home, FolderOpen, Award, Trophy, Mail];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="flex space-x-8">
          {navItems.map((item, index) => {
            const IconComponent = navIcons[index];
            return (
              <button
                key={index}
                onClick={() => scrollToSection(navSections[index])}
                className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <IconComponent className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </span>
              </button>
            );
          })}
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navigation;
