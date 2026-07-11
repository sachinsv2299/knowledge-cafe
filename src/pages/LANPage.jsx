import React from "react";
import { ArrowLeft } from "lucide-react";

const WiredLAN = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-16 lg:p-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      {/* Content Card */}
      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border border-[#D4AF37] shadow-sm">

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Wired (LAN) Access on Campus
        </h1>

        {/* Introduction */}
        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
          The Network Team at the Computer Centre, IIT Hyderabad, is dedicated to
          providing robust and high-speed network connectivity to support the
          academic and administrative needs of the campus community. Our team
          ensures seamless internet access and reliable network infrastructure
          across all areas of the campus, including academic departments,
          hostels, residential areas, the library, and other central facilities.
        </p>

        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Connecting Your Computer to the IIT Hyderabad Campus Network
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Welcome to IIT Hyderabad! If you are staying on campus and would like
          to connect your computer to the network, please follow these steps:
        </p>

        {/* Steps */}
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-sm md:text-base">

          <li>
            <strong>Wall Jack:</strong> Ensure you have a wall jack in your room
            or workspace. If you don't have one, please report the issue via the
            Computer Centre support portal.
          </li>

          <li>
            <strong>LAN Card and LAN Cable:</strong> You must have a LAN card and
            a LAN cable to connect to the network. The Computer Centre can
            provide a LAN cable if required. Please raise a request through the
            Computer Centre support portal.
          </li>

          <li>
            <strong>IP Address:</strong> You do not need to configure any IP
            address manually. The IIT Hyderabad network uses DHCP (Dynamic Host
            Configuration Protocol), which automatically assigns IP addresses.
            Ensure that no manual IP or DNS address is configured on your
            system.
          </li>

          <li>
            After completing the above steps, your computer should be able to
            connect to the IIT Hyderabad network.
          </li>

          <li>
            If you are unable to connect, please refer to the troubleshooting
            guide available on the Computer Centre support portal.
          </li>

        </ol>

        {/* LAN Help Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mt-10 mb-4">
          Need Assistance with LAN Connection?
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          If you are unable to connect to the IIT Hyderabad wired (LAN) network,
          please verify your LAN cable connection and network settings. If the
          issue persists, contact the Computer Centre support team for assistance.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8B5E3C] text-white px-5 py-2 rounded-lg hover:bg-[#D2691E] transition"
        >
          Raise a LAN Support Ticket
        </a>

      </div>

    </main>
  );
};

export default WiredLAN;