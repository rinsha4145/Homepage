"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import english from '../../public/english.svg';
import craft from '../../public/craft.svg';
import art from '../../public/art.svg';
const Education = () => {
  // State for active slides
  const [activeProgramSlide, setActiveProgramSlide] = useState(0);
  const [activeSubjectSlide, setActiveSubjectSlide] = useState(0);
  
  // Programs data
  const programs = [
    {
      id: 1,
      title: "English Grammar",
      description: `Master the building blocks of writing and communication.`,
      image: english
    },
    {
      id: 2,
      title: "Craft Classes",
      description: "Unleash creativity with hands-on projects and artistic fun.",
      image: craft
    },
    {
      id: 3,
      title: "Art and Painting",
      description: "Express yourself through colors, sketches, and designs",
      image: art
    }
  ];
  
  // Subjects data
  const subjects = [
    { id: 1, title: "Maths", icon: "📐" },
    { id: 2, title: "Physics", icon: "⚛️" },
    { id: 3, title: "Chemistry", icon: "🧪" },
    { id: 4, title: "Biology", icon: "🧬" },
    { id: 5, title: "Computer Science", icon: "💻" },
    { id: 6, title: "English", icon: "📚" }
  ];
  
  // Programs visible in slider (3 at a time on desktop)
  const visiblePrograms = () => {
    return programs.slice(activeProgramSlide, activeProgramSlide + 3);
  };
  
  // Subjects visible in slider (6 at a time on desktop)
  const visibleSubjects = () => {
    return subjects.slice(activeSubjectSlide, activeSubjectSlide + 6);
  };
  
  return (
    <div className=" mx-20 py-12 px-10">
      {/* Programs Section */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-medium text-gray-700">
            Programs we offer <span className="font-bold text-gray-800">for Kids</span>
          </h2>
          <button className="bg-red-800 text-white px-4 py-2 rounded-md flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        {/* Programs Slider */}
        <div className="relative">
          <div className="flex ">
            <div className="flex gap-6 transition-transform duration-300">
              {visiblePrograms().map((program) => (
                <div key={program.id} className="flex-none w-full md:w-1/3 bg-[#FFF3E1] rounded-lg overflow-hidden">
                  <div className="flex h-full">
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-red-800 mb-2">{program.title}</h3>
                      <p className="text-gray-700 w-70 mb-4">{program.description}</p>
                    

            <button  target="_blank"
  className="inline-flex items-center  rounded cursor-pointer bg-[#8A1538] px-4 py-2 w-fit  font-semibold text-white transition
         [box-shadow:#EBC48B_-8px_8px] hover:[box-shadow:#EBC48B_0px_0px]">
  Read more
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

</button>
                    </div>
                    <div className="flex items-center ">
                      <Image width={20} height={20} src={program.image} alt={program.title} className="h-50 w-50 " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2  p-2 "
            onClick={() => setActiveProgramSlide(Math.max(0, activeProgramSlide - 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2  "
            onClick={() => setActiveProgramSlide(Math.min(programs.length - 3, activeProgramSlide + 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({length: Math.ceil(programs.length / 3)}).map((_, index) => (
            <button 
              key={index}
              className={`h-2 w-2 rounded-full ${index === Math.floor(activeProgramSlide / 3) ? 'bg-red-800' : 'bg-gray-300'}`}
              onClick={() => setActiveProgramSlide(index * 3)}
            />
          ))}
        </div>
      </div>
      
      {/* Subjects Section */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-medium text-gray-700">
            Subjects We <span className="font-bold text-gray-800">Teach</span>
          </h2>
          <button className="bg-red-800 text-white px-4 py-2 rounded-md flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        {/* Subjects Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {visibleSubjects().map((subject) => (
              <div key={subject.id} className="flex flex-col items-center">
                <div className="bg-red-800 w-full aspect-square rounded-lg flex items-center justify-center mb-2">
                  <div className="text-white text-4xl">{subject.icon}</div>
                </div>
                <h3 className="text-center font-medium">{subject.title}</h3>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={() => setActiveSubjectSlide(Math.max(0, activeSubjectSlide - 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={() => setActiveSubjectSlide(Math.min(subjects.length - 6, activeSubjectSlide + 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({length: Math.ceil(subjects.length / 6)}).map((_, index) => (
            <button 
              key={index}
              className={`h-2 w-2 rounded-full ${index === Math.floor(activeSubjectSlide / 6) ? 'bg-red-800' : 'bg-gray-300'}`}
              onClick={() => setActiveSubjectSlide(index * 6)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;