
import { useTranslations } from '@/hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { getNavItems } = useTranslations();
  const navItems = getNavItems();

  return (
    <nav className="flex justify-between items-center py-6 px-8">
      <div className="flex space-x-8">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default Navigation;
