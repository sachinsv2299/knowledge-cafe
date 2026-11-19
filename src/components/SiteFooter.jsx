import React from "react";
import { BookOpen } from "lucide-react";

/*
 * Site-wide footer with a curved, slowly drifting wave on top.
 * The wave sits on a transparent strip so it blends into any page background.
 */
const SiteFooter = () => (
  <footer className="relative z-10 mt-auto text-white">
    <div aria-hidden="true" className="relative h-10 md:h-12 overflow-hidden">
      {/* translucent back wave — repeats every 1440 units so the slide loops seamlessly */}
      <svg className="kc-wave-back absolute bottom-0 left-0 h-full w-[200%]" viewBox="0 0 2880 160" preserveAspectRatio="none">
        <path
          d="M0 70 C 240 30, 480 30, 720 70 S 1200 110, 1440 70 S 1920 30, 2160 70 S 2640 110, 2880 70 V161 H0 Z"
          fill="#4a4f5c"
          fillOpacity="0.28"
        />
      </svg>
      {/* main wave: higher on the left, sloping down to the right */}
      <svg className="absolute bottom-0 left-0 h-full w-full" viewBox="0 0 1600 160" preserveAspectRatio="none">
        <path d="M0 36 C 320 0, 720 24, 1020 84 S 1440 150, 1600 136 V161 H0 Z" fill="#2b2f38" />
      </svg>
    </div>

    <div className="-mt-px bg-gradient-to-b from-[#2b2f38] to-[#1f2229] px-6 sm:px-10 pt-1 pb-6 md:pb-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <span className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-wide">
          <BookOpen size={26} className="text-[#D98A4E] shrink-0" /> IITH ICT Knowledge Cafe
        </span>
        <div className="space-y-1 text-xs text-white/70 lg:text-right">
          <p>ICT - Information and Communication Technology</p>
          <p>Indian Institute of Technology Hyderabad © 2026</p>
          <p className="text-white/60">Developed and Maintained by Computer Centre, IITH</p>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
