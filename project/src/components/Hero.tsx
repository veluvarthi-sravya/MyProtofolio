import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-1 mb-4">
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Mern Stack Developer</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Veluvarthi Venkata Sri Sravya</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg">
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and SQL,and programming languages like Python,Javascript... I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
              <a 
                href="https://drive.google.com/file/d/1vpxk_D9KoI1PXXXj-v7LQn8BCFQhRRzH/view?usp=drive_link" 
                className="px-6 py-3 flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 rounded-lg font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex items-center space-x-5 pt-4">
              <a href="https://github.com/veluvarthi-sravya" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sri-sravya-b4a1292b2" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 p-2">
              <img 
                src="myPassport.jpg" 
                alt="Sri Sravya" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-teal-400 dark:bg-teal-600 rounded-full opacity-20 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;