
import { useTranslations } from '@/hooks/useTranslations';
import { Menu, Home, FolderOpen, Award, Trophy, Mail, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { getNavItems } = useTranslations();
  const navItems = getNavItems();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navSections = ['hero', 'projects', 'skills', 'achievements', 'contact'];
  const navIcons = [Home, FolderOpen, Award, Trophy, Mail];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Navigation height offset
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const IconComponent = navIcons[index];
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(navSections[index])}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-blue-400 transition-colors duration-300" />
                  <span className="relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => {
                const IconComponent = navIcons[index];
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(navSections[index])}
                    className="w-full flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-2"
                  >
                    <IconComponent className="w-5 h-5 text-blue-400" />
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
