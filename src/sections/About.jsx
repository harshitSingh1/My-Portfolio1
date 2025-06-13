import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import developerImage from '../assets/developer-illustration1.png'; 

const About = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id={id} 
      ref={ref}
      className="relative min-h-[150vh] overflow-hidden text-white font-inter" 
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        .text-glow {
            text-shadow:
              0 0 8px rgba(0, 180, 255, 0.6),
              0 0 15px rgba(0, 180, 255, 0.4);
        }

        .text-glow-accent {
            text-shadow:
              0 0 10px rgba(0, 255, 255, 0.8),
              0 0 20px rgba(0, 255, 255, 0.6);
        }

        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float-up-down {
          animation: floatUpDown 6s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 5px var(--accent-color, #00b4ff)); }
          50% { filter: drop-shadow(0 0 15px var(--accent-color, #00b4ff)) drop-shadow(0 0 25px var(--accent-color, rgba(0, 180, 255, 0.5))); }
        }

        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        /* Animated liquid blob background for boxes */
        @keyframes liquidBlob {
            0% { transform: scale(1) translate(0%, 0%); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            25% { transform: scale(1.05) translate(5%, -5%); border-radius: 50% 50% 50% 50% / 30% 60% 40% 70%; }
            50% { transform: scale(1) translate(0%, 0%); border-radius: 70% 30% 60% 40% / 70% 40% 60% 30%; }
            75% { transform: scale(1.05) translate(-5%, 5%); border-radius: 40% 60% 70% 30% / 60% 70% 30% 40%; }
            100% { transform: scale(1) translate(0%, 0%); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .group:hover .liquid-blob-bg {
            opacity: 1;
            animation: liquidBlob 15s ease-in-out infinite;
        }
        `}
      </style>

      <div className="container mx-auto px-6 relative z-10">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 pt-32">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-glow"
            style={{ y: yText }}
          >
            Diving Into <span className="text-accent text-glow-accent">My World</span>
          </motion.h1>

          <motion.div
            className="prose prose-lg text-blue-100 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="text-xl" variants={itemVariants}>
              <span className="text-accent font-semibold">Hey there! I'm Harshit Singh</span> — a final-year Computer Science student and an enthusiastic software developer.
            </motion.p>
            <motion.p variants={itemVariants}>
              I'm really passionate about building tech solutions that make a real difference and making sure they're super secure. With a solid foundation in 'data structures', 'algorithms', and hands-on 'full-stack development', I also specialize in 'cybersecurity', focusing on keeping data and systems safe in today's connected digital world.
            </motion.p>
            <motion.p variants={itemVariants}>
              I love turning complex problems into smart, scalable applications, and I'm always exploring new tools and ideas. I'm excited to collaborate, learn, and contribute to opportunities where tech truly creates a real-world impact.
            </motion.p>
          </motion.div>


            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              {[
                { icon: '💻', text: "Full-Stack Developer", color: '#00b4ff' },
                { icon: '🛡️', text: "Security Enthusiast", color: '#ff00ff' },
                { icon: '🐙', text: "Problem Solver", color: '#00ffff' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-900/30 backdrop-blur-lg rounded-full border border-blue-700/50 hover:border-accent/80 transition-all duration-300 transform-gpu cursor-pointer shadow-xl hover:shadow-cyan-500/50"
                  whileHover={{ y: -8, scale: 1.07, rotate: Math.random() * 5 - 2.5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-3xl animate-pulse-glow" style={{'--accent-color': item.color}}>{item.icon}</span>
                  <span className="font-medium text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative flex items-center justify-center min-h-[400px]"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
          >
            <div className="relative w-full h-96 lg:h-[550px] flex items-center justify-center">
              <motion.div 
                className="absolute inset-0 m-auto rounded-full bg-blue-500/20 filter blur-xl"
                style={{ width: '80%', height: '80%' }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
              <motion.img
                src={developerImage}
                alt="Developer Illustration"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,180,255,0.7)]"
                animate={{
                  y: [0, -20, 0], 
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute top-1/4 -left-16 text-6xl text-blue-300/80 animate-float-up-down"
                animate={{
                  x: [0, 20, 0],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
              >
                🐠
              </motion.div>
              
              <motion.div
                className="absolute bottom-1/3 -right-16 text-7xl text-teal-300/80 animate-float-up-down"
                animate={{
                  x: [0, -25, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 3
                }}
              >
                🐟 
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Section: Academic Voyage */}
        <motion.div 
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 text-center text-glow flex items-center justify-center gap-4" /* Reduced margin-bottom */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-accent animate-float-up-down text-6xl">🎓</span>
            Academic Voyage
          </motion.h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Animated timeline with a subtle shimmer */}
            <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ y: "-100%" }}
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>
            
            {[
              {
                institution: "Bennett University, Greater Noida",
                degree: "B.Tech in Computer Science & Engineering",
                period: "2021 - 2025 (Expected)",
                details: "CGPA: 9.23 (up to 7th semester)",
                icon: '🎓'
              },
              {
                institution: "Vidyagyan School, Bulandshahar",
                degree: "Class XII (CBSE)",
                period: "2021",
                details: "Percentage: 97.6%",
                icon: '📚'
              },
              {
                institution: "Vidyagyan School, Bulandshahar",
                degree: "Class X (CBSE)",
                period: "2019",
                details: "Percentage: 94.8%",
                icon: '🎒'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-16 mb-10 group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Timeline dot with enhanced glow and interaction */}
                <motion.div 
                  className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white z-10 shadow-lg" /* Reduced size */
                  whileHover={{ scale: 1.2, boxShadow: "0 0 25px rgba(0,180,255,0.7)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl animate-pulse-glow" style={{'--accent-color': '#00b4ff'}}>{item.icon}</span> {/* Adjusted icon size */}
                </motion.div>
                
                {/* Content card with advanced background animation */}
                <motion.div
                  className="relative p-8 bg-blue-900/20 backdrop-blur-lg rounded-xl border border-blue-700/50 transition-all duration-500 overflow-hidden shadow-2xl"
                  whileHover={{ y: -15, boxShadow: "0 10px 40px rgba(0, 180, 255, 0.4)" }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Animated liquid blob background on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 liquid-blob-bg"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(0,200,255,0.1), rgba(0,100,200,0) 70%)'
                    }}
                  ></div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-glow">{item.degree}</h3>
                  <p className="text-blue-200 mb-1">{item.institution}</p>
                  <p className="text-blue-300 text-sm mb-3">{item.period}</p>
                  <p className="text-blue-100">{item.details}</p>
                  
                  {/* Additional subtle floating elements within the card */}
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/10 opacity-30"
                      initial={{
                        x: Math.random() * 80 + 10,
                        y: Math.random() * 80 + 10,
                        width: Math.random() * 15 + 5,
                        height: Math.random() * 15 + 5,
                        opacity: 0
                      }}
                      animate={{
                        y: [null, -20],
                        opacity: [0, 0.3, 0],
                        transition: {
                          duration: Math.random() * 6 + 3,
                          delay: Math.random() * 2,
                          repeat: Infinity,
                          repeatType: 'reverse'
                        }
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
