import React from 'react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SkillForge – Learning Management System (LMS)',
      description: 'A full-stack Learning Management System for purchasing courses and tracking study progress with a seamless, secure user experience. Users can securely log in using Google or email authentication with protected sessions via NextAuth, track courses and progress, purchase courses with secure payments for instant access, and interact with an AI study assistant for instant 24/7 help with course-related questions.',
      link: 'https://lms-client-ne5a.vercel.app/',
      tags: ['Next.js', 'TypeScript', 'NextAuth', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'StyleDecor – Decoration Service Booking Platform',
      description: 'A full-stack MERN platform for booking home and ceremony decoration services with real-time status tracking. Users can securely log in with role-based accounts using Firebase and JWT, book decoration services, track project progress, see assigned decorators in real time, and make secure payments via Stripe while managing bookings through their dashboards.',
      link: 'https://stupendous-axolotl-7347a9.netlify.app/',
      tags: ['React.js', 'TailwindCSS', 'Firebase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Local Food',
      description: 'Local Food Lovers Network is a full-stack web application designed for food enthusiasts who enjoy exploring restaurants, street foods, and homemade dishes. Users can register, post reviews, manage their favorites, and view reviews from others in an engaging and responsive UI.',
      link: 'https://ornate-sunshine-8ba480.netlify.app/',
      tags: ['MERN', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop'
    },
     {
      id: 4,
      title: 'Skill-exchange',
      description: 'The purpose of SkillSwap is to connect learners with local skill providers. Whether it’s guitar lessons, language practice, coding help, or yoga sessions, SkillSwap helps users find the right skill provider and book a session easily.',
      link: 'https://skill-exchange44455.netlify.app/',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop'
    },
   
  ];

  return (
    <section id="projects" className="py-20 px-4 text-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            WORK.
          </h2>
          <p className="text-slate-400 text-lg uppercase tracking-widest">
            Selected projects delivering high value.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-slate-900/50 rounded-3xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-all duration-300`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl">
                <div className="aspect-video w-full bg-slate-800 relative overflow-hidden">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a 
                       href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2"
                     >
                       LIVE <span>↗</span>
                     </a>
                   </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-slate-800 rounded-full border border-slate-700 text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-bold uppercase tracking-wide">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 flex justify-center md:justify-start">
                   <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
