import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTwitter, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6 text-white" />,
      title: "Email",
      value: "mrwiyarahmadzai@gmail.com",
      action: "Send an Email",
      link: "mailto:mrwiyarahmadzai@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaPhone className="h-6 w-6 text-white" />,
      title: "Phone",
      value: "+93 776 992 603",
      action: "Call Me",
      link: "tel:+93776992603",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaWhatsapp className="h-6 w-6 text-white" />,
      title: "WhatsApp",
      value: "+93 776 992 603",
      action: "Chat on WhatsApp",
      link: "https://wa.me/93776992603",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-white" />,
      title: "Location",
      value: "Kabul, Afghanistan",
      action: "View on Map",
      link: "#",
      color: "from-blue-500 to-purple-600"
    }
  ];

  // Social media links
  const socialMedia = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-5 w-5" />,
      url: "https://github.com/WiyarAhmadZai",
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/mr-wiyar-ahmad-zai-290b102a1/",
      color: "bg-blue-700 hover:bg-blue-600"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="h-5 w-5" />,
      url: "#",
      color: "bg-blue-500 hover:bg-blue-400"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="h-5 w-5" />,
      url: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="h-5 w-5" />,
      url: "#",
      color: "bg-blue-600 hover:bg-blue-500"
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="h-5 w-5" />,
      url: "#",
      color: "bg-blue-400 hover:bg-blue-300"
    }
  ];

  // Services offered
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and interactive websites using modern technologies.",
      icon: "fa-laptop-code",
      features: [
        "Frontend Development (React, Vue.js)",
        "Backend Development (Node.js, Express)",
        "Database Design (MongoDB, PostgreSQL)",
        "API Development & Integration"
      ]
    },
    {
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications for iOS and Android.",
      icon: "fa-mobile-alt",
      features: [
        "React Native Development",
        "Flutter Applications",
        "iOS & Android Support",
        "App Store Deployment"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences.",
      icon: "fa-paint-brush",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "Interactive Design Systems",
        "Usability Testing"
      ]
    },
    {
      title: "Database Design",
      description: "Creating efficient database schemas and optimizing queries.",
      icon: "fa-database",
      features: [
        "Relational Database Design",
        "NoSQL Database Solutions",
        "Performance Optimization",
        "Backup & Recovery Strategies"
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary based on complexity, but typically range from 2-8 weeks for most web applications. I provide detailed timelines after initial consultation."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React, Node.js, MongoDB, and mobile development with React Native. I'm also proficient in Python, PHP, and various database technologies."
    },
    {
      question: "Do you offer maintenance support?",
      answer: "Yes, I provide ongoing maintenance and support packages for all completed projects. This includes bug fixes, updates, and performance optimization."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing is project-based and depends on scope, complexity, and timeline. I provide detailed quotes after initial consultation. I also offer flexible payment plans for larger projects."
    },
    {
      question: "Can you work remotely?",
      answer: "Yes, I work remotely with clients worldwide. I use modern collaboration tools to ensure seamless communication and project management."
    },
    {
      question: "Do you provide documentation?",
      answer: "Yes, I provide comprehensive documentation for all projects including technical documentation, user guides, and deployment instructions."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, creative projects or potential collaborations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 bg-gradient-to-r ${contact.color} p-3 rounded-lg`}>
                      {contact.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{contact.title}</h3>
                      <p className="text-gray-300">{contact.value}</p>
                      <a 
                        href={contact.link} 
                        target={contact.title === "Location" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm"
                      >
                        {contact.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <p className="text-gray-300 mb-6">
                  Follow me on social media to stay updated with my latest projects and activities.
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center ${social.color} text-white px-4 py-2 rounded-lg transition duration-300`}
                    >
                      {social.icon}
                      <span className="ml-2">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-4">Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg">
                      <div className="text-blue-500 text-xl mb-2">
                        <i className={`fas ${service.icon}`}></i>
                      </div>
                      <h4 className="text-white font-medium mb-1">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-300">Currently available for freelance projects</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-300">Open to internship and job opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-300">Available for collaboration on open-source projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 text-xl mr-3"></i>
                    <span className="text-green-300">Your message has been sent successfully! I'll get back to you soon.</span>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-circle text-red-500 text-xl mr-3"></i>
                    <span className="text-red-300">There was an error sending your message. Please try again.</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i> Send Message
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, 
                  please contact me via email at mrwiyarahmadzai@gmail.com or WhatsApp at +93 776 992 603.
                </p>
                
                <div className="mt-6 bg-gray-900 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">Preferred Contact Methods</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fas fa-envelope text-blue-500 mr-2"></i>
                      <span className="text-gray-300">Email for project inquiries</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fab fa-whatsapp text-green-500 mr-2"></i>
                      <span className="text-gray-300">WhatsApp for quick questions</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fab fa-linkedin text-blue-600 mr-2"></i>
                      <span className="text-gray-300">LinkedIn for professional networking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-500 hover:scale-105">
                <div className="text-4xl text-blue-500 mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400 text-sm">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2 text-xs"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className={`mt-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">Still have questions? Feel free to reach out directly!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:mrwiyarahmadzai@gmail.com" 
                  className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  <i className="fas fa-envelope mr-2"></i> Email Me
                </a>
                <a 
                  href="https://wa.me/93776992603" 
                  className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;