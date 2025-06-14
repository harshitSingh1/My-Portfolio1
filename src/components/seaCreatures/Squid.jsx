import React from 'react'

const Squid = ({ className = "absolute top-1/4 right-1/4 w-36 h-64", animationClass = "animate-float-up-down" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #a0e7ff)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 64 112" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="56" fill="#4a90e2" rx="28" ry="50" />
        <circle cx="20" cy="40" fill="#fff" r="8" />
        <circle cx="44" cy="40" fill="#fff" r="8" />
        <circle cx="20" cy="40" fill="#000" r="4" />
        <circle cx="44" cy="40" fill="#000" r="4" />
        <path className="animate-tail-wag" d="M10 100 Q20 120 30 100" stroke="#4a90e2" strokeLinecap="round" strokeWidth="6" />
        <path className="animate-tail-wag" d="M34 100 Q44 120 54 100" stroke="#4a90e2" strokeLinecap="round" strokeWidth="6" style={{ animationDelay: '0.3s' }}/>
      </svg>
    </div>
  )
}

export default Squid