import React from 'react'

const Clownfish = ({ className = "absolute top-1/2 right-1/4 w-40 h-24", animationClass = "animate-swim-left-right" }) => {
  return (
    <div className={`${className} ${animationClass}`} style={{ filter: 'drop-shadow(0 0 8px #ff7f50)' }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 120 72" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="36" fill="#ff7f50" rx="50" ry="30" />
        <rect fill="white" height="52" rx="5" width="15" x="20" y="10" />
        <rect fill="white" height="52" rx="5" width="15" x="50" y="10" />
        <rect fill="white" height="52" rx="5" width="15" x="80" y="10" />
        <circle cx="90" cy="30" fill="#000" r="6" />
        <circle cx="90" cy="30" fill="#fff" r="3" />
        <polygon fill="#ff7f50" points="10,36 0,20 0,52" />
      </svg>
    </div>
  )
}

export default Clownfish