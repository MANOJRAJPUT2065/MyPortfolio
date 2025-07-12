
import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated heading */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Manoj Singh
            </h1>
          </div>
          
          {/* Animated subtitle */}
          <div className="animate-fade-in delay-300">
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Full Stack Developer & Problem Solver
            </p>
          </div>
          
          {/* Animated description */}
          <div className="animate-fade-in delay-500">
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
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
                className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 mb-12">
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Phone size={18} className="animate-bounce" />
                <span>6006694414</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Mail size={18} className="animate-bounce delay-100" />
                <span>manoj@example.com</span>
              </div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="animate-fade-in delay-1200">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group animate-bounce bg-blue-100 p-4 rounded-full hover:bg-blue-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronDown className="w-6 h-6 text-blue-600 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
