
import { useMemo } from 'react'
import { motion } from 'framer-motion'

function StarBackground() {
  const stars = useMemo(() =>
    Array.from({ length: 75 }, (_, i) => ({
      id: i,
      left: `${(i * 47 + 13) % 100}%`,
      top: `${(i * 61 + 7) % 100}%`,
      size: (i % 3) + 1,
      duration: 2 + (i % 4),
      delay: (i % 7) * 0.4,
    })), []
  )

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#65465F]/20 blur-[100px]" />

      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#D6B67D]/10 blur-[100px]" />

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-[#F6EBDD]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: '0 0 10px #D6B67D',
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default StarBackground
