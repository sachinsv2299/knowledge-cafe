import React from "react";
import { ArrowLeft, ShieldCheck, Server, Wifi, BookOpen } from "lucide-react";

const VPNPage = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">

       

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
          IITH WireGuard VPN
        </h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-6">
          The Computer Centre, IITH provides a <strong>WireGuard-based VPN service</strong>
          for the benefit of the IITH community to remotely access institute IT
          resources such as <strong>Servers, GPU clusters, Library resources,
          and the Institute Intranet</strong>.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The service is secure, user-friendly, and allows seamless access to
          institute resources while browsing the internet through your home
          network.
        </p>

        {/* Benefits Section */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Benefits of Using IITH VPN
        </h2>

        <ul className="list-decimal pl-6 space-y-5 text-gray-600 mb-12 leading-relaxed">

          <li>
            Access internal IITH services such as the
            <strong> Institute Intranet and Library resources</strong>.
          </li>

          <li>
            Securely connect to your respective
            <strong> Servers and GPU clusters</strong> located in the
            institute Data Centre.
          </li>

          <li>
            Access Library e-resources via proxy:
            <strong> 192.168.35.5</strong>, Port <strong>3128</strong>.
          </li>

        </ul>

        {/* Supported Devices */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Supported Devices
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Windows</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">MacOS</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Linux</div>
          <div className="border border-[#D4AF37] p-4 rounded-xl text-center">Android / iOS</div>

        </div>

        {/* Important Note */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-12">

          <p className="text-gray-700 leading-relaxed">
            Each user is assigned a <strong>unique permanent private IP address</strong>.
            Only <strong>one personal device at a time</strong> (laptop, smartphone,
            tablet, or desktop) can be connected to the campus network for remote
            access to institute resources.
          </p>

        </div>

        {/* Setup Guide */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
          Setup Guide
        </h2>

        <p className="text-gray-600 mb-6">
          Follow the official VPN manual to configure WireGuard VPN on your device.
        </p>

        <a
          href="https://support.comp.iith.ac.in/kb/faq.php?id=21" target='_blank'
          className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
        >
          How to Setup IITH WireGuard VPN
        </a>

        {/* Support Section */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mt-14 mb-4">
          Need Help?
        </h2>

        <p className="text-gray-600 mb-6">
          If you still have queries related to configuring or using the VPN
          service after reviewing the VPN manual, please raise a ticket through
          the Computer Centre support portal.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold underline"
        >
          support.comp.iith.ac.in
        </a>

      </div>

    </main>
  );
};

export default VPNPage;