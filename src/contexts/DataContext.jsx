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

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio_projects');
    const savedBlogPosts = localStorage.getItem('portfolio_blog_posts');
    const adminStatus = localStorage.getItem('portfolio_admin_mode');

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      // Initialize with default projects
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
    }

    if (savedBlogPosts) {
      setBlogPosts(JSON.parse(savedBlogPosts));
    } else {
      // Initialize with default blog posts
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
    }

    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio_blog_posts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('portfolio_admin_mode', isAdmin.toString());
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
    logoutAdmin
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
