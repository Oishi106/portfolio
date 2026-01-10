import React from 'react';
import { motion } from 'framer-motion';

function Skill() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Tailwind', level: 85 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SKILLS
          </h2>
          <p className="text-slate-400 text-lg uppercase tracking-widest">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="skill-card p-6 flex flex-col items-center justify-center gap-4 group"
            >
              {/* Circular Progress */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-700"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2}
                    whileInView={{ strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 }}
                    exit={{ strokeDashoffset: 251.2 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="text-cyan-400"
                  />
                </svg>
                <span className="absolute text-xl font-bold text-slate-200">
                  {skill.level}%
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
