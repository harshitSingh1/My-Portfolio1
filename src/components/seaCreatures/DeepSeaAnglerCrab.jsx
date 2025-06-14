import React from 'react'

const DeepSeaAnglerCrab = ({ className = "absolute bottom-1/4 right-1/4 w-40 h-40", animationClass = "animate-float-up-down" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #cc6600)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="40" fill="#cc6600" rx="35" ry="25" />
        <path d="M10 40 Q0 20 20 20" stroke="#cc6600" strokeLinecap="round" strokeWidth="6" />
        <path d="M70 40 Q80 20 60 20" stroke="#cc6600" strokeLinecap="round" strokeWidth="6" />
        <circle cx="30" cy="30" fill="#fff" r="8" />
        <circle cx="50" cy="30" fill="#fff" r="8" />
        <circle cx="30" cy="30" fill="#000" r="4" />
        <circle cx="50" cy="30" fill="#000" r="4" />
      </svg>
    </div>
  )
}

export default DeepSeaAnglerCrab