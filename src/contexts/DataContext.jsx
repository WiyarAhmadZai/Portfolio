import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [projectCategories, setProjectCategories] = useState(['Web Development', 'Mobile Development', 'Desktop Application', 'Data Science']);
  const [blogCategories, setBlogCategories] = useState(['React', 'Node.js', 'CSS', 'JavaScript', 'General']);
  const [customSkills, setCustomSkills] = useState([]);
  const [showAdminAccess, setShowAdminAccess] = useState(false);

  // Check if localStorage is available
  const isLocalStorageAvailable = () => {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Secret key combination to show admin access
  useEffect(() => {
    let keySequence = '';
    // Obfuscated secret code - "mrwiyar" encoded
    const secretCode = btoa('mrwiyar').toLowerCase().slice(0, 7);
    
    const handleKeyPress = (e) => {
      keySequence += e.key.toLowerCase();
      if (keySequence.length > 7) {
        keySequence = keySequence.slice(-7);
      }
      
      if (keySequence === secretCode) {
        setShowAdminAccess(true);
        keySequence = '';
        // Hide after 10 seconds
        setTimeout(() => setShowAdminAccess(false), 10000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      if (!isLocalStorageAvailable()) {
        console.warn('localStorage is not available, using default data');
        initializeDefaultProjects();
        initializeDefaultBlogPosts();
        return;
      }

      try {
        // Load projects
        const savedProjects = localStorage.getItem('portfolio_projects');
        console.log('Loading projects from localStorage:', savedProjects ? 'found' : 'not found');
        
        if (savedProjects && savedProjects !== 'null' && savedProjects !== 'undefined') {
          const parsedProjects = JSON.parse(savedProjects);
          if (Array.isArray(parsedProjects) && parsedProjects.length > 0) {
            setProjects(parsedProjects);
            console.log('Loaded projects:', parsedProjects.length);
          } else {
            console.log('No valid projects found, initializing defaults');
            initializeDefaultProjects();
          }
        } else {
          console.log('No saved projects found, initializing defaults');
          initializeDefaultProjects();
        }

        // Load blog posts
        const savedBlogPosts = localStorage.getItem('portfolio_blog_posts');
        console.log('Loading blog posts from localStorage:', savedBlogPosts ? 'found' : 'not found');
        
        if (savedBlogPosts && savedBlogPosts !== 'null' && savedBlogPosts !== 'undefined') {
          const parsedBlogPosts = JSON.parse(savedBlogPosts);
          if (Array.isArray(parsedBlogPosts) && parsedBlogPosts.length > 0) {
            setBlogPosts(parsedBlogPosts);
            console.log('Loaded blog posts:', parsedBlogPosts.length);
          } else {
            console.log('No valid blog posts found, initializing defaults');
            initializeDefaultBlogPosts();
          }
        } else {
          console.log('No saved blog posts found, initializing defaults');
          initializeDefaultBlogPosts();
        }

        // Load admin status
        const adminStatus = localStorage.getItem('portfolio_admin_mode');
        setIsAdmin(adminStatus === 'true');
        console.log('Admin mode:', adminStatus === 'true');

        // Load categories
        const savedProjectCategories = localStorage.getItem('portfolio_project_categories');
        if (savedProjectCategories) {
          setProjectCategories(JSON.parse(savedProjectCategories));
        }

        const savedBlogCategories = localStorage.getItem('portfolio_blog_categories');
        if (savedBlogCategories) {
          setBlogCategories(JSON.parse(savedBlogCategories));
        }

        // Load custom skills
        const savedCustomSkills = localStorage.getItem('portfolio_custom_skills');
        if (savedCustomSkills && savedCustomSkills !== 'null' && savedCustomSkills !== 'undefined') {
          const parsedCustomSkills = JSON.parse(savedCustomSkills);
          if (Array.isArray(parsedCustomSkills)) {
            setCustomSkills(parsedCustomSkills);
          }
        } else {
          setCustomSkills([]);
        }
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
        // Initialize with defaults if there's an error
        initializeDefaultProjects();
        initializeDefaultBlogPosts();
      }
    };

    const initializeDefaultProjects = () => {
      const defaultProjects = [
        {
          id: 1,
          title: "E-Commerce Platform",
          description: "A full-featured online shopping platform with payment integration, user authentication, and admin dashboard.",
          image: "/Photos Simples/1716635911147.jpg",
          imageFileName: "",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          category: "Web Development",
          status: "Completed",
          githubUrl: "https://github.com/WiyarAhmadZai/ecommerce-platform",
          liveUrl: "https://ecommerce-demo.com",
          featured: true,
          date: "2024-01-15"
        },
        {
          id: 2,
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates and team collaboration features.",
          image: "/Photos Simples/Cute Photo.jpg",
          imageFileName: "",
          technologies: ["React", "Firebase", "Material-UI"],
          category: "Web Development",
          status: "Completed",
          githubUrl: "https://github.com/WiyarAhmadZai/task-manager",
          liveUrl: "https://taskmanager-demo.com",
          featured: true,
          date: "2024-02-20"
        }
      ];
      setProjects(defaultProjects);
      localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
    };

    const initializeDefaultBlogPosts = () => {
      // Start with empty blog posts - only show posts added through admin
      const defaultBlogPosts = [];
      setBlogPosts(defaultBlogPosts);
      localStorage.setItem('portfolio_blog_posts', JSON.stringify(defaultBlogPosts));
    };

    loadData();
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (projects.length > 0) {
      try {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
        console.log('Projects saved to localStorage:', projects.length);
      } catch (error) {
        console.error('Error saving projects to localStorage:', error);
      }
    }
  }, [projects]);

  useEffect(() => {
    if (blogPosts.length > 0) {
      try {
        localStorage.setItem('portfolio_blog_posts', JSON.stringify(blogPosts));
        console.log('Blog posts saved to localStorage:', blogPosts.length);
      } catch (error) {
        console.error('Error saving blog posts to localStorage:', error);
      }
    }
  }, [blogPosts]);

  useEffect(() => {
    if (customSkills.length >= 0) {
      try {
        localStorage.setItem('portfolio_custom_skills', JSON.stringify(customSkills));
        console.log('Custom skills saved to localStorage:', customSkills.length);
      } catch (error) {
        console.error('Error saving custom skills to localStorage:', error);
      }
    }
  }, [customSkills]);

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_admin_mode', isAdmin.toString());
    } catch (error) {
      console.error('Error saving admin mode to localStorage:', error);
    }
  }, [isAdmin]);

  // Project management functions
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      imageFileName: project.imageFileName || ''
    };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updatedProject } : project
    ));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  // Blog post management functions
  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      published: true
    };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const updateBlogPost = (id, updatedPost) => {
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    ));
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  // Admin functions
  const toggleAdminMode = () => {
    setIsAdmin(prev => !prev);
  };

  const loginAdmin = (password) => {
    // Secure password check - password is obfuscated
    const hashedPassword = btoa('mrwiyar123'); // Base64 encoding for basic obfuscation
    const inputHash = btoa(password);
    
    if (inputHash === hashedPassword) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  // Debug function to clear all data (for testing)
  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      localStorage.removeItem('portfolio_projects');
      localStorage.removeItem('portfolio_blog_posts');
      localStorage.removeItem('portfolio_images');
      localStorage.removeItem('portfolio_admin_mode');
      localStorage.removeItem('portfolio_project_categories');
      localStorage.removeItem('portfolio_blog_categories');
      setProjects([]);
      setBlogPosts([]);
      setIsAdmin(false);
      setProjectCategories(['Web Development', 'Mobile Development', 'Desktop Application', 'Data Science']);
      setBlogCategories(['React', 'Node.js', 'CSS', 'JavaScript', 'General']);
      console.log('All data cleared');
    }
  };

  // Function to clear only blog posts
  const clearBlogPosts = () => {
    if (window.confirm('Are you sure you want to clear all blog posts? This cannot be undone.')) {
      setBlogPosts([]);
      localStorage.setItem('portfolio_blog_posts', JSON.stringify([]));
      console.log('Blog posts cleared');
    }
  };

  // Category management functions
  const addProjectCategory = (category) => {
    if (!projectCategories.includes(category)) {
      const newCategories = [...projectCategories, category];
      setProjectCategories(newCategories);
      localStorage.setItem('portfolio_project_categories', JSON.stringify(newCategories));
    }
  };

  const addBlogCategory = (category) => {
    if (!blogCategories.includes(category)) {
      const newCategories = [...blogCategories, category];
      setBlogCategories(newCategories);
      localStorage.setItem('portfolio_blog_categories', JSON.stringify(newCategories));
    }
  };

  const removeProjectCategory = (category) => {
    const newCategories = projectCategories.filter(cat => cat !== category);
    setProjectCategories(newCategories);
    localStorage.setItem('portfolio_project_categories', JSON.stringify(newCategories));
  };

  const removeBlogCategory = (category) => {
    const newCategories = blogCategories.filter(cat => cat !== category);
    setBlogCategories(newCategories);
    localStorage.setItem('portfolio_blog_categories', JSON.stringify(newCategories));
  };

  // Custom Skills functions
  const addCustomSkill = (skill) => {
    const newSkill = {
      id: Date.now(),
      name: skill.name,
      percentage: skill.percentage,
      description: skill.description,
      category: skill.category || 'Technical',
      icon: skill.icon || 'fas fa-code',
      color: skill.color || '#3B82F6',
      createdAt: new Date().toISOString()
    };
    const newSkills = [...customSkills, newSkill];
    setCustomSkills(newSkills);
    localStorage.setItem('portfolio_custom_skills', JSON.stringify(newSkills));
  };

  const updateCustomSkill = (id, updatedSkill) => {
    const newSkills = customSkills.map(skill => 
      skill.id === id ? { ...skill, ...updatedSkill, updatedAt: new Date().toISOString() } : skill
    );
    setCustomSkills(newSkills);
    localStorage.setItem('portfolio_custom_skills', JSON.stringify(newSkills));
  };

  const deleteCustomSkill = (id) => {
    const newSkills = customSkills.filter(skill => skill.id !== id);
    setCustomSkills(newSkills);
    localStorage.setItem('portfolio_custom_skills', JSON.stringify(newSkills));
  };

  // Debug function to export data
  const exportData = () => {
    const data = {
      projects,
      blogPosts,
      projectCategories,
      blogCategories,
      images: getAllImages(),
      adminMode: isAdmin,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-data-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const value = {
    // Data
    projects,
    blogPosts,
    isAdmin,
    projectCategories,
    blogCategories,
    customSkills,
    showAdminAccess,
    
    // Project functions
    addProject,
    updateProject,
    deleteProject,
    
    // Blog functions
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    
    // Category functions
    addProjectCategory,
    addBlogCategory,
    removeProjectCategory,
    removeBlogCategory,
    
    // Custom Skills functions
    addCustomSkill,
    updateCustomSkill,
    deleteCustomSkill,
    
    // Admin functions
    toggleAdminMode,
    loginAdmin,
    logoutAdmin,
    
    // Debug functions
    clearAllData,
    clearBlogPosts,
    exportData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
