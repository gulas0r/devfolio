
import { useTranslations } from '@/hooks/useTranslations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const { t, language } = useTranslations();

  const projects = [
    {
      title: "NotifyHub",
      description: {
        tr: "Uygulamanızdan etkinlikler hakkında gerçek zamanlı bildirimler alın",
        ku: "Ji sepana xwe ya bûyeran agahdariyên demê rast bistînin",
        en: "Get realtime notifications on events from your application"
      },
      icon: "N",
      color: "bg-blue-600",
      tags: ["React", "Node.js", "WebSocket"]
    },
    {
      title: "CryptoPay",
      description: {
        tr: "QR kodları ile fiziksel mağazalarınızda kripto para ödemelerini kabul edin",
        ku: "Di dikanên fizîkî de bi kodên QR re dravên kriptoyê bipejirînin",
        en: "Accept payments in crypto at your physical stores with QR codes"
      },
      icon: "C",
      color: "bg-purple-600",
      tags: ["Web3", "Blockchain", "React"]
    },
    {
      title: "DevTools CLI",
      description: {
        tr: "Geliştirici verimliliğini artıran modern CLI araçları koleksiyonu",
        ku: "Komeka amûrên CLI yên modern ku berhemdariya pêşdebiran zêde dike",
        en: "A collection of modern CLI tools that boost developer productivity"
      },
      icon: "D",
      color: "bg-green-600",
      tags: ["Go", "CLI", "DevTools"]
    }
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-8">{t('projects')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-lg ${project.color} flex items-center justify-center text-white font-bold`}>
                  {project.icon}
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                {project.description[language]}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-gray-800 text-gray-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
          {t('viewAllProjects')} →
        </a>
      </div>
    </section>
  );
};

export default Projects;
