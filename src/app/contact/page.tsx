"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from "react-icons/fa";

export default function Contact() {
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

      {/* CONTACT CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mt-10 z-10"> {/* Changed mt-20 to mt-10 */}
        <h1 className="text-5xl font-bold text-white text-glow-strong mb-16">Contact Me</h1>
        <div className="grid grid-cols-2 gap-16 w-full max-w-3xl"> {/* Changed from flex to grid */}
          {/* Email */}
          <a 
            href="mailto:sgunturu30@gatech.edu" 
            className="flex flex-col items-center group"
          >
            <FaEnvelope className="text-white text-7xl mb-6 transition-transform group-hover:scale-110" /> {/* Increased size */}
            <p className="text-white text-xl group-hover:text-gray-300">sgunturu30@gatech.edu</p>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/soham-gunturu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center group"
          >
            <FaLinkedin className="text-white text-7xl mb-6 transition-transform group-hover:scale-110" /> {/* Increased size */}
            <p className="text-white text-xl group-hover:text-gray-300">LinkedIn Profile</p>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/SohamGunturu7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center group"
          >
            <FaGithub className="text-white text-7xl mb-6 transition-transform group-hover:scale-110" /> {/* Increased size */}
            <p className="text-white text-xl group-hover:text-gray-300">GitHub Profile</p>
          </a>
          
          {/* Phone */}
          <a 
            href="tel:614-477-4024" 
            className="flex flex-col items-center group"
          >
            <FaPhone className="text-white text-7xl mb-6 transition-transform group-hover:scale-110" /> {/* Increased size */}
            <p className="text-white text-xl group-hover:text-gray-300">614-477-4024</p>
          </a>
        </div>
      </div>
    </div>
  );
}