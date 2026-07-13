import React from "react";
import { ArrowLeft, HardDrive, ShieldCheck, Database, LifeBuoy } from "lucide-react";

const StorageUsageFacility = ({ goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} />
        BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white border border-[#D4AF37] rounded-[2rem] shadow-sm p-8 md:p-14">

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center">
            <HardDrive className="w-8 h-8 text-[#D97706]" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-[#4A3728]">
              Vault Storage (NAS) Usage Policy
            </h1>
            <p className="text-gray-500 mt-2">
              Indian Institute of Technology Hyderabad
            </p>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
            Overview
          </h2>

          <p className="text-gray-600 leading-8">
            The IITH Vault Storage (NAS) provides secure centralized storage
            for academic, research and administrative activities. This policy
            defines storage allocation, acceptable usage, security,
            backup, and support procedures.
          </p>
        </section>

        {/* Storage Allocation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
            Standard Storage Allocation
          </h2>

          <div className="overflow-hidden rounded-2xl border border-[#E6D3A3]">
            <table className="w-full">
              <thead className="bg-[#FFF8EC]">
                <tr>
                  <th className="text-left p-4 text-[#4A3728]">
                    Category
                  </th>
                  <th className="text-left p-4 text-[#4A3728]">
                    Allocation
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">Faculty</td>
                  <td className="p-4 font-semibold">500 GB</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Administrative Office</td>
                  <td className="p-4 font-semibold">500 GB</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Department Office</td>
                  <td className="p-4 font-semibold">500 GB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-[#FFF7ED] rounded-xl p-5 border border-orange-200">
            <h3 className="font-bold text-[#8B5E3C] mb-2">
              Quota Enforcement
            </h3>

            <p className="text-gray-600">
              Once the assigned quota reaches 100%, users cannot upload,
              modify, or save additional files until storage is freed or
              additional capacity is approved.
            </p>
          </div>
        </section>

        {/* Additional Storage */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">
            Additional Storage
          </h2>

          <div className="bg-[#FAFAFA] rounded-xl border p-6">
            <ul className="space-y-3 list-disc ml-6 text-gray-600">
              <li>Available on chargeable yearly basis.</li>
              <li>Subject to resource availability.</li>
              <li>Must be requested through the Institute Support Portal.</li>
              <li>Renewal required after the approved period.</li>
            </ul>
          </div>
        </section>

        {/* Security */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="text-[#D97706]" />
            <h2 className="text-2xl font-bold text-[#8B5E3C]">
              Security & Privacy
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-3 text-[#4A3728]">
                Permitted Use
              </h3>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Academic data</li>
                <li>Research datasets</li>
                <li>Institute documents</li>
                <li>Department files</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-3 text-[#4A3728]">
                Prohibited Use
              </h3>

              <ul className="list-disc ml-5 text-gray-600 space-y-2">
                <li>Personal media collections</li>
                <li>Pirated software</li>
                <li>Malware</li>
                <li>Illegal content</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Backup */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Database className="text-[#D97706]" />

            <h2 className="text-2xl font-bold text-[#8B5E3C]">
              Backup & Data Retention
            </h2>
          </div>

          <div className="bg-[#FFFDF7] border rounded-xl p-6">

            <ul className="space-y-3 text-gray-600 list-disc ml-6">
              <li>Daily snapshots retained up to 14 days.</li>
              <li>Users should follow the 3-2-1 backup strategy.</li>
              <li>Accounts are retained for 30 days after deactivation.</li>
              <li>Expired data may be permanently removed.</li>
            </ul>

          </div>
        </section>

        {/* Support */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <LifeBuoy className="text-[#D97706]" />

            <h2 className="text-2xl font-bold text-[#8B5E3C]">
              Support Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-3">
                Technical Support
              </h3>

              <ul className="text-gray-600 list-disc ml-5 space-y-2">
                <li>NAS Access</li>
                <li>Drive Mapping</li>
                <li>Snapshot Recovery</li>
                <li>Storage Monitoring</li>
              </ul>
            </div>

            <div className="border rounded-xl p-5">
              <h3 className="font-semibold mb-3">
                Service Requests
              </h3>

              <ul className="text-gray-600 list-disc ml-5 space-y-2">
                <li>New Storage Access</li>
                <li>Folder Creation</li>
                <li>Permission Changes</li>
                <li>Additional Storage</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Footer */}
        <section className="border-t pt-8">
          <h3 className="text-xl font-bold text-[#4A3728] mb-4">
            Policy Enforcement
          </h3>

          <p className="text-gray-600 leading-8">
            Violations such as bypassing quotas, unauthorized access,
            prohibited content, or misuse of storage resources may result
            in suspension of access, removal of stored data, recovery of
            associated costs, or disciplinary action as per Institute
            policies.
          </p>

          <p className="mt-8 text-sm italic text-gray-500">
            Last Reviewed: June 2026
          </p>
        </section>

      </div>
    </main>
  );
};

export default StorageUsageFacility;