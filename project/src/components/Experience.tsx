import React from 'react';
import { useInView } from '../hooks/useInView';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const jobs: Job[] = [
    {
      id: 1,
      title: "Intern",
      company: "HMI",
      location: "Visakhapatanam",
      period: "July 2022 - October 2022",
      description: [
       "During the internship I have Gained the knowledge on Html,css,Javascript and I have Certified in that course.I developed the Online Student Registration Form Web Page"
      ]
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My professional journey and career growth in the tech industry. Here's where I've worked and what I've accomplished.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-200 dark:bg-blue-900 h-full"></div>
            
            {/* Timeline items */}
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`relative mb-12 md:mb-16 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <div className={`
                    relative md:absolute md:top-0 ${index % 2 === 0 ? 'md:left-1/2 md:ml-8' : 'md:right-1/2 md:mr-8'} 
                    bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:w-[calc(50%-2rem)] z-10
                    transition-all duration-500 hover:shadow-xl hover:-translate-y-1
                  `}>
                    {/* Timeline dot */}
                    <div className="absolute top-6 md:top-0 -left-4 md:left-1/2 md:-translate-x-1/2 md:-mt-3 w-7 h-7 bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-blue-400 rounded-full"></div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                      <div className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;