
import { Music, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getMockCurrentlyPlaying } from '@/services/spotifyApi';

interface SpotifyTrack {
  name: string;
  artist: string;
  isPlaying: boolean;
  albumArt?: string;
}

const SpotifyStatus = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSpotifyData = () => {
      // Mock data kullanıyoruz - gerçek Spotify entegrasyonu için OAuth gerekli
      const track = getMockCurrentlyPlaying();
      setCurrentTrack(track);
      setIsLoading(false);
    };

    loadSpotifyData();
    
    // Her 30 saniyede bir güncelle
    const interval = setInterval(loadSpotifyData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 bg-[#2a2a3a] rounded-lg px-3 py-2">
        <Music className="w-4 h-4 text-green-400 animate-pulse" />
        <span className="text-xs text-gray-400">Loading...</span>
      </div>
    );
  }

  if (!currentTrack) {
    return (
      <div className="flex items-center space-x-2 bg-[#2a2a3a] rounded-lg px-3 py-2">
        <Music className="w-4 h-4 text-gray-500" />
        <span className="text-xs text-gray-400">Not playing</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 bg-[#2a2a3a] rounded-lg px-3 py-2 max-w-xs">
      <div className="flex items-center space-x-2">
        {currentTrack.isPlaying ? (
          <Play className="w-4 h-4 text-green-400" />
        ) : (
          <Pause className="w-4 h-4 text-green-400" />
        )}
        <Music className="w-4 h-4 text-green-400" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-white truncate font-medium">
          {currentTrack.name}
        </p>
        <p className="text-xs text-gray-400 truncate">
          by {currentTrack.artist}
        </p>
      </div>
    </div>
  );
};

export default SpotifyStatus;
