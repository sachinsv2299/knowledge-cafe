import React from "react";
import { ArrowLeft, Monitor } from "lucide-react";

const OfficeSoftware = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:px-12 md:py-16 lg:px-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border border-[#D4AF37] shadow-sm">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Office Software
        </h1>

        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
          The Computer Centre provides access to official productivity software
          for students, faculty, and staff. Select a software package below to
          view installation and usage guidelines.
        </p>

        {/* Software Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Microsoft 365 */}
          <div
            onClick={() => navigateTo("ItemDetail", null, null, "cc-s-ms")}
            className="p-8 border rounded-xl hover:shadow-lg hover:-translate-y-1 transition cursor-pointer bg-[#FDFBF7]"
          >
            <Monitor className="mb-4 text-[#8B5E3C]" size={32}/>

            <h3 className="text-xl font-bold mb-2">
              Microsoft Office 365
            </h3>

            <p className="text-gray-600 text-sm">
              Access Microsoft Word, Excel, PowerPoint, OneDrive, Teams and
              other productivity tools provided by IIT Hyderabad.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
};

export default OfficeSoftware;