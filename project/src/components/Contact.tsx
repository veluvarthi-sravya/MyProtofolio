import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.name) newErrors.name = 'Name is required';
    if (!values.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) newErrors.email = 'Email is invalid';
    if (!values.subject) newErrors.subject = 'Subject is required';
    if (!values.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className={`h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
          <p className={`text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Interested in working together? Have a question about my work? Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`md:col-span-2 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <a href="mailto:alex@example.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      sravyaveluvarthi07@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +91 7396278217
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      Palakonda,Andhra Pradesh(Open to Relocate)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I'm currently open to new opportunities and collaborations. Feel free to reach out!
                </p>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  75% available for new projects
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={`md:col-span-3 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-4 mb-6 rounded">
                  <p className="text-green-700 dark:text-green-400">Thank you for your message! I'll get back to you soon.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition-colors`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition-colors`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition-colors`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 transition-colors resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;