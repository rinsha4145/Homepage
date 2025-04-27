import React, { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import left from '../../public/left.svg';
import right from '../../public/right.svg';
import bg from '../../public/bg.png';
import handheart from '../../public/HandHeart.png';
import trophy from '../../public/Trophy.png';
import student from '../../public/Student.png';
import vector from '../../public/Vector.png';




import { MdWhatsapp } from 'react-icons/md';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fadeInDown");

  const values = [
    "Personalized One-to-One Tutoring at Our Center",
    "Individual Tuition, For all students till 12th grade!",
    "Master IELTS, TOEFL, and Beyond with Expert Guidance!",
  ];
  const logos = [
    {
      src: left,
      alt: "Transistor",
    },
    {
      src: left,
      alt: "Reform",
    },
    {
      src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg",
      alt: "Tuple",
    },
    {
      src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg",
      alt: "SavvyCal",
    },
    {
      src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg",
      alt: "Statamic",
    },
    {
      src: "https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg",
      alt: "Laravel",
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    beforeChange: (_, newIndex) => {
      setAnimationClass("animate-fadeOutUp");
      setTimeout(() => {
        setCurrentSlide(newIndex);
        setAnimationClass("animate-fadeInDown");
      }, 300);
    },
    appendDots: dots => (
      <div style={{ textAlign: "center" }}>
        <ul style={{ display: 'inline-flex', gap: '8px' }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button className={`${currentSlide === i ? "bg-red-600" : "bg-gray-400"} w-3 h-3 rounded-full`} />
    ),
  };

  return (
    <>
      <div className="w-full p-0" style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover' }}>
        <div className="py-10">
          <div className="container mx-auto">
            <div className="flex items-center">
              <div className="lg:w-2/3 mx-auto text-center">
                <Slider {...settings}>
                  {values.map((text, index) => (
                    <div key={index}>
                      <h1 className={`text-4xl font-bold text-[#8A1538] mb-4 transition-all duration-500 ${animationClass}`}>
                        {text}
                      </h1>
                     

                    </div>
                  ))}
                </Slider>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        

        {/* Illustrations Section */}
        <div className="container mx-auto relative -mt-12">
            
          <div className="flex flex-wrap">
            <div className="md:w-5/12 px-4">
              <div className=" bg-opacity-50 rounded-full p-4">
                <Image src={left} className="w-full" alt="Teacher and student" />
              </div>
            </div>
            
            <div className="md:w-2/12 flex flex-col justify-center items-center">
            <button  target="_blank"
  className="inline-flex items-center h-15 w-64 rounded cursor-pointer bg-[#8A1538] px-6 py-3 font-semibold text-white transition
         [box-shadow:#EBC48B_-8px_8px] hover:[box-shadow:#EBC48B_0px_0px]">
  Book a Free Demo Class
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

</button>
      <h5 className="text-red-600 mt-10 mb-4 text-center">Curriculums we offer:</h5>

      <div className="w-full overflow-x-auto">
        <section className="text-white pt-8 pb-4">
            
          <div className="group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,_white_calc(100%-128px),_transparent_100%)]">
            
            {[...Array(2)].map((_, i) => (
              <div key={i} className="animate-slide-left group-hover:[animation-play-state:paused] inline-block w-max">
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    width={158}
                    height={48}
                    className="mx-4 inline h-16"
                    src={logo.src}
                    alt={logo.alt}
                  />
                ))}
              </div>
            ))}

          </div>
        </section>
      </div>
    </div>

            <div className="md:w-5/12 px-4">
              <div className=" bg-opacity-50 rounded-full p-4">
                <Image src={right} className="w-full" alt="Family celebrating achievement" />
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Action Button */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
          <button className="bg-green-500 text-white rounded-l-md py-3 px-2" style={{ writingMode: 'vertical-lr' }}>
            Book a Free Demo Class
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="fixed right-0 bottom-0 m-4">
          <button className="bg-green-500 border shadow-xl shadow-green-500 text-white rounded-full p-3">
            <MdWhatsapp/>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto mt-10 pb-8">
        <div className="flex flex-wrap justify-around text-center">
          {[
            { icon: vector, label: "Personal Attention" },
            { icon: trophy, label: "Growth Mindset" },
            { icon: student, label: "Skill Development" },
            { icon: handheart, label: "Passionate Teaching" },
          ].map((feature, index) => (
            <div key={index} className="md:w-1/4 mb-8 flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-[#8A1538]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
              </svg>
              <h5 className="text-[#8A1538] mt-2">{feature.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
