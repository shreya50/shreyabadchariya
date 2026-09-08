import React from 'react';
import { motion } from 'motion/react';

export default function SelectedWorks() {
  return (
    <section className="w-full my-7 sm:my-9">
      <h2 className="text-2xl font-bold text-[#121214] mb-6 sm:mb-7 tracking-tight">
        Selected Works
      </h2>

      <div className="space-y-9 sm:space-y-11">
        {/* ========================================================= */}
        {/* Project 1: SecureAuth+ */}
        {/* Desktop: Left: Description | Right: Black Card Badge */}
        {/* Mobile: Top: Badge | Bottom: Description */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          {/* Description */}
          <div className="order-2 md:order-1">
            <p className="text-[#1A1A1A] text-[15px] sm:text-base leading-relaxed font-normal">
              <span className="font-semibold text-black">SecureAuth+</span> is an AI-powered security/authentication solution designed to make digital identity verification safer, smarter, and more resistant to fraud
            </p>
          </div>

          {/* Black Card Badge linked to SecureAuth+ design study */}
          <div className="order-1 md:order-2 flex justify-start md:justify-end">
            <motion.a
              id="project-secureauth-link"
              href="/secureauth-design-study.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto md:w-full max-w-[270px] bg-black text-white px-5 py-3.5 sm:py-4 rounded-2xl flex items-center justify-center gap-3.5 shadow-md hover:shadow-lg hover:bg-[#0A0A0A] transition-all duration-200 cursor-pointer group select-none"
              aria-label="View SecureAuth+ design study document"
            >
              {/* Wave Loader 3-tier Icon */}
              <svg
                viewBox="0 0 56 46"
                className="w-8 h-7 text-white flex-shrink-0 group-hover:opacity-90 transition-opacity"
                fill="#FFFFFF"
              >
                {/* Top Dumbbell */}
                <path d="M 13,3 C 9,3 6,6 6,10 C 6,14 9,17 13,17 C 17,17 19.5,14.5 23.5,14.5 C 27.5,14.5 30,17 34,17 C 38,17 41,14 41,10 C 41,6 38,3 34,3 C 30,3 27.5,5.5 23.5,5.5 C 19.5,5.5 17,3 13,3 Z" />

                {/* Middle Dumbbell (Offset to the right) */}
                <path d="M 23,16 C 19,16 16,19 16,23 C 16,27 19,30 23,30 C 27,30 29.5,27.5 33.5,27.5 C 37.5,27.5 40,30 44,30 C 48,30 51,27 51,23 C 51,19 48,16 44,16 C 40,16 37.5,18.5 33.5,18.5 C 29.5,18.5 27,16 23,16 Z" />

                {/* Bottom Dumbbell (Aligned with top) */}
                <path d="M 13,29 C 9,29 6,32 6,36 C 6,40 9,43 13,43 C 17,43 19.5,40.5 23.5,40.5 C 27.5,40.5 30,43 34,43 C 38,43 41,40 41,36 C 41,32 38,29 34,29 C 30,29 27.5,31.5 23.5,31.5 C 19.5,31.5 17,29 13,29 Z" />
              </svg>

              {/* SecureAuth+ Wordmark */}
              <span className="text-[19px] sm:text-[20px] font-bold tracking-tight text-white flex items-center">
                SecureAuth+
              </span>
            </motion.a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Project 2: greenledger */}
        {/* Desktop: Left: Green Logo Badge | Right: Description */}
        {/* Mobile: Top: Badge | Bottom: Description */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
          {/* Green Ledger Logo Badge linked to Google Drive */}
          <div className="order-1 flex items-center justify-start">
            <motion.a
              id="project-greenledger-link"
              href="https://ai.studio/apps/drive/1aCJvyC0jEz-pdJcx97hjum2hyC8iyEm1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 sm:gap-3.5 py-1 px-1 rounded-xl group cursor-pointer text-left transition-transform select-none"
              aria-label="View Greenledger on Drive"
            >
              {/* Green Icon Box with Stylized Leaf matching user logo asset */}
              <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] rounded-[18px] bg-[#134C35] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:bg-[#0E3B29] transition-colors">
                <svg
                  viewBox="0 0 54 54"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Organic leaf outline matching exact greenledger-wordmark.png shape */}
                  <path
                    d="M 14,40 C 13,33 16,21 28,15 C 34,12 40,13 41,14 C 42,15 43,21 38,28 C 32,37 20,41 14,40 Z"
                    strokeWidth="3.4"
                  />
                  {/* Center Vein curve */}
                  <path
                    d="M 15,38 C 19,34 26,28 37,18"
                    strokeWidth="3.2"
                  />
                </svg>
              </div>

              {/* Text Label */}
              <div className="flex flex-col justify-center">
                <span className="text-[22px] sm:text-[25px] font-extrabold tracking-[-0.03em] text-[#10221B] leading-none group-hover:text-[#134C35] transition-colors">
                  greenledger
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.22em] text-[#277958] uppercase mt-1.5 leading-none">
                  CLAIM INTEGRITY
                </span>
              </div>
            </motion.a>
          </div>

          {/* Description */}
          <div className="order-2">
            <p className="text-[#1A1A1A] text-[15px] sm:text-base leading-relaxed font-normal">
              A sustainability-focused platform that uses transparent digital records to help organizations track, verify, and manage their environmental impact and sustainability efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
