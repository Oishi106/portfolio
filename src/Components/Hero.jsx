import profileImg from '../assets/original.jpeg'
import { motion } from 'framer-motion';

function Hero() {
  return (
    <main id="home" className="relative z-10 mt-16 px-4 md:px-8 overflow-hidden">
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        {/* Left: text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl space-y-6 text-slate-50 text-center md:text-left"
        >
          <p className="mt-20 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
           SYSTEM STATUS: ONLINE
          </p>

          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x inline-block">
                MAHAMUDA AFROZ
              </span>
            </h1>
            <h2 className="text-xl font-semibold tracking-wide text-cyan-300 sm:text-2xl">
              Full-Stack Developer (MERN)
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-200/90 sm:text-base mx-auto md:mx-0">
            I build modern, responsive, and high-performance web applications with clean code, strong UI principles, and real-world problem solving in mind.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/40 transition hover:bg-cyan-300"
            >
              Download CV
            </motion.button>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-300/80">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* Right: profile image with outer orbit */}
       <motion.section 
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         viewport={{ once: false, amount: 0.5 }}
         transition={{ duration: 0.8, delay: 0.2 }}
         className="mt-10 flex flex-1 justify-center md:mt-0"
       >
        <div className="hero-orbit-container relative flex items-center justify-center">
          {/* Orbital animation dots */}
          <div className="hero-orbit-track absolute animate-spin-slow">
            <div className="hero-orbit-dot hero-orbit-dot-1" />
            <div className="hero-orbit-dot hero-orbit-dot-2" />
            <div className="hero-orbit-dot hero-orbit-dot-3" />
          </div>
          
          {/* Circular image */}
          <div className="hero-orbit relative h-56 w-56 overflow-hidden rounded-full border border-cyan-400/40 shadow-[0_0_45px_rgba(34,211,238,0.6)] ring-2 ring-cyan-400/40 md:h-72 md:w-72">
            <div className="absolute inset-2 rounded-full border border-slate-100/10 bg-slate-900/70 backdrop-blur-sm" />
            <img
              src={profileImg}
              alt="Profile portrait"
              className="relative z-10 h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
       </motion.section>
      </section>
    </main>
  );
}

export default Hero;
