"use client";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f2544] overflow-hidden">
      {/* NAVIGATION BAR */}
      <nav className="absolute top-5 right-10 flex space-x-6 text-lg font-medium text-white z-20">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-gray-300 transition-colors">About Me</Link>
        <Link href="/projects" className="hover:text-gray-300 transition-colors">Projects</Link>
        <Link href="/experience" className="hover:text-gray-300 transition-colors">Experience</Link>
        <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact Me</Link>
      </nav>

      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        <div className="floating-shape absolute w-96 h-96 -top-48 -left-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="floating-shape-delayed absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern"></div>
      </div>

      {/* ABOUT ME CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-5xl z-10 mt-20"> {/* Added mt-20 here */}
        <h1 className="text-5xl font-bold text-white text-glow-strong mb-10">About Me</h1>
        
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg">
          {/* TEXT SECTION */}
          <div className="w-full md:w-3/5 text-left px-6">
            <p className="text-md text-white/90 leading-relaxed">
              Hey! I'm Soham Gunturu, a Computer Science student at Georgia Tech. I have a passion for software development, AI, and data science. This summer, I'll be joining Amazon as a Software Development Engineer Intern in Tempe, AZ. I'm also interested in startup culture, so feel free to reach out!
            </p>
            <p className="mt-4 text-md text-white/90 leading-relaxed">
              I also have a passion for service. On campus, I participate in HexLabs, designing hackathons for under-resourced youth in Atlanta. Back in Ohio, I led DublinTOP Inc, a non-profit supporting youth through education and tennis. As Executive Director, I impacted over 1000 kids in 3+ states. I aim to find the intersection of technology and service to create meaningful impact throughout my career and beyond!
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
            <img 
              src="/IMG_2182.JPG" 
              alt="Soham Gunturu" 
              className="w-[20rem] h-[25rem] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="flex flex-col items-center justify-center w-full bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg mt-10 mb-20"> {/* Added mb-20 here */}
          <h2 className="text-3xl font-bold text-white text-glow mb-6">Education</h2>
          <div className="flex flex-col md:flex-row w-full justify-around space-y-6 md:space-y-0 md:space-x-6">
            {/* Georgia Tech */}
            <div className="w-full md:w-2/5 bg-white/5 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg relative">
              <img src="/gt.jpeg" alt="Georgia Tech" className="h-12 w-12 absolute top-4 right-4" />
              <div>
                <h3 className="text-2xl font-bold">Georgia Tech</h3>
                <p className="mt-2 text-md"><strong>BS in Computer Science</strong></p>
                <p className="mt-2 text-md"><strong>Expected Graduation:</strong> December 2026</p>
                <p className="mt-2 text-md"><strong>Key Courses:</strong> Data Structures & Algorithms, Object-Oriented Programming, Discrete Math, Linear Algebra, Computer Architecture, Objects and Design</p>
              </div>
            </div>
            {/* Ohio State University */}
            <div className="w-full md:w-2/5 bg-white/5 backdrop-blur-sm text-white p-6 rounded-lg shadow-lg relative">
              <img src="/osu.webp" alt="Ohio State University" className="h-12 w-12 absolute top-4 right-4" />
              <div>
                <h3 className="text-2xl font-bold">Ohio State University</h3>
                <p className="mt-2 text-md"><strong>High School Dual Enrollment Program</strong></p>
                <p className="mt-2 text-md"><strong>Completed:</strong> April 2024</p>
                <p className="mt-2 text-md"><strong>Key Courses:</strong> Linear Algebra, Multivariable Calculus, Softwares 1, Data Science & Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}