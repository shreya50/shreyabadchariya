/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import HeroIllustration from './components/HeroIllustration.tsx';
import BioSection from './components/BioSection.tsx';
import SelectedWorks from './components/SelectedWorks.tsx';
import ThankYouSection from './components/ThankYouSection.tsx';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] flex flex-col items-center justify-start overflow-x-hidden selection:bg-[#F7B8C8] selection:text-black">
      {/* Centered Portfolio Container matching design proportions */}
      <div className="w-full max-w-[520px] sm:max-w-[580px] px-5 sm:px-6 pt-1 sm:pt-2 pb-10 flex flex-col items-stretch">
        {/* 1. Hero Artwork Section */}
        <HeroIllustration />

        {/* 2. Intro / Bio & Action Buttons */}
        <BioSection />

        {/* 3. Selected Works Section */}
        <SelectedWorks />

        {/* 4. Thank You Display & Accent Bar */}
        <ThankYouSection />
      </div>
    </main>
  );
}

