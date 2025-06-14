import React from 'react'

const Octopus = ({ className = "absolute bottom-1/3 right-1/4 w-40 h-40", animationClass = "animate-float-up-down" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 10px #aa66cc)' }}>
      <svg className="w-full h-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" fill="none">
        <ellipse cx="64" cy="48" fill="#aa66cc" rx="40" ry="30" />
        <circle cx="48" cy="40" fill="#fff" r="10" />
        <circle cx="80" cy="40" fill="#fff" r="10" />
        <circle cx="48" cy="40" fill="#000" r="5" />
        <circle cx="80" cy="40" fill="#000" r="5" />
        <path d="M24 80 Q40 100 56 80" stroke="#aa66cc" strokeWidth="8" strokeLinecap="round" />
        <path d="M40 80 Q56 110 72 80" stroke="#aa66cc" strokeWidth="8" strokeLinecap="round" />
        <path d="M56 80 Q72 100 88 80" stroke="#aa66cc" strokeWidth="8" strokeLinecap="round" />
        <path d="M72 80 Q88 110 104 80" stroke="#aa66cc" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export default Octopus