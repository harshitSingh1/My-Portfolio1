import React from 'react'

const DeepSeaShrimp = ({ className = "absolute bottom-1/4 right-1/3 w-28 h-28", animationClass = "animate-float-up-down" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 6px #ff99cc)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="32" cy="32" fill="#ff99cc" rx="28" ry="14" />
        <path d="M10 32 L0 20 M15 32 L5 18 M20 32 L10 22 M44 32 L54 20 M49 32 L59 18 M54 32 L64 22" stroke="#ff99cc" strokeLinecap="round" strokeWidth="3" />
        <circle cx="20" cy="20" fill="#fff" r="6" />
        <circle cx="44" cy="20" fill="#fff" r="6" />
        <circle cx="20" cy="20" fill="#000" r="3" />
        <circle cx="44" cy="20" fill="#000" r="3" />
      </svg>
    </div>
  )
}

export default DeepSeaShrimp