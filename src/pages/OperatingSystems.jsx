import React from "react";
import { ArrowLeft, Monitor } from "lucide-react";

const OperatingSystems = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:px-12 md:py-16 lg:px-24 bg-[#FDFBF7] min-h-screen">

      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border border-[#D4AF37] shadow-sm">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Operating Systems
        </h1>

        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
          Select an operating system below to view installation and activation guidelines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Windows */}
          <div
            onClick={() => navigateTo("ItemDetail", null, null, "cc-s-win")}
            className="p-8 border border-[#D4AF37] rounded-xl hover:shadow-lg hover:-translate-y-1 transition cursor-pointer bg-[#FDFBF7]"
          >
            <Monitor className="mb-4 text-[#8B5E3C]" size={32}/>
            <h3 className="text-xl font-bold mb-2">Windows 11 Pro</h3>
            <p className="text-gray-600 text-sm">
              Installation and activation guidelines for Windows 11 Pro provided by the institute.
            </p>
          </div>

          {/* Ubuntu Download */}
          <a
            href="https://ubuntu.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border  border-[#D4AF37] rounded-xl hover:shadow-lg hover:-translate-y-1 transition bg-[#FDFBF7]"
          >
            <Monitor className="mb-4 text-[#8B5E3C]" size={32}/>
            <h3 className="text-xl font-bold mb-2">Download Ubuntu Linux</h3>
            <p className="text-gray-600 text-sm">
              Download Ubuntu Linux operating system.
            </p>
          </a>

          {/* Ubuntu Guide */}
          <a
            href="https://documentation.ubuntu.com/desktop/en/latest/tutorial/install-ubuntu-desktop/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 border border-[#D4AF37] rounded-xl hover:shadow-lg hover:-translate-y-1 transition bg-[#FDFBF7]"
          >
            <Monitor className="mb-4 text-[#8B5E3C]" size={32}/>
            <h3 className="text-xl font-bold mb-2">Ubuntu Installation Guide</h3>
            <p className="text-gray-600 text-sm">
              Ubuntu Desktop installation documentation.
            </p>
          </a>

        </div>

      </div>

    </main>
  );
};

export default OperatingSystems;