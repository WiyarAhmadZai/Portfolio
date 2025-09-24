import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Expanded projects data with more projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
      image: "/Photos Simples/1716635911147.jpg",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/WiyarAhmadZai/ecommerce-platform",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for product management"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Optimizing database queries for performance",
        "Creating responsive design for all devices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for managing personal and team tasks with real-time collaboration features.",
      image: "/Photos Simples/1716636073552.jpg",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/WiyarAhmadZai/task-manager",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "User authentication",
        "Task creation and management",
        "Real-time collaboration",
        "Push notifications",
        "Offline support"
      ],
      challenges: [
        "Implementing real-time synchronization",
        "Managing offline data storage",
        "Optimizing app performance on low-end devices"
      ],
      technologies: ["React Native", "Firebase", "Redux", "Push Notifications"]
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern responsive portfolio website with animations and interactive elements.",
      image: "/Photos Simples/Cute Photo.jpg",
      category: "web",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/WiyarAhmadZai/portfolio",
      demo: "#",
      status: "In Progress",
      date: "2024",
      features: [
        "Responsive design",
        "Smooth animations",
        "Project showcase",
        "Contact form",
        "Dark mode support"
      ],
      challenges: [
        "Creating smooth animations with CSS",
        "Ensuring cross-browser compatibility",
        "Optimizing for SEO and performance"
      ],
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion"]
    },
    {
      id: 4,
      title: "University Management System",
      description: "An integrated system for managing student records, courses, and faculty information.",
      image: "/Photos Simples/20240328_124412.jpg",
      category: "desktop",
      tech: ["Java", "MySQL", "JavaFX"],
      github: "https://github.com/WiyarAhmadZai/university-management",
      demo: "#",
      status: "Completed",
      date: "2022",
      features: [
        "Student information management",
        "Course registration system",
        "Grade management",
        "Faculty portal",
        "Report generation"
      ],
      challenges: [
        "Designing complex database relationships",
        "Implementing role-based access control",
        "Creating intuitive user interface"
      ],
      technologies: ["Java", "MySQL", "JavaFX", "JDBC"]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "A responsive weather application that provides current and forecasted weather information.",
      image: "/Photos Simples/1716636073552.jpg",
      category: "web",
      tech: ["React", "OpenWeather API", "CSS3"],
      github: "https://github.com/WiyarAhmadZai/weather-app",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "Current weather display",
        "5-day forecast",
        "Location-based weather",
        "Search functionality",
        "Responsive design"
      ],
      challenges: [
        "Working with external API limitations",
        "Handling API rate limiting",
        "Creating visually appealing weather icons"
      ],
      technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"]
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics and scheduling features.",
      image: "/Photos Simples/1716635911147.jpg",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "https://github.com/WiyarAhmadZai/social-dashboard",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "Multi-platform social media integration",
        "Analytics dashboard",
        "Content scheduling",
        "Performance metrics",
        "Team collaboration tools"
      ],
      challenges: [
        "Integrating with multiple social media APIs",
        "Creating real-time data visualization",
        "Implementing secure authentication"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "OAuth"]
    },
    {
      id: 7,
      title: "Fitness Tracker",
      description: "A mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/Photos Simples/Cute Photo.jpg",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/WiyarAhmadZai/fitness-tracker",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "Workout tracking",
        "Nutrition logging",
        "Progress visualization",
        "Goal setting",
        "Social sharing"
      ],
      challenges: [
        "Implementing complex data visualization",
        "Ensuring data privacy and security",
        "Creating engaging user experience"
      ],
      technologies: ["React Native", "Firebase", "Redux", "HealthKit"]
    },
    {
      id: 8,
      title: "Blog Platform",
      description: "A full-stack blog platform with CMS features, user authentication, and commenting system.",
      image: "/Photos Simples/20240328_124412.jpg",
      category: "web",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/WiyarAhmadZai/blog-platform",
      demo: "#",
      status: "Completed",
      date: "2022",
      features: [
        "User authentication",
        "Content management system",
        "Rich text editor",
        "Commenting system",
        "SEO optimization"
      ],
      challenges: [
        "Implementing rich text editing capabilities",
        "Creating efficient search functionality",
        "Ensuring content security"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Markdown"]
    },
    {
      id: 9,
      title: "Inventory Management System",
      description: "A desktop application for managing inventory with barcode scanning and reporting features.",
      image: "/Photos Simples/1716636073552.jpg",
      category: "desktop",
      tech: ["Java", "SQLite", "JavaFX"],
      github: "https://github.com/WiyarAhmadZai/inventory-system",
      demo: "#",
      status: "Completed",
      date: "2022",
      features: [
        "Product catalog management",
        "Barcode scanning integration",
        "Inventory tracking",
        "Reporting dashboard",
        "Supplier management"
      ],
      challenges: [
        "Integrating with barcode scanning hardware",
        "Creating efficient database queries",
        "Designing intuitive user interface"
      ],
      technologies: ["Java", "SQLite", "JavaFX", "ZXing Library"]
    },
    {
      id: 10,
      title: "Chat Application",
      description: "A real-time chat application with group messaging and file sharing capabilities.",
      image: "/Photos Simples/1716635911147.jpg",
      category: "web",
      tech: ["React", "Socket.io", "Node.js", "Express"],
      github: "https://github.com/WiyarAhmadZai/chat-app",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "File sharing",
        "User presence indicators",
        "Message encryption"
      ],
      challenges: [
        "Implementing real-time communication",
        "Ensuring message security",
        "Handling concurrent connections"
      ],
      technologies: ["React", "Socket.io", "Node.js", "Express", "WebSockets"]
    },
    {
      id: 11,
      title: "Recipe Finder",
      description: "A mobile app that helps users discover recipes based on available ingredients.",
      image: "/Photos Simples/Cute Photo.jpg",
      category: "mobile",
      tech: ["React Native", "Spoonacular API", "Redux"],
      github: "https://github.com/WiyarAhmadZai/recipe-finder",
      demo: "#",
      status: "Completed",
      date: "2023",
      features: [
        "Ingredient-based recipe search",
        "Nutritional information",
        "Cooking instructions",
        "Favorites and bookmarks",
        "Shopping list generator"
      ],
      challenges: [
        "Working with complex recipe APIs",
        "Creating efficient search algorithms",
        "Managing offline data storage"
      ],
      technologies: ["React Native", "Spoonacular API", "Redux", "Async Storage"]
    },
    {
      id: 12,
      title: "E-Learning Platform",
      description: "An online learning platform with course management, video streaming, and progress tracking.",
      image: "/Photos Simples/20240328_124412.jpg",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
      github: "https://github.com/WiyarAhmadZai/e-learning",
      demo: "#",
      status: "In Progress",
      date: "2024",
      features: [
        "Course creation and management",
        "Video streaming",
        "Progress tracking",
        "Quiz and assessment system",
        "Certificate generation"
      ],
      challenges: [
        "Implementing video streaming infrastructure",
        "Creating interactive learning experiences",
        "Ensuring platform scalability"
      ],
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "FFmpeg"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const searchedProjects = filteredProjects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort projects
  const sortedProjects = [...searchedProjects].sort((a, b) => {
    if (sortBy === 'date') {
      return b.date.localeCompare(a.date);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else {
      return a.status.localeCompare(b.status);
    }
  });

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'desktop', name: 'Desktop Apps', count: projects.filter(p => p.category === 'desktop').length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on during my studies and personal development. 
            I have approximately 22 projects hosted on my GitHub profile.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Search and Filter Section */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by title, description, or technology..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2 p-2 bg-gray-800 rounded-lg">
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                    activeFilter === category.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 bg-gray-700 rounded-full px-2 py-0.5 text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <label className="text-gray-300 mr-2">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="status">Status</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {sortedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-500/20 border border-gray-700 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-gray-400 text-sm">{project.date}</span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700 text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-400 text-xs font-medium rounded-full">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 text-sm">
                    View Details
                  </button>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300 flex items-center text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fab fa-github mr-2"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Projects Found */}
        {sortedProjects.length === 0 && (
          <div className={`text-center py-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <i className="fas fa-search text-5xl text-gray-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* GitHub CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Want to see more?</h2>
            <p className="text-gray-300 text-lg mb-6">
              Check out my GitHub profile to see all of my projects and contributions. 
              I have approximately 22 projects showcasing my skills in web development, mobile apps, and desktop applications.
            </p>
            <a 
              href="https://github.com/WiyarAhmadZai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
            >
              <i className="fab fa-github mr-2"></i> View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-xl overflow-hidden mb-6">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-700 text-blue-400 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mb-6">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-300 flex items-center justify-center"
                    >
                      <i className="fab fa-github mr-2"></i> View Code
                    </a>
                    {selectedProject.demo !== "#" && (
                      <a 
                        href={selectedProject.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 flex items-center justify-center"
                      >
                        <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                      </a>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">Technical Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-exclamation-circle text-yellow-500 mt-1 mr-2"></i>
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className="ml-3 text-gray-400">{selectedProject.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;