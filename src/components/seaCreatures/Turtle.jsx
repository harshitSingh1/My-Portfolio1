import React from 'react'

const Turtle = ({ className = "absolute bottom-1/4 left-1/4 w-40 h-32", animationClass = "animate-swim-left-right" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #2e8b57)' }}>
      <svg className="w-full h-full" viewBox="0 0 128 96" xmlns="http://www.w3.org/2000/svg" fill="none">
        <ellipse cx="64" cy="48" fill="#2e8b57" rx="50" ry="30" />
        <path stroke="#1f5f3a" strokeWidth="4" d="M20 48h88M64 18v60M40 30l48 36M40 66l48-36" />
        <ellipse cx="20" cy="48" fill="#2e8b57" rx="12" ry="16" />
        <ellipse cx="40" cy="20" fill="#2e8b57" rx="10" ry="6" />
        <ellipse cx="40" cy="76" fill="#2e8b57" rx="10" ry="6" />
        <ellipse cx="100" cy="20" fill="#2e8b57" rx="10" ry="6" />
        <ellipse cx="100" cy="76" fill="#2e8b57" rx="10" ry="6" />
        <circle cx="15" cy="40" fill="#fff" r="6" />
        <circle cx="15" cy="40" fill="#000" r="3" />
      </svg>
    </div>
  )
}

export default Turtle