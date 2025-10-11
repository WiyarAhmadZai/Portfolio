import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');

  useEffect(() => {
    setIsVisible(true);
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

  // Experience data
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      period: "2020 - Present",
      description: "Developed and maintained multiple web applications for clients, focusing on responsive design and user experience. Worked with technologies including React, Node.js, MongoDB, and PostgreSQL.",
      achievements: [
        "Delivered 15+ client projects with 100% satisfaction rate",
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipelines for automated deployment"
      ],
      technologies: ["React", "Node.js", "MongoDB", "PostgreSQL", "Docker"]
    },
    {
      title: "Web Development Intern",
      company: "Tech Solutions Afghanistan",
      period: "2022 - 2023",
      description: "Worked on frontend and backend development tasks, collaborated with senior developers on enterprise projects. Gained experience with agile methodologies and version control systems.",
      achievements: [
        "Contributed to 3 major enterprise applications",
        "Learned and implemented modern development practices",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git"]
    },
    {
      title: "Teaching Assistant",
      company: "Kabul Polytechnic University",
      period: "2021 - 2022",
      description: "Assisted professors in teaching computer science courses, conducted lab sessions, and provided technical support to students. Helped develop curriculum materials for introductory programming courses.",
      achievements: [
        "Mentored 50+ students in programming fundamentals",
        "Developed interactive learning materials",
        "Received excellence in teaching award"
      ],
      technologies: ["Python", "Java", "C++", "MATLAB"]
    }
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kabul Polytechnic University",
      period: "2020 - Present",
      gpa: "3.8/4.0",
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
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
      gpa: "3.9/4.0",
      courses: [
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

  // Volunteer data
  const volunteerWork = [
    {
      role: "Coding Workshop Instructor",
      organization: "Kabul Polytechnic University",
      period: "2023 - Present",
      description: "Teaching programming fundamentals to junior students and organizing coding competitions.",
      impact: "Trained 100+ students in basic programming concepts",
      activities: [
        "Conducted weekly coding workshops",
        "Organized university-wide hackathons",
        "Mentored student projects"
      ]
    },
    {
      role: "Open Source Contributor",
      organization: "GitHub Community",
      period: "2021 - Present",
      description: "Contributing to open-source projects and helping other developers solve technical issues.",
      impact: "Made 500+ contributions to various open-source projects",
      activities: [
        "Bug fixes and feature implementations",
        "Documentation improvements",
        "Code reviews and mentoring"
      ]
    },
    {
      role: "Tech Mentor",
      organization: "Youth Coding Initiative",
      period: "2022 - 2023",
      description: "Mentoring young developers and helping them build their first projects.",
      impact: "Mentored 30+ young developers in their coding journey",
      activities: [
        "One-on-one mentoring sessions",
        "Project guidance and feedback",
        "Career advice and portfolio reviews"
      ]
    }
  ];

  // Certifications data
  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      credential: "FSWD-2023-001",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
    },
    {
      name: "React Specialization",
      issuer: "Udemy",
      date: "2022",
      credential: "REACT-2022-002",
      skills: ["React", "Redux", "Hooks", "Context API"]
    },
    {
      name: "Database Design Fundamentals",
      issuer: "LinkedIn Learning",
      date: "2021",
      credential: "DBDF-2021-003",
      skills: ["SQL", "Database Design", "Normalization", "ER Diagrams"]
    }
  ];

  // Languages data
  const languages = [
    { name: "English", proficiency: "Fluent", level: 90 },
    { name: "Dari", proficiency: "Native", level: 100 },
    { name: "Pashto", proficiency: "Intermediate", level: 70 }
  ];

  // Interests data
  const interests = [
    { name: "Open Source", icon: "fa-code-branch" },
    { name: "AI & Machine Learning", icon: "fa-brain" },
    { name: "Cybersecurity", icon: "fa-shield-alt" },
    { name: "Cloud Computing", icon: "fa-cloud" },
    { name: "Mobile Development", icon: "fa-mobile-alt" },
    { name: "UI/UX Design", icon: "fa-paint-brush" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <img 
                  src="/Photos Simples/Wiyar at Polythechnic.jpg" 
                  alt="Wiyar at Kabul Polytechnic University" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className={`lg:w-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-6">Who am I?</h2>
            <p className="text-gray-300 text-lg mb-6">
              I'm Wiyar Ahmad Zai, a dedicated Computer Science student at Kabul Polytechnic University, specializing in Information Systems. 
              As a passionate full-stack developer, I'm focused on creating innovative web applications that solve real-world problems.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              Throughout my academic journey, I've developed a strong foundation in both theoretical and practical aspects of computer science, 
              with a particular interest in web development, software engineering, and database design. I have approximately 22 projects 
              hosted on my GitHub profile, showcasing my skills and passion for technology.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Education</h3>
                <p className="text-gray-300">BSc in Computer Science</p>
                <p className="text-gray-400">Kabul Polytechnic University</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-purple-400 mb-2">Department</h3>
                <p className="text-gray-300">Information Systems</p>
                <p className="text-gray-400">Computer Science Faculty</p>
              </div>
            </div>
            
            {/* Languages Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="space-y-3">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{language.name}</span>
                      <span className="text-gray-400">{language.proficiency}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-gray-800 px-3 py-2 rounded-full flex items-center">
                    <i className={`fas ${interest.icon} text-blue-400 mr-2`}></i>
                    <span className="text-gray-300">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('volunteer')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'volunteer'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Volunteer Work
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Certifications
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            {activeTab === 'skills' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
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
            )}

            {activeTab === 'experience' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Work Experience</h2>
                <div className="space-y-8">
                  {experiences.map((experience, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 pb-8 relative">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <p className="text-blue-400 font-medium">{experience.company}</p>
                        <p className="text-gray-400 text-sm">{experience.period}</p>
                        <p className="text-gray-300 mt-2">{experience.description}</p>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-200">Key Achievements:</h4>
                          <ul className="mt-2 space-y-1">
                            {experience.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-200">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {experience.technologies.map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Education</h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-purple-500 pl-6 pb-8 relative">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500"></div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-purple-400 font-medium">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.period} | GPA: {edu.gpa}</p>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-200">Relevant Coursework:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {edu.courses.map((course, i) => (
                              <div key={i} className="flex items-center">
                                <i className="fas fa-book text-gray-500 mr-2"></i>
                                <span className="text-gray-300">{course}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-200">Achievements:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {edu.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-center">
                                <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                                <span className="text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'volunteer' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Volunteer Work</h2>
                <div className="space-y-8">
                  {volunteerWork.map((volunteer, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6 pb-8 relative">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-500"></div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-white">{volunteer.role}</h3>
                        <p className="text-green-400 font-medium">{volunteer.organization}</p>
                        <p className="text-gray-400 text-sm">{volunteer.period}</p>
                        <p className="text-gray-300 mt-2">{volunteer.description}</p>
                        <div className="mt-3 flex items-center">
                          <i className="fas fa-bullseye text-yellow-500 mr-2"></i>
                          <span className="text-gray-300">{volunteer.impact}</span>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-lg font-semibold text-gray-200">Activities:</h4>
                          <ul className="mt-2 space-y-1">
                            {volunteer.activities.map((activity, i) => (
                              <li key={i} className="flex items-start">
                                <i className="fas fa-chevron-circle-right text-blue-500 mt-1 mr-2"></i>
                                <span className="text-gray-300">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div>
                <h2 className="text-3xl font-bold text-white text-center mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                      <div className="flex items-center mb-4">
                        <i className="fas fa-certificate text-yellow-500 text-2xl mr-3"></i>
                        <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                      </div>
                      <p className="text-blue-400 font-medium">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mt-2">Issued: {cert.date}</p>
                      <p className="text-gray-500 text-xs mt-2">Credential ID: {cert.credential}</p>
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-200">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Academic Background */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Academic Achievements</h2>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-start mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-6">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Kabul Polytechnic University</h3>
                <p className="text-blue-400 text-lg">Bachelor of Science in Computer Science</p>
                <p className="text-gray-300 mt-2">Information Systems Department</p>
                <p className="text-gray-400 mt-2">Faculty of Computer Science</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-3">Relevant Coursework</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Data Structures & Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Database Management Systems</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Web Development</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Software Engineering</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Computer Networks</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-gray-300">Operating Systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-3">Academic Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                    <span className="text-gray-300">Dean's List Recognition (2022, 2023)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                    <span className="text-gray-300">Academic Excellence Award (2023)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                    <span className="text-gray-300">Project Competition Winner (2022)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                    <span className="text-gray-300">Best Capstone Project (2023)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-trophy text-yellow-500 mr-2"></i>
                    <span className="text-gray-300">Outstanding Peer Mentor (2022)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Research & Publications */}
        <div className={`mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Research & Publications</h2>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 pb-6 relative">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Secure Data Transmission in Cloud Environments</h3>
                  <p className="text-blue-400 font-medium">Kabul Polytechnic University Research Journal</p>
                  <p className="text-gray-400 text-sm">Published: December 2023</p>
                  <p className="text-gray-300 mt-2">
                    Research paper exploring encryption techniques for secure data transmission in cloud computing environments, 
                    focusing on hybrid encryption methods that balance security and performance.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 pb-6 relative">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-purple-500"></div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white">Optimizing Database Performance in Web Applications</h3>
                  <p className="text-purple-400 font-medium">International Conference on Computer Science</p>
                  <p className="text-gray-400 text-sm">Presented: March 2023</p>
                  <p className="text-gray-300 mt-2">
                    Presentation on database optimization techniques for web applications, including indexing strategies, 
                    query optimization, and caching mechanisms to improve application performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;