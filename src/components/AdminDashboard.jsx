import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';

const AdminDashboard = () => {
  const { 
    projects, 
    blogPosts, 
    addProject, 
    updateProject, 
    deleteProject, 
    addBlogPost, 
    updateBlogPost, 
    deleteBlogPost,
    logoutAdmin 
  } = useData();

  const [activeTab, setActiveTab] = useState('projects');
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  // Project form state
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    category: 'Web Development',
    status: 'Completed',
    githubUrl: '',
    liveUrl: '',
    featured: false
  });

  // Blog form state
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'React',
    tags: '',
    readTime: '',
    featured: false
  });

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...projectForm,
      technologies: projectForm.technologies.split(',').map(tech => tech.trim()),
      featured: projectForm.featured
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    } else {
      addProject(projectData);
    }

    setProjectForm({
      title: '',
      description: '',
      image: '',
      technologies: '',
      category: 'Web Development',
      status: 'Completed',
      githubUrl: '',
      liveUrl: '',
      featured: false
    });
    setShowProjectForm(false);
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      ...blogForm,
      tags: blogForm.tags.split(',').map(tag => tag.trim()),
      featured: blogForm.featured
    };

    if (editingBlog) {
      updateBlogPost(editingBlog.id, blogData);
      setEditingBlog(null);
    } else {
      addBlogPost(blogData);
    }

    setBlogForm({
      title: '',
      excerpt: '',
      content: '',
      category: 'React',
      tags: '',
      readTime: '',
      featured: false
    });
    setShowBlogForm(false);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectForm({
      ...project,
      technologies: project.technologies.join(', ')
    });
    setShowProjectForm(true);
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setBlogForm({
      ...blog,
      tags: blog.tags.join(', ')
    });
    setShowBlogForm(true);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
    }
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      deleteBlogPost(id);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={logoutAdmin}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'blog'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Blog Posts ({blogPosts.length})
          </button>
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setShowProjectForm(true);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Add New Project
              </button>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-lg p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditProject(project)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Blog Tab */}
        {activeTab === 'blog' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Manage Blog Posts</h2>
              <button
                onClick={() => {
                  setEditingBlog(null);
                  setShowBlogForm(true);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Add New Post
              </button>
            </div>

            {/* Blog Posts List */}
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                      <p className="text-gray-300 mb-2">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>{post.category}</span>
                        <span>{post.readTime}</span>
                        <span>{post.date}</span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-600 text-white rounded">Featured</span>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => handleEditBlog(post)}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(post.id)}
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Form Modal */}
        {showProjectForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Title</label>
                  <input
                    type="text"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Description</label>
                  <textarea
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg h-24"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Image URL</label>
                  <input
                    type="url"
                    value={projectForm.image}
                    onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Technologies (comma-separated)</label>
                  <input
                    type="text"
                    value={projectForm.technologies}
                    onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    placeholder="React, Node.js, MongoDB"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Category</label>
                    <select
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({...projectForm, category: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="Desktop Application">Desktop Application</option>
                      <option value="Data Science">Data Science</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Status</label>
                    <select
                      value={projectForm.status}
                      onChange={(e) => setProjectForm({...projectForm, status: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Planning">Planning</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2">GitHub URL</label>
                  <input
                    type="url"
                    value={projectForm.githubUrl}
                    onChange={(e) => setProjectForm({...projectForm, githubUrl: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Live URL</label>
                  <input
                    type="url"
                    value={projectForm.liveUrl}
                    onChange={(e) => setProjectForm({...projectForm, liveUrl: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={projectForm.featured}
                    onChange={(e) => setProjectForm({...projectForm, featured: e.target.checked})}
                    className="mr-2"
                  />
                  <label htmlFor="featured" className="text-white">Featured Project</label>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingProject ? 'Update Project' : 'Add Project'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProjectForm(false);
                      setEditingProject(null);
                    }}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Blog Form Modal */}
        {showBlogForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
              </h3>
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Title</label>
                  <input
                    type="text"
                    value={blogForm.title}
                    onChange={(e) => setBlogForm({...blogForm, title: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Excerpt</label>
                  <textarea
                    value={blogForm.excerpt}
                    onChange={(e) => setBlogForm({...blogForm, excerpt: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg h-20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Content</label>
                  <textarea
                    value={blogForm.content}
                    onChange={(e) => setBlogForm({...blogForm, content: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg h-32"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2">Category</label>
                    <select
                      value={blogForm.category}
                      onChange={(e) => setBlogForm({...blogForm, category: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    >
                      <option value="React">React</option>
                      <option value="Node.js">Node.js</option>
                      <option value="CSS">CSS</option>
                      <option value="JavaScript">JavaScript</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2">Read Time</label>
                    <input
                      type="text"
                      value={blogForm.readTime}
                      onChange={(e) => setBlogForm({...blogForm, readTime: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                      placeholder="5 min read"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({...blogForm, tags: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg"
                    placeholder="React, JavaScript, Hooks"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured-blog"
                    checked={blogForm.featured}
                    onChange={(e) => setBlogForm({...blogForm, featured: e.target.checked})}
                    className="mr-2"
                  />
                  <label htmlFor="featured-blog" className="text-white">Featured Post</label>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {editingBlog ? 'Update Post' : 'Add Post'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBlogForm(false);
                      setEditingBlog(null);
                    }}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
