import React from "react";
import { ArrowLeft } from "lucide-react";

const Microsoft365 = ({ navigateTo }) => {
  return (
    <main className="px-4 py-8 md:p-16 lg:p-24 bg-[#FDFBF7] min-h-screen">

      <button
        onClick={() => navigateTo("Home")}
        className="flex items-center gap-2 text-sm font-semibold text-green-600 mb-8"
      >
        <ArrowLeft size={18}/> BACK TO HOME
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border shadow-sm">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Microsoft Office 365
        </h1>

        <p className="text-gray-600 mb-8 text-sm md:text-base">
          Institutional access to <strong>Microsoft 365</strong> provides a suite of productivity,
          collaboration, and cloud tools for students, faculty and staff.
        </p>

        {/* Available Apps */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Available Applications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
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
          ].map((app) => (
            <div
              key={app}
              className="p-4 md:p-6 bg-[#FDFBF7] border rounded-xl text-center text-sm md:text-base font-semibold"
            >
              {app}
            </div>
          ))}
        </div>

        {/* Account Creation Guideline */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          How to Create Your Microsoft 365 Account
        </h2>

        <a
          href="https://docs.google.com/document/d/1ZzgZIL-3OwzUMvjoCM0M1AQ3Y9Dxk5Tez13GsthcnD0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto text-center bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition mb-10"
        >
          MS Office 365 Guide
        </a>

        {/* Security Advice */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Security Advice
        </h2>

        <ol className="text-gray-600 list-decimal pl-5 space-y-2 text-sm md:text-base">
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