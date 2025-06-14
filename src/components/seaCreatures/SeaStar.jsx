import React from 'react'

const SeaStar = ({ bottom, left, right, filterColor = '#ff6600', strokeColor = '#cc5200' }) => {
  return (
    <div className="absolute w-20 h-20" style={{ bottom, left, right, filter: `drop-shadow(0 0 6px ${filterColor})` }}>
      <svg className="w-full h-full" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <polygon fill={filterColor} points="32,4 39,24 60,24 42,38 48,58 32,46 16,58 22,38 4,24 25,24" stroke={strokeColor} strokeWidth="2" />
      </svg>
    </div>
  )
}

export default SeaStar