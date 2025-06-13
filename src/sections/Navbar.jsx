import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Code,
  Briefcase,
  LayoutGrid,
  Mail,
  Menu,
  X 
} from 'lucide-react'; 

const COLORS = {
  deepOcean: 'rgba(10, 25, 47, 0.7)',
  lightOcean: 'rgba(0, 194, 203, 0.8)',
  seafoam: 'rgba(128, 224, 235, 0.9)',
  waveBlue: 'rgba(0, 123, 138, 0.6)',
  textLight: '#E0F2F7',
  textHover: '#FFFFFF',
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: LayoutGrid, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const handleNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', damping: 15, stiffness: 100 }}
      >
        <motion.ul
          className="flex rounded-full px-4 py-2 border relative overflow-hidden"
          style={{
            background: `linear-gradient(to right, ${COLORS.deepOcean}, ${COLORS.waveBlue})`,
            borderColor: COLORS.waveBlue,
            boxShadow: `0 8px 32px 0 ${COLORS.deepOcean}`,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
          whileHover={{ scale: 1.02 }}
        >
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} className="relative group mx-1">
                <motion.a
                  onClick={() => handleNavItemClick(item.id)}
                  className={`
                    relative flex flex-col items-center p-3 rounded-full text-sm transition-all duration-300 ease-in-out
                    ${isActive ? 'text-white' : COLORS.textLight}
                    hover:text-white cursor-pointer overflow-hidden
                  `}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full z-0"
                      style={{
                        background: `linear-gradient(45deg, ${COLORS.lightOcean}, ${COLORS.seafoam})`,
                        boxShadow: `0 0 15px ${COLORS.lightOcean}, 0 0 30px ${COLORS.seafoam}`,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}

                  <motion.span
                    className="absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at center, ${COLORS.seafoam} 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5, transition: { duration: 0.5, ease: 'easeOut' } }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Icon with enhanced animation */}
                  <motion.span
                    className={`text-xl z-10 relative
                      ${isActive ? 'text-white' : 'text-blue-200 group-hover:text-white'}
                      transition-colors duration-300
                    `}
                    style={{
                      textShadow: isActive ? `0 0 8px ${COLORS.seafoam}, 0 0 15px ${COLORS.seafoam}` : 'none',
                    }}
                    animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
                  >
                    <IconComponent size={20} />
                  </motion.span>
                  <span
                    className={`text-xs mt-1 font-medium z-10 relative
                      ${isActive ? 'text-white' : 'text-blue-100 group-hover:text-white'}
                      transition-colors duration-300
                    `}
                  >
                    {item.label}
                  </span>
                </motion.a>
              </li>
            );
          })}
        </motion.ul>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.div
        className="fixed top-4 right-4 z-50 md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: 'spring', damping: 15, stiffness: 100 }}
      >
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 rounded-full border shadow-lg text-white relative overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${COLORS.deepOcean}, ${COLORS.waveBlue})`,
            borderColor: COLORS.waveBlue,
            boxShadow: `0 4px 20px 0 ${COLORS.deepOcean}`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="times"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="bars"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.ul
              className="absolute right-0 mt-2 p-2 rounded-2xl border shadow-lg origin-top-right w-48"
              style={{
                background: `linear-gradient(to bottom, ${COLORS.deepOcean}, ${COLORS.waveBlue})`,
                borderColor: COLORS.waveBlue,
                boxShadow: `0 8px 32px 0 ${COLORS.deepOcean}`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <li key={item.id} className="mb-1 last:mb-0">
                    <motion.a
                      onClick={() => handleNavItemClick(item.id)}
                      className={`
                        relative flex items-center px-4 py-3 rounded-lg text-sm w-full
                        ${isActive ? 'text-white' : COLORS.textLight}
                        hover:text-white cursor-pointer overflow-hidden
                      `}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="mobileActivePill"
                          className="absolute inset-0 rounded-lg z-0"
                          style={{
                            background: `linear-gradient(45deg, ${COLORS.lightOcean}, ${COLORS.seafoam})`,
                            boxShadow: `0 0 10px ${COLORS.lightOcean}`,
                          }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                      <motion.span
                        className="mr-3 text-lg z-10 relative"
                        animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
                      >
                        <IconComponent size={20} />
                      </motion.span>
                      <span className="font-medium z-10 relative">{item.label}</span>
                    </motion.a>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;
