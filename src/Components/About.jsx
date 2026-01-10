import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 py-20 md:flex-row md:gap-16 md:px-8 overflow-hidden"
    >
      
      {/* Left side: Animated gear system */}
      <div className="flex flex-1 items-center justify-center">
        <div className="about-gear-container relative flex h-80 w-80 items-center justify-center md:h-96 md:w-96">
          {/* Monitor frame */}
          <div className="about-monitor absolute z-10 h-full w-full rounded-lg border-2 border-cyan-400/50 bg-slate-900/60 backdrop-blur-sm shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <div className="absolute inset-2 rounded-md bg-slate-950/90">
              {/* Central API Gear */}
              <div className="about-gear-main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="about-gear about-gear-api">
                  <span className="about-gear-text">API</span>
                </div>
              </div>

              {/* Smaller gears positioned around */}
              <div className="about-gear about-gear-1">
                <div className="about-gear-inner" />
              </div>
              <div className="about-gear about-gear-2">
                <div className="about-gear-inner" />
              </div>
              <div className="about-gear about-gear-3">
                <div className="about-gear-inner" />
              </div>
              <div className="about-gear about-gear-4">
                <div className="about-gear-inner" />
              </div>


              {/* Connection lines */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line
                  x1="50"
                  y1="50"
                  x2="20"
                  y2="25"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                  className="about-connection-line"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="80"
                  y2="25"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                  className="about-connection-line"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="80"
                  y2="75"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="0.4"
                  strokeDasharray="2,2"
                  className="about-connection-line"
                />
              </svg>

              {/* Connected elements */}
              <div className="about-window about-window-cloud absolute left-[15%] top-[20%]">
                <div className="about-window-icon">☁</div>
                <div className="about-window-arrow">↑</div>
              </div>
              <div className="about-window about-window-code absolute right-[15%] top-[20%]">
                <div className="about-window-lines">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="about-window about-window-server absolute bottom-[10%] right-[10%]">
                <div className="about-server-rack">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Description */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-1 flex-col space-y-6 text-center md:text-left"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            ABOUT ME
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl">
            Full Stack Developer
          </h2>
          <p className="text-lg font-medium text-cyan-200/90">
            Building Modern Web Solutions
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-300/90 sm:text-base sm:leading-relaxed">
          <p>
            I&apos;m a passionate full-stack developer specializing in creating robust,
            scalable web applications. With expertise in both frontend and backend
            technologies, I bridge the gap between design and functionality.
          </p>
          <p>
            My work focuses on building APIs that connect cloud services, managing
            server infrastructure, and crafting intuitive user experiences. I thrive
            on solving complex problems and turning ideas into reality through clean,
            efficient code.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <div className="about-skill-tag">React</div>
          <div className="about-skill-tag">Node.js</div>
          <div className="about-skill-tag">API Development</div>
          <div className="about-skill-tag">Cloud Services</div>
          <div className="about-skill-tag">Full Stack</div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
