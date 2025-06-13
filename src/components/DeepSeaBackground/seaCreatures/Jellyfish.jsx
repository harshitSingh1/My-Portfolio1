import React from 'react'

const Jellyfish = ({ className = "absolute top-1/3 left-1/4 w-32 h-48", style = { filter: 'drop-shadow(0 0 5px #a0e7ff)' } }) => {
  const gradientId = `bellGradient-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className={className} style={style}>
      <svg className="w-full h-full animate-float-up-down" fill="none" viewBox="0 0 64 96" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={gradientId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#a0e7ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#004e7c" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        <ellipse cx="32" cy="24" fill={`url(#${gradientId})`} rx="28" ry="20" />
        <path className="animate-tail-wag" d="M20 44 C20 60, 24 80, 28 92" stroke="#a0e7ff" strokeLinecap="round" strokeWidth="2" />
        <path className="animate-tail-wag" d="M28 44 C28 60, 32 80, 36 92" stroke="#a0e7ff" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: '0.2s' }} />
        <path className="animate-tail-wag" d="M36 44 C36 60, 40 80, 44 92" stroke="#a0e7ff" strokeLinecap="round" strokeWidth="2" style={{ animationDelay: '0.4s' }} />
      </svg>
    </div>
  )
}

export default Jellyfish