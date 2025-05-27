
import { useTranslations } from '@/hooks/useTranslations';
import { Trophy, Award, Star, Target, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const { t, language } = useTranslations();

  const achievements = [
    {
      title: {
        tr: "10+ Başarılı Proje",
        ku: "10+ Projeyên Serkeftî",
        en: "10+ Successful Projects"
      },
      description: {
        tr: "Web3 ve modern web teknolojileri kullanarak tamamlanan projeler",
        ku: "Projeyên bi Web3 û teknolojiyên webê yên modern hate temamkirin",
        en: "Projects completed using Web3 and modern web technologies"
      },
      icon: Trophy,
      color: "from-cyan-400 to-blue-500",
      glowColor: "shadow-cyan-500/50"
    },
    {
      title: {
        tr: "5+ Yıl Deneyim",
        ku: "5+ Sal Ezmûn",
        en: "5+ Years Experience"
      },
      description: {
        tr: "Fullstack geliştirme ve modern teknolojilerde uzmanlaşma",
        ku: "Pêşdebiriya Fullstack û pisporiya teknolojiyên modern",
        en: "Fullstack development and specialization in modern technologies"
      },
      icon: Star,
      color: "from-purple-400 to-pink-500",
      glowColor: "shadow-purple-500/50"
    },
    {
      title: {
        tr: "Open Source Katkıları",
        ku: "Beşdariyên Çavkaniya Vekirî",
        en: "Open Source Contributions"
      },
      description: {
        tr: "Topluluk projelerine aktif katkı ve kendi araçlarını geliştirme",
        ku: "Beşdariya çalak li projeyên civakê û pêşdebiriya amûrên xwe",
        en: "Active contribution to community projects and developing own tools"
      },
      icon: Users,
      color: "from-green-400 to-emerald-500",
      glowColor: "shadow-green-500/50"
    },
    {
      title: {
        tr: "CLI Araçları Uzmanı",
        ku: "Pisporê Amûrên CLI",
        en: "CLI Tools Expert"
      },
      description: {
        tr: "Geliştirici verimliliğini artıran CLI araçları oluşturma",
        ku: "Çêkirina amûrên CLI ku berhemdariya pêşdebiran zêde dike",
        en: "Creating CLI tools that boost developer productivity"
      },
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      glowColor: "shadow-yellow-500/50"
    },
    {
      title: {
        tr: "Blockchain Entegrasyonu",
        ku: "Entegrasyona Blockchain",
        en: "Blockchain Integration"
      },
      description: {
        tr: "Web3 ve blockchain teknolojilerinde öncü çözümler",
        ku: "Çareseriyên pêşeng li teknolojiyên Web3 û blockchain",
        en: "Pioneer solutions in Web3 and blockchain technologies"
      },
      icon: Target,
      color: "from-indigo-400 to-purple-500",
      glowColor: "shadow-indigo-500/50"
    },
    {
      title: {
        tr: "Teknoloji Blogger",
        ku: "Blogger a Teknolojiyê",
        en: "Tech Blogger"
      },
      description: {
        tr: "Teknoloji dünyasındaki gelişmeleri paylaşma ve öğretme",
        ku: "Parvekirina û hînkirina pêşdeçûnên cîhana teknolojiyê",
        en: "Sharing and teaching developments in the tech world"
      },
      icon: Award,
      color: "from-rose-400 to-red-500",
      glowColor: "shadow-rose-500/50"
    }
  ];

  return (
    <section id="achievements" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('achievements')}
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card 
              key={index} 
              className={`bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl ${achievement.glowColor} hover:scale-105 backdrop-blur-sm`}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} p-0.5`}>
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className={`text-xl bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.title[language]}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {achievement.description[language]}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
