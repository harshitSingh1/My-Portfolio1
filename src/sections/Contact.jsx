import React, { useState, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
  FaUser,
  FaMedium,
} from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const App = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();
  const controls = useAnimation();

  const contactItems = [
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email",
      info: "sharshitsingh007@gmail.com",
      link: "mailto:sharshitsingh007@gmail.com",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone",
      info: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Location",
      info: "Greater Noida, Uttar Pradesh, India",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FaPaperPlane className="text-3xl" />,
      title: "Inquiries",
      info: "contact me for any work opportunities",
      color: "from-yellow-200 to-amber-300",
    }
  ];

  const socialLinks = [
    {
      icon: <FaMedium className="text-3xl" />,
      label: "Medium",
      url: "https://medium.com/@sharshitsingh007",
      shadowClass: "hover:shadow-green-400/50",
      iconColorClass: "text-green-400"
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/harshit-singh-06834221b",
      shadowClass: "hover:shadow-blue-400/50",
      iconColorClass: "text-blue-400"
    },
    {
      icon: <FaGithub className="text-3xl" />,
      label: "GitHub",
      url: "https://github.com/harshitSingh1",
      shadowClass: "hover:shadow-purple-400/50",
      iconColorClass: "text-purple-400"
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      label: "Twitter",
      url: "https://x.com/HarshitSingh157",
      shadowClass: "hover:shadow-cyan-400/50",
      iconColorClass: "text-cyan-400"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    });
    setIsSubmitted(true);
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id={id} className="relative min-h-screen py-20 overflow-hidden bg-transparent text-white font-inter pb-40">

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${item.color} p-0.5 rounded-2xl shadow-lg`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col justify-between">
                  <motion.div
                    variants={floatingVariants}
                    animate="float"
                    className="inline-block mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-blue-100 hover:text-accent transition-colors"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-blue-100 text-sm md:text-base">{item.info}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 rounded-2xl shadow-lg"
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center">
                <h3 className="text-xl font-bold mb-4 sm:mb-0 text-white">Follow Me :</h3>
                <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -10,
                        scale: 1.2,
                        transition: { duration: 0.15 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-full bg-white/10 border border-white/20 hover:shadow-lg ${social.shadowClass} transition-all duration-150 hover:bg-white ${social.iconColorClass}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-center"
                >
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-blue-100 mb-6">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-blue-700/30 shadow-2xl"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)',
                    background: 'linear-gradient(rgba(5, 15, 30, 0.8), rgba(0, 10, 20, 0.9))'
                  }}
                >
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label htmlFor="name" className="block text-blue-100 mb-2">Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-blue-300/50"
                          placeholder="Your name"
                          required
                        />
                        <div className="absolute right-3 top-3 text-blue-300">
                          <FaUser />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label htmlFor="email" className="block text-blue-100 mb-2">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-blue-300/50"
                          placeholder="your.email@example.com"
                          required
                        />
                        <div className="absolute right-3 top-3 text-blue-300">
                          <FaEnvelope />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label htmlFor="message" className="block text-blue-100 mb-2">Message</label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-blue-900/30 border border-blue-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-white placeholder-blue-300/50"
                          placeholder="Your message..."
                          required
                        ></textarea>
                        <div className="absolute right-3 top-3 text-blue-300">
                          <RiSendPlaneFill />
                        </div>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-purple-800 to-purple-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{
                        scale: 1.03,
                        boxShadow: '0 0 20px rgba(255, 127, 80, 0.5)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      animate={controls}
                    >
                      <span>Send Message</span>
                      <FaPaperPlane className="animate-bounce" />
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default App;
