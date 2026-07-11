import React from "react";
import { ArrowLeft } from "lucide-react";

const Microsoft365 = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen ">

      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-10 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-12 rounded-3xl border border-[#D4AF37] shadow">

        <h1 className="text-4xl font-bold mb-6">
          Microsoft Office 365
        </h1>

        <p className="text-gray-600 mb-10">
          Institutional access to <strong>Microsoft 365</strong> provides a suite of productivity,
          collaboration, and cloud/desktop tools for students, faculty and staff.
        </p>

        {/* Available Apps */}
        <h2 className="text-2xl font-bold mb-4">Available Applications</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-10">

          {[
            "Word",
            "Excel",
            "PowerPoint",
            "OneDrive - 100GB",
            "Teams",
            "OneNote",
            "SharePoint",
            "Forms",
            "Outlook",
            "Access",
            "Publisher"


          ].map(app => (
            <div
              key={app}
              className="p-6 bg-[#FDFBF7] border border-[#D4AF37] rounded-xl text-center font-semibold"
            >
              {app}
            </div>
          ))}

        </div>

        {/* Account Creation Guideline */}
        <h2 className="text-2xl font-bold mb-4">
          How to Create Your Microsoft 365 Account
        </h2>

        <a
          href="https://docs.google.com/document/d/1ZzgZIL-3OwzUMvjoCM0M1AQ3Y9Dxk5Tez13GsthcnD0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
        >
        MS Office 365 Guide 
        </a>


       

        <h2 className="text-2xl font-bold mt-10 mb-4">
        Security Advice
        </h2>

        <ol className="text-gray-600 mb-6 list-decimal pl-5 space-y-2">
          <li>For security reasons, do not sign in to your Microsoft Office account on another person’s device.</li>
          <li>If you plan to change your device, ensure that you sign out of all accounts from the current device before switching.</li>
          <li>Ensure your device is linked to your institute account to support device tracking and management.</li>
          <li>The validity of your Microsoft account depends on the validity of your institute email ID.</li>
        </ol>
      </div>

    </main>
  );
};

export default Microsoft365;