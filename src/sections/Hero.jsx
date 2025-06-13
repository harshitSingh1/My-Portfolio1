import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const Hero = ({ id }) => {
  const [terminalContent, setTerminalContent] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);
  const hasLoadedTerminal = useRef(false);
  const terminalContentRef = useRef(null);

  const titles = [
    "Senior Full-Stack Developer",
    "Cybersecurity Specialist",
    "Cloud Architect",
    "Webapp Developer"
  ];

  const commands = {
    help: {
      description: "- List all available commands",
      execute: () => addResponse([
        "Available commands:",
        ...Object.entries(commands).map(([cmd, { description }]) =>
          `  ${cmd.padEnd(12)} ${description}`
        ),
        " ",
        "Press ↑/↓ to navigate command history",
        "Press Tab to autocomplete commands"
      ])
    },
    clear: {
      description: "- Clear terminal screen",
      execute: () => setTerminalContent([])
    },
    intro: {
      description: "- Display introduction",
      execute: () => addResponse([
        "Harshit Singh - Senior Software Developer",
        " ",
        "B.Tech in Computer Science & Engineering",
        "Bennett University (CGPA: 9.23)",
        " ",
        "Specializing in:",
        "• Full-Stack Development (React/Node)",
        "• Cybersecurity & Ethical Hacking",
        "• Cloud Architecture (AWS)",
        "• WebApp Developer"
      ])
    },
    achievements: {
      description: "- List key achievements",
      execute: () => addResponse([
        "🏆 Notable Achievements:",
        "• 5-star on HackerRank (500+ problems solved)",
        "• Winner: Learn 2 Build 2024 Hackathon",
        "• InsightMed Hacks & ConCordia CS Winner",
        "• 100% completion in C++, Python, MySQL",
        "• Smart India Hackathon Participant"
      ])
    },
    certificates: {
      description: "- List professional certificates",
      execute: () => addResponse([
        "📜 Professional Certifications:",
        "1. EC-Council Certified Network Defender",
        "2. Certified System Administrator (ServiceNow)",
        "3. AWS Academy Cloud Foundations",
        "4. Google Cybersecurity Certification",
        "5. IBM Cybersecurity Capstone",
        " ",
        "Type 'view cert <number>' for details"
      ])
    },
    projects: {
      description: "- List key projects",
      execute: () => addResponse([
        "💻 Notable Projects:",
        "1. Android APK Scanner - Security tool",
        "2. Advanced Image Steganography - AES encrypted",
        "3. FarmingNow - AI agriculture assistant",
        "4. BreakBuddy - Chrome productivity extension",
        " ",
        "Type 'view project <number>' for details"
      ])
    },
    contact: {
      description: "- Show contact information",
      execute: () => addResponse([
        "📨 Contact Information:",
        "Email:    sharshitsingh007@gmail.com",
        "LinkedIn: linkedin.com/in/harshit-singh-06834221b",
        "GitHub:   github.com/harshitSingh1",
        "Phone:    +91 98765 43210",
        " ",
        "Click the icons below to connect"
      ])
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hasLoadedTerminal.current) {
      addResponse([
        "Welcome to My Interactive Portfolio Terminal!",
        " ",
        "Type 'help' to see available commands",
        " "
      ]);
      hasLoadedTerminal.current = true;
    }
  }, []);


  useEffect(() => {
    if (terminalContent.length === 0 && terminalContentRef.current) {
      terminalContentRef.current.scrollTop = 0;
    }
  }, [terminalContent]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isFocused) return;

      if (e.key === 'ArrowUp' && historyIndex > 0) {
        e.preventDefault();
        setHistoryIndex(historyIndex - 1);
        setInputValue(commandHistory[historyIndex - 1]);
      }

      if (e.key === 'ArrowDown' && historyIndex < commandHistory.length) {
        e.preventDefault();
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[newIndex] || '');
      }

      if (e.key === 'Tab') {
        e.preventDefault();
        const matchingCommands = Object.keys(commands).filter(cmd =>
          cmd.startsWith(inputValue.toLowerCase())
        );
        if (matchingCommands.length === 1) {
          setInputValue(matchingCommands[0]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused, historyIndex, commandHistory, inputValue]);

  const addResponse = (lines) => {
    setTerminalContent(prev => [
      ...prev,
      ...lines.map(line => ({ type: 'response', content: line }))
    ]);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setCommandHistory(prev => [...prev, inputValue]);
    setHistoryIndex(commandHistory.length + 1);

    setTerminalContent(prev => [...prev, { type: 'command', content: inputValue }]);

    const cmd = inputValue.split(' ')[0].toLowerCase();
    if (commands[cmd]) {
      commands[cmd].execute();
    } else if (inputValue.startsWith('view cert')) {
      const num = parseInt(inputValue.split(' ')[2]);
      viewCertificate(num);
    } else if (inputValue.startsWith('view project')) {
      const num = parseInt(inputValue.split(' ')[2]);
      viewProject(num);
    } else if (inputValue) {
      addResponse([`Command not found: ${inputValue}. Type 'help' for available commands`]);
    }

    setInputValue('');
  };

  const viewCertificate = (num) => {
    const certs = [
      "EC-Council Certified Network Defender (May 2023)",
      "Certified System Administrator - ServiceNow (Jul 2024)",
      "AWS Academy Cloud Foundations [49763] (Sept 2023)",
      "Foundations of Cybersecurity - Google (Jul 2023)",
      "Cybersecurity Capstone - IBM (Oct 2023)"
    ];

    if (num >= 1 && num <= certs.length) {
      addResponse([`🔐 ${certs[num - 1]}`]);
    } else {
      addResponse(["Invalid certificate number. Type 'certificates' to see list"]);
    }
  };

  const viewProject = (num) => {
    const projects = [
      "Android APK Scanner: Mobile app vulnerability scanner using Bash & Python (Nov 2024)",
      "Advanced Image Steganography: Web app combining AES encryption with steganography (Nov 2024)",
      "FarmingNow: Provides crop recommendations using NASA, Google Gemini APIs (Oct 2024)",
      "BreakBuddy: Chrome extension with 10+ activities for productive breaks (Jul 2023)"
    ];

    if (num >= 1 && num <= projects.length) {
      addResponse([`🛠️ ${projects[num - 1]}`]);
    } else {
      addResponse(["Invalid project number. Type 'projects' to see list"]);
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left relative"
          >

            <motion.div
              className="inline-block relative mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gray-900 rounded-lg transform -rotate-1 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg opacity-60 -z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white px-4 py-2 relative">
                <span className="text-accent">Hello, I am</span>
              </h1>
            </motion.div>
            <motion.div
              className="inline-block relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gray-900 rounded-lg transform -rotate-1 -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg opacity-60 -z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white px-4 py-2 relative">
                <span className="text-accent">Harshit Singh{' '}
                  <motion.span
                    className="inline-block origin-[70%_70%]"
                    animate={{ rotate: [0, 20, -15, 20, -10, 15, 0] }} 
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    👋🏻
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-blue-200 font-mono flex items-center"
                >
                  <motion.span
                    className="mr-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    &gt;
                  </motion.span>
                  <span className="typing-animation">
                    {titles[currentTitleIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-xl mb-8 text-blue-100 max-w-lg leading-relaxed relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <span className="absolute inset-0 bg-gray-900 rounded-lg opacity-80 -z-10"></span>
              <span className="relative px-4 py-3 inline-block">
                Checkout the terminal at left. Its simple and easy to use to get all information about me in quickest time, write commands after '@Input&gt;'.
              </span>
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaChevronRight />
                  </motion.span>
                </span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border-2 border-accent text-accent rounded-full font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex items-center relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-accent opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  View Projects
                  <FaExternalLinkAlt className="ml-2" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Advanced Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 90 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full"
          >
            <div className="terminal-container bg-gray-900/80 backdrop-blur-md rounded-xl border border-blue-700/50 overflow-hidden shadow-2xl relative z-10 h-[32rem]">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 bg-gray-800/90 border-b border-blue-600/30">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="text-blue-300 text-sm font-mono flex-1 text-center">
                  portfolio-terminal — bash
                </div>
                <div className="w-8"></div>
              </div>

              {/* Terminal Content */}
              <div ref={terminalContentRef} className="terminal-content p-4 h-[26rem] overflow-y-auto font-mono text-green-100">
                <AnimatePresence>
                  {terminalContent.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-1 ${item.type === 'command' ? 'text-blue-300' : 'text-green-100'}`}
                    >
                      {item.type === 'command' ? (
                        <div className="flex">
                          <span className="text-purple-400 mr-2">{'>'}</span>
                          {item.content}
                        </div>
                      ) : (
                        <div>{item.content}</div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Input */}
              <form
                onSubmit={handleCommand}
                className="px-4 py-3 bg-gray-800/50 border-t border-blue-600/30 flex items-center"
                onClick={() => inputRef.current?.focus()}
              >
                <span className="text-purple-400 mr-2">{'@Input>'}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-transparent border-none outline-none text-green-100 w-full font-mono caret-blue-400"
                  autoFocus
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                {isFocused && (
                  <motion.span
                    className="ml-1 text-blue-400"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ▋
                  </motion.span>
                )}
              </form>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-gray-800/30 text-xs text-blue-300 flex justify-between items-center">
                <div className="flex items-center">
                  <FaTerminal className="mr-2" />
                  <span>Interactive Portfolio Terminal</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/harshit" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="https://linkedin.com/in/harshit" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="mailto:harshit@example.com" className="hover:text-accent transition-colors">
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Terminal Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;