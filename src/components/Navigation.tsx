
import { useTranslations } from '@/hooks/useTranslations';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const { getNavItems } = useTranslations();
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navSections = ['about', 'resume', 'projects', 'blog', 'contact'];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e28]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 ml-auto">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 ml-auto"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
