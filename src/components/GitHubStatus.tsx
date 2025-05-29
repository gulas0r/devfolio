
import { Github, GitCommit, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GitHubStats {
  username: string;
  totalRepos: number;
  totalStars: number;
  lastCommit?: string;
  isActive: boolean;
}

const GitHubStatus = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Demo data - gerçek GitHub API entegrasyonu için bu kısım güncellenecek
    const timer = setTimeout(() => {
      setStats({
        username: "gulas0r",
        totalRepos: 15,
        totalStars: 42,
        lastCommit: "2 hours ago",
        isActive: true
      });
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 bg-[#2a2a3a] rounded-lg px-3 py-2">
        <Github className="w-4 h-4 text-gray-400 animate-pulse" />
        <span className="text-xs text-gray-400">Loading...</span>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center space-x-2 bg-[#2a2a3a] rounded-lg px-3 py-2">
        <Github className="w-4 h-4 text-gray-500" />
        <span className="text-xs text-gray-400">No data</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 bg-[#2a2a3a] rounded-lg px-3 py-2">
      <div className="flex items-center space-x-1">
        <Github className="w-4 h-4 text-white" />
        {stats.isActive && (
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        )}
      </div>
      
      <div className="flex items-center space-x-3 text-xs">
        <div className="flex items-center space-x-1">
          <GitCommit className="w-3 h-3 text-blue-400" />
          <span className="text-gray-300">{stats.totalRepos}</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400" />
          <span className="text-gray-300">{stats.totalStars}</span>
        </div>
        
        {stats.lastCommit && (
          <span className="text-gray-400 hidden sm:inline">
            {stats.lastCommit}
          </span>
        )}
      </div>
    </div>
  );
};

export default GitHubStatus;
