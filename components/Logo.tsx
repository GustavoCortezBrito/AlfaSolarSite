'use client'

import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'

export default function Logo() {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -5, 5, 0]
      }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg border border-amber-200/50">
        <Sun className="w-7 h-7 text-white" />
      </div>
      
      {/* Subtle glow effect */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl -z-10 blur-sm"
      />
    </motion.div>
  )
}