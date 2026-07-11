import React from "react";
import { ArrowLeft, Key, ShieldCheck, User } from "lucide-react";

const LDAPPage = ({ navigateTo, goBack }) => {
  return (
    <main className="p-10 md:p-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>


      <div className="max-w-5xl mx-auto bg-white p-6 md:p-14 rounded-[2.5rem] border border-[#D4AF37] shadow-sm">

        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
          LDAP Authentication Service
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          The Computer Centre provides a centralized <strong>LDAP (Lightweight Directory Access Protocol)</strong> 
          authentication system for the IITH community. LDAP enables users to access multiple 
          institute services using a single set of credentials.
        </p>

        {/* Key Benefits */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          Key Benefits
        </h2>

        <ul className="list-decimal pl-6 space-y-5 text-gray-600 mb-12 leading-relaxed">

          <li>
            Provides <strong>single sign-on access</strong> to multiple institute services.
          </li>

          <li>
            Used for authentication in various systems including 
            <strong> VPN, WiFi, Servers, and internal applications</strong>.
          </li>

          <li>
            Centralized account management improves 
            <strong>security and user identity control</strong>.
          </li>

        </ul>

        {/* Common Services */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          Services Using LDAP
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">

          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">AIMS Portal</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Disha Portal</div>  
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">IITH WiFi</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Eduroam WiFi</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">VPN Access</div>

                  
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Servers & HPC</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Internal Applications</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Library Services</div>

        </div>

        {/* Important Note */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-12">

          <p className="text-gray-700 leading-relaxed">
            Your LDAP credentials are used for authentication across multiple 
            institute systems. Please ensure that your password is kept secure 
            and not shared with others.
          </p>

        </div>
        <div className="text-gray-600 mb-6">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
          How to Change Your LDAP/AIMS Password
          </h2>

          <p className="text-gray-600 mb-6">
          If you need to update or reset your LDAP/AIMS password, please use the official
          password management portal provided by the Computer Centre.
          </p>

          <a
            href="https://reset.iith.ac.in/ldap/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
          >
          Change Password
          </a>

        </div >

        {/* Help Section */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
          Need Assistance?
        </h2>

        <p className="text-gray-600 mb-6">
          If you encounter issues with your LDAP account or authentication,
          please contact the Computer Centre support team.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold underline"
        >
          Raise a Support Ticket
        </a>

      </div>

    </main>
  );
};

export default LDAPPage;