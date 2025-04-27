import React from 'react';

const Video = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* World Map with Students Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-medium text-center text-gray-700 mb-10">
          Prepare Your Child for a <span className="font-bold text-gray-800">World of Opportunities</span> with Educare
        </h2>
        
        {/* World Map with Student Photos */}
        <div className="relative h-96 w-full">
          {/* Dotted World Map Background */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-full h-full max-w-4xl opacity-20" 
                 style={{
                   backgroundImage: "url('/api/placeholder/800/400')",
                   backgroundSize: "contain",
                   backgroundPosition: "center",
                   backgroundRepeat: "no-repeat"
                 }}>
            </div>
          </div>
          
          {/* Student Images - Positioned Absolutely */}
          <div className="absolute top-0 left-1/4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-1/4 left-1/6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-1/5 right-1/4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/5">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-yellow-200">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-green-200">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-1/3 right-1/5">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute bottom-1/5 right-1/6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute bottom-1/4 left-1/2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-2/3 left-2/5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute top-1/2 right-2/5">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="absolute bottom-10 right-1/4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-blue-200">
              <img src="/api/placeholder/100/100" alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Inspirational Quote Banner */}
      <div className="bg-red-50 py-4 mb-16 flex items-center justify-center flex-wrap gap-4">
        <div className="flex items-center">
          <p className="text-red-800">Education is the foundation of greatness; let's build it together</p>
          <span className="mx-4">
            <img src="/api/placeholder/20/20" alt="Icon" className="w-5 h-5" />
          </span>
        </div>
        
        <div className="flex items-center">
          <p className="text-red-800">Learning today, leading tomorrow – the Educare way</p>
          <span className="mx-4">
            <img src="/api/placeholder/20/20" alt="Icon" className="w-5 h-5" />
          </span>
        </div>
        
        <div className="flex items-center">
          <p className="text-red-800">Turning dreams into achievable goals</p>
        </div>
      </div>
      
      {/* Video Section */}
      <div>
        <h2 className="text-3xl font-medium text-center text-gray-700 mb-8">
          Learn More About <span className="font-bold text-gray-800">Our Space</span>
        </h2>
        
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
          {/* Video Thumbnail */}
          <img 
            src="/api/placeholder/800/450" 
            alt="Educare facilities video" 
            className="w-full h-full object-cover"
          />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;