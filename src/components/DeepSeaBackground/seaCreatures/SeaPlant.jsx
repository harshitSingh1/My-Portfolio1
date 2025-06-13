import React from 'react'

const SeaPlant = ({ left, right, width, height, paths, animationDelayStep = 0.3 }) => {
  return (
    <div className={`absolute bottom-0 w-${width} h-${height}`} style={{left, right}}>
      <svg className="w-full h-full" fill="none" viewBox={`0 0 ${parseInt(width)*4} ${parseInt(height)*4}`} xmlns="http://www.w3.org/2000/svg">
        {paths.map((p, index) => (
          <path 
            key={index}
            className="animate-fin-flap" 
            d={p.d} 
            stroke={p.stroke} 
            strokeLinejoin="round" 
            strokeWidth={p.strokeWidth}
            style={ p.delay ? { animationDelay: `${index * animationDelayStep}s` } : {}}
          />
        ))}
      </svg>
    </div>
  )
}

export default SeaPlant