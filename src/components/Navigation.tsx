
import { useTranslations } from '@/hooks/useTranslations';
import { Menu, X, Music, Github } from 'lucide-react';
import { useState } from 'react';
import SpotifyStatus from './SpotifyStatus';
import GitHubStatus from './GitHubStatus';

const Navigation = () => {
  const { getNavItems } = useTranslations();
  const navItems = ['About', 'Skills', 'Projects', 'Contact'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navSections = ['about', 'skills', 'projects', 'contact'];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    if (sectionId === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e28]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="text-xl font-bold text-white">
            Gula<span className="text-orange-400">Sor</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(navSections[index])}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Status Indicators & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Status Indicators */}
            <div className="hidden lg:flex items-center space-x-4">
              <SpotifyStatus />
              <GitHubStatus />
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
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1e1e28] border-t border-gray-700">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(navSections[index])}
                  className="block w-full text-left text-gray-300 hover:text-orange-400 transition-colors duration-300 py-2"
                >
                  {item}
                </button>
              ))}
              
              {/* Mobile Status Indicators */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <SpotifyStatus />
                <GitHubStatus />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
