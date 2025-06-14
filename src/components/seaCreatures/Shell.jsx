import React from 'react'

const Shell = ({ bottom, left, right, width, height, type }) => {
  let paths
  if (type === 1) {
    paths = (
      <>
        <path d="M32 4 C12 4, 4 32, 32 60 C60 32, 52 4, 32 4 Z" fill="#d2b48c" stroke="#a67c00" strokeWidth="2"/>
        <path d="M32 10 L32 54" stroke="#a67c00" strokeWidth="2"/>
        <path d="M20 20 L44 44" stroke="#a67c00" strokeWidth="2"/>
        <path d="M44 20 L20 44" stroke="#a67c00" strokeWidth="2"/>
      </>
    )
  } else {
     paths = (
      <>
        <circle cx="32" cy="32" fill="#deb887" stroke="#a67c00" strokeWidth="2" r="28"/>
        <path d="M32 4 L32 60" stroke="#a67c00" strokeWidth="2"/>
        <path d="M12 20 L52 44" stroke="#a67c00" strokeWidth="2"/>
        <path d="M52 20 L12 44" stroke="#a67c00" strokeWidth="2"/>
      </>
     )
  }
  return (
    <div className={`absolute w-${width} h-${height}`} style={{ bottom, left, right }}>
      <svg className="w-full h-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
        {paths}
      </svg>
    </div>
  )
}

export default Shell