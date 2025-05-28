
import AboutSection from '@/components/AboutSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MainContent = () => {
  return (
    <div className="space-y-16">
      <AboutSection />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainContent;
