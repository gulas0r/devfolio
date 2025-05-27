
import { useTranslations } from '@/hooks/useTranslations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BlogPosts = () => {
  const { t, language } = useTranslations();

  const blogPosts = [
    {
      title: {
        tr: "React ve TypeScript ile Modern Web Geliştirme",
        ku: "Pêşdebiriya Webê ya Modern bi React û TypeScript re",
        en: "Modern Web Development with React and TypeScript"
      },
      description: {
        tr: "React ve TypeScript kullanarak modern, ölçeklenebilir web uygulamaları oluşturma rehberi",
        ku: "Rêberê çêkirina sepanên webê yên modern û scalable bi React û TypeScript re",
        en: "A guide to building modern, scalable web applications using React and TypeScript"
      },
      date: "15 Şubat 2024",
      readTime: "6 dk okuma",
      category: "Frontend"
    },
    {
      title: {
        tr: "Web3 ve Blockchain Teknolojilerine Giriş",
        ku: "Destpêka Teknolojiyên Web3 û Blockchain",
        en: "Introduction to Web3 and Blockchain Technologies"
      },
      description: {
        tr: "Web3 dünyasına adım atmak isteyenler için kapsamlı bir başlangıç rehberi",
        ku: "Rêbereke têr a destpêkê ji wan re ku dixwazin gavê li cîhana Web3 bavêjin",
        en: "A comprehensive beginner's guide for those wanting to step into the Web3 world"
      },
      date: "29 Ağustos 2022",
      readTime: "5 dk okuma",
      category: "Web3"
    },
    {
      title: {
        tr: "Verimliliği Artıran 5 Modern CLI Aracı",
        ku: "5 Amûrên CLI yên Modern ku Berhemdariyê Zêde Dikin",
        en: "5 Modern CLI Tools that Boost Productivity"
      },
      description: {
        tr: "Günlük geliştirme iş akışınızı hızlandıracak modern komut satırı araçları",
        ku: "Amûrên rêza fermanan ên modern ku rêwiya kar a pêşdebiriya rojane bilez dike",
        en: "Modern command line tools that will speed up your daily development workflow"
      },
      date: "13 Ağustos 2022",
      readTime: "4 dk okuma",
      category: "DevTools"
    },
    {
      title: {
        tr: "Go ile Backend Geliştirme: Forgit ve Lazygit",
        ku: "Pêşdebiriya Backend bi Go re: Forgit û Lazygit",
        en: "Backend Development with Go: Forgit and Lazygit"
      },
      description: {
        tr: "Git iş akışınızı süperşarj edecek 2 güçlü araç",
        ku: "2 amûrên hêzdar ku rêwiya kar a Git ya we supercharge bike",
        en: "2 powerful tools to supercharge your git workflow"
      },
      date: "23 Temmuz 2022",
      readTime: "3 dk okuma",
      category: "DevTools"
    }
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">{t('blogPosts')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                  {post.category}
                </Badge>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <CardTitle className="text-white text-lg leading-tight">
                {post.title[language]}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {post.description[language]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          {t('viewAllBlogPosts')} →
        </a>
      </div>
    </section>
  );
};

export default BlogPosts;
