import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Skills data
  const skills = [
    { name: "Frontend Development", percentage: 90, icon: "fa-brands fa-react", color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", percentage: 85, icon: "fa-server", color: "from-purple-500 to-indigo-500" },
    { name: "Database Design", percentage: 80, icon: "fa-database", color: "from-green-500 to-emerald-500" },
    { name: "Mobile Development", percentage: 75, icon: "fa-mobile-alt", color: "from-yellow-500 to-amber-500" },
    { name: "UI/UX Design", percentage: 70, icon: "fa-paint-brush", color: "from-pink-500 to-rose-500" },
    { name: "Version Control", percentage: 85, icon: "fa-code-branch", color: "from-gray-500 to-slate-500" }
  ];

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
    { value: "22+", label: "Projects Completed" },
    { value: "500+", label: "GitHub Contributions" },
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Technologies Used" }
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 animate-bounce">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-48 h-48 mx-auto overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="/Photos Simples/Wiyar Pic.jpg" 
                alt="Wiyar Ahmad Zai" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 animate-pulse">
            Wiyar Ahmad Zai
          </h1>
          
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Computer Science Student at Kabul Polytechnic University
          </p>
          
          <p className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto">
            Information Systems Department
          </p>
          
          <div className="mt-6 bg-gray-800 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-gray-300">
              Full-Stack Developer with expertise in modern web technologies. 
              Passionate about creating innovative solutions and building impactful applications.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-blue-400 font-medium">22+ Projects</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-purple-400 font-medium">Full-Stack Developer</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-full">
              <span className="text-green-400 font-medium">Open Source Contributor</span>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              to="/projects" 
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-white hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 text-center shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="flex items-center mb-4">
                  <i className={`${skill.icon} text-2xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent mr-3`}></i>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-2.5 rounded-full`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-right mt-2">{skill.percentage}%</p>
                <div className="mt-4">
                  <p className="text-gray-300 text-sm">
                    {skill.name === "Frontend Development" && "React, Vue.js, Tailwind CSS, Bootstrap"}
                    {skill.name === "Backend Development" && "Node.js, Express, Python, PHP"}
                    {skill.name === "Database Design" && "MySQL, MongoDB, PostgreSQL, SQLite"}
                    {skill.name === "Mobile Development" && "React Native, Flutter, Android"}
                    {skill.name === "UI/UX Design" && "Figma, Adobe XD, Sketch"}
                    {skill.name === "Version Control" && "Git, GitHub, GitLab"}
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
    </div>
  );
};

export default Home;