import React, { useState, useEffect, useRef, useCallback } from 'react'

const fishColors = ["#fbbf24", "#f87171", "#60a5fa", "#34d399", "#f472b6", "#a78bfa", "#facc15", "#84cc16", "#22d3ee", "#f97316"]
const sprinkleColors = ["#f87171", "#fbbf24", "#60a5fa", "#34d399", "#f472b6", "#a78bfa", "#facc15", "#22d3ee", "#fb7185"]

const SmallFish = React.memo(({ fishData }) => {
  const { x, y, direction, color } = fishData
  
  return (
    <svg
      viewBox="0 0 24 12"
      width="28"
      height="14"
      className="small-fish-interactive"
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: `scaleX(${direction})`,
        willChange: 'transform',
        filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))',
      }}
    >
      <ellipse cx="12" cy="6" rx="10" ry="5" fill={color} />
      <polygon points="0,6 6,0 6,12" fill={color} style={{ filter: "brightness(0.8)" }} />
      <circle cx="18" cy="6" r="1.5" fill="#000" />
    </svg>
  )
})

const FoodPellet = React.memo(({ pelletData }) => (
  <div
    className="food-pellet-interactive"
    style={{
      left: `${pelletData.x}px`,
      top: `${pelletData.y}px`,
      width: '6px',
      height: '6px',
      background: pelletData.color,
      borderRadius: '50%',
      position: 'fixed',
      filter: 'drop-shadow(0 0 2px currentColor)',
      zIndex: 50,
      pointerEvents: 'none'
    }}
  />
))

const SmallFishSwarm = () => {
  const [fishes, setFishes] = useState([])
  const [foodPellets, setFoodPellets] = useState([])
  const [groupPosition, setGroupPosition] = useState({ x: 0, y: 0 })
  const cursorPosRef = useRef({ x: 0, y: 0 })
  const lastFoodTimeRef = useRef(0)
  const animationFrameId = useRef(null)
  const foodPelletsRef = useRef([])

  // Initialize fish swarm
  useEffect(() => {
    setGroupPosition({ 
      x: window.innerWidth / 2 - 180, 
      y: window.innerHeight / 2 + 80 
    })

    const initialFishes = Array.from({ length: 25 }, (_, i) => ({
      id: `fish-${Date.now()}-${i}`,
      x: Math.random() * 300,
      y: Math.random() * 150,
      z: Math.random() * 100 - 50,
      speed: 0.8 + Math.random() * 0.7,
      direction: Math.random() > 0.5 ? 1 : -1,
      targetFoodId: null,
      eating: false,
      timeToEat: 0,
      angleOffset: Math.random() * Math.PI * 2,
      orbitRadius: 70 + Math.random() * 50,
      currentAngle: Math.random() * Math.PI * 2,
      color: fishColors[i % fishColors.length],
      timeToChangeTarget: Math.random() * 2000 + 1000,
      lastTargetCheck: Date.now(),
    }))
    setFishes(initialFishes)
  }, [])

  // Create food pellets at cursor position
  const createFoodPellet = useCallback((x, y) => {
    const newPellet = {
      id: `pellet-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      x,
      y,
      eaten: false,
      fallDistance: 0,
      fallSpeed: 1.3 + Math.random() * 0.15,
      color: sprinkleColors[Math.floor(Math.random() * sprinkleColors.length)],
      createdAt: Date.now(),
      lifespan: 3000 + Math.random() * 1000
    }
    setFoodPellets(prev => [...prev, newPellet])
    return newPellet
  }, [])

  // Track cursor movement and create food
  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY }
      const now = Date.now()
      if (now - lastFoodTimeRef.current > 100) {
        createFoodPellet(e.clientX, e.clientY)
        lastFoodTimeRef.current = now
      }
    }

    const handleClick = (e) => {
      createFoodPellet(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
    }
  }, [createFoodPellet])

  // Animation loop
useEffect(() => {
    const distance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
    const animate = () => {
      const now = Date.now()
      setFoodPellets(prevPellets => {
        const updated = prevPellets
          .map(p => ({
            ...p,
            y: p.y + p.fallSpeed,
            fallDistance: p.fallDistance + p.fallSpeed
          }))
          .filter(p => {
            const isExpired = (now - p.createdAt) > p.lifespan
            return p.fallDistance < 500 && !p.eaten && !isExpired
          })
        
        foodPelletsRef.current = updated
        return updated
      })

      // Update fish positions
      setFishes(currentFishes => {
        return currentFishes.map(fish => {
          let newFish = { ...fish }
          const now = Date.now()

          if (newFish.eating) {
            if (now > newFish.timeToEat) newFish.eating = false
            return newFish
          }

          // Food targeting logic
          if (now > newFish.lastTargetCheck + newFish.timeToChangeTarget) {
            let nearestFood = null
            let minDist = Infinity
            const fishX = groupPosition.x + newFish.x
            const fishY = groupPosition.y + newFish.y

            foodPelletsRef.current.forEach(food => {
              if (food.eaten) return
              const dist = distance(fishX, fishY, food.x, food.y)
              if (dist < minDist && dist < 200) {
                minDist = dist
                nearestFood = food
              }
            })

            newFish.targetFoodId = nearestFood?.id || null
            newFish.lastTargetCheck = now
            newFish.timeToChangeTarget = Math.random() * 1500 + 800
          }

          // Movement logic
          if (newFish.targetFoodId) {
            const targetFood = foodPelletsRef.current.find(f => f.id === newFish.targetFoodId)
            if (targetFood) {
              const fishX = groupPosition.x + newFish.x
              const fishY = groupPosition.y + newFish.y
              const dx = targetFood.x - fishX
              const dy = targetFood.y - fishY
              const angle = Math.atan2(dy, dx)
              const speed = newFish.speed * 1.8

              newFish.x += Math.cos(angle) * speed
              newFish.y += Math.sin(angle) * speed
              newFish.direction = dx >= 0 ? 1 : -1

              if (distance(fishX, fishY, targetFood.x, targetFood.y) < 10) {
                newFish.eating = true
                newFish.timeToEat = now + 600 + Math.random() * 400
                setFoodPellets(prev => prev.map(p => 
                  p.id === targetFood.id ? { ...p, eaten: true } : p
                ))
              }
            } else {
              newFish.targetFoodId = null
            }
          } else {
            // Orbiting behavior
            newFish.currentAngle += (newFish.speed * 0.02) / (newFish.orbitRadius / 80)
            const centerX = 180
            const centerY = 90
            const targetX = centerX + newFish.orbitRadius * Math.cos(newFish.currentAngle + newFish.angleOffset)
            const targetY = centerY + newFish.orbitRadius * 0.8 * Math.sin(newFish.currentAngle + newFish.angleOffset)
            
            newFish.x += (targetX - newFish.x) * 0.05
            newFish.y += (targetY - newFish.y) * 0.05
            newFish.x = Math.max(0, Math.min(360 - 28, newFish.x))
            newFish.y = Math.max(0, Math.min(180 - 14, newFish.y))

            if (Math.cos(newFish.currentAngle + newFish.angleOffset) > 0.05) newFish.direction = 1
            if (Math.cos(newFish.currentAngle + newFish.angleOffset) < -0.05) newFish.direction = -1
          }

          return newFish
        })
      })

      // Update group position to follow cursor
      setGroupPosition(prev => {
        const targetX = cursorPosRef.current.x - 180
        const targetY = cursorPosRef.current.y + 80
        const ease = 0.08
        return {
          x: prev.x + (targetX - prev.x) * ease,
          y: prev.y + (targetY - prev.y) * ease
        }
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId.current)
  }, [])

  return (
    <>
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 45
      }}>
        {foodPellets.map(pellet => 
          !pellet.eaten && <FoodPellet key={pellet.id} pelletData={pellet} />
        )}
      </div>
      
      <div style={{
        position: 'fixed',
        left: `${groupPosition.x}px`,
        top: `${groupPosition.y}px`,
        width: '360px',
        height: '180px',
        pointerEvents: 'none',
        zIndex: 40,
      }}>
        {fishes.map(fish => <SmallFish key={fish.id} fishData={fish} />)}
      </div>
    </>
  )
}

export default SmallFishSwarm