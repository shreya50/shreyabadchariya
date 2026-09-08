import React from 'react';
import { motion } from 'motion/react';

export default function BioSection() {
  return (
    <section className="w-full mt-1 sm:mt-2 mb-6 sm:mb-7">
      {/* Greeting Headline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#121214] mb-2.5 tracking-tight">
        Hi, I'm Shreya!
      </h1>

      {/* Bio Paragraph */}
      <p className="text-[#1A1A1A] text-[15px] sm:text-base leading-relaxed mb-5 sm:mb-6 font-normal">
        I've spent the past several years exploring technology, design and problem-solving through hackathons, volunteer work, independent projects and continued learning. I'm now bringing that experience into product design, with a particular interest in human-AI interaction.
      </p>

      {/* Primary Action Buttons (Side by Side) */}
      <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
        {/* Resume Button - Soft Sky Blue, linked to provided resume */}
        <motion.a
          id="resume-button"
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 sm:py-3.5 bg-[#81B7D2] hover:bg-[#72A8C4] active:bg-[#669BB7] text-white font-bold text-base sm:text-lg rounded-xl shadow-xs transition-colors duration-200 text-center cursor-pointer flex items-center justify-center tracking-wide"
        >
          Resume
        </motion.a>

        {/* LinkedIn Button - Soft Pastel Pink, linked to profile URL */}
        <motion.a
          id="linkedin-button"
          href="https://www.linkedin.com/in/shreyabadchariya"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 sm:py-3.5 bg-[#F5B9C9] hover:bg-[#EFA7B9] active:bg-[#E393A6] text-white font-bold text-base sm:text-lg rounded-xl shadow-xs transition-colors duration-200 text-center cursor-pointer flex items-center justify-center tracking-wide"
        >
          LinkedIn
        </motion.a>
      </div>
    </section>
  );
}

