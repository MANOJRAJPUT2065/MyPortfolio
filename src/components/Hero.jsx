
import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Manoj Singh
            </h1>
          </div>
          
          {/* Animated subtitle */}
          <div className="animate-fade-in delay-300">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Full Stack Developer & Problem Solver
            </p>
          </div>
          
          {/* Animated description */}
          <div className="animate-fade-in delay-500">
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Bachelor of Engineering student at Siddaganga Institute of Technology with expertise in 
              React, Node.js, and modern web technologies. Passionate about creating innovative solutions 
              and solving complex problems.
            </p>
          </div>
          
          {/* Animated buttons */}
          <div className="animate-fade-in delay-700">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://github.com/MANOJRAJPUT2065" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/manojrajput2065/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
              <a 
                href="https://leetcode.com/manojrajput20655" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Code size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                LeetCode
              </a>
            </div>
          </div>

          {/* Animated contact info */}
          <div className="animate-fade-in delay-1000">
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-12">
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Phone size={18} className="animate-bounce" />
                <span>6006694414</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                <Mail size={18} className="animate-bounce delay-100" />
                <span>manoj@example.com</span>
              </div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="animate-fade-in delay-1200">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group animate-bounce bg-primary/10 p-4 rounded-full hover:bg-primary/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronDown className="w-6 h-6 text-primary group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
