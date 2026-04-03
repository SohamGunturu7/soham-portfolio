"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import Image from 'next/image';
import { SiPython, SiReact, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiDocker, SiFlask, SiNextdotjs, SiPytorch, SiTensorflow, SiR, SiHtml5, SiCplusplus, SiC, SiNodedotjs, SiPandas, SiScikitlearn, SiStreamlit, SiDjango, SiGit, SiLinux, SiJupyter, SiJira, SiHuggingface, SiNvidia, SiGoogle, SiCss3, SiMapbox, SiFirebase, SiExpress, SiNumpy, SiFastapi, SiRedux, SiSwift, SiAssemblyscript, SiSupabase, SiAmazonec2, SiAwslambda, SiAmazondynamodb, SiRedis, SiApachekafka } from 'react-icons/si';
import { BsHexagonFill } from 'react-icons/bs';

interface ExperienceProps {
  title: string;
  description: string[];
  timeframe: string;
  location: string;
  logo: string;
}

interface ProjectProps {
  title: string;
  description: string;
  isMain?: boolean;
  githubLink?: string;
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
    case 'postgres':
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
    case 'r':
      return <SiR className={iconClasses} />;
    case 'pandas':
      return <SiPandas className={iconClasses} />;
    case 'scikit-learn':
      return <SiScikitlearn className={iconClasses} />;
    case 'streamlit':
      return <SiStreamlit className={iconClasses} />;
    case 'transformers':
      return <SiHuggingface className={iconClasses} />;
    case 'ggplot2':
      return <SiR className={iconClasses} />;
    case 'tidyverse':
      return <SiR className={iconClasses} />;
    case 'scrapy':
      return <SiPython className={iconClasses} />;
    case 'nim':
      return <SiNvidia className={iconClasses} />;
    case 'bert':
      return <SiGoogle className={iconClasses} />;
    case 'yahoo-finance':
      return <SiPython className={iconClasses} />;
    case 'matplotlib':
      return <SiPython className={iconClasses} />;
    case 'polygonapi':
      return <BsHexagonFill className={iconClasses} />;
    case 'seaborn':
      return <SiPython className={iconClasses} />;
    case 'django':
      return <SiDjango className={iconClasses} />;
    case 'gemini':
      return <SiGoogle className={iconClasses} />;
    case 'html':
    case 'html/css':
    case 'html5':
      return <SiHtml5 className={iconClasses} />;
    case 'css':
    case 'css3':
      return <SiCss3 className={iconClasses} />;
    case 'mapbox':
      return <SiMapbox className={iconClasses} />;
    case 'firebase':
      return <SiFirebase className={iconClasses} />;
    case 'nodejs':
    case 'node.js':
      return <SiNodedotjs className={iconClasses} />;
    case 'expressjs':
    case 'express':
      return <SiExpress className={iconClasses} />;
    case 'c++':
      return <SiCplusplus className={iconClasses} />;
    case 'pybind':
      return <SiPython className={iconClasses} />; // fallback to Python icon
    case 'gymnasium':
      return <SiPython className={iconClasses} />; // fallback to Python icon
    case 'numpy':
      return <SiNumpy className={iconClasses} />;
    case 'stable-baseline3':
      return <SiPython className={iconClasses} />; // fallback to Python icon
    default:
      return null;
  }
};

const Experience = ({ title, description, timeframe, location, logo }: ExperienceProps) => {
  const [company, position] = title.split(" - ");

  return (
    <div className="group relative w-full overflow-visible rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7 shadow-[0_10px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/40">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_45%)]" />
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="absolute left-0 top-7 hidden md:block h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.9)] ring-4 ring-[#D4AF37]/15" />
        {/* Logo */}
        <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-[#D4AF37]/20">
          <Image 
            src={logo} 
            alt={`${company} logo`} 
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{company}</h3>
              <p className="text-lg text-[#D4AF37]">{position}</p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <p className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 text-sm text-[#f3da88]">{timeframe}</p>
              <p className="mt-2 text-white/60">{location}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ul className="list-disc space-y-2 text-white/85 pl-4">
              {description.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, description, isMain, githubLink }: ProjectProps) => {
  const [titleText, techsText] = title.split(/\s*\((.*?)\)/);
  const technologies = techsText?.split(', ') || [];

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_8px_45px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#D4AF37]/35 ${
      isMain ? 'col-span-1 md:col-span-2 lg:col-span-2' : 'col-span-1'
    }`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6 h-full flex flex-col gap-4">
        <h3 className="text-xl font-bold text-white tracking-tight">
          {titleText}
        </h3>
        
        <div className="flex-grow">
          <p className="text-white/85 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div 
              key={tech} 
              className="flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20"
              style={{
                animation: `fadeSlideIn 500ms ${index * 50}ms ease-out forwards`
              }}
            >
              {getTechIcon(tech)}
              <span className="text-white/90 text-xs">{tech}</span>
            </div>
          ))}
        </div>

        {isMain && githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[#D4AF37]/20 text-white px-4 py-2 rounded-xl border border-[#D4AF37]/20 hover:bg-[#D4AF37]/30 transition-colors"
          >
            <FaGithub className="text-[#D4AF37]" />
            View on GitHub
          </a>
        )}
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

  const experiences = [
    {
      title: "Databricks - Software Engineer Intern",
      description: [
        "Summer 2026"
      ],
      timeframe: "May 2026 - Aug 2026",
      location: "Bellevue, WA",
      logo: "/databricks.jpeg"
    },
    {
      title: "Microsoft - Product Fellow",
      description: [
        "Created a product roadmap for an M365 tool designed to provide expedited resolution times for escalatons.",
        "Developed an intelligent routing system with AI-generated documentation, HITL, and semantic search capabilities.",
        "Worked under Product @ GT and Microsoft Atlanta!"
      ],
      timeframe: "Sep 2025 - Jan 2026",
      location: "Atlanta, GA",
      logo: "/microsoft.webp"
    },
    { 
      title: "Amazon - Software Development Engineer Intern", 
      description: [
        "Built internal tooling using Java, React, and AWS to find and resolve conflicting product offers for the AmazonCustom team, reducing error diagnosing time by 20% and improving resolution scalability.",
        "Developed a feature to enable sellers to download sample fulfillment zip files from buyer previews through redux manipulation and new backend functionality, inducing a 22% increase in seller adoption of the Buyer Preview feature and overall seller experience.",
        "Pushed feature to production."
      ],
      timeframe: "May 2025 - Aug 2025", 
      location: "Tempe, AZ",
      logo: "/amazon.jpg"
    },
    { 
      title: "Georgia Tech College of Computing - Undergraduate Researcher", 
      description: [
        "Researching quantum physics phenomena using SAT solvers & Computer Algebra Systems for mathematical modeling.",
        "Analyzing Ramsey's Problem and GHZ theorems through combinatorial mathematics and algorithmic approaches.",
        "Developing computational solutions for the Kochen-Specker Problem in quantum mechanics applications."
      ], 
      timeframe: "April 2025 - Present", 
      location: "Atlanta, GA",
      logo: "/gt.jpeg"
    },
    { 
      title: "GROWER Lab - Data Engineer", 
      description: [
        "Engineered data pipelines to analyze power grid resilience using AWS and Python for large-scale data processing.",
        "Implemented machine learning models to predict outage patterns and identify infrastructure vulnerabilities.",
        "Developed visualization tools and presented research findings to stakeholders for infrastructure improvements."
      ], 
      timeframe: "Aug 2024 - Current", 
      location: "Atlanta, GA",
      logo: "/VIP.png"
    },
    { 
      title: "Nationwide Children's Hospital - Data Intern", 
      description: [
        "Designed machine learning algorithms to analyze tumor characteristics and identify pattern correlations.",
        "Enhanced diagnostic model accuracy by 30% through implementation of advanced statistical techniques.",
        "Created comprehensive data visualization tools to communicate findings to medical professionals."
      ], 
      timeframe: "Jun 2023 - Dec 2023", 
      location: "Columbus, OH",
      logo: "/NCH.jpeg"
    },
    { 
      title: "Harvard University - Data Intern", 
      description: [
        "Analyzed demographic trends using statistical methods to identify significant societal patterns.",
        "Mentored 100+ students in data analytics projects while optimizing departmental CI/CD pipelines.",
        "Reduced deployment times by 40% through implementation of automated testing and deployment systems."
      ], 
      timeframe: "Jun 2022 - Aug 2022", 
      location: "Cambridge, MA",
      logo: "/harvard.avif"
    },
    { 
      title: "Ohio Supercomputer Center - Project Specialist", 
      description: [
        "Developed simulation models to analyze human choice-making behavior using high-performance computing.",
        "Created predictive algorithms to extrapolate individual patterns to population-level insights.",
        "Built interactive data visualizations to present research findings to psychology department faculty."
      ], 
      timeframe: "Jun 2022 - Jul 2022", 
      location: "Columbus, OH",
      logo: "/osc.png"
    },
  ];

  const projects = [
    {
      title: "GT Marketplace (Typescript, ReactJS, Firebase, NodeJS, ExpressJS, HTML/CSS, Python)",
      description: "Developed a full-stack web application for Georgia Tech students to buy and sell items. Features include user authentication, real-time chat, and a responsive design. Utilized Firebase for backend services and ReactJS for the frontend."
    },
    { 
      title: "Travel App (Python, Django, JavaScript, Gemini, HTML, CSS, MapBox)",
      description: "Built an AI-powered trip planner that leverages Google Gemini LLM to create intelligent, cost-aware itineraries with real-time adaptations. Features include interactive map visualization using MapBox, multi-role user management, and smart recommendations for accommodations and activities using hybrid ML algorithms."
    },
    { 
      title: "GT Chatbot (PostgreSQL, Docker, ReactJS, Python, Scrapy)",
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
      description: "Reimagines financial planning by using an AI to customize a user's investment portfolio. Based off a user's long-term goals, AI will guide the conversation and create a comprehensive finanical plan!" 
    },
    { 
      title: "Choice Analysis (R, GGPlot2, Tidyverse)",
      description: "Worked with the Ohio Supercomputer Center to analyze human decision-making based on a variety of factors. Then, using ML to simulate these results at the population level, revealing new psychological findings in choice." 
    },
    {title: "DeepQuote (C++, Python, PyBind, PyTorch, Gymnasium, Numpy, Stable-Baseline3)",
      description: "Built a high-frequency trading simulator that replicates real market conditions using a live order book, processing over 10,000 orders per second with detailed order flow and matching mechanics. It supports reinforcement learning agents operating in an 18-dimensional state space, enabling sophisticated trading strategies and real-time PnL tracking."
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050608] text-white">
      {/* Logo in top left */}
      <button
        onClick={() => scrollToSection('home')}
        className="absolute top-6 left-6 z-50 rounded-full border border-white/10 bg-black/30 p-1.5 shadow-lg backdrop-blur-xl hover:border-[#D4AF37]/40 transition-colors"
        aria-label="Go to home section"
      >
        <Image
          src="/favicon.png"
          alt="Logo"
          width={56}
          height={56}
          className="rounded-full"
        />
      </button>

      {/* Enhanced background layers */}
      <div className="aurora-bg"></div>
      <div className="stars"></div>
      <div className="noise-overlay"></div>
      
      {/* Keep the floating shapes but update their styling */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute w-[40rem] h-[40rem] -top-[20rem] -left-[20rem] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]"></div>
        <div className="floating-shape-delayed absolute w-[40rem] h-[40rem] -bottom-[20rem] -right-[20rem] bg-[#D4AF37]/[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] bg-[#D4AF37]/[0.02] rounded-full blur-[80px] floating-shape"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[15rem] h-[15rem] bg-[#D4AF37]/[0.02] rounded-full blur-[80px] floating-shape-delayed"></div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="fixed top-5 right-5 md:right-10 z-20 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 text-sm md:text-base font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <button onClick={() => scrollToSection('home')} className="rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors">Home</button>
        <button onClick={() => scrollToSection('about')} className="rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors">About Me</button>
        <button onClick={() => scrollToSection('projects')} className="rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors">Projects</button>
        <button onClick={() => scrollToSection('skills')} className="rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors">Skills</button>
        <button onClick={() => scrollToSection('experience')} className="rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors">Experience</button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#D4AF37]/20 to-transparent"></div>
          <div className="w-full max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
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
                <h1 className="text-5xl md:text-7xl font-bold gradient-text tracking-tight">
                  Soham Gunturu
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white/80 leading-relaxed">
                  CS @ Georgia Tech | Databricks, Amazon
                </h2>
              </div>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                <a
                  href="/Soham_Gunturu_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CV"
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-[#D4AF37]/40 hover:bg-white/[0.08] transition-colors"
                >
                  <FaFileAlt className="text-xl text-[#D4AF37]" />
                </a>
                <a
                  href="mailto:sgunturu30@gatech.edu"
                  aria-label="Email"
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-[#D4AF37]/40 hover:bg-white/[0.08] transition-colors"
                >
                  <FaEnvelope className="text-xl text-[#D4AF37]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soham-gunturu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-[#D4AF37]/40 hover:bg-white/[0.08] transition-colors"
                >
                  <FaLinkedin className="text-xl text-[#D4AF37]" />
                </a>
                <a
                  href="https://github.com/SohamGunturu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white hover:border-[#D4AF37]/40 hover:bg-white/[0.08] transition-colors"
                >
                  <FaGithub className="text-xl text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="pointer-events-none fixed top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="pointer-events-none fixed bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
          <div className="pointer-events-none fixed bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          <div className="pointer-events-none fixed top-1/3 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] animate-float"></div>
          <div className="pointer-events-none fixed bottom-1/3 right-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] animate-float-delayed"></div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl">
            <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">
              About Me
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center w-full border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.3)]">
              {/* TEXT SECTION */}
              <div className="w-full md:w-3/5 text-left px-2 md:px-6">
                <p className="text-base text-white/90 leading-relaxed">
                  Hey! I&apos;m Soham Gunturu, a Computer Science student at Georgia Tech. I&apos;m specifically interested in software development, AI, and systems engineering. This summer, I&apos;ll be joining Databricks as a Software Engineer Intern in Bellevue, WA. I&apos;m also very interested in startups and venture capital, so feel free to reach out if you&apos;re building and would like to collaborate or chat!
                </p>
                <p className="mt-4 text-base text-white/90 leading-relaxed">
                  I also have a passion for service. On campus, I participate in HexLabs, designing hackathons for under-resourced youth in Atlanta. Back in Ohio, I led DublinTOP Inc, a non-profit supporting youth through education and tennis. As Executive Director, I impacted over 1000 kids in 3+ states. I aim to find the intersection of technology and service to create meaningful impact throughout my career and beyond!
                </p>
              </div>

              {/* IMAGE SECTION */}
              <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0">
                <div className="relative w-[18rem] h-[23rem] md:w-[20rem] md:h-[25rem]">
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
            <div className="flex flex-col items-center justify-center w-full border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.3)] mt-10">
              <h2 className="text-3xl font-bold text-white text-glow mb-6">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                {/* Georgia Tech */}
                <div className="w-full bg-white/[0.03] backdrop-blur-sm border border-[#D4AF37]/20 text-white p-6 rounded-2xl shadow-lg relative hover:border-[#D4AF37]/40 transition-colors">
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
                    <p className="mt-2 text-md"><strong>Expected Graduation:</strong> May 2027</p>
                    <p className="mt-2 text-md"><strong>Key Courses:</strong> Operatins Systems, Compilers and Interpreters, Machine Learning, Data Structures & Algorithms, Probability and Statistics, Algorithmic Design, Introduction to AI, Computer Architecture, Objects and Design</p>
                  </div>
                </div>
                {/* Ohio State University */}
                <div className="w-full bg-white/[0.03] backdrop-blur-sm border border-[#D4AF37]/20 text-white p-6 rounded-2xl shadow-lg relative hover:border-[#D4AF37]/40 transition-colors">
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
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl">
            <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">
              Projects
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            
            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mb-10">
              {[
                { ...projects[1], isMain: true, githubLink: "https://github.com/SohamGunturu7/travelApp" },
                { ...projects[3], isMain: true, githubLink: "https://github.com/SohamGunturu7/SpeakEasy" },
                { ...projects[0], isMain: true, githubLink: "https://github.com/SohamGunturu7/GTMarketPlace" },
                { ...projects[8], isMain:true, githubLink: "https://github.com/SohamGunturu7/deepquote"}
              ].map((project, index) => (
                <Project
                  key={index}
                  {...project}
                />
              ))}
            </div>

            {/* Other Projects */}
            <h2 className="text-3xl font-bold text-white mb-7 mt-10">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[projects[2], projects[4], projects[6], projects[7], projects[5]].map((project, index) => (
                <Project
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl">
            <h1 className="text-5xl font-bold text-white mb-10 tracking-tight">
              Skills
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            
            <div className="grid grid-cols-1 gap-8 w-full">
              {/* Languages */}
              <div className="bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/40 transition-colors">
                <h2 className="text-3xl font-bold text-white mb-5">Languages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {[
                    { name: "Python", icon: <SiPython /> },
                    { name: "Java", icon: <SiJira /> },
                    { name: "JavaScript", icon: <SiJavascript /> },
                    { name: "TypeScript", icon: <SiTypescript /> },
                    { name: "R", icon: <SiR /> },
                    { name: "SQL", icon: <SiPostgresql /> },
                    { name: "HTML/CSS", icon: <SiHtml5 /> },
                    { name: "Swift", icon: <SiSwift /> },
                    { name: "Assembly", icon: <SiAssemblyscript /> },
                    { name: "C++", icon: <SiCplusplus /> },
                    { name: "C", icon: <SiC /> }
                  ].map((skill) => (
                    <div key={skill.name} className="group bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 hover:border-[#D4AF37]/35 hover:bg-white/[0.06] transition-colors flex items-center gap-3">
                      <span className="text-[#D4AF37] text-xl">{skill.icon}</span>
                      <span className="text-base">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
              {/* Tools & Platforms */}
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">Tools & Platforms</h2>
                <div className="flex flex-wrap gap-3 justify-start content-start">
                  {[
                    { name: "Git", icon: <SiGit /> },
                    { name: "Supabase", icon: <SiSupabase /> },
                    { name: "EC2", icon: <SiAmazonec2 /> },
                    { name: "AWS Lambda", icon: <SiAwslambda /> },
                    { name: "DynamoDB", icon: <SiAmazondynamodb /> },
                    { name: "Redis", icon: <SiRedis /> },
                    { name: "Kafka", icon: <SiApachekafka /> },
                    { name: "MongoDB", icon: <SiMongodb /> },
                    { name: "PostgreSQL", icon: <SiPostgresql /> },
                    { name: "Docker", icon: <SiDocker /> },
                    { name: "Linux", icon: <SiLinux /> },
                    { name: "Jupyter", icon: <SiJupyter /> },
                    { name: "Firebase", icon: <SiFirebase /> },
                  ].map((skill) => (
                    <span key={skill.name} className="bg-[#D4AF37]/10 text-white px-4 py-2.5 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors text-base flex items-center gap-2.5">
                      <span className="text-[#D4AF37] text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div className="h-full bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-colors">
                <h2 className="text-2xl font-bold text-white mb-4">Frameworks & Libraries</h2>
                <div className="flex flex-wrap gap-2.5 justify-start content-start">
                  {[
                    { name: "React.js", icon: <SiReact /> },
                    { name: "Next.js", icon: <SiNextdotjs /> },
                    { name: "Node.js", icon: <SiNodedotjs /> },
                    { name: "Express.js", icon: <SiExpress /> },
                    { name: "Django", icon: <SiDjango /> },
                    { name: "Flask", icon: <SiFlask /> },
                    { name: "FastAPI", icon: <SiFastapi /> },
                    { name: "Redux", icon: <SiRedux /> },
                    { name: "Pandas", icon: <SiPandas /> },
                    { name: "Scikit-learn", icon: <SiScikitlearn /> },
                    { name: "Streamlit", icon: <SiStreamlit /> },
                    { name: "PyTorch", icon: <SiPytorch /> },
                    { name: "TensorFlow", icon: <SiTensorflow /> },
                    { name: "Seaborn", icon: <SiPython /> },
                    { name: "GGPlot2", icon: <SiR /> },
                    { name: "Tidyverse", icon: <SiR /> },
                    { name: "Transformers", icon: <SiHuggingface /> },
                    { name: "Bert", icon: <SiGoogle /> },
                    { name: "Scrapy", icon: <SiPython /> },
                    { name: "Matplotlib", icon: <SiPython /> }
                  ].map((skill) => (
                    <span key={skill.name} className="bg-[#D4AF37]/10 text-white px-4 py-2.5 rounded-full border border-[#D4AF37]/20 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-colors text-base flex items-center gap-2.5">
                      <span className="text-[#D4AF37] text-xl">{skill.icon}</span>
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
        <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-24">
          <div className="flex flex-col items-center justify-center w-full max-w-6xl">
            <h1 className="text-5xl font-bold text-white mb-12 tracking-tight">
              Experience
              <span className="block h-1 w-24 bg-[#D4AF37] mt-2 mx-auto"></span>
            </h1>
            <div className="w-full space-y-5 relative md:pl-10">
              <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/45 to-transparent" />
              {experiences.map((exp, index) => (
                <Experience
                  key={index}
                  title={exp.title}
                  description={exp.description}
                  timeframe={exp.timeframe}
                  location={exp.location}
                  logo={exp.logo}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}