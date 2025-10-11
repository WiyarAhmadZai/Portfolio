import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsVisible(true);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'About', path: '/about', icon: 'fas fa-user' },
    { name: 'Projects', path: '/projects', icon: 'fas fa-folder-open' },
    { name: 'Blog', path: '/blog', icon: 'fas fa-blog' },
    { name: 'Resume', path: '/resume', icon: 'fas fa-file-alt' },
    { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-2xl border-b border-white/10' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="group relative text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500"
            >
              <span className="relative z-10">Wiyar</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <i className={`${link.icon} text-xs`}></i>
                    <span>{link.name}</span>
                  </span>
                  {location.pathname === link.path && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </Link>
              ))}
              
              {/* Theme Toggle */}
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.slice(0, 4).map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <i className={`${link.icon} text-xs`}></i>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative bg-gray-800/50 backdrop-blur-sm inline-flex items-center justify-center p-3 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none transition-all duration-300 transform hover:scale-105"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gray-900/95 backdrop-blur-md border-t border-white/10">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`group flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i className={`${link.icon} text-lg w-5`}></i>
              <span>{link.name}</span>
              {location.pathname === link.path && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </Link>
          ))}
          
          {/* Mobile Theme Toggle */}
          <div className="flex justify-center pt-4 border-t border-white/10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;