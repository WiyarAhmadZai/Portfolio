import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Professional summary
  const professionalSummary = `
    Dedicated Computer Science student at Kabul Polytechnic University with a strong foundation in both theoretical and practical aspects of computer science. 
    Experienced in full-stack web development with expertise in modern technologies including React, Node.js, and MongoDB. 
    Passionate about creating innovative solutions and building impactful applications. 
    Demonstrated ability to deliver high-quality projects with a focus on user experience and performance optimization. 
    Committed to continuous learning and professional growth in the field of software development.
  `;

  // Skills data
  const skills = {
    technical: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "HTML/CSS", level: 95 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Git", level: 85 }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Time Management",
      "Adaptability",
      "Critical Thinking"
    ]
  };

  // Experience data
  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2020 - Present",
      location: "Remote",
      description: "Developed and maintained multiple web applications for clients, focusing on responsive design and user experience.",
      responsibilities: [
        "Designed and implemented responsive user interfaces using React and Tailwind CSS",
        "Built RESTful APIs with Node.js and Express for backend services",
        "Integrated MongoDB and PostgreSQL databases for data storage and retrieval",
        "Implemented authentication and authorization systems for secure user access",
        "Optimized application performance through code splitting and lazy loading",
        "Collaborated with clients to gather requirements and provide technical solutions"
      ],
      achievements: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Reduced application load time by 40% through optimization techniques",
        "Implemented CI/CD pipelines for automated deployment processes"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Tech Solutions Afghanistan",
      period: "2022 - 2023",
      location: "Kabul, Afghanistan",
      description: "Worked on frontend and backend development tasks, collaborated with senior developers on enterprise projects.",
      responsibilities: [
        "Developed interactive web components using JavaScript and React",
        "Assisted in database design and implementation using MySQL",
        "Participated in code reviews and team meetings",
        "Created documentation for development processes and APIs",
        "Troubleshot and debugged existing applications",
        "Contributed to agile development processes and sprint planning"
      ],
      achievements: [
        "Contributed to 3 major enterprise applications used by 500+ users",
        "Learned and implemented modern development practices and methodologies",
        "Received recognition for outstanding problem-solving abilities"
      ]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kabul Polytechnic University",
      period: "2020 - Present",
      location: "Kabul, Afghanistan",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Artificial Intelligence",
        "Cybersecurity"
      ],
      achievements: [
        "Dean's List Recognition (2022, 2023)",
        "Academic Excellence Award (2023)",
        "Project Competition Winner (2022)"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Kabul Education Institute",
      period: "2018 - 2020",
      location: "Kabul, Afghanistan",
      gpa: "3.9/4.0",
      coursework: [
        "Mathematics",
        "Physics",
        "Computer Science Fundamentals",
        "English Literature"
      ],
      achievements: [
        "Top 5% of Class",
        "Mathematics Olympiad Participant",
        "Science Fair Winner"
      ]
    }
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      technologies: "React, Node.js, MongoDB, Express",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      highlights: [
        "Implemented user authentication and authorization systems",
        "Integrated Stripe payment processing for secure transactions",
        "Developed responsive UI with React and Tailwind CSS",
        "Created admin dashboard for product and order management"
      ]
    },
    {
      title: "Task Management App",
      technologies: "React Native, Firebase, Redux",
      description: "A productivity application for managing personal and team tasks with real-time collaboration.",
      highlights: [
        "Built cross-platform mobile application for iOS and Android",
        "Implemented real-time data synchronization with Firebase",
        "Designed intuitive user interface with smooth animations",
        "Added push notifications for task reminders"
      ]
    },
    {
      title: "University Management System",
      technologies: "Java, MySQL, JavaFX",
      description: "An integrated system for managing student records, courses, and faculty information.",
      highlights: [
        "Designed complex database schema for efficient data management",
        "Implemented role-based access control for different user types",
        "Created intuitive desktop interface with JavaFX",
        "Generated detailed reports and analytics for administration"
      ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      credential: "FSWD-2023-001"
    },
    {
      name: "React Specialization",
      issuer: "Udemy",
      date: "2022",
      credential: "REACT-2022-002"
    },
    {
      name: "Database Design Fundamentals",
      issuer: "LinkedIn Learning",
      date: "2021",
      credential: "DBDF-2021-003"
    }
  ];

  // Languages data
  const languages = [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Dari", proficiency: "Native", level: 100 },
    { name: "Pashto", proficiency: "Intermediate", level: 70 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Professional Resume
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-Stack Developer | Computer Science Student
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Resume Header */}
        <div className={`bg-gray-800 rounded-2xl p-8 mb-12 shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-32 h-32 overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/Photos Simples/Wiyar Pic.jpg" 
                  alt="Wiyar Ahmad Zai" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">Wiyar Ahmad Zai</h2>
              <p className="text-xl text-blue-400 mb-4">Full-Stack Developer</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300">
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-2 text-blue-400"></i>
                  <span>mrwiyarahmadzai@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone mr-2 text-blue-400"></i>
                  <span>+93 776 992 603</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-blue-400"></i>
                  <span>Kabul, Afghanistan</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href="https://github.com/WiyarAhmadZai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                >
                  <i className="fab fa-github mr-1"></i> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mr-wiyar-ahmad-zai-290b102a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                >
                  <i className="fab fa-linkedin mr-1"></i> LinkedIn
                </a>
                <a 
                  href="https://wa.me/93776992603" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full text-sm transition duration-300"
                >
                  <i className="fab fa-whatsapp mr-1"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {['summary', 'skills', 'experience', 'education', 'projects', 'certifications'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                activeSection === section
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Resume Content */}
        <div className={`bg-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Professional Summary */}
          {activeSection === 'summary' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Professional Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{professionalSummary}</p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 p-5 rounded-xl">
                  <div className="text-3xl font-bold text-blue-400 mb-2">22+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="bg-gray-900 p-5 rounded-xl">
                  <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gray-900 p-5 rounded-xl">
                  <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                  <div className="text-gray-300">GitHub Contributions</div>
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.technical.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Soft Skills</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.soft.map((skill, index) => (
                      <div key={index} className="bg-gray-900 px-4 py-2 rounded-lg text-center">
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">Languages</h3>
                  <div className="space-y-4">
                    {languages.map((language, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{language.name}</span>
                          <span className="text-gray-400">{language.proficiency}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full" 
                            style={{ width: `${language.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeSection === 'experience' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Work Experience</h2>
              <div className="space-y-10">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6 relative">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                      <div className="flex flex-wrap gap-4 mt-1 text-gray-400">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                      <p className="text-gray-300 mt-3">{job.description}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-200 mt-4 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-chevron-circle-right text-blue-500 mt-1 mr-2 text-sm"></i>
                            <span className="text-gray-300">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <h4 className="text-lg font-semibold text-gray-200 mt-4 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fas fa-trophy text-yellow-500 mt-1 mr-2 text-sm"></i>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeSection === 'education' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Education</h2>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6 pb-6 relative">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500"></div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-purple-400 font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-1 text-gray-400">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-200 mt-4 mb-2">Relevant Coursework:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.coursework.map((course, i) => (
                          <div key={i} className="flex items-center">
                            <i className="fas fa-book text-gray-500 mr-2 text-sm"></i>
                            <span className="text-gray-300">{course}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-200 mt-4 mb-2">Achievements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center">
                            <i className="fas fa-award text-yellow-500 mr-2 text-sm"></i>
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {activeSection === 'projects' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Key Projects</h2>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-blue-400 mt-1">{project.technologies}</p>
                    <p className="text-gray-300 mt-3">{project.description}</p>
                    
                    <h4 className="text-lg font-semibold text-gray-200 mt-4 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-sm"></i>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/projects" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
                >
                  View All Projects
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          )}

          {/* Certifications */}
          {activeSection === 'certifications' && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-gray-700">Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-certificate text-yellow-500 text-2xl mr-3"></i>
                      <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                    </div>
                    <p className="text-blue-400 font-medium">{cert.issuer}</p>
                    <div className="flex justify-between mt-3">
                      <span className="text-gray-400 text-sm">Issued: {cert.date}</span>
                      <span className="text-gray-500 text-xs">ID: {cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Download Resume */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg">
            <i className="fas fa-download mr-3"></i>
            Download Full Resume (PDF)
          </button>
          <p className="text-gray-400 mt-4">Last updated: September 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;