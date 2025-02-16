"use client";
import React from "react";
import Link from "next/link";  // Add this import at the top

export default function Home() {
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
        
        {/* Animated Shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rotate-45 floating-shape"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rotate-12 floating-shape-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rotate-90 floating-shape"></div>
      </div>

      {/* MAIN CONTENT */}
      <div id="home" className="relative flex flex-col md:flex-row items-center justify-center space-x-12 px-10 z-10">
        {/* PROFILE PICTURE */}
        <div className="relative w-80 h-80 md:w-[20rem] md:h-[20rem] rounded-full overflow-hidden border-4 border-white/80 shadow-lg profile-container">
          <img 
            src="/IMG_2182.JPG" 
            alt="Soham Gunturu" 
            className="w-full h-full object-cover scale-100 transition-transform hover:scale-110"
            style={{ objectPosition: "center 45%" }}
          />
        </div>

        {/* TEXT SECTION */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-glow">
            Soham Gunturu
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mt-2">
            CS @ Georgia Tech
          </h2>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="/Soham_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white text-[#0a192f] rounded-lg text-lg font-medium hover:bg-gray-200 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              View CV
            </a>
            <Link 
              href="/contact" 
              className="px-6 py-3 border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-[#0a192f] transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}