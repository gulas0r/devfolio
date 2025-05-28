
import { useTranslations } from '@/hooks/useTranslations';

const AboutSection = () => {
  const { config } = useTranslations();

  return (
    <section id="about" className="bg-[#1e1e28] rounded-xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <div className="w-16 h-1 bg-orange-500"></div>
      </div>
      
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I 
          enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, 
          I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring 
          across your message and identity in the most creative way. I created web design for many famous brand 
          companies.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
