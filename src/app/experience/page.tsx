"use client";
import React, { useState } from "react";
import Link from "next/link";

const Experience = ({ title, description, timeframe, location, logo, isOpen, onClick }) => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg mb-4 cursor-pointer transition-transform hover:scale-[1.02]" onClick={onClick}>
      <div className="h-20 flex items-center justify-between px-4">
        <p className="text-lg font-bold text-white">{title}</p>
        <img src={logo} alt={`${title} logo`} className="h-12 w-12" />
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white/5 rounded-lg shadow-lg mt-2">
          <div className="flex justify-between">
            <ul className="text-md text-white/90 list-disc list-inside w-3/4">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="text-right w-1/4">
              <p className="text-md text-white/90"><strong>{timeframe}</strong></p>
              <p className="text-md text-white/90"><strong>{location}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Experiences() {
  const [openExperience, setOpenExperience] = useState(null);

  const experiences = [
    { 
      title: "Amazon - Incoming SDE Intern", 
      description: ["Incoming Summer 2025 Software Development Engineer Intern in Tempe, AZ"], 
      timeframe: "May 2025 - Aug 2025", 
      location: "Tempe, AZ",
      logo: "/amazon.jpg"
    },
    { 
      title: "GROWER Lab - Research Intern", 
      description: [
        "Researched power outages and grid resilience by creating a data pipeline.",
        "Gathered and analyzed data using AWS and Python to identify patterns and trends.",
        "Collaborated with team members to publish findings and present results."
      ], 
      timeframe: "Aug 2024 - Current", 
      location: "Atlanta, GA",
      logo: "/VIP.png"
    },
    { 
      title: "Nationwide Children's Hospital - Data Intern", 
      description: [
        "Identified differences in tumors through comprehensive data analysis.",
        "Performed correlation studies to find patterns and relationships in the data.",
        "Improved model accuracy by 30% using advanced data analysis techniques."
      ], 
      timeframe: "Jun 2023 - Dec 2023", 
      location: "Columbus, OH",
      logo: "/NCH.jpeg"
    },
    { 
      title: "Harvard University - Data Intern", 
      description: [
        "Researched societal trends and their impacts on various demographics.",
        "Assisted over 100 students with data analytics projects and assignments.",
        "Optimized CI/CD pipeline to improve efficiency and reduce deployment times."
      ], 
      timeframe: "Jun 2022 - Aug 2022", 
      location: "Cambridge, MA",
      logo: "/harvard.avif"
    },
    { 
      title: "Ohio Supercomputer Center - Project Specialist", 
      description: [
        "Conducted experiments on choice-making behaviors using simulation models.",
        "Ran simulations to model population dynamics and predict future trends.",
        "Created visualizations to aid in decision-making and present findings."
      ], 
      timeframe: "Jun 2022 - Jul 2022", 
      location: "Columbus, OH",
      logo: "/osc.png"
    },
  ];

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

      {/* EXPERIENCES CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mt-20 z-10">
        <h1 className="text-5xl font-bold text-white text-glow-strong mb-10">Experience</h1>
        <div className="flex flex-col w-full">
          {experiences.map((experience, index) => (
            <Experience
              key={index}
              title={experience.title}
              description={experience.description}
              timeframe={experience.timeframe}
              location={experience.location}
              logo={experience.logo}
              isOpen={openExperience === index}
              onClick={() => setOpenExperience(openExperience === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}