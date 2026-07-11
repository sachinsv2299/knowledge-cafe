import React from "react";
import { ArrowLeft } from "lucide-react";

const WindowsActivation = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-16 lg:p-24 bg-[#FDFBF7] min-h-screen">

      {/* Back Button */}
      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-3xl border border-[#D4AF37] shadow-sm">

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Windows Activation
        </h1>

        {/* Intro */}
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          The Computer Centre provides activation support for <strong>Windows 10/11 Pro (only) </strong>
           for institute systems.
        </p>

        {/* If Windows already installed */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          If Your PC Already Has Windows 10 / 11 Pro
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          If your system already has Windows 10 Pro or Windows 11 Pro installed but it is not activated,
          please raise a support ticket for activation.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition mb-10"
        >
          Raise Ticket for Activation
        </a>

        {/* Installation Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          If Windows Pro Is Not Installed
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          If your system does not have Windows operating system, please follow
          the steps below to install <strong>Windows 11 Pro (recommended).</strong>
        </p>

        {/* Steps */}
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 text-sm md:text-base mb-10">

          <li>
            Download the official Windows ISO file from the IIT Hyderabad repository.
          </li>

          <li>
            Take an empty USB pen drive (minimum <strong>8 GB recommended</strong>).
          </li>

          <li>
            Download a bootable USB creation tool (e.g., Rufus) to prepare the pen drive.
          </li>

          <li>
            Create a bootable USB by burning the downloaded Windows ISO file into the pen drive.
          </li>

          <li>
            Install Windows on your system by following the installation guidelines.
          </li>

          <li>
            After installation, raise a support ticket to activate Windows 11 Pro.
          </li>

        </ol>

        {/* Useful Links */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          Useful Links
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">

          <a
            href="https://intranet.iith.ac.in/chrome/site/files/os/SW_DVD9_WIN_Pro_11_21H2.4_64BIT_English_Pro_ENT_EDU_N_MLF_X23-05359.ISO"
            className="bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition text-center"
          >
            Download Windows ISO
          </a>

          <a
            href="https://docs.google.com/document/d/17xJbgw9E7NUIoTWIcWAUQA_k2WEp8_ofv7ZbPHw7Unk/edit?tab=t.0"
            className="bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition text-center"
          >
            Bootable USB Guideline
          </a>

          <a
            href="https://docs.google.com/document/d/1BVxkbyMBqwC4PPl5vUtqm_QbxRCs0T4v0HNslwaLZ0g/edit?tab=t.0#heading=h.jnfeijxfokqq"
            className="bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition text-center"
          >
            Windows Installation Guide
          </a>

        </div>

        {/* Final Support */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          Activation Support
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Once Windows 11 Pro installation is completed, please raise a support
          ticket with the Computer Centre to activate your system.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F28972] text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Raise Activation Ticket
        </a>

      </div>

    </main>
  );
};

export default WindowsActivation;