import React from 'react'

const GiantIsopod = ({ className = "absolute bottom-1/3 left-1/3 w-48 h-32", animationClass = "animate-swim-left-right" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #666666)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 128 80" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="40" fill="#666666" rx="60" ry="30" />
        <path d="M20 20 L108 20 M20 30 L108 30 M20 40 L108 40 M20 50 L108 50" stroke="#555555" strokeWidth="4" />
        <circle cx="100" cy="30" fill="#222222" r="10" />
        <circle cx="100" cy="30" fill="#000" r="5" />
        <path d="M10 40 L0 20 M20 40 L10 20 M30 40 L20 20 M40 40 L30 20 M50 40 L40 20 M60 40 L50 20 M68 40 L58 20 M78 40 L68 20 M88 40 L78 20 M98 40 L88 20 M108 40 L98 20" stroke="#555555" strokeLinecap="round" strokeWidth="3" />
      </svg>
    </div>
  )
}

export default GiantIsopod