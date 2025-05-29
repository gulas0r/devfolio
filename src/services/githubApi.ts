
interface GitHubUser {
  login: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  name: string;
  bio: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
  pushed_at: string;
}

export const fetchGitHubUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error('GitHub kullanıcısı bulunamadı');
  }
  return response.json();
};

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!response.ok) {
    throw new Error('GitHub repoları alınamadı');
  }
  return response.json();
};

export const fetchGitHubStats = async (username: string) => {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(username),
    fetchGitHubRepos(username)
  ]);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const recentRepo = repos.find(repo => repo.pushed_at);
  const lastCommit = recentRepo ? new Date(recentRepo.pushed_at) : null;
  
  let lastCommitText = 'Bilinmiyor';
  if (lastCommit) {
    const now = new Date();
    const diffMs = now.getTime() - lastCommit.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffDays > 0) {
      lastCommitText = `${diffDays} gün önce`;
    } else if (diffHours > 0) {
      lastCommitText = `${diffHours} saat önce`;
    } else {
      lastCommitText = '1 saatten az';
    }
  }

  return {
    username: user.login,
    totalRepos: user.public_repos,
    totalStars,
    lastCommit: lastCommitText,
    isActive: lastCommit ? (new Date().getTime() - lastCommit.getTime()) < 7 * 24 * 60 * 60 * 1000 : false
  };
};
