import React from "react";
import { ArrowLeft } from "lucide-react";

const DataCentre = ({ navigateTo, goBack }) => {
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

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Institute Data Centre
        </h1>

        {/* About */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-3">
          About
        </h2>

        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
          The Data Centre is a secure facility designed for the centralized
          storage, processing, and management of digital data. It plays a
          critical role in supporting the institute's IT infrastructure and
          ensuring reliable computing services for academic, research, and
          administrative activities.
        </p>

        {/* Infrastructure */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          Infrastructure & Responsibilities
        </h2>

        <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base mb-10">

          <li>
            Setup and maintenance of Data Centre / HPC infrastructure including
            racks, UPS, DG sets, cooling systems, and access control.
          </li>

          <li>
            Monitoring of Data Centre and HPC resources along with physical
            infrastructure.
          </li>

          <li>
            Allocation of rack space for hosting clusters, storage systems,
            and high-end servers procured by faculty.
          </li>

          <li>
            Private cloud setup using common compute resources of the institute.
          </li>

          <li>
            Providing computing resources for hosting institute services such
            as websites, AIMS, ERP systems, and other applications.
          </li>

          <li>
            Managing critical services including Discourse, storage systems,
            name servers, VPN, DHCP, LDAP, and other core infrastructure
            services.
          </li>

          <li>
            Auditing, advising, and implementing security mechanisms across
            Computer Centre services.
          </li>

        </ul>

        {/* Overview */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          Overview
        </h2>

        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
          The primary purpose of the Data Centre is to host IT equipment
          belonging to the Computer Centre and various departments of the
          institute. These systems are critical and expensive resources
          procured through institutional or project funding.
        </p>

        <p className="text-gray-600 mb-10 text-sm md:text-base leading-relaxed">
          To ensure reliable operation of these computing systems, the data
          centre is supported by essential non-IT infrastructure such as racks,
          UPS systems, diesel generators, and precision air conditioning
          systems. These components ensure uninterrupted power, cooling,
          monitoring, and protection for all computing equipment.
        </p>

        {/* IT Equipment */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          IT Equipment
        </h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base mb-10">
          <li>Rack Servers (without GPU)</li>
          <li>Rack Servers (with GPU)</li>
          <li>Blade Servers</li>
          <li>Storage Appliances</li>
          <li>Network Switches</li>
        </ul>

        {/* Non IT Equipment */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mb-4">
          Non-IT Equipment
        </h2>

        <p className="text-gray-600 mb-4 text-sm md:text-base">
          Non-IT equipment includes the facilities required for the operation
          and protection of IT infrastructure.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm md:text-base">

          <li>Racks with Power Distribution Units (PDUs)</li>
          <li>Raw Power Supply</li>
          <li>Diesel Generator (DG)</li>
          <li>Uninterruptible Power Supply (UPS)</li>
          <li>Precision Air Conditioning (PAC) System</li>
          <li>Cold Aisle Containment (CAC)</li>
          <li>Fire Detection and Suppression System</li>
          <li>Rodent Repellent System</li>
          <li>Water Leak Detection System</li>
          <li>CCTV Surveillance System</li>
          <li>Access Control System</li>

        </ul>

      </div>
    </main>
  );
};

export default DataCentre;