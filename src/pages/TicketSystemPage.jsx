import React from "react";
import { ArrowLeft, Ticket, MessageSquare } from "lucide-react";

const TicketSystemPage = ({ navigateTo }) => {
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
          Computer Center Ticket System
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          The Computer Center Support Portal allows IITH members 
          (Faculty, Staff, and Students) to request services or report 
          technical issues. Each request generates a unique ticket number 
          which is assigned to the concerned support staff for resolution.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          Once the issue is resolved, the ticket will be marked as closed. 
          This system ensures efficient communication and tracking of 
          support requests.
        </p>

        {/* Features */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Key Features
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-10">

          <li>Helps prioritize support requests efficiently.</li>

          <li>Creates easy communication between users and support staff.</li>

          <li>Users can track the status of their ticket online.</li>

          <li>All support requests and responses are archived for reference.</li>

          <li>Help topics route inquiries to the appropriate support team.</li>

          <li>Users can comment and interact with staff through the ticket.</li>

        </ul>

        {/* User Manual */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">

          <h3 className="font-bold text-[#8B5E3C] mb-3">
            Ticket System User Manual
          </h3>

          <p className="text-gray-600 mb-4">
            Refer to the user manual for detailed instructions on creating
            and managing support tickets.
          </p>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQv-FCs6EY2kB_ZxndWqUfUTWbvMaJu08hgg3YCarDDIEP715XKYTYWgERq3rfQolxRYSom1JBGRdR8/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold"
          >
            Computer Center Ticket System – User Manual
          </a>

        </div>

        {/* Raise Ticket Button */}

        <div className="text-center mt-8">

          <a
            href="https://support.comp.iith.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-8 py-4 rounded-xl hover:bg-[#D2691E] transition font-semibold"
          >
            Raise a Ticket
          </a>

        </div>

      </div>

    </main>
  );
};

export default TicketSystemPage;