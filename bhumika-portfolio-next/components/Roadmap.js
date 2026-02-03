import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const colors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-emerald-500 to-green-500'
]

const glowColors = [
  'shadow-blue-500/50',
  'shadow-purple-500/50',
  'shadow-green-500/50',
  'shadow-orange-500/50',
  'shadow-indigo-500/50',
  'shadow-emerald-500/50'
]

function MilestoneBubble({ item, index, position, isSelected, onClick, color, glowColor }) {
  return (
    <motion.div
      className="absolute cursor-pointer z-20"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 120
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.85 }}
      onClick={() => onClick(index)}
    >
      {/* Back solid duplicate + blurred bubble for depth (gives the double-overlay look) */}
      <div
        className="absolute rounded-full"
        style={{ width: '90px', height: '90px', left: '-45px', top: '-45px', background: 'rgba(6, 182, 212, 0.08)', transform: 'translate(8px, 8px) scale(1.02)' }}
      />

      <div
        className="absolute rounded-full"
        style={{ width: '96px', height: '96px', left: '-48px', top: '-48px', background: 'rgba(6, 182, 212, 0.06)', filter: 'blur(12px)', transform: 'translate(4px, 4px)'}}
      />

      {/* Main bubble container with double glow (bigger) */}
      <motion.div
        className="relative w-24 h-24"
        animate={{
          filter: isSelected
            ? 'drop-shadow(0 0 28px rgba(6, 182, 212, 0.85)) drop-shadow(0 0 48px rgba(6, 182, 212, 0.45))'
            : 'drop-shadow(0 0 18px rgba(6, 182, 212, 0.65))'
        }}
        transition={{ duration: 0.32 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400"
          animate={{
            scale: isSelected ? 1.18 : 1,
            opacity: isSelected ? 1 : 0.6
          }}
          transition={{ duration: 0.28 }}
        />

        {/* Main gradient bubble */}
        <motion.div
          className={`w-full h-full rounded-full bg-gradient-to-br ${color} shadow-2xl overflow-hidden relative flex items-center justify-center`}
          animate={{
            scale: isSelected ? 1.08 : 1,
            boxShadow: isSelected
              ? '0 0 46px rgba(168,85,247,0.9), inset 0 0 36px rgba(255,255,255,0.18)'
              : '0 0 30px rgba(168,85,247,0.6), inset 0 0 18px rgba(255,255,255,0.12)'
          }}
          transition={{ duration: 0.28 }}
        >
          {/* Inner shine effect */}
          <motion.div
            className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-md"
            animate={{ opacity: isSelected ? 1 : 0.7 }}
            transition={{ duration: 0.28 }}
          />

          {/* Center highlight */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full blur-sm" />

          {/* Number with glow */}
          <motion.span
            className="relative z-10 font-bold text-3xl text-white drop-shadow-lg"
            animate={{
              scale: isSelected ? 1.12 : 1,
              textShadow: isSelected
                ? '0 0 12px rgba(168, 85, 247, 0.9)'
                : '0 0 6px rgba(168, 85, 247, 0.45)'
            }}
            transition={{ duration: 0.28 }}
          >
            {index + 1}
          </motion.span>

          {/* Pulsing border ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.85, 0, 0.85]
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Rotating subtle ring */}
          <motion.div
            className="absolute inset-3 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Minimal tooltip on select (hidden by default) */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-300 whitespace-nowrap border border-gray-800 pointer-events-none font-medium shadow"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: isSelected ? 1 : 0, y: isSelected ? 0 : -8 }}
        transition={{ duration: 0.22 }}
      >
        {isSelected ? item.role || item.category : ''}
      </motion.div>
    </motion.div>
  )
}

function DetailPanel({ item, isOpen, onClose, index }) {
  if (!isOpen || !item) return null

  const bgColor = colors[index % colors.length]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-gray-700`}
          initial={{ y: 500, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 500, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${bgColor} p-8 relative overflow-hidden`}>
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16 blur-3xl"></div>
            </motion.div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {item.role || item.category}
                  </h2>
                  {(item.company || item.duration) && (
                    <p className="text-white/80 text-lg">
                      {item.company && item.company !== 'Virtual Work Simulations' && `${item.company} • `}
                      {item.duration && item.duration !== '' && item.duration}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(85vh-200px)]">
            <div className="space-y-6 text-white">
              {/* Companies for virtual simulations */}
              {item.companies && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Partner Companies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {item.companies.map((company, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="px-4 py-3 bg-gray-800/50 backdrop-blur-sm text-center rounded-lg border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                      >
                        <p className="font-semibold text-sm">{company}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Achievements */}
              {item.bullets && item.bullets.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-start gap-4 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{bullet}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Roadmap({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [waveOffset, setWaveOffset] = useState(0)

  // Animate wave effect
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset(prev => (prev + 2) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  // Generate roller coaster path points with 3D-like curves
  const generatePositions = (count) => {
    const positions = []
    for (let i = 0; i < count; i++) {
      const progress = i / (count - 1)
      const x = 10 + progress * 80
      const waveHeight = Math.sin(progress * Math.PI * 3 + waveOffset * Math.PI / 180) * 15
      const yBase = 50
      const y = yBase + waveHeight
      positions.push({ x, y, progress })
    }
    return positions
  }

  const positions = generatePositions(items.length)

  // Generate SVG path for roller coaster
  const generatePath = () => {
    if (positions.length === 0) return ''

    let path = `M ${positions[0].x}% ${positions[0].y}%`

    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1]
      const curr = positions[i]
      const controlX = (prev.x + curr.x) / 2
      const controlY = (prev.y + curr.y) / 2 + Math.sin(curr.progress * Math.PI) * 8

      path += ` Q ${controlX}% ${controlY}% ${curr.x}% ${curr.y}%`
    }

    return path
  }

  // Generate simplified path for purple road
  const generatePurplePath = () => {
    if (positions.length === 0) return ''
    
    let path = `M ${positions[0].x}% ${positions[0].y}%`
    
    for (let i = 1; i < positions.length; i++) {
      const curr = positions[i]
      path += ` L ${curr.x}% ${curr.y}%`
    }
    
    return path
  }

  return (
    <div className="roadmap container mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="relative w-full bg-gradient-to-b from-gray-900/50 to-transparent rounded-3xl overflow-hidden border border-gray-800">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.06) 0%, transparent 45%), radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 45%), linear-gradient(180deg,#05060a 0%, #071228 100%)',
              backgroundSize: '200% 200%'
            }}
          />

          {/* subtle textured vignette over roadmap to match design */}
          <div
            aria-hidden="true"
            className="roadmap-texture pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: `radial-gradient(60% 60% at 50% 35%, rgba(255,255,255,0.02), transparent 40%),
                                radial-gradient(40% 40% at 20% 80%, rgba(255,255,255,0.01), transparent 30%),
                                repeating-linear-gradient(45deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, rgba(255,255,255,0.0) 6px)`,
              mixBlendMode: 'overlay',
              opacity: 0.55,
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 100%)'
            }}
          />

        </div>

        {/* SVG Container */}
        <svg
          width="100%"
          height="400"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          className="relative z-10 w-full"
        >
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="purpleRoadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
              <stop offset="40%" stopColor="#7c3aed" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="purpleGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Roller coaster track */}
          <motion.path
            d={generatePath()}
            stroke="url(#trackGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            opacity="0.9"
          />

          {/* Purple Road Path - Main (brighter, more vibrant) */}
          <motion.path
            d={generatePurplePath()}
            stroke="url(#purpleRoadGradient)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#purpleGlow)"
            opacity="1"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />

          {/* Purple Road Glow - Outer (enhanced vibrant glow) */}
          <motion.path
            d={generatePurplePath()}
            stroke="url(#purpleRoadGradient)"
            strokeWidth="48"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.18"
            filter="url(#purpleGlow)"
          />

          {/* Faint parallel support track (offset slightly) */}
          <motion.path
            d={generatePurplePath()}
            stroke="#22d3ee"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.25"
            transform="translate(0,6)"
          />

          {/* Thin moving highlight along the road (bright) */}
          <motion.path
            d={generatePurplePath()}
            stroke="url(#purpleRoadGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="1"
            strokeDasharray="8 14"
            style={{ pointerEvents: 'none', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.6))' }}
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: -1000 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Very subtle dashed outer ring */}
          <motion.path
            d={generatePurplePath()}
            stroke="#06b6d4"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.04"
            strokeDasharray="2 24"
            transform="translate(0,28)"
            style={{ filter: 'blur(0.5px)' }}
          />

          {/* Support rails */}
          <motion.path
            d={generatePath()}
            stroke="url(#trackGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
            strokeDasharray="20,10"
          />
        </svg>

        {/* Milestones overlay */}
        <div className="absolute inset-0 z-20">
          {items.map((item, index) => (
            <MilestoneBubble
              key={index}
              item={item}
              index={index}
              position={positions[index]}
              isSelected={selectedIndex === index}
              onClick={setSelectedIndex}
              color={colors[index % colors.length]}
              glowColor={glowColors[index % glowColors.length]}
            />
          ))}
        </div>

        {/* CTA Text */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-gray-400 text-sm z-10">
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click on any bubble to explore 🚀
          </motion.p>
        </div>
      </div>

      {/* Detail Panel */}
      <DetailPanel
        item={selectedIndex !== null ? items[selectedIndex] : null}
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        index={selectedIndex || 0}
      />
    </div>
  )
}
