"use client";
import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

const Project = ({ title, description, isOpen, onClick }) => {
  // Function to format the title with different styles
  const formatTitle = (title) => {
    // Split the title into main text and parenthetical text
    const mainText = title.split('_(')[0];
    const parentheticalText = title.includes('_(') ? 
      `(${title.split('_(')[1].replace('_', '')}`  // Remove the last underscore
      : '';

    return (
      <div className="flex items-center">
        <span className="font-bold">{mainText}</span>
        <span className="font-normal text-white/80 italic ml-2">{parentheticalText}</span>
      </div>
    );
  };

  return (
    <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg mb-4 cursor-pointer transition-transform hover:scale-[1.02]" onClick={onClick}>
      <div className="h-20 flex items-center justify-start px-4">
        <div className="text-lg text-white">
          {formatTitle(title)}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white/5 rounded-lg shadow-lg mt-2">
          <p className="text-white/90 text-md">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ name }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg m-2 hover:bg-white/20 transition-all">
      {name}
    </div>
  );
};

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    { 
      title: "GT Chatbot _(PostegreSQL, Docker, ReactJS, Python, Scrapy, RAG)_",
      description: "Created a RAG-powered chatbot to help Georgia Tech students find information related to classes, clubs, or anything campus-related! Worked with NVIDIA and AI@GT to complete this project." 
    },
    { 
      title: "SpeakEasy _(Python, NIM, Flask, MongoDB, ReactJS, NextJS)_",
      description: "Created an app to help users simulate \"difficult\" conversations based on their specific preferences. Provided specific feedback as to how the user could change their responses to best fit the situation, ranging from a Career Fair to simply talking to a significant other's parents!" 
    },
    { 
      title: "MediSenseAI _(Python, Scikit-Learn, Pandas, Streamlit, PyTorch, Transformers, Bert)_",
      description: "Fine-tuned an LLM to help diagnose medical conditions based on inputted symptoms. Also create ML algorithms to calculate a user's chance of certain diseases based on certain demographic data." 
    },
    { 
      title: "ETF Vol Modeling _(Python, Yahoo-Finance, Pandas, Scikit-Learn, ReactJS, Seaborn)_",
      description: "Analyzed the individual volatility of equities to calculate the theoretical volatility of ETFs and finding mis-priced options to exploit for profit. Used PCA, covariance metrics, and options pricing algorithms for this task." 
    },
    { 
      title: "RoboInvesting _(Python, PolygonAPI, Pandas, Matplotlib, ReactJS)_",
      description: "Reimagines financial planning by using an AI to customize a user's investment portfolio. Based off a user's long-term goals, the AI will guide the conversation and create a comprehensive finanical plan!" 
    },
    { 
      title: "Choice Analysis _(R, GGPlot2, Tidyverse)_",
      description: "Worked with the Ohio Supercomputer Center to analyze human decision-making based on a number of factors. Then, using ML to simulate these results at the population level, revealing new psychological findings in choice." 
    },
  ];

  const skills = [
    "AWS", "Python", "Flask", "Pandas", "Scikit-Learn", "Transformers", "PyTorch", "Machine Learning", "Artificial Intelligence", "Neural Networks", "Large Language Models", "Retrieval-Augmented Generation", "Java", "C++", "R", "SQL", "PostgreSQL", "Javascript", "React.js", "Node.js", "Next.js", "Full-Stack Development", "CI/CD", "SDLC", "Cloud Computing", "HTML", "CSS"
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

      {/* PROJECTS CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mt-20 z-10">
        <h1 className="text-5xl font-bold text-white text-glow-strong mb-10">Projects</h1>
        <div className="flex flex-col w-full">
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

      {/* SKILLS CONTENT */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mt-10 mb-10 z-10">
        <h1 className="text-5xl font-bold text-white text-glow-strong mb-10">Skills</h1>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}