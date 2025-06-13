import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Github Icon Component - now a motion component
const GithubIcon = ({ className = "w-5 h-5" }) => (
  <motion.svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    initial={{ scale: 1, filter: 'drop-shadow(0 0 0 rgba(6, 182, 212, 0))' }}
    whileHover={{ scale: 1.25, filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' }}
    transition={{ duration: 0.2 }}
  >
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.821 9.504.475.087.687-.206.687-.458 0-.228-.007-.788-.014-1.378-2.782.603-3.37-1.34-3.37-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.89 1.528 2.336 1.088 2.903.832.091-.646.35-1.088.636-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.986 1.03-2.684-.104-.253-.448-1.27.097-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.702.115 2.502.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.38.202 2.398.097 2.65.64.698 1.029 1.594 1.029 2.684 0 3.843-2.339 4.687-4.566 4.935.359.308.678.917.678 1.846 0 1.335-.012 2.41-.012 2.742 0 .254.211.546.691.457C21.13 20.2 24 16.446 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </motion.svg>
);

// External Link Icon Component - now a motion component
const ExternalLinkIcon = ({ className = "w-5 h-5" }) => (
  <motion.svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    initial={{ scale: 1, filter: 'drop-shadow(0 0 0 rgba(6, 182, 212, 0))' }}
    whileHover={{ scale: 1.25, filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' }}
    transition={{ duration: 0.2 }}
  >
    <path fillRule="evenodd" d="M15.75 2.25H21V7.5h-1.5V4.72L13.78 11.47l-1.06-1.06L18.94 3.75h-2.19V2.25zm-8.25 0H3v5.25h1.5V4.72L10.22 11.47l-1.06 1.06L5.06 3.75H2.25V2.25zm14.25 10.5V21H3v-7.5h1.5v6H21v-6h1.5z" clipRule="evenodd" />
  </motion.svg>
);

// Submarine component, unchanged
const Submarine = ({ submarineRef }) => (
  <div
    ref={submarineRef}
    className="absolute w-28 h-14 z-20 flex items-center justify-center pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='subGradient' x1='0%25' y1='0%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%234a7c59'/%3E%3Cstop offset='50%25' stop-color='%236bbd80'/%3E%3Cstop offset='100%25' stop-color='%234a7c59'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M10 35 C 20 15, 130 15, 140 35 C 130 55, 20 55, 10 35 Z' fill='url(%23subGradient)' stroke='%233a5f44' stroke-width='2'/%3E%3Crect x='100' y='25' width='30' height='20' fill='%235f9e6d' rx='5' ry='5' stroke='%233a5f44' stroke-width='1'/%3E%3Crect x='110' y='10' width='6' height='15' fill='%23888'/%3E%3Ccircle cx='40' cy='35' r='8' fill='%23ADD8E6' stroke='%234682B4' stroke-width='1'/%3E%3Ccircle cx='70' cy='35' r='8' fill='%23ADD8E6' stroke='%234682B4' stroke-width='1'/%3E%3Cpath d='M10 35 L0 30 L0 40 Z' fill='%235f9e6d'/%3E%3Ccircle cx='140' cy='35' r='7' fill='%23AAA'/%3E%3Cpath d='M140 35 L148 30 M140 35 L148 40' stroke='%23AAA' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'drop-shadow(0 0 8px rgba(107, 205, 128, 0.8))'
    }}
  >
    <div className="absolute right-0 w-4 h-4 bg-gray-500 rounded-full animate-spin-slow" style={{ transform: 'translateX(50%)' }}></div>
  </div>
);


const Projects = ({ id }) => {
  const projects = [
    {
      title: "GenConnect",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      description: "I built this platform to help bridge the social and digital gap between teenagers and senior citizens. It's all about fostering mentorship, sharing skills, and creating really meaningful connections across generations.",
      imageUrl: "https://github.com/user-attachments/assets/320b41d9-d9ca-4d60-8ce8-869eabddbbb0",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/GenConnect", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://genconnect.vercel.app/", text: "Live" }
      ]
    },
    {
      title: "APK Scanner",
      technologies: ["Linux Bash Script", "Python"],
      description: "This project was about creating a Mobile Application Vulnerability Scanner using Shell Scripting and Python. I enhanced it for 'bash scanning', which let me efficiently process over 80 APK files from different sources.",
      imageUrl: "https://github.com/user-attachments/assets/3a0807b3-8af5-44d3-b620-5d04a27fa1df",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/Infinity---APK-Scanner", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://github.com/harshitSingh1/Infinity---APK-Scanner", text: "Live" }
      ]
    },
    {
      title: "FarmingNow",
      technologies: ["React", "Node.js", "APIs"],
      description: "FarmingNow is designed to help farmers with personalized crop recommendations, government schemes, and pest control alerts. It also offers weather forecasts and soil health monitoring, all powered by APIs from NASA, Google Gemini, Weather, and Mapbox.",
      imageUrl: "https://github.com/user-attachments/assets/08c9819c-32d8-4652-9769-f6687f835462",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/FarmingNow", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://farming-now.vercel.app/", text: "Live" }
      ]
    },
    {
      title: "BreakBuddy",
      technologies: ["HTML", "CSS", "JavaScript", "AWS"],
      description: "BreakBuddy is a Chrome extension I built to help you take quick, refreshing breaks from work. It offers over 10 activities like technical blogs, fun facts, jokes, quizzes, games, and even a task spinner for quick decisions.",
      imageUrl: "https://github.com/user-attachments/assets/27625516-1aca-4bc6-8726-bb30da014a7f",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/BreakBuddy", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://main.d2onf8i510ljit.amplifyapp.com/", text: "Live" }
      ]
    },
    {
      title: "CareerArk",
      technologies: ["React", "Node.js", "CSS", "Python"],
      description: "It's a career counselling webapp with a variety of services. It seamlessly integrates an 'AI Assistant', a free career test checking 7 skills, easy resume guidance, insightful college reviews, and helpful articles.",
      imageUrl: "https://github.com/user-attachments/assets/fdfb820f-b087-40d7-a106-f100910dbc61",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/CareerArk", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://main--careerark.netlify.app/", text: "Live" }
      ]
    },
    {
      title: "Sell-Support",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description: "I developed Sell-Support as an organizational system for offline businesses. It includes features like customer feedback, top product recommendations, pre-booking, e-receipts, and even borrowing/loan options.",
      imageUrl: "https://github.com/user-attachments/assets/9b840e44-67ce-4176-b727-aed5171a0669",
      links: [
        { icon: <GithubIcon />, url: "https://github.com/harshitSingh1/Sell_Support", text: "Code" },
        { icon: <ExternalLinkIcon />, url: "https://harshitsingh1.github.io/Sell_Support/", text: "Live" }
      ]
    }
  ];

  const sectionRef = useRef(null);
  const submarineRef = useRef(null);
  const projectRefs = useRef([]);
  const [bulletPosition, setBulletPosition] = useState(null);
  const [bulletVisible, setBulletVisible] = useState(false);
  const [currentBulletColor, setCurrentBulletColor] = useState('red');
  const [glowingCardIndex, setGlowingCardIndex] = useState(null);
  const shootIntervalRef = useRef(null);

  const { scrollY } = useScroll();

  useEffect(() => {
    const updateDimensions = () => {
      if (sectionRef.current) {
        // No specific dimension updates needed here based on previous issues,
        // but keeping the listener for general responsiveness if layout changes.
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const submarineY = useTransform(scrollY, (latestScrollY) => {
    if (!sectionRef.current || !submarineRef.current) return 0;

    const sectionTopOffset = sectionRef.current.offsetTop;
    const sectionHeight = sectionRef.current.offsetHeight; // Use offsetHeight for full rendered height
    const viewportHeight = window.innerHeight;

    // Calculate scroll start and end for the submarine's movement
    // The submarine should start moving when the section comes into view
    // and finish when the end of the section is about to leave view.
    const scrollStart = sectionTopOffset - viewportHeight * 0.5; // Start moving when section is halfway up
    const scrollEnd = sectionTopOffset + sectionHeight - viewportHeight * 0.5; // End when section is halfway out

    let progress = 0;
    if (latestScrollY >= scrollStart && latestScrollY <= scrollEnd) {
      progress = (latestScrollY - scrollStart) / (scrollEnd - scrollStart);
    } else if (latestScrollY > scrollEnd) {
      progress = 1;
    }
    progress = Math.max(0, Math.min(1, progress)); // Clamp progress between 0 and 1

    // Determine the vertical range for the submarine to travel within the projects grid
    const projectsGrid = sectionRef.current.querySelector('.projects-grid');
    const gridHeight = projectsGrid ? projectsGrid.offsetHeight : 0;
    const submarineHeight = submarineRef.current ? submarineRef.current.offsetHeight : 0;

    // Calculate the start and end Y positions relative to the section's top
    // The submarine should travel from the top of the grid to the bottom.
    const startYOfGrid = projectsGrid ? projectsGrid.offsetTop : 0;
    const endYOfGrid = projectsGrid ? projectsGrid.offsetTop + gridHeight : 0;

    // Adjust travel range for submarine's height so it stays within bounds
    const submarineTravelStart = startYOfGrid + submarineHeight / 2;
    const submarineTravelEnd = endYOfGrid - submarineHeight / 2;
    const travelRange = submarineTravelEnd - submarineTravelStart;

    // Map the scroll progress to the submarine's vertical travel range
    return submarineTravelStart + progress * travelRange;
  });

  const fireBullet = useCallback((targetIndex) => {
    if (!submarineRef.current || !projectRefs.current[targetIndex] || !sectionRef.current) {
      console.log("Missing refs for bullet firing or section ref.");
      return;
    }
    const subRect = submarineRef.current.getBoundingClientRect();
    const targetRect = projectRefs.current[targetIndex].getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();

    // Calculate bullet start and target positions relative to the section
    const startX = (subRect.left + subRect.width - 15) - sectionRect.left; 
    const startY = (subRect.top + subRect.height / 2) - sectionRect.top;
    const targetX = (targetRect.left + targetRect.width / 2) - sectionRect.left;
    const targetY = (targetRect.top + targetRect.height / 2) - sectionRect.top;

    const deltaX = targetX - startX;
    const deltaY = targetY - startY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setCurrentBulletColor(prevColor => (prevColor === 'red' ? 'blue' : 'red'));
    setBulletPosition({ x: startX, y: startY, targetX, targetY, rotation: angle });
    setBulletVisible(true);
  }, []);

  const handleMouseEnter = (index) => {
    setGlowingCardIndex(index);
    if (shootIntervalRef.current) {
      clearInterval(shootIntervalRef.current);
    }
    fireBullet(index);
    shootIntervalRef.current = setInterval(() => fireBullet(index), 200);
  };

  const handleMouseLeave = () => {
    setGlowingCardIndex(null);
    if (shootIntervalRef.current) {
      clearInterval(shootIntervalRef.current);
      shootIntervalRef.current = null;
    }
    setBulletVisible(false);
    setBulletPosition(null);
  };

  const onBulletAnimationEnd = () => {
    if (!shootIntervalRef.current) {
      setBulletVisible(false);
      setBulletPosition(null);
    }
  };

  return (
    <section id={id} className="min-h-screen py-20 flex items-center relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow font-inter">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 font-inter">
            Innovative solutions developed to solve real-world problems across various domains.
          </p>
        </motion.div>

        <div className="relative flex justify-center py-10 h-full">
          {/* Submarine Path */}
          <motion.svg
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 md:w-8 h-full z-10"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            style={{ opacity: 1 }}
          >
            <motion.path
              d="M50,0 C20,100 80,200 50,300 C20,400 80,500 50,600 C20,700 80,800 50,900 C20,950 80,1000 50,1000"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeDasharray="20 10"
              className="animate-dash-flow submarine-path"
              style={{ filter: 'drop-shadow(0 0 5px #06b6d4)' }}
            />
          </motion.svg>

          {/* Submarine */}
          <motion.div
            style={{
              top: submarineY,
              transform: 'translateX(calc(-50% - 55px))' // Adjust to position relative to the path
            }}
            className="absolute z-20 left-1/2"
          >
            <Submarine
              submarineRef={submarineRef}
            />
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-32 lg:gap-x-48 gap-y-24 w-full max-w-6xl z-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index % 3) * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`relative p-6 bg-blue-900/20 backdrop-blur-sm rounded-xl border border-blue-800/50 transition-all duration-300
                  ${index % 2 === 0 ? 'md:justify-self-end' : 'md:justify-self-start'}
                  ${glowingCardIndex === index ? 'card-glow' : 'hover:border-accent/80 hover:scale-[1.02]'}
                  shadow-xl
                `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{ width: 'clamp(300px, 42vw, 500px)' }}
              >
                <div className="flex flex-col h-full">
                  {/* Image and Links */}
                  <div className="flex items-stretch mb-4 gap-8"> {/* Changed gap-4 to gap-8 here */}
                    <div className="flex-shrink-0 w-4/5">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-md shadow-md"
                        style={{ filter: 'drop-shadow(0 0 8px rgba(0, 191, 255, 0.6))' }}
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/0f172a/60a5fa?text=${encodeURIComponent(project.title.replace(/\s/g, '+'))}`; }}
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-2 w-1/5">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-800/50 rounded-full hover:bg-accent transition-colors duration-300 flex items-center justify-center shadow-lg cursor-pointer"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-bold text-cyan-200 font-inter mr-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-800/50 text-xs rounded-full flex items-center font-inter border border-blue-700 hover:bg-blue-700/50 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-0 flex-grow">
                    <p className="text-blue-100 text-sm font-inter">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bullet Animation Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {bulletVisible && bulletPosition && (
            <motion.div
              key={Date.now()}
              initial={{
                left: bulletPosition.x,
                top: bulletPosition.y,
                opacity: 1,
                width: '0.75rem',
                height: '0.25rem',
                transform: `translate(-50%, -50%) rotate(${bulletPosition.rotation}deg)`,
                filter: `drop-shadow(0 0 12px ${currentBulletColor === 'red' ? 'rgba(255, 100, 100, 0.9)' : 'rgba(100, 100, 255, 0.9)'})
                          drop-shadow(0 0 24px ${currentBulletColor === 'red' ? 'rgba(255, 150, 150, 0.6)' : 'rgba(150, 150, 255, 0.6)'})`
              }}
              animate={{
                left: bulletPosition.targetX,
                top: bulletPosition.targetY,
                opacity: 0,
                width: '4rem',
                transition: {
                  duration: 0.4,
                  ease: 'easeOut'
                }
              }}
              exit={{ opacity: 0 }}
              onAnimationComplete={onBulletAnimationEnd}
              className={`absolute rounded-full z-30
                ${currentBulletColor === 'red' ? 'bg-red-500' : 'bg-blue-500'}
              `}
              style={{
                transformOrigin: 'left center',
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Tailwind CSS and Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        .text-glow {
          text-shadow: 0 0 8px rgba(6, 182, 212, 0.8), 0 0 15px rgba(6, 182, 212, 0.4);
        }

        .animate-dash-flow {
          animation: dash-flow 8s linear infinite;
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -30;
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .card-glow {
          animation: twinkle-bluish-red 0.6s ease-in-out infinite alternate;
        }

        @keyframes twinkle-bluish-red {
          0% {
            box-shadow: 0 0 15px rgba(0, 191, 255, 0.9), inset 0 0 10px rgba(0, 191, 255, 0.7);
            border-color: rgba(0, 191, 255, 1);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 69, 0, 1), inset 0 0 15px rgba(255, 69, 0, 0.9);
            border-color: rgba(255, 69, 0, 1);
          }
          100% {
            box-shadow: 0 0 15px rgba(0, 191, 255, 0.9), inset 0 0 10px rgba(0, 191, 255, 0.7);
            border-color: rgba(0, 191, 255, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
