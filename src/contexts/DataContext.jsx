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
      const defaultBlogPosts = [
        {
          id: 1,
          title: "Understanding React Hooks",
          excerpt: "A deep dive into React Hooks and how they can simplify your functional components.",
          content: "React Hooks revolutionized the way we write functional components...",
          date: "2024-05-15",
          readTime: "5 min read",
          category: "React",
          tags: ["React", "JavaScript", "Hooks"],
          featured: true,
          published: true
        },
        {
          id: 2,
          title: "Building Scalable APIs with Node.js",
          excerpt: "Best practices for creating robust and scalable REST APIs using Node.js and Express.",
          content: "Building scalable APIs is crucial for modern web applications...",
          date: "2024-04-22",
          readTime: "8 min read",
          category: "Node.js",
          tags: ["Node.js", "API", "Backend"],
          featured: true,
          published: true
        }
      ];
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
    // Simple password check (in real app, this would be more secure)
    if (password === 'admin123') {
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
      setProjects([]);
      setBlogPosts([]);
      setIsAdmin(false);
      console.log('All data cleared');
    }
  };

  // Debug function to export data
  const exportData = () => {
    const data = {
      projects,
      blogPosts,
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
    
    // Project functions
    addProject,
    updateProject,
    deleteProject,
    
    // Blog functions
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    
    // Admin functions
    toggleAdminMode,
    loginAdmin,
    logoutAdmin,
    
    // Debug functions
    clearAllData,
    exportData
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
