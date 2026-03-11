import React from "react";
import { ArrowLeft, ShieldCheck, AlertTriangle } from "lucide-react";

const CyberSecurityPage = ({ navigateTo }) => {
  return (
    <main className="p-10 md:p-24 bg-[#FDFBF7] min-h-screen">

      <div className="max-w-5xl mx-auto bg-white p-10 md:p-14 rounded-[2.5rem] border border-gray-300 shadow-sm">

        {/* Back Button */}
        <button
          onClick={() => navigateTo("Home")}
          className="flex items-center gap-3 text-sm font-bold text-green-600 hover:text-[#D2691E] mb-10"
        >
          <ArrowLeft size={18}/> BACK TO SERVICES
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
          Cyber Security Awareness
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          Cyber security awareness refers to how much end users understand the
          cyber security threats their networks face and the risks they introduce.
          End users are often considered the weakest link and the primary
          vulnerability within a network.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Computer Centre maintains firewalls and multiple security measures
          including <strong>24×7 monitoring</strong> to protect institute networks,
          domains, and systems from external threats. Since user awareness is
          critical to improving overall security, the following resources are
          provided to help the IITH community stay informed about cyber threats.
        </p>

        {/* Awareness Resources */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Cyber Security Resources
        </h2>

        <ul className="list-decimal pl-6 space-y-4 text-gray-600 mb-12">

          <li>
            <a href="https://drive.google.com/file/d/1jXSBlzJFOubag8LJqm-csLRgF-kqYd1-/view" target="_blank"
              className="text-blue-600 underline">
              Common Cyber Threats
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1fXM0UIsWPmmihvyItta0Z6YbdchlRgie/view" target="_blank"
              className="text-blue-600 underline">
              National Cyber Crime Reference Handbook
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1dt2-yYDte6SNtdAIkjtnkXpqYB7muFej/view" target="_blank"
              className="text-blue-600 underline">
              Secure Remote Desktop Access
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1se1qWhke1YF3TieKR1IirHIXQujofaPT/view" target="_blank"
              className="text-blue-600 underline">
              SSL Pinning – A Quick Walkthrough
            </a>
          </li>

          <li>
            <a href="https://comp.iith.ac.in/assets/files/A_Handbook_on_Basics_of_Cyber_Hygiene.pdf" 
              className="text-blue-600 underline">
              A Handbook on Basics of Cyber Hygiene – Published by UGC (Nov'24)
            </a>
          </li>

        </ul>

        {/* Download Section */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">

          <h3 className="font-bold text-[#8B5E3C] mb-3">
            Cyber Security Awareness Document
          </h3>

          <p className="text-gray-600 mb-4">
            Download the official cyber security awareness guide to understand
            common cyber threats and best practices for maintaining secure
            digital habits.
          </p>

          <a
            href="#"
            className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
          >
            Download Cyber Security Guide
          </a>

        </div>

      </div>

    </main>
  );
};

export default CyberSecurityPage;