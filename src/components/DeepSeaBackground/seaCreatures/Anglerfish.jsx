import React from 'react'

const Anglerfish = ({ className = "absolute bottom-1/3 left-1/3 w-48 h-48", animationClass = "animate-swim-right-left" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 10px #ffcc00)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="64" fill="#2a2a2a" rx="50" ry="40" />
        <circle cx="90" cy="50" fill="#fff" r="12" />
        <circle cx="90" cy="50" fill="#000" r="6" />
        <path d="M30 90 Q64 110 98 90" stroke="#444" strokeLinejoin="round" strokeWidth="6" />
        <line stroke="#ffcc00" strokeLinecap="round" strokeWidth="4" x1="64" x2="64" y1="20" y2="0" />
        <circle cx="64" cy="0" fill="#ffcc00" opacity="0.8" r="8" />
        <path d="M20 60 Q10 80 20 100" fill="#2a2a2a" stroke="#444" strokeLinejoin="round" strokeWidth="6" />
        <path d="M108 60 Q118 80 108 100" fill="#2a2a2a" stroke="#444" strokeLinejoin="round" strokeWidth="6" />
      </svg>
    </div>
  )
}

export default Anglerfish