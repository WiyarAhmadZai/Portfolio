import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React Hooks: A Deep Dive",
      excerpt: "Explore the power of React Hooks and how they can simplify your functional components while maintaining state and lifecycle methods.",
      content: `
        React Hooks have revolutionized the way we write React components. Introduced in React 16.8, 
        Hooks allow you to use state and other React features without writing a class component.
        
        In this comprehensive guide, we'll explore:
        - useState for managing local state
        - useEffect for handling side effects
        - Custom hooks for reusing logic
        - Best practices and common pitfalls
        
        Whether you're new to React or looking to deepen your understanding, this article will 
        provide valuable insights into one of React's most powerful features.
      `,
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Frontend", "Hooks"],
      image: "/Photos Simples/1716635911147.jpg"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn best practices for creating robust and scalable REST APIs using Node.js and Express with proper error handling and security measures.",
      content: `
        Creating scalable APIs is crucial for modern web applications. In this article, 
        we'll dive deep into building robust APIs with Node.js and Express.
        
        Key topics covered:
        - API design principles and RESTful conventions
        - Middleware implementation for authentication and validation
        - Database integration with MongoDB and Mongoose
        - Error handling strategies
        - Security best practices
        - Performance optimization techniques
        
        By the end of this guide, you'll have a solid foundation for building production-ready APIs.
      `,
      date: "April 22, 2023",
      readTime: "12 min read",
      category: "Node.js",
      tags: ["Node.js", "Express", "API", "Backend"],
      image: "/Photos Simples/1716636073552.jpg"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      excerpt: "A practical guide to understanding when to use CSS Grid and when to use Flexbox for your layout needs with real-world examples.",
      content: `
        CSS layout has evolved significantly with the introduction of Flexbox and Grid. 
        But knowing when to use which can be challenging.
        
        In this article, we'll explore:
        - Core concepts of Flexbox and when it excels
        - Grid's strengths for complex layouts
        - Combining both for powerful layout solutions
        - Real-world examples and use cases
        - Browser support and fallback strategies
        
        With practical examples and code snippets, you'll gain confidence in choosing the right 
        layout method for any situation.
      `,
      date: "March 10, 2023",
      readTime: "10 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Frontend"],
      image: "/Photos Simples/Cute Photo.jpg"
    },
    {
      id: 4,
      title: "Database Design Best Practices for Web Applications",
      excerpt: "Essential principles for designing efficient and scalable database schemas for modern web applications with real-world examples.",
      content: `
        Database design is fundamental to application performance and scalability. 
        Poor design choices can lead to bottlenecks and maintenance nightmares.
        
        This comprehensive guide covers:
        - Normalization principles and when to denormalize
        - Indexing strategies for optimal performance
        - Relationship modeling (one-to-one, one-to-many, many-to-many)
        - Data type selection and constraints
        - Security considerations and data integrity
        - Migration strategies for evolving schemas
        
        Whether you're working with SQL or NoSQL databases, these principles will help you 
        create robust and maintainable data architectures.
      `,
      date: "February 5, 2023",
      readTime: "15 min read",
      category: "Database",
      tags: ["Database", "SQL", "MongoDB", "Design"],
      image: "/Photos Simples/20240328_124412.jpg"
    },
    {
      id: 5,
      title: "Progressive Web Apps: The Future of Web Development",
      excerpt: "Explore how Progressive Web Apps combine the best of web and mobile applications to deliver app-like experiences directly in the browser.",
      content: `
        Progressive Web Apps (PWAs) represent a significant shift in how we think about 
        web applications. They combine the reach of the web with the capabilities of 
        native applications.
        
        In this article, we'll cover:
        - Core principles of PWAs and their benefits
        - Service workers for offline functionality
        - Web app manifests for installability
        - Performance optimization techniques
        - Cross-platform deployment strategies
        - Real-world case studies and success stories
        
        Learn how to transform your web applications into engaging, app-like experiences 
        that work across all devices and network conditions.
      `,
      date: "January 18, 2023",
      readTime: "11 min read",
      category: "Web Development",
      tags: ["PWA", "JavaScript", "Performance", "Mobile"],
      image: "/Photos Simples/1716635911147.jpg"
    },
    {
      id: 6,
      title: "State Management in Modern React Applications",
      excerpt: "A comparison of different state management solutions in React including Context API, Redux, and Zustand with practical examples.",
      content: `
        State management is one of the most critical aspects of React application development. 
        With multiple solutions available, choosing the right one can be overwhelming.
        
        This article explores:
        - React's built-in Context API for simple state management
        - Redux for complex global state needs
        - Modern alternatives like Zustand and Jotai
        - Performance considerations and re-renders
        - Migration strategies between different solutions
        - Real-world implementation patterns
        
        By understanding the strengths and weaknesses of each approach, you can make 
        informed decisions for your projects.
      `,
      date: "December 3, 2022",
      readTime: "14 min read",
      category: "React",
      tags: ["React", "State Management", "Redux", "Context API"],
      image: "/Photos Simples/1716636073552.jpg"
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'React', name: 'React' },
    { id: 'Node.js', name: 'Node.js' },
    { id: 'CSS', name: 'CSS' },
    { id: 'Database', name: 'Database' },
    { id: 'Web Development', name: 'Web Development' }
  ];

  // Filter posts by category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on web development, programming, and technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 pl-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-800 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 border border-gray-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs font-medium rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Posts Found */}
        {filteredPosts.length === 0 && (
          <div className={`text-center py-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <i className="fas fa-search text-5xl text-gray-600 mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-100 text-lg mb-6">
                Get the latest articles and insights delivered directly to your inbox.
              </p>
              <div className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-black bg-opacity-30 hover:bg-opacity-50 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-200 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;