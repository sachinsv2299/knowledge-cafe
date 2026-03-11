import React from "react";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";

const DiscoursePage = ({ navigateTo }) => {
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
          IITH Discourse
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          Discourse is an internal discussion forum for the IIT Hyderabad
          community. It provides a platform where members can participate
          in discussions, share announcements, and collaborate across
          different topics within the institute.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The forum includes several categories such as
          <strong> Institute Seminars, Carpooling, Marketplace, Lost & Found,
          Science & Technology, Programming, Academics, Institute Discussions,
          and Tech Tips.</strong>
        </p>

        {/* Benefits */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Why Use Discourse?
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-gray-600 mb-12">

          <li>Centralized platform for institute-wide discussions.</li>

          <li>Share announcements and important updates.</li>

          <li>Ask questions and receive responses from the community.</li>

          <li>Find useful resources and discussions related to academics and technology.</li>

          <li>Replace long email chains with organized discussion threads.</li>

        </ul>

        {/* Visit Forum */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">

          <h3 className="font-bold text-[#8B5E3C] mb-3">
            Visit the IITH Discourse Forum
          </h3>

          <p className="text-gray-600 mb-6">
            Join the conversation and explore discussions happening across
            the institute community.
          </p>

          <a
            href="https://discourse.iith.ac.in/top?period=yearly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-8 py-4 rounded-xl hover:bg-[#D2691E] transition font-semibold"
          >
            Open Discourse Forum
          </a>

        </div>

      </div>

    </main>
  );
};

export default DiscoursePage;