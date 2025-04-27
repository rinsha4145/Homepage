
"use client"
import React, { useState } from 'react';

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: '"Best decision for English tutoring! Educare improved our daughter\'s skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!"',
      author: "Sarah H",
      location: "Al Warqa",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 2,
      text: '"Educare\'s commitment to 1-on-1 learning transformed our son\'s understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!"',
      author: "Ahmad K",
      location: "Jumeirah",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 3,
      text: '"Best decision for English tutoring! Educare improved our daughter\'s skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!"',
      author: "Sarah H",
      location: "Al Warqa",
      avatar: "/api/placeholder/80/80",
      rating: 5
    }
  ];
  
  // Function to handle previous slide
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Function to handle next slide
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-medium text-center text-gray-700 mb-10">
        Hear from our <span className="font-bold text-gray-800">Valuable Parents</span>
      </h2>
      
      <div className="relative">
        {/* Testimonials Slider */}
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out w-full"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-none w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[0, 1, 2].map((index) => {
                    const currentIndex = (activeSlide + index) % testimonials.length;
                    const current = testimonials[currentIndex];
                    
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-6">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                        
                        {/* Author Avatar */}
                        <div className="flex items-center mb-4">
                          <img 
                            src={current.avatar} 
                            alt={`${current.author} avatar`} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                          />
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="text-gray-600 mb-4 text-sm">{current.text}</p>
                        
                        {/* Rating Stars */}
                        <div className="flex mb-3">
                          {renderStars(current.rating)}
                        </div>
                        
                        {/* Author Info */}
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-bold text-red-800">{current.author}</p>
                            <p className="text-gray-500 text-xs">{current.location}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md -ml-4"
          onClick={prevSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md -mr-4"
          onClick={nextSlide}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Dots Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`h-2 w-2 rounded-full ${index === activeSlide ? 'bg-red-800' : 'bg-gray-300'}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;