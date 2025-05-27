
import { useState } from 'react';

export type Language = 'tr' | 'ku' | 'en';

interface Translations {
  [key: string]: {
    tr: string;
    ku: string;
    en: string;
  };
}

const translations: Translations = {
  name: {
    tr: "Mehmet Kurdi",
    ku: "Mehmet Kurdî",
    en: "Mehmet Kurdi"
  },
  title: {
    tr: "Yazılım Geliştirici • Fullstack • Web3 Tutkunu • Blogger • Teknoloji Meraklısı",
    ku: "Pêşdebirê Nermalava • Fullstack • Hezkera Web3 • Blogger • Teknolojî Hezkir",
    en: "Software Developer • Fullstack • Web3 Enthusiast • Blogger • Tech Enthusiast"
  },
  description: {
    tr: "Ben bir fullstack yazılım geliştiricisiyim ve şu anda yeni teknolojiler öğrenmeye odaklanıyorum (React, Go, Web ve backend teknolojileri). Bilgilerimi başkalarıyla paylaşmak istediğimde, bunu blog yazıları ve sosyal medya aracılığıyla yapmayı seviyorum.",
    ku: "Ez pêşdebirek nermalava fullstack im û niha li ser fêrbûna teknolojiyên nû yên (React, Go, Web û teknolojiyên backend) digrim. Dema ku ez bixwazim zanînên xwe bi kesên din re parve bikim, ez bi postên blogê û medyaya civakî re dikim.",
    en: "I am a fullstack software developer, currently focusing on learning new technologies (React, Go, Web and backend technologies). Whenever I feel like I should share my knowledge with others, I like to do it via blog posts and social media."
  },
  navigation: {
    tr: "Anasayfa,Blog,Projeler,Başarılar,Konuk Defteri",
    ku: "Malper,Blog,Proje,Serkeftin,Pirtûka Mêvan",
    en: "Home,Blog,Projects,Achievements,Guestbook"
  },
  projects: {
    tr: "Projeler",
    ku: "Proje",
    en: "Projects"
  },
  skills: {
    tr: "Yetenekler",
    ku: "Jêhatî",
    en: "Skills"
  },
  blogPosts: {
    tr: "Blog Yazıları",
    ku: "Postên Blogê",
    en: "Blog Posts"
  },
  contact: {
    tr: "İletişim",
    ku: "Têkilî",
    en: "Contact"
  },
  viewAllProjects: {
    tr: "Tüm Projeleri Görüntüle",
    ku: "Hemû Projeyan Bibîne",
    en: "View All Projects"
  },
  viewAllBlogPosts: {
    tr: "Tüm Blog Yazılarını Görüntüle",
    ku: "Hemû Postên Blogê Bibîne",
    en: "View All Blog Posts"
  },
  contactDescription: {
    tr: "Benimle e-posta yoluyla iletişime geçebilirsiniz:",
    ku: "Hûn dikarin bi rêya e-postayê bi min re têkilî daynin:",
    en: "You can reach me via email:"
  },
  footer: {
    tr: "Bu portfolyo açık kaynaklıdır ve kaynak kodu şurada bulunabilir:",
    ku: "Ev portfolyo vekirî ye û koda çavkaniyê li vir tê dîtin:",
    en: "This portfolio is open source and the source code can be found on:"
  },
  madeBy: {
    tr: "Tarafından yapıldı",
    ku: "Ji aliyê ve hatiye çêkirin",
    en: "Made by"
  }
};

export const useTranslations = () => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const getNavItems = (): string[] => {
    return t('navigation').split(',');
  };

  return {
    language,
    setLanguage,
    t,
    getNavItems
  };
};
