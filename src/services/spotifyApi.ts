
interface SpotifyTrack {
  name: string;
  artist: string;
  isPlaying: boolean;
  albumArt?: string;
}

// Spotify Web API için client credentials flow
export const getSpotifyAccessToken = async (clientId: string, clientSecret: string) => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('Spotify token alınamadı');
  }

  const data = await response.json();
  return data.access_token;
};

// Public Spotify data (sadece sanatçı bilgileri vs.)
export const getSpotifyArtistInfo = async (artistId: string, accessToken: string) => {
  const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    throw new Error('Spotify sanatçı bilgisi alınamadı');
  }

  return response.json();
};

// Demo data - gerçek kullanıcı oturumu için Spotify Authorization Code Flow gerekli
export const getMockCurrentlyPlaying = (): SpotifyTrack => {
  const tracks = [
    { name: "Bohemian Rhapsody", artist: "Queen", isPlaying: true },
    { name: "Stairway to Heaven", artist: "Led Zeppelin", isPlaying: false },
    { name: "Hotel California", artist: "Eagles", isPlaying: true },
    { name: "Sweet Child O' Mine", artist: "Guns N' Roses", isPlaying: false }
  ];
  
  return tracks[Math.floor(Math.random() * tracks.length)];
};
