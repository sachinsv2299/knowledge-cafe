import React from "react";
import { ArrowLeft, Cpu } from "lucide-react";

const ScientificSoftware = ({ navigateTo, goBack }) => {
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

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Scientific Software
        </h1>

        {/* SOFTWARE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ANSYS */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">ANSYS</h3>
            <p className="text-gray-600 text-sm mb-4">
              Simulation tools for structures, fluids, electronics and materials.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Installation Files
            </a>
          

{/*            <button
              onClick={() => navigateTo("Ansys")}
              className="text-blue-600 font-semibold hover:underline"
            >
              View Installation Files
            </button>*/}
          </div>

          {/* THERMO CALC */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Thermo-Calc</h3>
            <p className="text-gray-600 text-sm mb-4">
              Software for thermodynamic calculations and materials analysis.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Activation Instructions
            </a>
          </div>

          {/* CRYSTAL MAKER */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">CrystalMaker</h3>
            <p className="text-gray-600 text-sm mb-4">
              Visualization and modeling software for crystal structures.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download & Activation
            </a>
          </div>

          {/* MATLAB */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">MATLAB</h3>
            <p className="text-gray-600 text-sm mb-4">
              Numerical computing environment used for research and engineering.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Installation Guide
            </a>
          </div>

          {/* MATHEMATICA */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Mathematica</h3>
            <p className="text-gray-600 text-sm mb-4">
              Computational software used for symbolic mathematics and data analysis.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download & Setup
            </a>
          </div>

          {/* CAMTASIA */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Camtasia</h3>
            <p className="text-gray-600 text-sm mb-4">
              Screen recording and video editing software for lectures.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download
            </a>
          </div>

          {/* ORIGIN */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">Origin</h3>
            <p className="text-gray-600 text-sm mb-4">
              Data analysis and graphing software widely used in research labs.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Download ISO
            </a>
          </div>

          {/* LABVIEW */}
          <div className="p-6 border border-[#D4AF37] rounded-xl hover:shadow-md bg-[#FDFBF7]">
            <Cpu className="text-[#8B5E3C] mb-3"/>
            <h3 className="text-xl font-bold mb-2">LabVIEW</h3>
            <p className="text-gray-600 text-sm mb-4">
              System design software for engineering applications.
            </p>

            <a
              href="https://intranet.iith.ac.in/wiki/OsOffice" target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              Installation Guide
            </a>
          </div>

        </div>

      </div>

    </main>
  );
};

export default ScientificSoftware;