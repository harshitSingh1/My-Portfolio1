import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const Experience = ({ id }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })


  const experiences = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
          <path d="M576 24c0-13.3-10.7-24-24-24H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h528c13.3 0 24-10.7 24-24V24zM320 160H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32zm0 96H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32zm0 96H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
        </svg>
      ),
      title: "Computer Networking [CISCO]",
      period: "May 2024 - Jul 2024",
      highlights: [
        "Developed secure LAN network using Cisco Packet Tracer",
        "Implemented advanced configurations for controlled web access",
        "Completed networking & cybersecurity courses",
        "Participated in Cisco's Virtual Internship"
      ],
      color: "from-blue-600/20 to-blue-900/30",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30"
    }
  ]

  const achievements = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
          <path d="M528.2 284.1c11.7-12.7 11.1-32.9-1.6-44.6L378.1 91.2c-12.7-11.7-32.9-11.1-44.6 1.6s-11.1 32.9 1.6 44.6l106 97.4L490.8 350c-11.7 12.7-11.1 32.9 1.6 44.6s32.9 11.1 44.6-1.6l41.2-44.9c12.7-11.7 12.7-32.9 0-44.6zM288 352a96 96 0 1 1 0-192 96 96 0 1 1 0 192zM128 0c-17.7 0-32 14.3-32 32V64c0 17.7 14.3 32 32 32H160V0h-32zM0 160v128c0 17.7 14.3 32 32 32h64V160H0zm128 160v192c0 17.7 14.3 32 32 32h320V320H128z"/>
        </svg>
      ),
      title: "Hackathon Winner",
      description: "Learn 2 Build 2024, InsightMed Hacks, ConCordia CS Hackathon Winner",
      color: "from-purple-600/20 to-purple-900/30",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
          <path d="M309.4 117.8C314.9 104.9 330.1 96 345.8 96H448c17.7 0 32 14.3 32 32V256c0 17.7-14.3 32-32 32H345.8c-15.7 0-30.9-8.9-36.4-21.8L280.3 192 309.4 117.8zm-42.3 0L237.7 192l-29.1 74.2c-5.5 12.9-20.7 21.8-36.4 21.8H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h71.8c15.7 0 30.9 8.9 36.4 21.8L224 192l29.1-74.2zM560 320c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H208c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H560z"/>
        </svg>
      ),
      title: "Competitive Programming",
      description: "5⭐ on HackerRank | 700+ questions on CodeChef/LeetCode | Professional certificate of C++, Python, HTML and MySQL",
      color: "from-green-600/20 to-green-900/30",
      iconColor: "text-green-400",
      borderColor: "border-green-500/30"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="w-8 h-8">
          <path d="M128 32C92.7 32 64 60.7 64 96V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H128zM96 112c0-8.8 7.2-16 16-16H528c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V112zm80 48v80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16zm128 0v80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16zm128 0v80c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16z"/>
        </svg>
      ),
      title: "Industry level Certificates",
      description: "Certified System Administrator | Certified Application Developer | EC-Council Certified Network Defender 2",
      color: "from-yellow-600/20 to-yellow-900/30",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-500/30"
    }
  ]

  const Bubble = ({ size, left, top, delay }) => (
    <motion.div
      className="absolute rounded-full bg-white/10 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left,
        top
      }}
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -20, 0],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 4 + Math.random() * 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  )

  const bulletVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: [0, 1.2, 1],
      transition: {
        duration: 0.4,
        ease: "backOut",
        delay: i * 0.1
      }
    }),
    hover: {
      scale: 1.1, // Slight scale up on hover
      transition: { duration: 0.1 }
    }
  }

  return (
    <section 
      id={id} 
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ background: 'transparent' }}
    >
      {[...Array(15)].map((_, i) => (
        <Bubble 
          key={i}
          size={`${10 + Math.random() * 20}px`}
          left={`${Math.random() * 100}%`}
          top={`${Math.random() * 100}%`}
          delay={Math.random() * 2}
        />
      ))}
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-glow text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & <span className="text-accent">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div> 
            <div className="space-y-8 relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
              
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-xl border backdrop-blur-md bg-gradient-to-br ${exp.color} ${exp.borderColor} relative overflow-hidden`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`absolute left-6 top-8 w-4 h-4 rounded-full ${exp.iconColor} shadow-glow`}></div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-black/20 ${exp.iconColor}`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-blue-300 mb-4">{exp.period}</p>
                      <ul className="space-y-3">
                        {exp.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <motion.span 
                              className={`w-4 h-4 mt-1.5 rounded-full ${exp.iconColor} inline-block flex-shrink-0`} // Increased size, adjusted margin, added flex-shrink-0
                              variants={bulletVariants}
                              initial="hidden"
                              whileInView="visible"
                              whileHover="hover"
                              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of item is visible
                              custom={i} // Pass custom prop 'i' for staggered animation
                            ></motion.span>
                            <motion.span 
                              className="text-blue-100"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ delay: i * 0.1 + 0.2 }} // Adjusted delay to align with bullet animation
                            >
                              {item}
                            </motion.span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <svg 
                    className="absolute -right-4 -bottom-4 w-24 h-24 opacity-30"
                    viewBox="0 0 64 64"
                  >
                    <path 
                      d="M32 64 C16 48, 48 32, 32 16 C16 0, 48 0, 32 16"
                      stroke="#0a7a0a" 
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <div className="space-y-8">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  className={`p-6 rounded-xl border backdrop-blur-md bg-gradient-to-br ${ach.color} ${ach.borderColor} relative overflow-hidden group`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 30px -5px ${ach.iconColor.replace('text-', '')}40`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full bg-black/20 ${ach.iconColor} group-hover:scale-110 transition-transform`}>
                      {ach.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{ach.title}</h3>
                      <p className="text-blue-100">{ach.description}</p>
                    </div>
                  </div>
                  
                  <svg 
                    className="absolute -left-4 -bottom-4 w-24 h-24 opacity-30"
                    viewBox="0 0 64 64"
                  >
                    <path 
                      d="M32 64 C48 48, 16 32, 32 16 C48 0, 16 0, 32 16"
                      stroke="#cc5200" 
                      fill="none"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
