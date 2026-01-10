import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-12 bg-slate-900 border-t border-slate-800 text-slate-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Intro Section */}
        <div className="text-center md:text-left max-w-sm">
          <h3 className="text-2xl font-bold text-slate-100 mb-2">Get In Touch</h3>
          <p className="text-slate-400">Have a project in mind? Let's build something amazing together.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <motion.a 
            whileHover={{ y: -5, color: '#38bdf8' }}
            href="https://github.com/Oishi106" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: '#38bdf8' }}
            href="https://www.linkedin.com/in/mahmuda-afroz-/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: '#38bdf8' }}
            href="mahmudaoishi457@gmail.com"
            className="text-2xl hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mahmuda Afroz. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
