"use client"

import { motion } from "framer-motion"

export function WaterRippleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600"></div>

      {/* Animated ripples */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-white/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            width: ["0px", "300px", "600px"],
            height: ["0px", "300px", "600px"],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Additional smaller ripples */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute rounded-full border border-white/30"
          style={{
            right: `${15 + i * 20}%`,
            bottom: `${20 + i * 15}%`,
          }}
          animate={{
            width: ["0px", "150px", "300px"],
            height: ["0px", "150px", "300px"],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 1.2 + 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
