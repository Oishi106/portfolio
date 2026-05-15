import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Oishi106', label: 'GitHub', color: 'hover:text-white' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mahmuda-afroz-/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: FaEnvelope, href: 'mailto:mahmudaoishi457@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const quickLinks = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  const resources = ['Documentation', 'Blog', 'Portfolio', 'Resume'];
  const legal = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-t border-slate-800 text-slate-300"
    >
      {/* Top Decorative Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="w-full px-4">
        <div className="max-w-7xl mx-auto py-16 lg:py-20">
          
          {/* Top Section: Branding & Newsletter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-slate-800"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                Mahamuda Afroz
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Full Stack Developer crafting beautiful and functional web experiences. Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-11 h-11 rounded-full bg-slate-800 hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-300 ${social.color}`}
                      title={social.label}
                    >
                      <Icon className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="md:pl-6">
              <h3 className="text-xl font-bold text-slate-100 mb-4">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-6">Subscribe to get latest updates about my projects and insights.</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all"
                  >
                    Subscribe
                  </motion.button>
                </div>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm"
                  >
                    ✓ Thanks for subscribing!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Middle Section: Links & Contact */}
          <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 pb-12 border-b border-slate-800">
            
            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 4 }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="inline-block w-0 h-0.5 bg-cyan-400 mr-2 group-hover:w-2 transition-all duration-300"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">Resources</h4>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="inline-block w-0 h-0.5 bg-cyan-400 mr-2 group-hover:w-2 transition-all duration-300"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">Legal</h4>
              <ul className="space-y-3">
                {legal.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center group"
                    >
                      <span className="inline-block w-0 h-0.5 bg-cyan-400 mr-2 group-hover:w-2 transition-all duration-300"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="md:col-span-2"
            >
              <h4 className="text-lg font-semibold text-slate-100 mb-6">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaEnvelope className="text-cyan-400 mt-1 flex-shrink-0 text-base" />
                  <a href="mailto:mahmudaoishi457@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors break-all">
                    mahmudaoishi457@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="text-cyan-400 mt-1 flex-shrink-0 text-base" />
                  <a href="tel:+1234567890" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0 text-base" />
                  <span className="text-slate-400">Your City, Country</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Section: Copyright & Scroll Top */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-left text-slate-500 text-sm"
            >
              <p>&copy; {new Date().getFullYear()} Mahamuda Afroz Oishi. All rights reserved.</p>
              <p className="text-xs text-slate-600 mt-2">Designed & Built with <span className="text-red-400">❤</span> by Mahamuda Afroz</p>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 bg-slate-800 hover:bg-cyan-500/20 rounded-lg text-slate-400 hover:text-cyan-400 transition-all duration-300 group"
            >
              Back to Top
              <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </motion.footer>
  );
};

export default Footer;
