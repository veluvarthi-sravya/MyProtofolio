import React from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 65, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    {},
    { name: 'CSS/Tailwind', level: 85, category: 'frontend' },
    { name: 'Html', level: 85, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 85, category: 'backend' },
    { name: 'SQL', level: 80, category: 'backend' },

    
    // Tools & Others
    { name: 'Git', level: 90, category: 'tools' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I've Learned with a variety of technologies throughout my career. Here's a breakdown of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${300 + categoryIndex * 100}ms` }}>
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">{category.name}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${300 + index * 50}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;