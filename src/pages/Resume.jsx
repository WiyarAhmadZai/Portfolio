import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { customSkills } = useData();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate PDF Resume using direct print functionality
  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      console.log('Starting PDF generation...');
      
      // Get the current date
      const currentDate = new Date().toLocaleDateString();
      console.log('Current date:', currentDate);
      
      // Check if skills data exists
      console.log('Skills data:', skills);
      console.log('Experience data:', experience);
      console.log('Education data:', education);
      console.log('Projects data:', projects);
      
      if (!skills || !skills.technical || !skills.soft) {
        throw new Error('Skills data is missing');
      }
      
      if (!experience || !Array.isArray(experience)) {
        throw new Error('Experience data is missing');
      }
      
      if (!education || !Array.isArray(education)) {
        throw new Error('Education data is missing');
      }
      
      if (!projects || !Array.isArray(projects)) {
        throw new Error('Projects data is missing');
      }
      
      console.log('All data validation passed');
      
      // Get the base URL for images
      const baseUrl = window.location.origin;
      const imagePath = `${baseUrl}/Photos Simples/Wiyar Pic.jpg`;
      
      console.log('Image path:', imagePath);
      
      // Create a hidden div with the resume content
      const resumeDiv = document.createElement('div');
      resumeDiv.id = 'resume-print-content';
      resumeDiv.style.position = 'absolute';
      resumeDiv.style.left = '-9999px';
      resumeDiv.style.top = '-9999px';
      resumeDiv.style.width = '210mm'; // A4 width
      resumeDiv.style.minHeight = '297mm'; // A4 height
      resumeDiv.style.backgroundColor = 'white';
      resumeDiv.style.padding = '0';
      resumeDiv.style.fontFamily = 'Arial, sans-serif';
      resumeDiv.style.lineHeight = '1.4';
      resumeDiv.style.color = '#333';
      resumeDiv.style.margin = '0';
      
      // Create the HTML content for the PDF
      resumeDiv.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          @page {
            margin: 0.5in;
            size: A4;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.4;
            color: #333;
            background: white;
          }
          
          .resume-container {
            max-width: 100%;
            margin: 0 auto;
            background: white;
            padding: 0;
          }
          
          .header {
            background: linear-gradient(135deg, #3B82F6, #1E40AF);
            color: white;
            padding: 25px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 25px;
            page-break-inside: avoid;
          }
          
          .profile-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid white;
            object-fit: cover;
            flex-shrink: 0;
          }
          
          .header-content {
            flex: 1;
          }
          
          .header-content h1 {
            font-size: 28px;
            margin: 0 0 8px 0;
            font-weight: bold;
          }
          
          .header-content h2 {
            font-size: 16px;
            margin: 0 0 5px 0;
            opacity: 0.9;
          }
          
          .header-content p {
            font-size: 13px;
            margin: 0 0 10px 0;
            opacity: 0.8;
          }
          
          .contact-info {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 10px;
          }
          
          .contact-item {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 11px;
          }
          
          .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
          }
          
          .section-title {
            font-size: 16px;
            font-weight: bold;
            color: #3B82F6;
            border-bottom: 2px solid #3B82F6;
            padding-bottom: 4px;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          
          .skill-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 6px;
          }
          
          .skill-name {
            font-weight: bold;
            font-size: 12px;
            flex: 1;
          }
          
          .skill-level {
            color: #10B981;
            font-size: 11px;
            margin-right: 8px;
          }
          
          .progress-bar {
            width: 60px;
            height: 4px;
            background: #E5E7EB;
            border-radius: 2px;
            overflow: hidden;
          }
          
          .progress-fill {
            height: 100%;
            background: #10B981;
            border-radius: 2px;
          }
          
          .experience-item {
            margin-bottom: 15px;
            page-break-inside: avoid;
          }
          
          .job-title {
            font-size: 14px;
            font-weight: bold;
            color: #1F2937;
            margin: 0;
          }
          
          .company {
            font-size: 12px;
            color: #10B981;
            font-weight: 600;
            margin: 2px 0;
          }
          
          .period {
            font-size: 11px;
            color: #6B7280;
            margin: 2px 0 6px 0;
          }
          
          .description {
            font-size: 11px;
            line-height: 1.4;
            color: #374151;
          }
          
          .education-item {
            margin-bottom: 12px;
          }
          
          .degree {
            font-size: 13px;
            font-weight: bold;
            color: #1F2937;
            margin: 0;
          }
          
          .institution {
            font-size: 11px;
            color: #10B981;
            font-weight: 600;
            margin: 2px 0;
          }
          
          .gpa {
            font-size: 10px;
            color: #6B7280;
            margin: 2px 0;
          }
          
          .project-item {
            margin-bottom: 12px;
          }
          
          .project-title {
            font-size: 12px;
            font-weight: bold;
            color: #1F2937;
            margin: 0;
          }
          
          .technologies {
            font-size: 10px;
            color: #10B981;
            margin: 2px 0;
          }
          
          .soft-skills {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          
          .soft-skill {
            background: #F3F4F6;
            padding: 3px 6px;
            border-radius: 8px;
            font-size: 10px;
            color: #374151;
          }
          
          .summary-text {
            font-size: 11px;
            line-height: 1.4;
            color: #374151;
            text-align: justify;
          }
          
          .footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #E5E7EB;
            text-align: center;
            font-size: 9px;
            color: #9CA3AF;
          }
          
          @media print {
            .resume-container {
              width: 100%;
              max-width: none;
            }
            
            .section {
              page-break-inside: avoid;
            }
            
            .header {
              page-break-inside: avoid;
            }
          }
        </style>
        
        <div class="resume-container">
          <div class="header">
            <img src="${imagePath}" alt="Wiyar Ahmad Zai" class="profile-img" onerror="this.style.display='none'" />
            <div class="header-content">
              <h1>Wiyar Ahmad Zai</h1>
              <h2>Full-Stack Web Developer</h2>
              <p>Computer Science Student | Kabul Polytechnic University</p>
              <div class="contact-info">
                <div class="contact-item">📧 wiyar.ahmadzai@email.com</div>
                <div class="contact-item">📱 +93 70 123 4567</div>
                <div class="contact-item">📍 Kabul, Afghanistan</div>
                <div class="contact-item">🔗 linkedin.com/in/wiyar-ahmadzai</div>
                <div class="contact-item">💻 github.com/WiyarAhmadZai</div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="summary-text">
              Dedicated Computer Science student at Kabul Polytechnic University with a strong foundation in both theoretical and practical aspects of computer science. Experienced in full-stack web development with expertise in modern technologies including React, Node.js, and MongoDB. Passionate about creating innovative solutions and building impactful applications. Demonstrated ability to deliver high-quality projects with a focus on user experience and performance optimization. Committed to continuous learning and professional growth in the field of software development.
            </div>
          </div>

          <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
              <div>
                ${skills.technical.slice(0, Math.ceil(skills.technical.length / 2)).map(skill => `
                  <div class="skill-item">
                    <span class="skill-name">${skill.name || 'Skill'}</span>
                    <div style="display: flex; align-items: center;">
                      <span class="skill-level">${skill.level || 0}%</span>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: ${skill.level || 0}%"></div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div>
                ${skills.technical.slice(Math.ceil(skills.technical.length / 2)).map(skill => `
                  <div class="skill-item">
                    <span class="skill-name">${skill.name || 'Skill'}</span>
                    <div style="display: flex; align-items: center;">
                      <span class="skill-level">${skill.level || 0}%</span>
                      <div class="progress-bar">
                        <div class="progress-fill" style="width: ${skill.level || 0}%"></div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Soft Skills</div>
            <div class="soft-skills">
              ${skills.soft.map(skill => `<span class="soft-skill">${skill || 'Skill'}</span>`).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Professional Experience</div>
            ${experience.map(exp => `
              <div class="experience-item">
                <div class="job-title">${exp.title || 'Position'}</div>
                <div class="company">${exp.company || 'Company'}</div>
                <div class="period">${exp.period || 'Period'} | ${exp.location || 'Location'}</div>
                <div class="description">${exp.description || 'No description available'}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            ${education.map(edu => `
              <div class="education-item">
                <div class="degree">${edu.degree || 'Degree'}</div>
                <div class="institution">${edu.institution || 'Institution'}</div>
                <div class="gpa">${edu.period || 'Period'} | GPA: ${edu.gpa || 'N/A'}</div>
                ${edu.courses && Array.isArray(edu.courses) ? `<div style="font-size: 10px; color: #6B7280; margin-top: 3px;">Key Courses: ${edu.courses.slice(0, 5).join(', ')}</div>` : ''}
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Key Projects</div>
            ${projects.slice(0, 4).map(project => `
              <div class="project-item">
                <div class="project-title">${project.title || 'Untitled Project'}</div>
                <div class="technologies">Technologies: ${Array.isArray(project.technologies) ? project.technologies.join(', ') : (project.technologies || 'Not specified')}</div>
                <div class="description">${project.description || 'No description available'}</div>
              </div>
            `).join('')}
          </div>

          <div class="footer">
            <p>Generated by Wiyar Ahmad Zai Portfolio | ${currentDate}</p>
          </div>
        </div>
      `;

      console.log('HTML content created, length:', resumeDiv.innerHTML.length);

      // Add the resume div to the document
      document.body.appendChild(resumeDiv);
      
      // Wait for the image to load, then trigger print
      setTimeout(() => {
        // Trigger print dialog
        window.print();
        
        // Remove the resume div after printing
        setTimeout(() => {
          document.body.removeChild(resumeDiv);
        }, 1000);
      }, 1000); // Wait 1 second for image to load
      
      // Show success message
      alert('Resume PDF generation started! Print dialog will open. Choose "Save as PDF" to save your resume.');
      console.log('PDF generation initiated');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      alert(`Error generating PDF: ${error.message}. Please check the console for details.`);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Professional summary
  const professionalSummary = `
    Dedicated Computer Science student at Kabul Polytechnic University with a strong foundation in both theoretical and practical aspects of computer science. 
    Experienced in full-stack web development with expertise in modern technologies including React, Node.js, and MongoDB. 
    Passionate about creating innovative solutions and building impactful applications. 
    Demonstrated ability to deliver high-quality projects with a focus on user experience and performance optimization. 
    Committed to continuous learning and professional growth in the field of software development.
  `;

  // Skills data - combine default and custom skills
  const defaultSkills = {
    technical: [
      { name: "Full Stack Web Development", level: 95 },
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript & React.js", level: 90 },
      { name: "Next.js & PHP", level: 85 },
      { name: "Laravel & Django", level: 80 },
      { name: "Database Design", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Bootstrap & Tailwind CSS", level: 90 },
      { name: "Python & MongoDB", level: 75 },
      { name: "Soft Skills", level: 85 }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration", 
      "Communication",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
      "Leadership",
      "Project Management"
    ]
  };

  // Add custom skills to technical skills
  const customTechnicalSkills = customSkills
    .filter(skill => skill.category === 'Technical' || skill.category === 'Tools' || skill.category === 'Frameworks' || skill.category === 'Languages')
    .map(skill => ({ name: skill.name, level: skill.percentage }));

  const customSoftSkills = customSkills
    .filter(skill => skill.category === 'Soft Skills')
    .map(skill => skill.name);

  const skills = {
    technical: [...defaultSkills.technical, ...customTechnicalSkills],
    soft: [...defaultSkills.soft, ...customSoftSkills]
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
      issuer: "Hushmand Shahar Technology",
      date: "2025",
      credential: "Certified",
      pdfFile: "/certificates/Work-Experience_Hushmand.pdf"
    },
    {
      name: "React Native Mobile Development",
      issuer: "Coursera",
      date: "2023",
      credential: "Certified",
      pdfFile: "/certificates/react-native-development.pdf"
    },
    {
      name: "Cloud Computing with AWS",
      issuer: "LinkedIn Learning",
      date: "2023",
      credential: "Certified",
      pdfFile: "/certificates/aws-cloud-computing.pdf"
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "Stanford Online",
      date: "2022",
      credential: "Certified",
      pdfFile: "/certificates/machine-learning-fundamentals.pdf"
    },
    {
      name: "DevOps Engineering Essentials",
      issuer: "Google Cloud",
      date: "2022",
      credential: "Certified",
      pdfFile: "/certificates/devops-essentials.pdf"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      date: "2021",
      credential: "Certified",
      pdfFile: "/certificates/cybersecurity-fundamentals.pdf"
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
                  <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <i className="fas fa-certificate text-yellow-500 text-2xl mr-3"></i>
                      <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                    </div>
                    <p className="text-blue-400 font-medium">{cert.issuer}</p>
                    <div className="flex justify-between mt-3 mb-4">
                      <span className="text-gray-400 text-sm">Issued: {cert.date}</span>
                      <span className="text-gray-500 text-xs">ID: {cert.credential}</span>
                    </div>
                    <button
                      onClick={() => window.open(cert.pdfFile, '_blank')}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <i className="fas fa-file-pdf mr-2"></i>
                      Download Certificate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Download Resume */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className={`inline-flex items-center px-8 py-4 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg ${
              isGeneratingPDF 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
            }`}
          >
            {isGeneratingPDF ? (
              <>
                <i className="fas fa-spinner fa-spin mr-3"></i>
                Generating PDF...
              </>
            ) : (
              <>
                <i className="fas fa-download mr-3"></i>
                Download Resume (PDF)
              </>
            )}
          </button>
          <p className="text-gray-400 mt-4">Generate PDF resume with your profile image and all data</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;