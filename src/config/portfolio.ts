
export const portfolioConfig = {
  // Personal Information
  name: "John Doe",
  title: "Software Developer • Fullstack • Web3 Enthusiast • Tech Explorer",
  description: "I'm a passionate fullstack developer who loves building amazing web applications and exploring cutting-edge technologies. When I'm not coding, you'll find me contributing to open source projects and sharing knowledge with the developer community.",
  
  // Contact Information
  email: "contact@johndoe.dev",
  
  // Social Media Links
  social: {
    github: "johndoe",
    twitter: "johndoe",
    linkedin: "johndoe"
  },
  
  // Skills Configuration
  skills: [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
      icon: "Code",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: ["Node.js", "Go", "Python", "Express.js", "PostgreSQL", "MongoDB", "Redis"],
      icon: "Database",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Web3 & Blockchain",
      skills: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "MetaMask"],
      icon: "Cpu",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS", "Vercel", "GitHub Actions"],
      icon: "Cloud",
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      icon: "Smartphone",
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Development Tools",
      skills: ["VS Code", "Terminal", "Postman", "Figma", "Webpack", "Vite"],
      icon: "Terminal",
      color: "from-gray-500 to-slate-500"
    }
  ],
  
  // Achievements Configuration
  achievements: [
    {
      title: "10+ Successful Projects",
      description: "Built and deployed multiple web applications using modern technologies",
      icon: "Trophy",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "5+ Years Experience",
      description: "Fullstack development expertise with modern tech stack",
      icon: "Star",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to community projects and maintainer of useful tools",
      icon: "Users",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "CLI Tools Expert",
      description: "Created developer productivity tools used by hundreds of developers",
      icon: "Zap",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Blockchain Pioneer",
      description: "Early adopter and builder in the Web3 and DeFi ecosystem",
      icon: "Target",
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Tech Content Creator",
      description: "Sharing knowledge through tutorials, articles, and community engagement",
      icon: "Award",
      color: "from-rose-400 to-red-500"
    }
  ],
  
  // Featured Projects (these will be supplemented by GitHub API)
  featuredProjects: [
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management app with AI categorization and priority suggestions",
      technologies: ["React", "TypeScript", "OpenAI", "Supabase"],
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio tracking with DeFi integration",
      technologies: ["Next.js", "Web3.js", "Chart.js", "TailwindCSS"],
      demoUrl: "https://example.com",
      featured: true
    },
    {
      title: "Developer CLI Toolkit",
      description: "Collection of CLI tools to boost developer productivity",
      technologies: ["Go", "CLI", "Git", "Docker"],
      demoUrl: "https://example.com",
      featured: true
    }
  ]
};
