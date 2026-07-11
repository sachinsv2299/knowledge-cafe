import React from "react";
import { ArrowLeft, Cloud, Monitor, AlertTriangle } from "lucide-react";

const WORKSPACE_APPS = [
  { name: "Gmail", license: "All Users", purpose: <>Official institutional <a href="https://docs.google.com/document/d/e/2PACX-1vQcpzfkK3PlQozgik6QSoM-pEYd19HqsurqOQqb_2mDJdE5nyXNVvRWFzSdI2nAnI03dWb219Pmugw9/pub" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800"> email</a>, <a href="https://comp.iith.ac.in/group-mail-policy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">group announcement</a> communication.</> },
  { name: "Google Calendar", license: "All Users", purpose: "Time-management and scheduling calendar." },
  { name: "Google Chat", license: "All Users", purpose: "Direct messaging and team collaboration spaces." },
  { name: "Google Classroom", license: "All Users", purpose: "Learning management system. Faculty create and manage classes; students join them." },
  { name: "Google CoLaboratory", license: "All Users", purpose: "Cloud-based Jupyter notebook environment for machine learning and data analysis." },
  { name: "Google Docs, Sheets, Slides", license: "All Users", purpose: "Core productivity suite for document, spreadsheet, and presentation creation and live collaboration." },
  { name: "Google Drive", license: "All Users (Quotas Apply)", purpose: "Cloud storage and file sharing." },
  { name: "Google Forms", license: "All Users", purpose: "Create surveys, quizzes, and collect data." },
  { name: "Google Keep", license: "All Users", purpose: "Note-taking and list-making application." },
  { name: "Google Meet", license: "All Users (Premium for Faculty)", purpose: "Video conferencing. Faculty possess premium features like meeting recording and larger participant limits." },
  { name: "Google Sites", license: "All Users", purpose: "Create and host internal or project-based websites." },
].sort((a, b) => a.name.localeCompare(b.name));

const GoogleWorkspace = ({ navigateTo, goBack }) => {
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
          Google Workspace
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-10">
          Google Workspace for Education access is provisioned for all IITH students, faculty, and staff. Please follow the instructions below to access your cloud-based productivity and collaboration tools.
        </p>

        {/* Login Instructions */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Login Instructions
        </h2>

        <ul className="list-decimal pl-6 space-y-4 text-gray-600 mb-12">
          <li>
            Visit <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">mail.google.com</a> or any Google Workspace service.
          </li>
          <li>
            Enter your official IITH email ID and click <strong>Next</strong>.
          </li>
          <li>
            Log in using your IITH Google password to access your Google Workspace dashboard.
          </li>
        </ul>

        {/* Access Methods */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Access Methods
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          You can access Google Workspace applications across multiple platforms:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Cloud className="text-[#8B5E3C] mb-3" size={28} />
            <h3 className="text-xl font-bold mb-3 text-[#4A3728]">Web Access</h3>
            <p className="text-gray-600 text-sm">
              All Google Workspace applications are fully accessible via any modern web browser without any installation required. Simply visit the respective app URL.
            </p>
          </div>
          {/* <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Monitor className="text-[#8B5E3C] mb-3" size={28} />
            <h3 className="text-xl font-bold mb-3 text-[#4A3728]">Drive for Desktop</h3>
            <p className="text-gray-600 text-sm mb-4">
              To seamlessly sync your cloud files with your local machine, you can install Google Drive for Desktop on your Windows or macOS computer.
            </p>
            <a
              href="https://www.google.com/drive/download/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              Download Desktop App
            </a>
          </div> */}
        </div>

        {/* Applications & Licenses */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Applications & License Types
        </h2>
        <div className="overflow-x-auto mb-12 border border-[#D4AF37] rounded-xl shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FFFAF0] border-b border-[#D4AF37]">
                <th className="p-4 font-bold text-[#4A3728] w-1/3">App Name</th>
                <th className="p-4 font-bold text-[#4A3728]">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {WORKSPACE_APPS.map((app, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 last:border-0 hover:bg-orange-50 transition-colors"
                >
                  <td className="p-4 align-top">
                    <strong className="text-[#4A3728] block mb-1">{app.name}</strong>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D2691E]">{app.license}</span>
                  </td>
                  <td className="p-4 align-top leading-relaxed">
                    {app.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Storage Quotas */}
        {/* <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Storage Quotas & Policies
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-12">
          <li>
            <strong>Staff & Faculty:</strong> Provided with higher storage quotas suitable for extensive research, administrative data, and teaching materials.
          </li>
          <li>
            <strong>Students:</strong> Provided with a standardized storage quota for academic use. Please ensure you regularly clean up unnecessary files to stay within your limit.
          </li>
          <li>
            <strong>Alumni:</strong> Access and storage policies may change post-graduation. Always back up personal data before your graduation date.
          </li>
        </ul> */}

        {/* Important Notes */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#D2691E]" size={24} />
            <h3 className="text-lg font-bold text-[#8B5E3C]">
              Important Notes
            </h3>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
            <li>Google Workspace is intended for official academic and administrative use.</li>
            <li><a href="https://support.google.com/a/users?sjid=8024927221209100312-NC#topic=11499463" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">Google Workspace Learning Centre</a></li>
            <li>Use a strong password and enable Two-Factor Authentication (2FA). Do not share your Google password with anyone. We strictly advise against logging into any Google service from another person's device.</li>
            <li>For any issues related to email access, groups, or Drive, please raise a support ticket through the support portal.</li>

          </ul>
          <a
            href="https://support.comp.iith.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition font-semibold"
          >
            Raise a Support Ticket
          </a>
        </div>

      </div>

    </main>
  );
};

export default GoogleWorkspace;