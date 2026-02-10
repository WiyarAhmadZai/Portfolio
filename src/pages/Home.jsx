import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [animatedCounters, setAnimatedCounters] = useState({
    projects: 0,
    experience: 0,
    technologies: 0,
    contributions: 0
  });
  const [typingText, setTypingText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { showAdminAccess, customSkills } = useData();
  
  const roles = [
    "Computer Science Student",
    "Full-Stack Developer", 
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    // Animated counters
    const animateCounters = () => {
      const targets = { projects: 0, experience: 3, technologies: 20, contributions: 3000 };
      const duration = 3000; // 3 seconds for smoother animation
      const steps = 80;
      const stepDuration = duration / steps;
      
      let step = 0;
      const counterInterval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setAnimatedCounters({
          projects: Math.floor(targets.projects * easeOutQuart),
          experience: Math.floor(targets.experience * easeOutQuart),
          technologies: Math.floor(targets.technologies * easeOutQuart),
          contributions: Math.floor(targets.contributions * easeOutQuart)
        });
        
        if (step >= steps) {
          clearInterval(counterInterval);
        }
      }, stepDuration);
    };
    
    // Start counter animation after a delay
    const counterTimeout = setTimeout(animateCounters, 1000);
    
    // Typing effect for roles
    const typeText = (text, callback) => {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setTypingText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(callback, 2000); // Wait 2 seconds before erasing
        }
      }, 100);
      
      return typingInterval;
    };
    
    const eraseText = (callback) => {
      let i = typingText.length;
      const erasingInterval = setInterval(() => {
        if (i > 0) {
          setTypingText(typingText.slice(0, i - 1));
          i--;
        } else {
          clearInterval(erasingInterval);
          callback();
        }
      }, 50);
      
      return erasingInterval;
    };
    
    const cycleRoles = () => {
      const currentRole = roles[currentRoleIndex];
      typeText(currentRole, () => {
        eraseText(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        });
      });
    };
    
    // Start typing effect after a delay
    const typingTimeout = setTimeout(cycleRoles, 2000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(counterTimeout);
      clearTimeout(typingTimeout);
    };
  }, []);

  // Skills data
  // Default skills
  const defaultSkills = [
    { name: "Full Stack Web Development", percentage: 95, icon: "fa-laptop-code", color: "from-blue-500 to-cyan-500" },
    { name: "HTML & CSS", percentage: 90, icon: "fa-code", color: "from-orange-500 to-red-500" },
    { name: "JavaScript & React.js", percentage: 90, icon: "fa-brands fa-js-square", color: "from-yellow-500 to-orange-500" },
    { name: "Next.js & PHP", percentage: 85, icon: "fa-server", color: "from-purple-500 to-indigo-500" },
    { name: "Laravel & Django", percentage: 80, icon: "fa-cogs", color: "from-red-500 to-pink-500" },
    { name: "Database Design", percentage: 85, icon: "fa-database", color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", percentage: 80, icon: "fa-paint-brush", color: "from-pink-500 to-rose-500" },
    { name: "Bootstrap & Tailwind CSS", percentage: 90, icon: "fa-palette", color: "from-cyan-500 to-blue-500" },
    { name: "Python & MongoDB", percentage: 75, icon: "fa-python", color: "from-green-600 to-green-400" },
    { name: "Soft Skills", percentage: 85, icon: "fa-users", color: "from-indigo-500 to-purple-500" }
  ];

  // Convert custom skills to match the format
  const formattedCustomSkills = customSkills.map(skill => ({
    name: skill.name,
    percentage: skill.percentage,
    icon: skill.icon,
    color: `from-[${skill.color}] to-[${skill.color}]`,
    description: skill.description,
    category: skill.category,
    customColor: skill.color // Store original color for inline styles
  }));

  // Combine default skills with custom skills
  const skills = [...defaultSkills, ...formattedCustomSkills];

  // Services data
  const services = [
    {
      title: "Web Development",
      description: "Creating responsive and interactive websites using modern technologies like React, Vue.js, and Node.js.",
      icon: "fa-laptop-code",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "SEO Friendly"
      ]
    },
    {
      title: "Mobile Apps",
      description: "Building cross-platform mobile applications with React Native and Flutter for iOS and Android.",
      icon: "fa-mobile-alt",
      features: [
        "Cross-platform Support",
        "Native Performance",
        "App Store Deployment",
        "Push Notifications"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that engage and delight users.",
      icon: "fa-paint-brush",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing"
      ]
    },
    {
      title: "Database Design",
      description: "Creating efficient database schemas and optimizing queries for performance and scalability.",
      icon: "fa-database",
      features: [
        "Schema Design",
        "Performance Tuning",
        "Backup & Recovery",
        "Security Implementation"
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Ahmad Farid",
      role: "Project Manager",
      company: "Tech Solutions",
      content: "Wiyar delivered our project ahead of schedule with exceptional quality. His technical skills and professionalism are outstanding.",
      avatar: "/Photos Simples/Cute Photo.jpg",
      rating: 5
    },
    {
      name: "Fatima Noor",
      role: "CEO",
      company: "Digital Innovations",
      content: "Working with Wiyar was a game-changer for our business. His innovative solutions helped us increase efficiency by 40%.",
      avatar: "/Photos Simples/1716635911147.jpg",
      rating: 5
    },
    {
      name: "Karimullah Safi",
      role: "CTO",
      company: "Startup Hub",
      content: "Wiyar's expertise in full-stack development is impressive. He transformed our vision into a robust, scalable application.",
      avatar: "/Photos Simples/20240328_124412.jpg",
      rating: 5
    }
  ];

  // Stats data
  const stats = [
    { value: "Multiple", label: "Projects Completed" },
    { value: "Active", label: "GitHub Contributions" },
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Technologies Mastered" }
  ];

  // Recent blog posts
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      excerpt: "A deep dive into React Hooks and how they can simplify your functional components.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "React"
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and scalable REST APIs using Node.js and Express.",
      date: "April 22, 2023",
      readTime: "8 min read",
      category: "Node.js"
    },
    {
      title: "CSS Grid vs Flexbox",
      excerpt: "When to use CSS Grid and when to use Flexbox for your layout needs.",
      date: "March 10, 2023",
      readTime: "6 min read",
      category: "CSS"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8" role="main">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section - Clean & Attractive */}
        <section className={`relative  md:py-32 flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="hero-title">
          {/* Simplified Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Subtle gradient orbs */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            
            {/* Minimal floating elements */}
            <div className="absolute top-32 left-32 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Clean Content */}
              <div className="space-y-6 animate-slide-in-left">
                {/* Simple greeting */}
                <div className="inline-block">
                  <span className="text-xs text-blue-400 font-medium animate-fade-in tracking-wide uppercase">
                    Hello, I'm
                  </span>
                </div>
                
                {/* Clean Name */}
                <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Wiyar Ahmad Zai
                  </span>
                </h1>
                
                {/* Simple role display */}
                <div className="space-y-1">
                  <div className="text-lg sm:text-xl text-gray-200 font-light animate-slide-in-up min-h-[1.5rem] flex items-center" style={{animationDelay: '0.6s'}}>
                    <span className="inline-block">
                      {typingText}
                      <span className="animate-pulse text-blue-400">|</span>
                    </span>
                  </div>
                  <div className="text-xs text-blue-300 font-medium animate-slide-in-up" style={{animationDelay: '0.8s'}}>
                    <span className="inline-block">Kabul Polytechnic University</span>
                  </div>
                </div>
                
                {/* Clean Description */}
                <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-4 border border-white/5 shadow-lg animate-slide-in-up" style={{animationDelay: '1s'}}>
                  <p className="text-gray-200 text-xs leading-relaxed">
                    Full-Stack Developer passionate about creating innovative solutions and building impactful applications.
                  </p>
                </div>
                
                {/* Essential CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-slide-in-up" style={{animationDelay: '1.2s'}}>
                  <Link 
                    to="/about" 
                    className="group relative px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Learn more about Wiyar Ahmad Zai"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-user mr-2" aria-hidden="true"></i>
                      Learn More
                    </span>
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="group relative px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="View Wiyar's projects and portfolio"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-folder-open mr-2" aria-hidden="true"></i>
                      View Projects
                    </span>
                  </Link>
                </div>
              </div>
              
              {/* Right Side - Animated Visual */}
              <div className="relative animate-slide-in-right">
                {/* Main Profile Image Container */}
                <div className="relative mx-auto max-w-sm">
                  {/* Enhanced glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                  
                  {/* Rotating border */}
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-spin-slow" style={{animationDuration: '8s'}}></div>
                  
                  {/* Main image container with enhanced animations */}
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-64 h-64 mx-auto overflow-hidden border-4 border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-3 group">
                    <img 
                      src="/Photos Simples/Smile.jpg" 
                      alt="Wiyar Ahmad Zai" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Floating particles overlay */}
                    <div className="absolute inset-0">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '1.5s'}}></div>
                      <div className="absolute bottom-1/3 left-8 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-80" style={{animationDelay: '2s'}}></div>
                    </div>
                  </div>
                  
                  {/* Enhanced floating tech icons */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
                    <i className="fas fa-code text-white text-lg group-hover:animate-spin"></i>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
                    <i className="fas fa-laptop-code text-white text-lg group-hover:animate-bounce"></i>
                  </div>
                  <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
                    <i className="fab fa-github text-white group-hover:animate-pulse"></i>
                  </div>
                  <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300 cursor-pointer" style={{animationDelay: '2s'}}>
                    <i className="fas fa-paint-brush text-white group-hover:animate-bounce"></i>
                  </div>
                </div>
                
                {/* Enhanced stats cards with animations */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl animate-slide-in-up hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{animationDelay: '2s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <i className="fas fa-project-diagram text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">Multiple</div>
                      <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">Projects</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl animate-slide-in-up hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{animationDelay: '2.2s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <i className="fas fa-code-branch text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-300">{animatedCounters.experience}+</div>
                      <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">Years</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl animate-slide-in-up hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{animationDelay: '2.4s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <i className="fas fa-tools text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">{animatedCounters.technologies}+</div>
                      <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">Technologies</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-lg p-3 border border-white/10 shadow-xl animate-slide-in-up hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer group" style={{animationDelay: '2.6s'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                      <i className="fas fa-code text-white text-xs"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">{animatedCounters.contributions.toLocaleString()}+</div>
                      <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">Contributions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className={`mt-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="stats-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs text-blue-400 font-medium tracking-wide uppercase">Achievements</span>
            </div>
            <h2 id="stats-title" className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                By the Numbers
              </span>
            </h2>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed">
              My journey in numbers - projects completed, contributions made, and experience gained through dedication and passion
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border border-white/10 transform transition-all duration-700 hover:scale-110 hover:shadow-blue-500/20 hover:border-blue-500/30"
                style={{ animationDelay: `${index * 0.2}s` }}
                role="article"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                      <i className="fas fa-chart-line text-white text-2xl"></i>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-700 tracking-tight">
                    {stat.value}
                  </h3>
                  
                  <p className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors duration-500 mb-4">
                    {stat.label}
                  </p>
                  
                  {/* Animated progress bar */}
                  <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Skills Section */}
        <section className={`mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="skills-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs text-purple-400 font-medium tracking-wide uppercase">Expertise</span>
            </div>
            <h2 id="skills-title" className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed">
              A comprehensive range of technologies and frameworks I work with to create exceptional digital experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 transform transition-all duration-700 hover:scale-105 hover:shadow-purple-500/20 hover:border-purple-500/30">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-600/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-600 to-red-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                      <i 
                        className={`${skill.icon} text-2xl text-white`}
                        style={{ 
                          color: skill.customColor || undefined,
                          background: skill.customColor ? `linear-gradient(to right, ${skill.customColor}, ${skill.customColor})` : undefined,
                          WebkitBackgroundClip: skill.customColor ? 'text' : undefined,
                          WebkitTextFillColor: skill.customColor ? 'transparent' : undefined,
                          backgroundClip: skill.customColor ? 'text' : undefined
                        }}
                      ></i>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500 transition-all duration-700 tracking-tight">
                      {skill.name}
                    </h3>
                  </div>
                  
                  {/* Enhanced progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400 text-xs font-medium">Proficiency</span>
                      <span className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-500">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                          skill.customColor 
                            ? '' 
                            : `bg-gradient-to-r ${skill.color}`
                        }`}
                        style={{ 
                          width: `${skill.percentage}%`,
                          background: skill.customColor ? `linear-gradient(to right, ${skill.customColor}, ${skill.customColor})` : undefined
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Skill description */}
                  <div className="mb-6">
                    <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors duration-500">
                      {skill.name === "Full Stack Web Development" && "Complete web applications from frontend to backend with modern frameworks"}
                      {skill.name === "HTML & CSS" && "Semantic HTML5, CSS3, Responsive Design, and modern CSS features"}
                      {skill.name === "JavaScript & React.js" && "ES6+, React Hooks, State Management, and modern JavaScript patterns"}
                      {skill.name === "Next.js & PHP" && "Server-side rendering, API development, and full-stack solutions"}
                      {skill.name === "Laravel & Django" && "MVC frameworks, RESTful APIs, and robust backend development"}
                      {skill.name === "Database Design" && "MySQL, MongoDB, Database optimization, and data modeling"}
                      {skill.name === "UI/UX Design" && "User research, Wireframing, Prototyping, and design systems"}
                      {skill.name === "Bootstrap & Tailwind CSS" && "CSS frameworks, Component libraries, and utility-first styling"}
                      {skill.name === "Python & MongoDB" && "Data processing, NoSQL databases, and Python scripting"}
                      {skill.name === "Soft Skills" && "Communication, Teamwork, Problem-solving, Leadership, and project management"}
                    </p>
                  </div>
                  
                  {/* Animated progress indicator */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            i < Math.floor(skill.percentage / 20) 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                              : 'bg-gray-600'
                          }`}
                          style={{animationDelay: `${i * 0.1}s`}}
                        ></div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">
                      Expert Level
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Certifications Section */}
        <section className={`mt-32 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="certifications-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs text-orange-400 font-medium tracking-wide uppercase">Certifications</span>
            </div>
            <h2 id="certifications-title" className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500">
                Professional Certificates
              </span>
            </h2>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed">
              Recognized certifications and achievements from various professional development programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Achievement Certificate",
                issuer: "Professional Development",
                date: "2021",
                pdfFile: "/certificates/Achievement Certificate.pdf"
              },
              {
                name: "Appreciation Certificate",
                issuer: "Joining a Motivational Seminar",
                date: "2023",
                pdfFile: "/certificates/Appreciation Certificate.pdf"
              },
              {
                name: "AI Webinar Certificate",
                issuer: "AI Training Institute",
                date: "2025",
                pdfFile: "/certificates/Blue Gold and White Modern Artificial Intelligence Webinar Certificate.png"
              },
              {
                name: "Computer Volunteer",
                issuer: "Technical Volunteer Program",
                date: "2023",
                pdfFile: "/certificates/Computer Volanteer Certificate.pdf"
              },
              {
                name: "Frontend Development",
                issuer: "Web Development Institute",
                date: "2024",
                pdfFile: "/certificates/Fronted certificate.pdf"
              },
              {
                name: "Math Volunteer",
                issuer: "Educational Volunteer Program",
                date: "2024",
                pdfFile: "/certificates/Math Volanteer.pdf"
              },
              {
                name: "MS Office Certificate",
                issuer: "Microsoft Training Center",
                date: "2018",
                pdfFile: "/certificates/Ms Word Certificate.pdf"
              },
              {
                name: "PTT Training",
                issuer: "Potential Teacher Training",
                date: "2021",
                pdfFile: "/certificates/PTT Certificate.pdf"
              }
            ].map((cert, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/10 transform transition-all duration-700 hover:scale-105 hover:shadow-orange-500/20 hover:border-orange-500/30">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-600/10 to-yellow-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  {/* Certificate icon */}
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-600 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                      <i className="fas fa-certificate text-white text-2xl"></i>
                    </div>
                  </div>
                  
                  {/* Certificate title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-red-500 group-hover:to-yellow-500 transition-all duration-700 tracking-tight line-clamp-2">
                    {cert.name}
                  </h3>
                  
                  {/* Certificate issuer */}
                  <p className="text-orange-400 font-medium text-sm mb-2">{cert.issuer}</p>
                  
                  {/* Certificate date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-xs">Issued: {cert.date}</span>
                    <i className="fas fa-award text-yellow-500 text-sm"></i>
                  </div>
                  
                  {/* Download button */}
                  <button
                    onClick={() => window.open(cert.pdfFile, '_blank')}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-xs"
                  >
                    <i className="fas fa-file-pdf mr-2"></i>
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View all certificates button */}
          <div className="text-center mt-12">
            <Link 
              to="/resume"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-certificate mr-2"></i>
              View All Certificates
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className={`mt-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="services-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs text-green-400 font-medium tracking-wide uppercase">Services</span>
            </div>
            <h2 id="services-title" className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500">
                What I Offer
              </span>
            </h2>
            <p className="text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your digital needs and drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10 transform transition-all duration-700 hover:scale-110 hover:shadow-green-500/20 hover:border-green-500/30">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-600/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  {/* Service icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                      <i className={`fas ${service.icon} text-white text-3xl`}></i>
                    </div>
                  </div>
                  
                  {/* Service title */}
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-cyan-500 transition-all duration-700 tracking-tight">
                    {service.title}
                  </h3>
                  
                  {/* Service description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-xs group-hover:text-white transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center group-hover:translate-x-2 transition-transform duration-300" style={{animationDelay: `${i * 0.1}s`}}>
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3 group-hover:animate-pulse">
                          <i className="fas fa-check text-white text-xs"></i>
                        </div>
                        <span className="text-gray-300 text-xs group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to action */}
                  <div className="pt-4 border-t border-gray-700 group-hover:border-green-500/30 transition-colors duration-500">
                    <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg text-xs">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className={`mt-32 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="testimonials-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm text-yellow-400 font-medium">Testimonials</span>
            </div>
            <h2 id="testimonials-title" className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                Client Testimonials
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              What clients say about working with me - real feedback from successful projects
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/10 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/20 to-red-600/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Client avatar */}
                  <div className="mb-8 lg:mb-0 lg:mr-12">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 via-orange-600 to-red-500 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img 
                          src={testimonials[activeTestimonial].avatar} 
                          alt={testimonials[activeTestimonial].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Floating quote icon */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg animate-float">
                        <i className="fas fa-quote-left text-white text-lg"></i>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial content */}
                  <div className="text-center lg:text-left flex-1">
                    {/* Quote */}
                    <blockquote className="text-gray-200 text-xl lg:text-2xl italic mb-8 leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </blockquote>
                    
                    {/* Client info */}
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-white">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-yellow-400 font-semibold text-lg">
                        {testimonials[activeTestimonial].role}
                      </p>
                      <p className="text-gray-400 text-base">
                        {testimonials[activeTestimonial].company}
                      </p>
                      
                      {/* Rating stars */}
                      <div className="flex justify-center lg:justify-start mt-4">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-yellow-500 text-xl mr-1 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation dots */}
                <div className="flex justify-center mt-12 space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-600 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Blog Section */}
        <section className={`mt-32 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="blog-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm text-indigo-400 font-medium">Blog</span>
            </div>
            <h2 id="blog-title" className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                Latest Articles
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Insights, tutorials, and thoughts on web development, technology, and industry trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-700 hover:scale-105 hover:shadow-indigo-500/20 hover:border-indigo-500/30">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '1s'}}></div>
                
                {/* Featured image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-700">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-white transition-colors duration-500">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700 group-hover:border-indigo-500/30 transition-colors duration-500">
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                      {post.date}
                    </span>
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                      Read More <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
            >
              <span className="flex items-center">
                <i className="fas fa-newspaper mr-2"></i>
                View All Articles
              </span>
            </Link>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className={`mt-32 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="contact-title">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm text-cyan-400 font-medium">Contact</span>
            </div>
            <h2 id="contact-title" className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/10 overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-indigo-600/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        Contact Information
                      </span>
                    </h3>
                    <div className="space-y-6">
                      <div className="group flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl hover:from-cyan-500/20 hover:to-blue-600/20 transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                          <i className="fas fa-envelope text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">Email</p>
                          <p className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">
                            mrwiyarahmadzai@gmail.com
                          </p>
                        </div>
                      </div>
                      
                      <div className="group flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl hover:from-green-500/20 hover:to-emerald-600/20 transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                          <i className="fas fa-phone text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">Phone/WhatsApp</p>
                          <p className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-500 transition-all duration-500">
                            +93 776 992 603
                          </p>
                        </div>
                      </div>
                      
                      <div className="group flex items-center p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl hover:from-purple-500/20 hover:to-pink-600/20 transition-all duration-500">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-6 group-hover:animate-pulse group-hover:scale-110 transition-transform duration-500">
                          <i className="fab fa-github text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm font-medium">GitHub</p>
                          <p className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-500">
                            github.com/WiyarAhmadZai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connect Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-8">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
                        Let's Connect
                      </span>
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      I'm always open to discussing new opportunities, creative projects, or potential collaborations. 
                      Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                    </p>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:mrwiyarahmadzai@gmail.com" 
                        className="group flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                      >
                        <i className="fas fa-envelope mr-3 group-hover:animate-bounce"></i>
                        Send Email
                      </a>
                      
                      <a 
                        href="https://wa.me/93776992603" 
                        className="group flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                      >
                        <i className="fab fa-whatsapp mr-3 group-hover:animate-bounce"></i>
                        WhatsApp Chat
                      </a>
                      
                      <a 
                        href="https://github.com/WiyarAhmadZai" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                      >
                        <i className="fab fa-github mr-3 group-hover:animate-bounce"></i>
                        View GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
            <p className="text-gray-100 text-lg mb-6">
              I'm currently available for freelance projects, internships, and job opportunities.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black bg-opacity-30 hover:bg-opacity-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce left-1/2 transform -translate-x-1/2">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Floating Admin Access Button - Only visible with secret code */}
      {showAdminAccess && (
        <div className="fixed top-20 right-4 z-40">
          <Link
            to="/admin"
            className="group bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full p-3 text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-110 shadow-lg"
            title="Admin Access"
          >
            <i className="fas fa-cog text-lg group-hover:animate-spin"></i>
          </Link>
        </div>
      )}
      
    </main>
  );
};

export default Home;