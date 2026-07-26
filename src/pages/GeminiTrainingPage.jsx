import React from 'react';
import { ArrowLeft, Youtube } from 'lucide-react';

const tutorials = [
  {
    title: 'Official Gemini Introduction',
    description: 'An overview of Google Gemini, its capabilities, and how it can be used for various tasks.',
    link: 'https://www.youtube.com/watch?v=j-vL6kL5-a0',
    duration: '9:45'
  },
  {
    title: 'Gemini for Workspace',
    description: 'Learn how to leverage Gemini within Google Workspace apps like Docs, Sheets, and Slides to boost productivity.',
    link: 'https://www.youtube.com/watch?v=9g_B-SA40-o',
    duration: '2:30'
  },
  {
    title: 'Advanced Gemini Features',
    description: 'Explore advanced prompting techniques, function calling, and other powerful features in Google Gemini.',
    link: 'https://www.youtube.com/watch?v=__-zM-PjH4A',
    duration: '15:20'
  }
];

const GeminiTrainingPage = ({ goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={goBack}
          className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
        >
          <ArrowLeft size={18} /> BACK
        </button>

        <div className="bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
            Google Gemini Training
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            Explore these video tutorials to learn how to effectively use Google Gemini for your academic, research, and administrative tasks.
          </p>

          <div className="space-y-6">
            {tutorials.map((tutorial, index) => (
              <a 
                key={index}
                href={tutorial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-[#D4AF37] rounded-2xl hover:bg-[#FFFAF0] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#8B5E3C] mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#D2691E] font-semibold">
                  <Youtube size={18} /> Watch Tutorial ({tutorial.duration})
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default GeminiTrainingPage;