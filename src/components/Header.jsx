
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary animate-pulse">
          Manoj Singh
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section, index) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className="relative capitalize hover:text-primary transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {section}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          {[
            { href: "https://github.com/MANOJRAJPUT2065", icon: Github, color: "hover:text-gray-800" },
            { href: "https://linkedin.com/in/manoj-singh", icon: Linkedin, color: "hover:text-blue-600" },
            { href: "https://leetcode.com/manojrajput", icon: Code, color: "hover:text-orange-600" }
          ].map(({ href, icon: Icon, color }, index) => (
            <a 
              key={href}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${color} transition-all duration-300 hover:scale-110 animate-bounce`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden transform transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 py-4 space-y-4">
          {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)} 
              className="block w-full text-left capitalize hover:text-primary transition-colors duration-300 transform hover:translate-x-2"
            >
              {section}
            </button>
          ))}
          
          <div className="flex space-x-4 pt-4 border-t border-border">
            {[
              { href: "https://github.com/MANOJRAJPUT2065", icon: Github },
              { href: "https://linkedin.com/in/manoj-singh", icon: Linkedin },
              { href: "https://leetcode.com/manojrajput", icon: Code }
            ].map(({ href, icon: Icon }) => (
              <a 
                key={href}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
