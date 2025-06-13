import React from 'react'

const BottomCrab = ({ className = "absolute bottom-6 right-1/5 w-28 h-20", animationClass = "animate-swim-left-right" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #cc3300)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 112 80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="56" cy="40" fill="#cc3300" rx="50" ry="30" />
        <path d="M10 40 Q0 20 20 20" stroke="#cc3300" strokeLinecap="round" strokeWidth="6" />
        <path d="M102 40 Q112 20 92 20" stroke="#cc3300" strokeLinecap="round" strokeWidth="6" />
        <circle cx="40" cy="30" fill="#fff" r="8" />
        <circle cx="72" cy="30" fill="#fff" r="8" />
        <circle cx="40" cy="30" fill="#000" r="4" />
        <circle cx="72" cy="30" fill="#000" r="4" />
      </svg>
    </div>
  )
}

export default BottomCrab