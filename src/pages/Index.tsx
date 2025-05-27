
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import BlogPosts from '@/components/BlogPosts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <BlogPosts />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
