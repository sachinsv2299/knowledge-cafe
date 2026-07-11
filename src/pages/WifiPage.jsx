  import React from "react";
import { ArrowLeft, Wifi, Users, Globe } from "lucide-react";

const WifiPage = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">

      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">

        {/* Back Button */}
        

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
          WiFi in IITH Campus
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          The Network Operations Center provides WiFi connectivity across
          academic blocks, hostels, guest house, dining hall, and PSH
          (Kapila Block) in IIT Hyderabad.
        </p>

        {/* WiFi Networks */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          Available WiFi Networks
        </h2>

        <ul className="list-decimal pl-6 space-y-4 text-gray-600 mb-10">

          <li>
            <strong>IITH</strong> – For all IITH members (Faculty, Students,
            Permanent Staff, Project Staff, Interns).
          </li>

          <li>
            <strong>IITH-Guest WiFi</strong> – For guests visiting IIT Hyderabad.
          </li>

          <li>
            <strong>Eduroam WiFi</strong> – For users who already have an
            Eduroam account.
          </li>

        </ul>

        {/* Account Info */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          WiFi Account Information
        </h2>

        <p className="text-gray-600 mb-6">
          A WiFi account is automatically created for every IITH member.
          This account is used to connect to both <strong>IITH</strong> and
          <strong> Eduroam</strong> networks.
        </p>

        <p className="text-gray-600 mb-8">
          The WiFi username will be the same as the username field in your
          IITH email ID.
        </p>

        {/* Password Reset */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">

          <h3 className="font-bold text-[#8B5E3C] mb-3">
            Reset WiFi Password
          </h3>

          <p className="text-gray-600 mb-4">
            If you need to reset your WiFi password, please use the official
            password reset portal.
          </p>

          <a
            href="https://reset.iith.ac.in/ad/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
          >
            Reset WiFi Password
          </a>

        </div>

        {/* Troubleshooting Links */}

        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Setup & Troubleshooting
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <a
            href="https://support.comp.iith.ac.in/kb/faq.php?id=22"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37] rounded-xl p-4 hover:bg-[#FDFBF7]"
          >
            How to connect to IITH WiFi
          </a>

          <a
            href="https://support.comp.iith.ac.in/kb/faq.php?id=24"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37] rounded-xl p-4 hover:bg-[#FDFBF7]"
          >
            How to connect to IITH Guest WiFi
          </a>

          <a
            href="https://support.comp.iith.ac.in/kb/faq.php?id=23"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37] rounded-xl p-4 hover:bg-[#FDFBF7]"
          >
            How to connect to Eduroam WiFi
          </a>

          <a
            href="https://support.comp.iith.ac.in/kb/faq.php?id=34"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#D4AF37] rounded-xl p-4 hover:bg-[#FDFBF7]"
          >
            Domain Name and Certificate Issues
          </a>

        </div>

        {/* Important Notes */}

        <div className="bg-gray-50 border rounded-xl p-6 mt-12">

          <h3 className="font-bold mb-3">Important Notes</h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-600">

            <li>
              IP and DNS settings on devices should be set to
              <strong> Dynamic / Automatic</strong>.
            </li>

            <li>
              Proxy settings should only be used when accessing
              library journal resources.
            </li>

            <li>
              LAN connectivity is available in hostels and staff housing.
              Personal WiFi routers are not supported by the Computer Centre.
            </li>

          </ul>

        </div>

        {/* WiFi Help Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mt-10 mb-4">
          Need Assistance with Wi-Fi?
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          If you are experiencing issues connecting to the IIT Hyderabad Wi-Fi
          network, please check your device Wi-Fi settings and ensure you are
          using the correct network credentials. If the issue continues,
          contact the Computer Centre support team.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8B5E3C] text-white px-5 py-2 rounded-lg hover:bg-[#D2691E] transition"
        >
          Raise a Wi-Fi Support Ticket
        </a>

      </div>

    </main>
  );
};

export default WifiPage;