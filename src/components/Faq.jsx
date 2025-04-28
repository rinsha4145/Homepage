"use client"
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function TutoringFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqItems = [
    {
      question: "What subjects do you offer tutoring in?",
      answer: "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams."
    },
    {
      question: "What ages or grade levels do you tutor?",
      answer: "Our tutoring services are available for students of all ages, from elementary school through college. We have specialized tutors for each age group who understand the curriculum requirements and learning needs specific to different grade levels."
    },
    {
      question: "Is tutoring one-on-one or in groups?",
      answer: "We offer both one-on-one and small group tutoring options. One-on-one sessions provide personalized attention and customized learning plans tailored to individual needs. Group sessions (typically 3-5 students) are more affordable while still maintaining a low student-to-tutor ratio for effective learning."
    },
    {
      question: "Can sessions take place at our home?",
      answer: "Yes, we offer in-home tutoring services for your convenience. Our tutors can travel to your location within our service area. We also provide online tutoring sessions and have learning centers where sessions can take place if you prefer those options."
    },
    {
      question: "What is the duration and frequency of each tutoring session?",
      answer: "Standard tutoring sessions are 60 minutes long, but we also offer 90-minute and 2-hour sessions for intensive subjects or test preparation. Most students attend 1-2 sessions per week, but we can customize the frequency based on your specific needs and goals. We recommend consistent sessions for the best results."
    }
  ];
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <div className=" mx-auto p-6 bg-gray-50">
      <h1 className="text-2xl font-medium text-center text-gray-700 mb-8">
        Frequently asked Questions
      </h1>
      
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded shadow">
            <button
              className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="font-medium text-gray-800">{item.question}</span>
              <ChevronDown 
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                size={20}
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-64 px-5 pb-4' : 'max-h-0'
            }`}>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}