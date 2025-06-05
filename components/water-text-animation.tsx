"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface WaterTextAnimationProps {
  text: string
  className?: string
  color?: string
}

export function WaterTextAnimation({ text, className = "", color = "inherit" }: WaterTextAnimationProps) {
  const [hasMounted, setHasMounted] = useState(false)
  const letters = text.split("")

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={
            hasMounted
              ? {
                  opacity: 0,
                  y: 50,
                  scaleY: 0.3,
                  filter: "blur(4px)",
                }
              : {
                  opacity: 1,
                  y: 0,
                  scaleY: 1,
                  filter: "blur(0px)",
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scaleY: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            transformOrigin: "bottom",
            color: color,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}