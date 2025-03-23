"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import { SiPython, SiReact, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiFlask, SiNextdotjs, SiPytorch, SiTensorflow, SiR, SiHtml5, SiCss3, SiCplusplus, SiC, SiNodedotjs, SiPandas, SiScikitlearn, SiStreamlit, SiDjango, SiGit, SiLinux, SiJupyter, SiAmazon, SiJira} from 'react-icons/si';
import { isNullOrUndefined } from "util";

interface ExperienceProps {
  title: string;
  description: string[];
  timeframe: string;
  location: string;
  logo: string;
  isOpen: boolean;
  onClick: () => void;
}

interface ProjectProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const getTechIcon = (tech: string) => {
  const iconClasses = "w-4 h-4 text-[#D4AF37]";
  switch (tech.toLowerCase()) {
    case 'python':
      return <SiPython className={iconClasses} />;
    case 'react':
    case 'reactjs':
    case 'react.js':
      return <SiReact className={iconClasses} />;
    case 'typescript':
      return <SiTypescript className={iconClasses} />;
    case 'javascript':
      return <SiJavascript className={iconClasses} />;
    case 'mongodb':
      return <SiMongodb className={iconClasses} />;
    case 'postgresql':
      return <SiPostgresql className={iconClasses} />;
    case 'docker':
      return <SiDocker className={iconClasses} />;
    case 'flask':
      return <SiFlask className={iconClasses} />;
    case 'nextjs':
    case 'next.js':
      return <SiNextdotjs className={iconClasses} />;
    case 'pytorch':
      return <SiPytorch className={iconClasses} />;
    case 'tensorflow':
      return <SiTensorflow className={iconClasses} />;
    case 'Postgres':
      return <SiPostgresql className={iconClasses} />;
    // Add more cases as needed
    default:
      return null;
  }
};

const Experience = ({ title, description, timeframe, location, logo, isOpen, onClick }: ExperienceProps) => {
  return (
    <div className="group relative mb-8">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37]/50 to-[#B8860B]/50 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-500"></div>
      <div className="relative w-full bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg shadow-lg cursor-pointer transition-all duration-500 group-hover:border-[#D4AF37]/40" onClick={onClick}>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image 
                  src={logo} 
                  alt={`${title} logo`} 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#D4AF37] text-base">{timeframe}</p>
                  <p className="text-white/60 text-base">{location}</p>
                </div>
              </div>

              {/* Description */}
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="list-disc space-y-2 text-white/90 mt-4 text-base pl-0">
                  {description.map((item, idx) => (
                    <li key={idx} className="ml-4">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, description, isOpen, onClick }: ProjectProps) => {
  const [titleText, techsText] = title.split(/\s*\((.*?)\)/);
  const technologies = techsText?.split(', ') || [];

  return (
    <div 
      className={`group bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg shadow-lg cursor-pointer transition-all duration-1000 ease-in-out hover:border-[#D4AF37]/40 ${
        isOpen 
          ? 'md:col-span-2 lg:col-span-2 row-span-2 scale-100 z-10' 
          : 'transform-gpu hover:scale-[1.02] scale-100'
      }`}
      onClick={onClick}
    >
      <div className={`p-6 h-full flex flex-col transition-all duration-700 ease-out ${
        isOpen ? 'gap-6' : 'gap-3'
      }`}>
        <h3 className="text-xl font-bold text-white transition-transform duration-500">
          {titleText}
        </h3>
        
        <div className="flex-grow overflow-hidden">
          <p className={`text-white/90 transition-all duration-700 ease-in-out ${
            isOpen 
              ? 'opacity-100 max-h-[500px] transform-gpu translate-y-0' 
              : 'line-clamp-2 opacity-90 transform-gpu translate-y-0'
          }`}>
            {description}
          </p>
        </div>
        
        <div className={`flex flex-wrap gap-2 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 transform-gpu translate-y-0' 
            : 'opacity-90 transform-gpu translate-y-0'
        }`}>
          {(isOpen ? technologies : technologies.slice(0, 3)).map((tech) => (
            <div 
              key={tech} 
              className={`flex items-center gap-2 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20 transition-all duration-500 ${
                isOpen ? 'px-4 py-2 opacity-100' : 'px-3 py-1 opacity-90'
              }`}
            >
              {getTechIcon(tech)}
              <span className={`text-white/90 transition-all duration-500 ${
                isOpen ? 'text-sm' : 'text-xs'
              }`}>
                {tech}
              </span>
            </div>
          ))}
          {!isOpen && technologies.length > 3 && (
            <span className="text-white/60 text-xs px-2 py-1 transition-opacity duration-300">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [openExperience, setOpenExperience] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);

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

  const projects = [
    { 
      title: "GT Chatbot (PostegreSQL, Docker, ReactJS, Python, Scrapy, RAG)",
      description: "Created a RAG-powered chatbot to help Georgia Tech students find information related to classes, clubs, or anything campus-related! Worked with NVIDIA and AI@GT to complete this project." 
    },
    { 
      title: "SpeakEasy (Python, NIM, Flask, MongoDB, ReactJS, NextJS)",
      description: "Created an app to help users simulate \"difficult\" conversations based on their specific preferences. Provided specific feedback as to how the user could change their responses to best fit the situation, ranging from a Career Fair to simply talking to a significant other's parents!" 
    },
    { 
      title: "MediSenseAI (Python, Scikit-Learn, Pandas, Streamlit, PyTorch, Transformers, Bert)",
      description: "Fine-tuned an LLM to help diagnose medical conditions based on inputted symptoms. Also create ML algorithms to calculate a user's chance of certain diseases based on certain demographic data." 
    },
    { 
      title: "ETF Vol Modeling (Python, Yahoo-Finance, Pandas, Scikit-Learn, ReactJS, Seaborn)",
      description: "Analyzed the individual volatility of equities to calculate the theoretical volatility of ETFs and finding mis-priced options to exploit for profit. Used PCA, covariance metrics, and options pricing algorithms for this task." 
    },
    { 
      title: "RoboInvesting (Python, PolygonAPI, Pandas, Matplotlib, ReactJS)",
      description: "Reimagines financial planning by using an AI to customize a user's investment portfolio. Based off a user's long-term goals, the AI will guide the conversation and create a comprehensive finanical plan!" 
    },
    { 
      title: "Choice Analysis (R, GGPlot2, Tidyverse)",
      description: "Worked with the Ohio Supercomputer Center to analyze human decision-making based on a number of factors. Then, using ML to simulate these results at the population level, revealing new psychological findings in choice." 
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Enhanced background layers */}
      <div className="aurora-bg"></div>
      <div className="stars"></div>
      <div className="noise-overlay"></div>
      
      {/* Remove or comment out the old background divs */}
      {/* <div className="stellar-bg"></div> */}
      {/* <div className="ambient-gradient"></div> */}
      
      {/* Keep the floating shapes but update their styling */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute w-[40rem] h-[40rem] -top-[20rem] -left-[20rem] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]"></div>
        <div className="floating-shape-delayed absolute w-[40rem] h-[40rem] -bottom-[20rem] -right-[20rem] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-[#D4AF37]/[0.02] rounded-full blur-[80px] floating-shape"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[15rem] h-[15rem] bg-[#D4AF37]/[0.02] rounded-full blur-[80px] floating-shape-delayed"></div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed top-5 right-10 flex space-x-6 text-lg font-medium text-white z-20">
        <button onClick={() => scrollToSection('home')} className="hover:text-gray-300 transition-colors">Home</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">About Me</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-gray-300 transition-colors">Projects</button>
        <button onClick={() => scrollToSection('skills')} className="hover:text-gray-300 transition-colors">Skills</button>
        <button onClick={() => scrollToSection('experience')} className="hover:text-gray-300 transition-colors">Experience</button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contact Me</button>
      </nav>

      {/* ANIMATED BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute w-96 h-96 -top-48 -left-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="floating-shape-delayed absolute w-96 h-96 -bottom-48 -right-48 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 grid-pattern"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#D4AF37]/5 rotate-45 floating-shape"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#D4AF37]/5 rotate-12 floating-shape-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-[#D4AF37]/5 rotate-90 floating-shape"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16 px-10">
            {/* PROFILE PICTURE WITH ORBITAL RINGS */}
            <div className="relative w-80 h-80 md:w-[22rem] md:h-[22rem] group">
              <div className="orbital-ring ring-1"></div>
              <div className="orbital-ring ring-2"></div>
              <div className="orbital-ring ring-3"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#D4AF37]/40 shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 group-hover:scale-105">
                <Image 
                  src="/IMG_2182.JPG" 
                  alt="Soham Gunturu" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: "center 45%" }}
                  priority
                />
              </div>
            </div>

            {/* TEXT SECTION */}
            <div className="text-center md:text-left max-w-xl">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                  Soham Gunturu
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white/80">
                  CS @ Georgia Tech
                </h2>
              </div>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <a 
                  href="/Soham_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative px-8 py-4 bg-[#D4AF37] text-black rounded-lg text-lg font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-[#D4AF37]/20"
                >
                  <span className="relative z-10">View CV</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg text-lg font-medium transition-all hover:bg-[#D4AF37] hover:text-black"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
            <h1 className="text-5xl font-bold text-white mb-10">
              About Me
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center w-full bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg">
              {/* TEXT SECTION */}
              <div className="w-full md:w-3/5 text-left px-6">
                <p className="text-md text-white/90 leading-relaxed">
                  Hey! I&apos;m Soham Gunturu, a Computer Science student at Georgia Tech. I have a passion for software development, AI, and data science. This summer, I&apos;ll be joining Amazon as a Software Development Engineer Intern in Tempe, AZ. I&apos;m also interested in startup culture, so feel free to reach out!
                </p>
                <p className="mt-4 text-md text-white/90 leading-relaxed">
                  I also have a passion for service. On campus, I participate in HexLabs, designing hackathons for under-resourced youth in Atlanta. Back in Ohio, I led DublinTOP Inc, a non-profit supporting youth through education and tennis. As Executive Director, I impacted over 1000 kids in 3+ states. I aim to find the intersection of technology and service to create meaningful impact throughout my career and beyond!
                </p>
              </div>

              {/* IMAGE SECTION */}
              <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
                <div className="relative w-[20rem] h-[25rem]">
                  <Image 
                    src="/IMG_2223.JPG" 
                    alt="Soham Gunturu" 
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* EDUCATION SECTION */}
            <div className="flex flex-col items-center justify-center w-full bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg mt-10">
              <h2 className="text-3xl font-bold text-white text-glow mb-6">Education</h2>
              <div className="flex flex-col md:flex-row w-full justify-around space-y-6 md:space-y-0 md:space-x-6">
                {/* Georgia Tech */}
                <div className="w-full md:w-2/5 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 text-white p-6 rounded-lg shadow-lg relative hover:border-[#D4AF37]/40 transition-colors">
                  <Image 
                    src="/gt.jpeg" 
                    alt="Georgia Tech" 
                    width={48}
                    height={48}
                    className="absolute top-6 right-6 w-12 h-12 object-contain"
                  />
                  <div className="pr-16"> {/* Add padding-right to prevent text overlap with logo */}
                    <h3 className="text-2xl font-bold">Georgia Tech</h3>
                    <p className="mt-2 text-md"><strong>BS in Computer Science</strong></p>
                    <p className="mt-2 text-md"><strong>Expected Graduation:</strong> December 2026</p>
                    <p className="mt-2 text-md"><strong>Key Courses:</strong> Data Structures & Algorithms, Object-Oriented Programming, Discrete Math, Linear Algebra, Computer Architecture, Objects and Design</p>
                  </div>
                </div>
                {/* Ohio State University */}
                <div className="w-full md:w-2/5 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 text-white p-6 rounded-lg shadow-lg relative hover:border-[#D4AF37]/40 transition-colors">
                  <Image 
                    src="/osu.webp" 
                    alt="Ohio State University" 
                    width={48}
                    height={48}
                    className="absolute top-6 right-6 w-12 h-12 object-contain"
                  />
                  <div className="pr-16"> {/* Add padding-right to prevent text overlap with logo */}
                    <h3 className="text-2xl font-bold">Ohio State University</h3>
                    <p className="mt-2 text-md"><strong>High School Dual Enrollment Program</strong></p>
                    <p className="mt-2 text-md"><strong>Completed:</strong> April 2024</p>
                    <p className="mt-2 text-md"><strong>Key Courses:</strong> Linear Algebra, Multivariable Calculus, Softwares 1, Data Science & Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl">
            <h1 className="text-5xl font-bold text-white mb-10">
              Projects
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 w-full">
              {projects.map((project, index) => (
                <Project
                  key={index}
                  title={project.title}
                  description={project.description}
                  isOpen={openProject === index}
                  onClick={() => setOpenProject(openProject === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="flex flex-col items-center justify-center w-full max-w-5xl">
            <h1 className="text-5xl font-bold text-white mb-10">
              Skills
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            
            <div className="grid grid-cols-1 gap-8 w-full">
              {/* Areas of Experience */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/40 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">Areas of Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { category: "Development", skills: ["Full Stack Development", "Software Engineering", "CI/CD"] },
                    { category: "AI & Data", skills: ["Machine Learning", "AI/LLMs", "RAG"] },
                    { category: "Analytics", skills: ["Data Science", "Data Analysis", "Quantitative Research"] },
                    { category: "Infrastructure", skills: ["Database Management", "System Design", "Cloud Architecture"] }
                  ].map((category) => (
                    <div key={category.category} className="bg-white/5 p-4 rounded-lg">
                      <span className="text-[#D4AF37] font-semibold mb-3 block">{category.category}</span>
                      <div className="flex flex-col gap-2">
                        {category.skills.map((skill) => (
                          <span key={skill} className="bg-[#D4AF37]/10 text-white px-4 py-2 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 transition-colors text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-8 hover:border-[#D4AF37]/40 transition-colors">
                <h2 className="text-3xl font-bold text-white mb-6">Languages</h2>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Python", icon: <SiPython /> },
                    { name: "Java", icon: <SiJira /> },
                    { name: "JavaScript", icon: <SiJavascript /> },
                    { name: "TypeScript", icon: <SiTypescript /> },
                    { name: "R", icon: <SiR /> },
                    { name: "SQL", icon: <SiPostgresql /> },
                    { name: "HTML/CSS", icon: <SiHtml5 /> },
                    { name: "C++", icon: <SiCplusplus /> },
                    { name: "C", icon: <SiC /> }
                  ].map((skill) => (
                    <span key={skill.name} className="bg-[#D4AF37]/10 text-white px-6 py-3 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 transition-colors flex items-center gap-3">
                      <span className="text-[#D4AF37] text-2xl">{skill.icon}</span>
                      <span className="text-lg">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Tools & Platforms */}
                <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/40 transition-colors">
                  <h2 className="text-2xl font-bold text-white mb-4">Tools & Platforms</h2>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { name: "Git", icon: <SiGit /> },
                      { name: "AWS", icon: <SiAmazon /> },
                      { name: "MongoDB", icon: <SiMongodb /> },
                      { name: "PostgreSQL", icon: <SiPostgresql /> },
                      { name: "Docker", icon: <SiDocker /> },
                      { name: "Linux", icon: <SiLinux /> },
                      { name: "Jupyter", icon: <SiJupyter /> }
                    ].map((skill) => (
                      <span key={skill.name} className="bg-[#D4AF37]/10 text-white px-4 py-2 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 transition-colors flex items-center gap-2">
                        <span className="text-[#D4AF37]">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/40 transition-colors">
                  <h2 className="text-2xl font-bold text-white mb-4">Frameworks & Libraries</h2>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {[
                      { name: "React.js", icon: <SiReact /> },
                      { name: "Next.js", icon: <SiNextdotjs /> },
                      { name: "Node.js", icon: <SiNodedotjs /> },
                      { name: "PyTorch", icon: <SiPytorch /> },
                      { name: "TensorFlow", icon: <SiTensorflow /> },
                      { name: "Pandas", icon: <SiPandas /> },
                      { name: "Scikit-learn", icon: <SiScikitlearn /> },
                      { name: "Streamlit", icon: <SiStreamlit /> },
                      { name: "Django", icon: <SiDjango /> },
                      { name: "Flask", icon: <SiFlask /> }
                    ].map((skill) => (
                      <span key={skill.name} className="bg-[#D4AF37]/10 text-white px-4 py-2 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 transition-colors flex items-center gap-2">
                        <span className="text-[#D4AF37]">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl"> {/* Changed from max-w-5xl to max-w-6xl */}
            <h1 className="text-5xl font-bold text-white mb-10">
              Experience
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            {experiences.map((exp, index) => (
              <Experience
                key={index}
                title={exp.title}
                description={exp.description}
                timeframe={exp.timeframe}
                location={exp.location}
                logo={exp.logo}
                isOpen={openExperience === index}
                onClick={() => setOpenExperience(openExperience === index ? null : index)}
              />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="relative flex flex-col items-center justify-center w-full max-w-4xl z-10">
            <h1 className="text-5xl font-bold text-white text-glow-strong mb-16">Contact Me</h1>
            <div className="grid grid-cols-2 gap-16 w-full max-w-3xl">
              <a 
                href="mailto:sgunturu30@gatech.edu" 
                className="flex flex-col items-center group"
              >
                <FaEnvelope className="text-white text-7xl mb-6 group-hover:text-[#D4AF37] transition-all" />
                <p className="text-white text-xl group-hover:text-gray-300">sgunturu30@gatech.edu</p>
              </a>

              <a 
                href="https://www.linkedin.com/in/soham-gunturu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <FaLinkedin className="text-white text-7xl mb-6 group-hover:text-[#D4AF37] transition-all" />
                <p className="text-white text-xl group-hover:text-gray-300">LinkedIn Profile</p>
              </a>

              <a 
                href="https://github.com/SohamGunturu7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center group"
              >
                <FaGithub className="text-white text-7xl mb-6 group-hover:text-[#D4AF37] transition-all" />
                <p className="text-white text-xl group-hover:text-gray-300">GitHub Profile</p>
              </a>

              <a 
                href="tel:614-477-4024" 
                className="flex flex-col items-center group"
              >
                <FaPhone className="text-white text-7xl mb-6 group-hover:text-[#D4AF37] transition-all" />
                <p className="text-white text-xl group-hover:text-gray-300">614-477-4024</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}