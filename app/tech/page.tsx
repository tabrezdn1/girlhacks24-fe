'use client';

import { useState } from 'react';
import GrainyFilter from '../components/GrainyFilter';
import Navbar from '../components/Navbar';

const tabs = [
  { 
    id: 'fe', 
    label: 'Frontend', 
    content: ['NextJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  { 
    id: 'be', 
    label: 'Backend', 
    content: ['Python', 'FastAPI', 'REST']
  },
  { 
    id: 'ai-ml', 
    label: 'AI/ML', 
    content: ['LLM', 'Prompt Engineering', 'Model Fine Tuning']
  },
  { 
    id: 'cloud', 
    label: 'Cloud', 
    content: ['AWS', 'Terraform', 'Github Actions']
  },
  { 
    id: 'database', 
    label: 'Database', 
    content: ['MongoDB']
  },
  { 
    id: 'miscellaneous', 
    label: 'Miscellaneous', 
    content: ['Docker','Streamlit','Pandas','YoutubeAPI','SpotifyAPI']
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-hidden w-full before:bg-[#8c8c8c] loginBody">
        <div className="blur-[150px] absolute -top-[50px] -left-[300px] w-full h-full overflow-hidden -z-20">
          <div className="gradient absolute rounded-[100%] blob gradient-1 w-[700px] h-[700px] opacity-30 left-[60%] top-[40%] -z-20 bg-[#FF0080]" />
          <div className="gradient absolute rounded-[100%] blob gradient-2 w-[600px] h-[600px] opacity-80 left-[40%] top-[60%] -z-10 bg-[#4A2560]" />
          <div className="gradient absolute rounded-[100%] blob gradient-3 w-[500px] h-[500px] opacity-50 left-[50%] top-[50%] -z-30 bg-[#C17710]" />
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-5xl font-bold text-center mb-12 text-zinc-900">Our Tech Stack</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-wrap mb-6 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-6 text-sm font-medium rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    activeTab === tab.id
                      ? 'bg-indigo-100 text-indigo-700 shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg min-h-[200px] transition-all duration-300 ease-in-out">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                {tabs.find(tab => tab.id === activeTab)?.content.map((item, index) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <GrainyFilter />
    </>
  );
}