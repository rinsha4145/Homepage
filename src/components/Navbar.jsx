"use client";
import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#8a1538] p-2 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" text-lg font-bold font-bricolage">Educare</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className=" hover:text-gray-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-400">
                Courses
              </a>
            </li>  <li>
              <a href="#" className=" hover:text-gray-400">
                Careers
              </a>
            </li>  <li>
              <a href="#" className=" hover:text-gray-400">
                News & Blogs
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-gray-400">
                Payments
              </a>
            </li>
          </ul>
          <div className="flex-col ">
          <p className="flex items-center text-sm"><MdEmail className="mr-2"/>+974 55555 3456</p>
          <p className="flex items-center text-sm"><MdPhone className="mr-2"/>info@educare.qa</p>
          </div>
          <button className="bg-white text-[#8a1538] px-4 py-2 rounded hover:bg-gray-200">Contact Us</button>
        </div>
        
      </nav>
    </div>
  );
}
