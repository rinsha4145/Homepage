import React from 'react';
import fram1 from "../../public/frame1.svg";
import fram2 from "../../public/frame2.svg";    
import arrow from "../../public/arrow.png";
import Image from 'next/image';
import vision from "../../public/vision.svg";
import mission from "../../public/mission.svg";
import teaching from "../../public/teaching.svg";
const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Story Section */}
      <section className="py-16 px-6 md:px-10 lg:px-20  mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="md:w-[60%] text-[#655945]">
            <h2 className="text-3xl font-medium ">
              The Story of <span className=" font-bold">Educare</span>
            </h2>
            
            <p className="mt-6 ">
              At <span className="font-medium">Educare</span> education center, we believe that every student deserves personalized, focused attention to reach<br/> 
              their fullest potential. Our mission is to empower students through one-on-one tutoring, creating customized<br/> 
              learning plans tailored to each individual's unique needs, strengths, and learning styles.
            </p>
            
            <p className="mt-4 ">
              Founded on a passion for education and a commitment to excellence, <span className="font-medium">Educare</span> education center was<br/> 
              established to offer students a supportive and engaging learning environment. Our team of experienced tutors<br/>  
              is dedicated to helping students excel academically while also building confidence, independence, and a love <br/> 
              for learning.
            </p>
            
            <p className="mt-4 ">
              We specialize in a wide range of subjects across all grade levels, including math, science, English, and test<br/>  
              preparation. Whether your child needs help catching up, getting ahead, or preparing for a specific exam, we are <br/> 
              here to support their journey.
            </p>
            
           
            <button  target="_blank"
  className="inline-flex items-center mt-12 rounded cursor-pointer bg-[#8A1538] px-6 py-3 font-semibold text-white transition
         [box-shadow:#EBC48B_-8px_8px] hover:[box-shadow:#EBC48B_0px_0px]">
  Read more
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

</button>
          </div>
          
          {/* Images */}
          <div className="md:w-[30%] flex ">
            <div className="relative ">
              <div className="transform rotate-3  rounded-md overflow-hidden absolute top-0 left-0 ">
                <Image width={300} height={354} src={fram1} alt="Student with teacher" className="w-64" />
              </div>
              <div className="transform -rotate-4  rounded-md overflow-hidden mt-32 ml-35">
                <Image width={302} height={356} src={fram2} alt="Mother and child studying" className="w-72 h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-10 px-6 md:px-12 lg:px-20  mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Mission */}
          <div className="md:w-2/6 bg-[#FFF3E1] rounded-lg p-6 relative hover:border-r-5 hover:border-b-5 hover:border-[#8A1538] transition-all duration-300">
            <h3 className="text-red-800 text-xl font-bold mb-2">Mission</h3>
            <p className="text-[#8A1538]">
              To help students succeed with personalized,<br/> 
              <span className="text-red-800 font-bold">one-to-one</span> tutoring that builds<br/> 
              confidence, skills, and a love for learning.
            </p>
            <div className="absolute -right-1 top-[-25%] ">
              <Image width={120} height={120} src={mission} alt="Flag icon" className="" />
            </div>
          </div>
          
          {/* Vision */}
          <div className="md:w-2/6 bg-[#FFF3E1] rounded-lg p-6 relative hover:border-r-5 hover:border-b-5 hover:border-[#8A1538] transition-all duration-500 ">
            <h3 className="text-red-800 text-xl font-bold mb-2">Vision</h3>
            <p className="text-[#8A1538]">
              To be a trusted center where students<br/> 
              reach their potential, build confidence,<br/> 
              and prepare for a <span className="text-red-800 font-bold">bright future</span>.
            </p>
            <div className="absolute -right-1 top-[-25%]">
            <Image width={120} height={200} src={vision} alt="rocket icon" className="" />
            </div>
          </div>
          
          <div className="md:w-1/5 flex justify-center">
            <Image width={150} height={150} src={arrow} alt="Curved arrow" className="transform rotate-90 md:rotate-0" />
          </div>
        </div>
      </section>
      
      {/* Teaching Approach */}
      <section className="py-16 px-6 md:px-12 lg:px-20  mx-auto bg-[#F9F7F4]">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-[#655945]">
            <h2 className="text-3xl font-medium ">
              Our way of <span className=" font-bold">Teaching</span>
            </h2>
            
            <ul className="mt-6 space-y-6">
              <li className="flex gap-2 ">
                <div className=" font-bold">•</div>
                <p className="">
                  Every teacher at <span className="font-medium">Educare</span> brings passion to their lessons, 
                  making learning enjoyable with engaging activities tailored 
                  to inspire and motivate each student.
                </p>
              </li>
              
              <li className="flex gap-2">
                <div className=" font-bold">•</div>
                <p className="">
                  We focus on creating a supportive environment where 
                  individual strengths are recognized, and personalized 
                  attention helps students excel.
                </p>
              </li>
              
              <li className="flex gap-2">
                <div className=" font-bold">•</div>
                <p className="">
                  Our approach combines innovative teaching methods with 
                  real-world applications, ensuring students not only learn 
                  but also understand and apply their knowledge effectively.
                </p>
              </li>
            </ul>
          </div>
          
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src={teaching}
              width={100}
              height={100}
              alt="Teacher with student at blackboard" 
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;