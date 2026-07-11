import React from "react";
import { ArrowLeft, Cloud, Monitor, AlertTriangle } from "lucide-react";

const ADOBE_APPS = [  
  { name: "Adobe Acrobat Pro", platforms: "", purpose: "The standard for creating, editing, signing, and managing PDF documents and forms." },
  { name: "Adobe After Effects", platforms: "", purpose: "Creating cinematic visual effects, motion graphics, and complex video compositing." },
  { name: "Adobe Animate", platforms: "", purpose: "Creating interactive 2D vector animations for games, apps, and the web." },
  { name: "Adobe Audition", platforms: "", purpose: "Comprehensive toolset for recording, mixing, editing, and restoring audio." },
  { name: "Adobe Character Animator", platforms: "", purpose: "Animating 2D characters in real-time using your webcam and microphone." },
  { name: "Adobe Dimension", platforms: "", purpose: "Creating photorealistic 3D images for branding, product shots, and package design." },
  { name: "Adobe Dreamweaver", platforms: "", purpose: "Visual and code-based design and development for modern, responsive websites." },
  { name: "Adobe Express", platforms: "", purpose: "Template-driven app for quickly creating social media graphics, flyers, short videos, and web pages." },
  { name: "Adobe Firefly", platforms: "", purpose: "Generative AI for creating images, text effects, and more from simple text prompts." },
  { name: "Adobe Fresco", platforms: "", purpose: "Digital drawing and painting app featuring incredibly realistic vector and raster brushes." },
  { name: "Adobe Illustrator", platforms: "", purpose: "Creating scalable vector graphics such as logos, icons, typography, and complex illustrations." },
  { name: "Adobe InCopy", platforms: "", purpose: "Word processing program that integrates directly with InDesign for collaborative editing." },
  { name: "Adobe InDesign", platforms: "", purpose: "Page design and layout software for creating print and digital publications like magazines, books, and interactive PDFs." },
  { name:- "Adobe Lightroom", platforms: "", purpose: "Cloud-based photo service for batch editing, organizing, and storing photography across devices." },
  { name: "Adobe Lightroom Classic", platforms: "", purpose: "Desktop-focused, localized photo organization, batch editing, and color correction." },
  { name: "Adobe Media Encoder", platforms: "", purpose: "Rendering engine used alongside Premiere and After Effects to output video to various formats and devices." },
  { name: "Adobe Photoshop", platforms: "", purpose: "Industry standard for image editing, photo manipulation, compositing, and digital painting." },
  { name: "Adobe Premiere Pro", platforms: "", purpose: "Professional timeline-based video and film editing." },
  { name: "Adobe Premiere Rush", platforms: "", purpose: "Simplified, cross-platform video editing app for quick, on-the-go video creation and sharing." },
  { name: "Adobe XD", platforms: "", purpose: "Designing, prototyping, and sharing user experiences (UI/UX) for websites and mobile apps." },
  { name: "Substance 3D Suite", platforms: "", purpose: "Advanced tools for 3D modeling, material creation, texturing, and staging (includes Painter, Designer, Sampler, and Stager)." },
].sort((a, b) => a.name.localeCompare(b.name));

const AdobeSuite = ({ navigateTo, goBack }) => {
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
          Adobe Suite
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-10">
          Adobe Creative Cloud/Desktop apps access has been enabled for IITH. Please follow the instructions below to log in and install the Creative Cloud Desktop application.
        </p>

        {/* Login Instructions */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Login Instructions
        </h2>

        <ul className="list-decimal pl-6 space-y-4 text-gray-600 mb-12">
          <li>
            Visit <a href="https://creativecloud.adobe.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-medium">creativecloud.adobe.com</a> and click on <strong>Sign In</strong>.
          </li>
          <li>
            Enter your IITH email ID and click <strong>Continue</strong>.
          </li>
          <li>
            You will be redirected to IITH Google Workspace Sign In.
          </li>
          <li>
            Log in using your IITH Google credentials to access Adobe Creative Cloud services.
          </li>
        </ul>

        {/* Download & Installation */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Download & Installation
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Once logged in, you have the flexibility to use web-based apps directly or install full desktop versions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Cloud className="text-[#8B5E3C] mb-3" size={28} />
            <h3 className="text-xl font-bold mb-3 text-[#4A3728]">Cloud Apps (Web Access)</h3>
            <p className="text-gray-600 text-sm">
              Right from the Creative Cloud dashboard, you can immediately access and use web-based applications (such as Adobe Express, Acrobat Web, and more) directly in your browser without downloading anything.
            </p>
          </div>
          <div className="p-6 border border-[#D4AF37] rounded-xl bg-[#FDFBF7] hover:shadow-md transition">
            <Monitor className="text-[#8B5E3C] mb-3" size={28} />
            <h3 className="text-xl font-bold mb-3 text-[#4A3728]">Desktop Installation</h3>
            <p className="text-gray-600 text-sm mb-4">
              To install software on your computer, download the Creative Cloud Desktop application. Install it, then open the desktop app and sign in using your institutional account to browse, install, and launch individual Adobe desktop apps.
            </p>
            <a
              href="https://creativecloud.adobe.com/apps/download/creative-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              Download Desktop App
            </a>
          </div>
        </div>

        {/* Available Applications */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Available Applications
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
              {ADOBE_APPS.map((app, index) => (
                <tr 
                  key={index} 
                  className="border-b border-gray-100 last:border-0 hover:bg-orange-50 transition-colors"
                >
                  <td className="p-4 align-top">
                    <strong className="text-[#4A3728] block mb-1">{app.name}</strong>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D2691E]">{app.platforms}</span>
                  </td>
                  <td className="p-4 align-top leading-relaxed">
                    {app.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Supported OS */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Supported Operating Systems
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-12">
          <li>
            The Creative Cloud Desktop application is supported on <strong>Windows</strong> and <strong>macOS</strong> systems.
          </li>
          <li>
            <strong>Linux</strong> systems are not supported for desktop installation. At present, Adobe Creative Cloud services on Linux are accessible only via the web (browser) version.
          </li>
        </ul>

        {/* Important Notes */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-[#D2691E]" size={24} />
            <h3 className="text-lg font-bold text-[#8B5E3C]">
              Important Notes
            </h3>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
            <li>Access is restricted to authorised IITH users only.</li>
            <li>Ensure you use your official institutional email ID for login.</li>
            <li>For any issues related to login, installation or license issues, please raise a support ticket through the support portal.</li>
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

export default AdobeSuite;