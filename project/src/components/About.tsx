import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working on code" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-0 right-0 -mb-4 -mr-4 w-32 h-32 bg-blue-200 dark:bg-blue-600 rounded-full -z-10 opacity-70"></div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Mern Full Stack Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Sri Sravya Veluvarthi, a dedicated Mern Stack Developer /frontend developer with having  knowledge on creating modern web applications. I specialize in JavaScript, React, Node.js,  and python,SQL, Html, Css, Bootsrap, Git , Developer Tools
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in tech began with a Computer Science degree from sri sivani college of engineering.I started learning new skills in technologies ,where I can develop my skills
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             I'm passionate about creating accessible web applications and I want to learn new Technologies .
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Palakonda,Andhra pradesh (Open to Relocate)</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">sravyaveluvarthi07@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300">Fresher</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;