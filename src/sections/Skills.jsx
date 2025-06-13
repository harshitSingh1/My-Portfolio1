import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaJava, FaLinux, FaGitAlt, FaDocker, FaCloud, FaBug, FaTerminal, FaHtml5, FaCss3Alt, FaJs, FaServer, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPython, SiCplusplus, SiKubernetes, SiFirebase, SiMysql } from 'react-icons/si';
import { GiOctopus, GiSquid, GiFishbone, GiMedusaHead, GiGears, GiSpiderMask } from 'react-icons/gi';

const Skills = ({ id }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const skillIcons = {
    "C++": <SiCplusplus className="inline-block mr-1 text-blue-600" />,
    "Python": <SiPython className="inline-block mr-1 text-blue-400" />,
    "Java": <FaJava className="inline-block mr-1 text-red-500" />,
    "Bash Scripting": <FaTerminal className="inline-block mr-1 text-gray-400" />,
    "HTML": <FaHtml5 className="inline-block mr-1 text-orange-500" />,
    "CSS": <FaCss3Alt className="inline-block mr-1 text-blue-500" />,
    "JavaScript": <FaJs className="inline-block mr-1 text-yellow-400" />,
    "React.js": <FaReact className="inline-block mr-1 text-cyan-400" />,
    "Node.js": <FaNodeJs className="inline-block mr-1 text-green-500" />,
    "Tailwind": <SiTailwindcss className="inline-block mr-1 text-sky-400" />,
    "MongoDB": <SiMongodb className="inline-block mr-1 text-green-600" />,
    "Mongoose": <SiMongodb className="inline-block mr-1 h-4 w-4" />,
    "MySQL": <SiMysql className="inline-block mr-1 text-blue-700" />,
    "AWS": <FaAws className="inline-block mr-1 text-amber-500" />,
    "Linux": <FaLinux className="inline-block mr-1 text-gray-400" />,
    "VMWare Workstation": <FaServer className="inline-block mr-1 text-purple-500" />,
    "Packet Tracer": <FaNetworkWired className="inline-block mr-1 text-teal-500" />,
  };

  const sphereSkillsLayer1 = [
    { icon: <FaReact className="text-5xl text-cyan-400" />, name: "React" },
    { icon: <FaNodeJs className="text-5xl text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-5xl text-green-600" />, name: "MongoDB" },
    { icon: <SiPython className="text-5xl text-blue-400" />, name: "Python" },
    { icon: <SiCplusplus className="text-5xl text-blue-600" />, name: "C++" },
    { icon: <FaJava className="text-5xl text-red-500" />, name: "Java" },
    { icon: <FaAws className="text-5xl text-amber-500" />, name: "AWS" },
    { icon: <SiTailwindcss className="text-5xl text-sky-400" />, name: "Tailwind" },
    { icon: <GiMedusaHead className="text-5xl text-purple-500" />, name: "Security" },
    { icon: <FaNetworkWired className="text-5xl text-blue-300" />, name: "Networking" }
  ];

  const sphereSkillsLayer2 = [
    { icon: <FaLinux className="text-5xl text-gray-400" />, name: "Linux" },
    { icon: <FaGitAlt className="text-5xl text-orange-600" />, name: "Git" },
    { icon: <FaDocker className="text-5xl text-blue-500" />, name: "Docker" },
    { icon: <FaCloud className="text-5xl text-blue-400" />, name: "Cloud" },
    { icon: <FaBug className="text-5xl text-red-700" />, name: "Debugging" },
    { icon: <FaTerminal className="text-5xl text-gray-700" />, name: "CLI" },
    { icon: <SiKubernetes className="text-5xl text-blue-600" />, name: "Kubernetes" },
    { icon: <SiFirebase className="text-5xl text-yellow-500" />, name: "Firebase" },
    { icon: <SiMysql className="text-5xl text-blue-700" />, name: "MySQL" },
  ];

  const skillCategories = [
    {
      title: "Programming & Core Languages",
      icon: <GiGears className="w-8 h-8 text-fuchsia-400" />,
      skills: ["C++", "Python", "Java", "Bash Scripting"],
      color: "from-purple-500/20 to-blue-600/20"
    },
    {
      title: "Web Development",
      icon: <GiSpiderMask className="w-8 h-8 text-teal-400" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Tailwind"],
      color: "from-cyan-500/20 to-teal-600/20"
    },
    {
      title: "Data & Infrastructure",
      icon: <GiOctopus className="w-8 h-8 text-indigo-400" />,
      skills: ["MongoDB", "Mongoose", "MySQL", "AWS", "Linux", "VMWare Workstation", "Packet Tracer"],
      color: "from-emerald-500/20 to-green-600/20"
    }
  ];

  return (
    <section id={id} className="relative min-h-screen py-20 overflow-hidden font-inter text-white">
      <style>{`
        body { font-family: 'Inter', sans-serif; margin: 0; }
        .text-glow {
          text-shadow: 0 0 8px rgba(0, 180, 255, 0.6), 0 0 15px rgba(0, 180, 255, 0.4);
        }
        .text-glow-accent {
          text-shadow: 0 0 8px rgba(128, 0, 128, 0.6), 0 0 15px rgba(128, 0, 128, 0.4);
        }
        .icon-3d-effect {
          transform: perspective(500px) rotateY(15deg) rotateX(5deg);
          transition: transform 0.3s ease, text-shadow 0.3s ease, border-color 0.3s ease;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
          border: 2px solid transparent; /* Added for hover effect */
          box-shadow: 0 0 0px transparent; /* Added for initial state of box-shadow */
          border-radius: 50%; /* Ensure border applies nicely to rounded icons */
        }
        .icon-3d-effect:hover {
          transform: perspective(500px) rotateY(0deg) rotateX(0deg) scale(1.4) translateY(-10px); /* Slightly more pronounced */
          text-shadow: 0 0 25px rgba(255, 0, 255, 1), 0 0 40px rgba(255, 0, 255, 0.7); /* More intense glow */
          border-color: rgba(255, 100, 255, 0.9); /* Vibrant pinkish border */
          box-shadow: 0 0 15px rgba(255, 100, 255, 0.6); /* Soft outer glow */
        }
      `}</style>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8 }
            }
          }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 }
              }
            }}
          >
            Skills & <span className="text-accent text-glow-accent">Expertise</span>
          </motion.h2>

          <motion.div
            className="w-24 h-1.5 bg-accent mx-auto mb-8 rounded-full"
            variants={{
              hidden: { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: { delay: 0.4, duration: 0.8 }
              }
            }}
          />

          <motion.p
            className="text-xl max-w-3xl mx-auto text-blue-100"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.6 }
              }
            }}
          >
            Diving deep into the ocean of technologies I've mastered
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative h-[600px] flex items-center justify-center lg:justify-start -ml-10"
            style={{ perspective: '1000px' }}
          >
            <GiOctopus className="absolute text-white/5 text-[600px] -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative w-[450px] h-[450px] md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-lg"></div>

              {/* Layer 1: Outer Animated Skill Icons (Rotating clockwise) */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {sphereSkillsLayer1.map((skill, i) => {
                  const angle = (i / sphereSkillsLayer1.length) * Math.PI * 2
                  const radius = 45
                  const x = 50 + radius * Math.cos(angle)
                  const y = 50 + radius * Math.sin(angle)

                  return (
                    <motion.div
                      key={i}
                      className="absolute cursor-pointer icon-3d-effect"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                      whileHover={{
                        scale: 1.3,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative group">
                        {skill.icon}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.name}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Layer 2: Inner Animated Skill Icons (Rotating anti-clockwise) */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {sphereSkillsLayer2.map((skill, i) => {
                  const angle = (i / sphereSkillsLayer2.length) * Math.PI * 2
                  const radius = 25
                  const x = 50 + radius * Math.cos(angle)
                  const y = 50 + radius * Math.sin(angle)

                  return (
                    <motion.div
                      key={i}
                      className="absolute cursor-pointer icon-3d-effect"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{ rotate: 360 }} 
                      transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                      whileHover={{
                        scale: 1.3,
                        zIndex: 10,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <div className="relative group">
                        {skill.icon}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.name}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Pulsing Core */}
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }
                }}
              >
                <GiFishbone className="absolute inset-0 m-auto text-blue-400/20 text-6xl" />
              </motion.div>
            </div>

            {/* Floating Bubbles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 border border-blue-400/20"
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  transition: {
                    duration: Math.random() * 10 + 5,
                    delay: Math.random() * 3,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }
                }}
              />
            ))}
          </motion.div>

          {/* Right Column - Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`p-6 rounded-xl border border-blue-700/50 overflow-hidden relative group bg-gradient-to-br ${category.color} hover:shadow-lg transition-all duration-500`}
                whileHover={{ y: -5 }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-400/30 group-hover:scale-150 transition-transform duration-1000" />
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-teal-400/30 group-hover:scale-150 transition-transform duration-1000" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-900/50 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        className="px-3 py-1.5 bg-blue-900/50 rounded-full text-sm border border-blue-700/50 group-hover:border-accent/50 transition-all duration-300 flex items-center"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: 'rgba(0, 180, 255, 0.2)'
                        }}
                      >
                        {skillIcons[skill]} {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Tentacles */}
                <GiSquid className="absolute -right-10 -bottom-10 text-blue-400/10 text-6xl group-hover:text-blue-400/20 transition-all duration-1000" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;