import { useState, useEffect } from 'react'
import DeepSeaBackground from './components'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {window.removeEventListener('scroll', handleScroll); 
      clearTimeout(timeoutId);
    }
  }, [])

  return (
  <div className="relative overflow-x-hidden">
    <Navbar activeSection={activeSection} />
    <DeepSeaBackground />
    <div className="relative z-10 pt-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  </div>
)
}