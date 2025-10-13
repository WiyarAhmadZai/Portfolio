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
      const targets = { projects: 15, experience: 3, technologies: 20, contributions: 50 };
      const duration = 2000; // 2 seconds
      const steps = 60;
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
        <section className={`relative py-20 flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="hero-title">
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
                  <span className="text-sm text-blue-400 font-medium animate-fade-in">
                    Hello, I'm
                  </span>
                </div>
                
                {/* Clean Name */}
                <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Wiyar Ahmad Zai
                  </span>
                </h1>
                
                {/* Simple role display */}
                <div className="space-y-1">
                  <div className="text-xl sm:text-2xl text-gray-200 font-light animate-slide-in-up" style={{animationDelay: '0.6s'}}>
                    <span className="inline-block">
                      {typingText}
                      <span className="animate-pulse text-blue-400">|</span>
                    </span>
                  </div>
                  <div className="text-sm text-blue-300 font-medium animate-slide-in-up" style={{animationDelay: '0.8s'}}>
                    <span className="inline-block">Kabul Polytechnic University</span>
                  </div>
                </div>
                
                {/* Clean Description */}
                <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-4 border border-white/5 shadow-lg animate-slide-in-up" style={{animationDelay: '1s'}}>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Full-Stack Developer passionate about creating innovative solutions and building impactful applications.
                  </p>
                </div>
                
                {/* Essential CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 animate-slide-in-up" style={{animationDelay: '1.2s'}}>
                  <Link 
                    to="/about" 
                    className="group relative px-6 py-3 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    aria-label="Learn more about Wiyar Ahmad Zai"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-user mr-2" aria-hidden="true"></i>
                      Learn More
                    </span>
                  </Link>
                  
                  <Link 
                    to="/projects" 
                    className="group relative px-6 py-3 text-sm font-semibold rounded-lg text-white bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">{animatedCounters.projects}+</div>
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
                      <div className="text-white font-bold text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">{animatedCounters.contributions}+</div>
                      <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">Contributions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className={`mt-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} aria-labelledby="stats-title">
          <div className="text-center mb-12">
            <h2 id="stats-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              By the Numbers
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey in numbers - projects completed, contributions made, and experience gained
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl border border-white/10 transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
                role="article"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-500">
                    {stat.value}
                  </h3>
                  
                  <p className="text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <i 
                    className={`${skill.icon} text-2xl mr-3 ${
                      skill.customColor 
                        ? '' 
                        : `bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`
                    }`}
                    style={{ 
                      color: skill.customColor || undefined,
                      background: skill.customColor ? `linear-gradient(to right, ${skill.customColor}, ${skill.customColor})` : undefined,
                      WebkitBackgroundClip: skill.customColor ? 'text' : undefined,
                      WebkitTextFillColor: skill.customColor ? 'transparent' : undefined,
                      backgroundClip: skill.customColor ? 'text' : undefined
                    }}
                  ></i>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
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
                <p className="text-gray-400 text-right mt-2">{skill.percentage}%</p>
                 <div className="mt-4">
                   <p className="text-gray-300 text-sm">
                     {skill.name === "Full Stack Web Development" && "Complete web applications from frontend to backend"}
                     {skill.name === "HTML & CSS" && "Semantic HTML5, CSS3, Responsive Design"}
                     {skill.name === "JavaScript & React.js" && "ES6+, React Hooks, State Management"}
                     {skill.name === "Next.js & PHP" && "Server-side rendering, API development"}
                     {skill.name === "Laravel & Django" && "MVC frameworks, RESTful APIs"}
                     {skill.name === "Database Design" && "MySQL, MongoDB, Database optimization"}
                     {skill.name === "UI/UX Design" && "User research, Wireframing, Prototyping"}
                     {skill.name === "Bootstrap & Tailwind CSS" && "CSS frameworks, Component libraries"}
                     {skill.name === "Python & MongoDB" && "Data processing, NoSQL databases"}
                     {skill.name === "Soft Skills" && "Communication, Teamwork, Problem-solving, Leadership"}
                   </p>
                 </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">What I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105 hover:border-blue-500">
                <div className="text-4xl text-blue-500 mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <i className="fas fa-check-circle text-green-500 mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className={`mt-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Testimonials</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-24 h-24 overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[activeTestimonial].avatar} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-300 text-lg italic mb-6">"{testimonials[activeTestimonial].content}"</p>
                  <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-blue-400">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-500"></i>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-600'}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/blog" 
              className="inline-block px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Articles
            </Link>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className={`mt-20 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>
          
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-blue-500 text-xl mr-4"></i>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">mrwiyarahmadzai@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-blue-500 text-xl mr-4"></i>
                    <div>
                      <p className="text-gray-400 text-sm">Phone/WhatsApp</p>
                      <p className="text-white">+93 776 992 603</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-github text-blue-500 text-xl mr-4"></i>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <p className="text-white">github.com/WiyarAhmadZai</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new opportunities, creative projects, or potential collaborations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:mrwiyarahmadzai@gmail.com" 
                    className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    <i className="fas fa-envelope mr-2"></i> Email
                  </a>
                  <a 
                    href="https://wa.me/93776992603" 
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                  </a>
                  <a 
                    href="https://github.com/WiyarAhmadZai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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