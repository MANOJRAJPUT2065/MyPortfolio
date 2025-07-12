
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Manoj Singh
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('achievements')} className="hover:text-primary transition-colors">Achievements</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/MANOJRAJPUT2065" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/manoj-singh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/manojrajput" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Code size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('achievements')} className="block w-full text-left hover:text-primary transition-colors">Achievements</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">Contact</button>
            
            <div className="flex space-x-4 pt-4 border-t border-border">
              <a href="https://github.com/MANOJRAJPUT2065" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/manoj-singh" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://leetcode.com/manojrajput" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Code size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
