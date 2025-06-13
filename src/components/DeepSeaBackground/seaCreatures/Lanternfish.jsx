import React from 'react'

const Lanternfish = ({ className = "absolute top-1/3 left-1/4 w-40 h-20", animationClass = "animate-swim-left-right" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 10px #ff6600)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="30" fill="#2b2b2b" rx="50" ry="20" />
        <circle cx="40" cy="30" fill="#ff6600" opacity="0.8" r="6" />
        <circle cx="80" cy="30" fill="#ff6600" opacity="0.8" r="6" />
        <circle cx="90" cy="25" fill="#fff" r="8" />
        <circle cx="90" cy="25" fill="#000" r="4" />
        <polygon fill="#2b2b2b" points="10,30 0,15 0,45" />
      </svg>
    </div>
  )
}

export default Lanternfish