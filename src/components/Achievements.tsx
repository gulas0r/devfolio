
import { useTranslations } from '@/hooks/useTranslations';
import { Trophy, Award, Star, Target, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Achievements = () => {
  const { t, config } = useTranslations();

  const iconMap = {
    Trophy,
    Award,
    Star,
    Target,
    Zap,
    Users
  };

  return (
    <section id="achievements" className="px-8 py-16">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {t('achievements')}
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {config.achievements.map((achievement, index) => {
          const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
          return (
            <Card 
              key={index} 
              className={`bg-gray-900/50 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 backdrop-blur-sm group cursor-pointer`}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <CardTitle className={`text-xl bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                  {achievement.title}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {achievement.description}
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
