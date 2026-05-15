import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/Oishi106",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/mahmuda-afroz-/",
    },
    {
      icon: FaFacebook,
      link: "https://facebook.com",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#020617] border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-72 h-72 bg-blue-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-3 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Mahamuda Afroz <span className="text-cyan-400">Oishi</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
              Passionate Full Stack Developer creating modern, responsive and
              user-friendly web applications with beautiful UI & smooth user
              experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5 }}
                    className="w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:mx-auto"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <a
                  href="mailto:mahmudaoishi457@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-all"
                >
                  mahmudaoishi457@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <p className="text-slate-400">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Hire Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Mahamuda Afroz Oishi — All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <p className="text-slate-500 text-sm">
              Built with React & Tailwind CSS
            </p>

            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;