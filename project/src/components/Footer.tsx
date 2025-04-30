import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tight text-blue-400">
              Veluvarthi Venkata Sri Sravya
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Mern Stack Developer specializing in creating exceptional digital experiences with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors text-sm"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} />
              Back to Top
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4 md:mt-0">
            <a href="#about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;