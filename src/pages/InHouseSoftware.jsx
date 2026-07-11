import React from "react";
import { ArrowLeft, Github, Code } from "lucide-react";

const InHouseSoftware = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:px-12 md:py-16 lg:px-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-2xl border border-[#D4AF37] shadow-sm">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Software & Resources Created In-House
        </h1>

        <p className="text-gray-600 mb-10 text-sm md:text-base">
          The following tools were developed internally by members of the IIT Hyderabad community
          to support academic and development workflows.
        </p>

        {/* Software Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Timetabler */}
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Code className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Timetabler</h3>

            <p className="text-gray-600 text-sm mb-4">
              Software developed to generate academic timetables based on
              IIT Hyderabad’s fractal academic system.
            </p>

            <a
              href="https://github.com/sukrutrao/Timetabler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <Github size={16}/> View on GitHub
            </a>
          </div>

          {/* Latex Template */}
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Code className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">LaTeX IITH Logo Template</h3>

            <p className="text-gray-600 text-sm mb-4">
              LaTeX template for creating IIT Hyderabad letterheads and
              documents with the official institute logo.
            </p>

            <a
              href="https://github.com/sbjoshi/iith-logo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <Github size={16}/> View on GitHub
            </a>
          </div>

          {/* Autograder */}
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Code className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Autograder</h3>

            <p className="text-gray-600 text-sm mb-4">
              Program evaluation server where students can submit code and
              automatically run it against predefined test cases.
            </p>

            <a
              href="https://github.com/vbsinha/autojudge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <Github size={16}/> View on GitHub
            </a>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 border rounded-xl bg-yellow-50">
          <h3 className="font-semibold text-lg mb-2">Disclaimer</h3>

          <p className="text-gray-700 text-sm">
            Resources listed on this page are not officially endorsed by IIT Hyderabad.
            This page merely provides links to software and resources that were created
            in-house at some point by members of the community.
          </p>
        </div>

      </div>

    </main>
  );
};

export default InHouseSoftware;