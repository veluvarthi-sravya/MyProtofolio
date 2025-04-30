import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const Projects: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Offline Signature Fraud Detection",
      description: "Detects fake vs. real signatures using CNNs and Deep Learning.",
      image: "https://th.bing.com/th/id/OIP.HRO2QJ9obiIBJZ-aJCw6HwHaHa?w=182&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      tags: ["python","Deep Learning"],
      githubUrl: "https://github.com/veluvarthi-sravya/offline-signature-fraud-detection-using-deep-learning-techniques.git"
    },
    {
      id: 2,
      title: "To-Dos Application",
      description:"Task management with CRUD functionality using JS and Bootstrap.",
      image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps-1400x1050.png",
      tags: ["React", "javascript","Nodejs" ,"html", " CSS"],
      githubUrl: "https://github.com/veluvarthi-sravya/simples_todos_React_JS"
    },
    {
      id: 3,
      title: "Random Number Generator",
      description: "Interactive number generator using React.",
      image: "https://th.bing.com/th/id/OIP.6mBAb8cbCKpHzFjwteXk9QHaDn?w=337&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      tags: ["React", "javascript","Nodejs" ,"html", " CSS"],
      githubUrl:"https://github.com/veluvarthi-sravya/random_number_genarator"
    },
    {
      id: 4,
      title: "Browsing History App",
      description: "Manage and search browsing history using React.",
      image: "https://assets.ccbp.in/frontend/content/react-js/browser-history-sm-outputs.png",
      tags: ["React", "javascript","Nodejs" ,"html", " CSS"],
      githubUrl:  "https://github.com/veluvarthi-sravya/Browser-History_reactJs"

    },
    {
      id: 5,
      title: "Student Registration Form",
      description: "Simple online registration form built with HTML/CSS/JS.",
      image: "https://th.bing.com/th/id/OIP.Wfg0rT8zgfEDs34LyXgK7gHaE8?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      tags: ["html", " CSS","javascript"],
      githubUrl: "https://github.com/veluvarthi-sravya/online-registration-form.git"
    
    },
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Explore my recent work and projects. Each project showcases different skills and technologies I've mastered.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex space-x-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-2 rounded-full text-white hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;