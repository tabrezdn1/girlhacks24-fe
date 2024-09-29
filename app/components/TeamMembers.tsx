'use client';

import React from 'react';
import Image from 'next/image';
import { Linkedin , Github} from 'lucide-react';

const teamMembers = [
  { 
    id: 1, 
    name: 'Richa Singh', 
    role: 'MS in CS @ NJIT', 
    image: '/richa.jpeg',
    skills: ['Python/R', 'Data Visualization and Analytics', 'Cloud'],
    linkedin: 'https://www.linkedin.com/in/richa-singh-78935438/',
    github: 'https://github.com/richa-bsingh'
  },
  { 
    id: 2, 
    name: 'Tabrez Shaik', 
    role: 'MS in CS @ NJIT', 
    image: '/tab_shaikh.jpeg',
    skills: ['AI/ML', 'Full Stack Engineer', 'Cloud Integration'],
    linkedin: 'https://www.linkedin.com/in/shaik-tabrez/',
    github: 'https://github.com/tabrezdn1'
  },
  { 
    id: 3, 
    name: 'Jonathan Grossman', 
    role: 'MS in DS @ NJIT', 
    image: '/jon.jpeg',
    skills: ['Full Stack Engineer', 'Python', 'Prompt Engineering/LLM'],
    linkedin: 'https://www.linkedin.com/in/jonathan-grossman/',
    github: 'https://github.com/jgwentworth92'
  },
  { 
    id: 4, 
    name: 'Vishal Khairnar', 
    role: 'MS in CS @ NJIT', 
    image: '/vishal.jpeg',
    skills: ['Cloud', 'Big Data', 'Data Engineer'],
    linkedin: 'https://www.linkedin.com/in/vishal-chhagan-khairnar-39383b100/',
    github: 'https://github.com/vishal2609'
  },
];

const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-8">
      {teamMembers.map((member) => (
        <div key={member.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600 mb-4">{member.role}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {member.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <Linkedin size={20} className="mr-2" />
            LinkedIn Profile
          </a>
          <a 
              href={member.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;