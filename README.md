
# 🚀 Modern Developer Portfolio

A stunning, responsive, and highly customizable developer portfolio built with React, TypeScript, and Tailwind CSS. This portfolio features smooth animations, 3D elements, theme switching, and seamless GitHub integration.

![Portfolio Preview](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Your+Amazing+Portfolio)

## ✨ Features

- 🎨 **Multiple Color Themes** - Switch between Cosmic, Neon, Aurora, and Midnight themes
- 📱 **Fully Responsive** - Looks perfect on all devices
- 🎭 **Smooth Animations** - Beautiful transitions and hover effects
- 🔗 **GitHub Integration** - Automatically fetches your repositories
- 🎯 **Easy Customization** - Single configuration file for all content
- 🌙 **Dark Mode** - Built-in dark theme with multiple variants
- ⚡ **Fast Performance** - Optimized build with Vite
- 🎪 **Interactive Elements** - 3D effects and mouse tracking
- 📧 **Contact Forms** - Ready-to-use contact section
- 🛠️ **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS

## 🎯 Live Demo

[View Live Demo](https://your-portfolio-demo.vercel.app) | [See Example](https://example-portfolio.vercel.app)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/modern-developer-portfolio.git
cd modern-developer-portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Customize Your Portfolio

Edit `src/config/portfolio.ts` with your information:

```typescript
export const portfolioConfig = {
  // Personal Information
  name: "Your Name",
  title: "Your Professional Title",
  description: "Your amazing description here...",
  
  // Contact Information
  email: "your.email@domain.com",
  
  // Social Media (just usernames, not full URLs)
  social: {
    github: "yourgithub",
    twitter: "yourtwitter", 
    linkedin: "yourlinkedin"
  },
  
  // Add your skills, achievements, and featured projects
  // Full configuration options below ⬇️
}
```

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 5. Deploy

```bash
npm run build
```

Deploy the `dist` folder to your favorite hosting platform.

## ⚙️ Configuration Guide

### Personal Information

```typescript
// Basic info displayed in the hero section
name: "John Doe",
title: "Full Stack Developer • React Specialist • Open Source Enthusiast",
description: "I create amazing web experiences and love contributing to open source...",
email: "john@example.com",
```

### Social Media Links

```typescript
social: {
  github: "johndoe",        // Your GitHub username
  twitter: "johndoe",       // Your Twitter handle (without @)
  linkedin: "johndoe"       // Your LinkedIn username
}
```

### Skills Configuration

Add your technical skills organized by categories:

```typescript
skills: [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    icon: "Code",  // Available icons: Code, Database, Smartphone, Cloud, Terminal, Cpu
    color: "from-blue-500 to-cyan-500"  // Tailwind gradient colors
  },
  // Add more categories...
]
```

### Achievements

Showcase your accomplishments:

```typescript
achievements: [
  {
    title: "10+ Successful Projects",
    description: "Built and deployed multiple web applications...",
    icon: "Trophy",  // Available icons: Trophy, Award, Star, Target, Zap, Users
    color: "from-cyan-400 to-blue-500"
  },
  // Add more achievements...
]
```

### Featured Projects

Highlight your best work:

```typescript
featuredProjects: [
  {
    title: "Project Name",
    description: "Brief description of what this project does...",
    technologies: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://your-demo-url.com",
    featured: true  // Will show prominently
  },
  // Add more projects...
]
```

## 🎨 Customization

### Theme Colors

The portfolio includes 4 beautiful themes:
- **Cosmic** 🌌 - Purple to blue gradient
- **Neon** ⚡ - Pink to cyan vibrant colors  
- **Aurora** 🌈 - Green to purple northern lights
- **Midnight** 🌙 - Dark blue to purple night theme

### Adding Your Own Themes

Edit `src/components/LanguageSwitcher.tsx` to add custom themes:

```typescript
const themes = [
  {
    name: 'custom',
    label: 'Custom', 
    colors: 'from-your-color via-your-color to-your-color',
    emoji: '🔥'
  }
  // Add to existing themes
];
```

### Icons

The portfolio uses [Lucide React](https://lucide.dev/) icons. Available icons for skills and achievements:

**Skills:** `Code`, `Database`, `Smartphone`, `Cloud`, `Terminal`, `Cpu`  
**Achievements:** `Trophy`, `Award`, `Star`, `Target`, `Zap`, `Users`

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx         # Main hero section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills grid
│   ├── Achievements.tsx # Achievement cards
│   ├── Contact.tsx      # Contact section
│   └── Navigation.tsx   # Navigation bar
├── config/
│   └── portfolio.ts     # 📝 YOUR MAIN CONFIG FILE
├── hooks/
│   └── useTranslations.ts # Content management
└── pages/
    └── Index.tsx        # Main page
```

## 🚀 Deployment Options

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/modern-developer-portfolio)

1. Push your customized code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/modern-developer-portfolio)

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- Firebase Hosting
- AWS S3 + CloudFront
- Digital Ocean
- Surge.sh

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm/yarn/pnpm

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui

## 🎪 Fun Features

### Interactive Elements

- **Mouse Tracking** - Hero background follows mouse movement
- **3D Avatar** - Rotating 3D profile picture with orbital elements
- **Hover Effects** - Smooth animations on all interactive elements
- **Theme Switching** - Real-time theme changes with smooth transitions

### GitHub Integration

The portfolio automatically fetches your GitHub repositories and displays:
- Repository names and descriptions
- Star and fork counts
- Primary programming languages
- Last updated dates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you found this helpful, please ⭐ star the repository!

---

## 🎉 Showcase

Using this portfolio template? I'd love to see what you've built! 

- Open an issue with the `showcase` label
- Include a link to your live portfolio
- Share what customizations you made

**Built with this template:**
- [Example Portfolio 1](https://example1.com)
- [Example Portfolio 2](https://example2.com)
- [Your Portfolio Here!](https://github.com/yourusername/modern-developer-portfolio/issues/new?labels=showcase)

---

<div align="center">

**Made with ❤️ by developers, for developers**

[⭐ Star this repo](https://github.com/yourusername/modern-developer-portfolio) • [🐛 Report Bug](https://github.com/yourusername/modern-developer-portfolio/issues) • [✨ Request Feature](https://github.com/yourusername/modern-developer-portfolio/issues)

</div>
