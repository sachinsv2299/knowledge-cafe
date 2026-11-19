import React from "react";

/*
 * Soft "silk ribbon" background for the home page.
 * Large curved bands in white and warm peach drift slowly.
 * Purely decorative: fixed behind the content, ignores the pointer.
 */
const HomeBackdrop = () => (
  <div aria-hidden="true" className="kc-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="kcBase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f8f8fa" />
          <stop offset="1" stopColor="#eeeff3" />
        </linearGradient>
        <linearGradient id="kcPeach" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2c49c" stopOpacity="1" />
          <stop offset="0.45" stopColor="#f9dfc8" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="kcSilk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="kcShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9dbe2" stopOpacity="0" />
          <stop offset="1" stopColor="#d4d6de" stopOpacity="0.55" />
        </linearGradient>
        <filter id="kcBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <rect width="1600" height="1000" fill="url(#kcBase)" />

      {/* top-left ribbons */}
      <g className="kc-drift-a">
        <path d="M-140 -60 C 300 20, 470 240, 280 480 C 150 620, -40 650, -180 690 Z" fill="url(#kcPeach)" filter="url(#kcBlur)" />
        <path d="M-80 -60 C 220 20, 380 160, 300 330 C 240 450, 60 470, -120 520 L -120 -60 Z" fill="url(#kcSilk)" />
        <path d="M-60 300 C 120 250, 260 160, 330 -20" fill="none" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2" />
      </g>

      {/* right ribbons */}
      <g className="kc-drift-b">
        <path d="M1740 180 C 1420 360, 1330 610, 1450 820 C 1540 940, 1680 980, 1780 1000 Z" fill="url(#kcPeach)" filter="url(#kcBlur)" />
        <path d="M1700 360 C 1480 520, 1380 700, 1460 900 L 1720 900 Z" fill="url(#kcSilk)" />
        <path d="M1720 520 C 1560 620, 1500 760, 1530 980" fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2" />
      </g>

      {/* low sweeping band across the bottom */}
      <g className="kc-drift-c">
        <path d="M-100 820 C 300 700, 700 760, 1000 860 S 1500 980, 1700 900 L 1700 1100 L -100 1100 Z" fill="url(#kcShade)" filter="url(#kcBlur)" />
        <path d="M-100 860 C 320 740, 720 800, 1020 900 S 1520 1000, 1700 940" fill="none" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="3" />
      </g>
    </svg>
  </div>
);

export default HomeBackdrop;
