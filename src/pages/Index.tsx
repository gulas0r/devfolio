
import Navigation from '@/components/Navigation';
import ProfileCard from '@/components/ProfileCard';
import MainContent from '@/components/MainContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation />
      <div className="pt-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sol Sidebar - Profil Kartı */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="sticky top-24">
                <ProfileCard />
              </div>
            </div>
            
            {/* Sağ İçerik Alanı */}
            <div className="lg:col-span-8 xl:col-span-9">
              <MainContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
