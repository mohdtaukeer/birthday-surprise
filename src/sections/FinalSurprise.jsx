
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, PartyPopper, Gift, Star } from 'lucide-react'

function FinalSurprise() {
  const [celebrate, setCelebrate] = useState(false)

  const confetti = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    left: `${(i * 37) % 100}%`,
    delay: (i % 10) * 0.15,
    duration: 3 + (i % 4),
    rotate: i * 47,
  }))

  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">

      {/* Confetti Celebration */}
      <AnimatePresence>
        {celebrate && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {confetti.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 1,
                  y: -30,
                  x: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: [1, 1, 0],
                  y: '110vh',
                  x: [0, 40, -30, 20],
                  rotate: item.rotate + 360,
                }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                  ease: 'linear',
                }}
                style={{ left: item.left }}
                className="absolute top-0"
              >
                <Star
                  size={12 + (item.id % 3) * 5}
                  fill="#D6B67D"
                  color="#D6B67D"
                />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center"
      >

        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <PartyPopper
            size={45}
            className="mb-8 text-[#D6B67D]"
          />
        </motion.div>

        <p className="text-[10px] tracking-[0.4em] text-[#D6B67D]">
          ONE LAST THING...
        </p>

        <h2 className="serif mt-7 text-5xl leading-tight sm:text-7xl">
          Keep Shining,
          <br />
          <span className="italic text-[#D6B67D]">
            Shana!
          </span>
        </h2>

        <p className="mt-8 max-w-md text-sm leading-8 text-[#C5C1CE]">
          May every new day bring you something
          beautiful, every dream take you closer
          to success and every moment give you
          another reason to smile.
        </p>

        <div className="my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#D6B67D] to-transparent" />

        <Gift
          size={35}
          className="mb-6 text-[#D6B67D]"
        />

        <p className="serif max-w-md text-2xl italic leading-relaxed text-[#E6D4B8]">
          Here's to another year of laughter,
          adventures and unforgettable
          family memories!
        </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setCelebrate(true)}
          className="mt-12 flex items-center gap-3 rounded-full border border-[#D6B67D] bg-[#D6B67D]/10 px-9 py-4 text-xs tracking-[0.2em] text-[#F6EBDD] transition hover:bg-[#D6B67D] hover:text-[#101421]"
        >
          <Sparkles size={17} />
          LET'S CELEBRATE!
        </motion.button>

        {celebrate && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="serif mt-9 text-3xl italic text-[#D6B67D]"
          >
            Happy Birthday, Shana! 🎂
          </motion.p>
        )}

        <p className="mt-16 text-[10px] tracking-[0.3em] text-[#827D91]">
          A LITTLE SURPRISE · A LOT OF MEMORIES
        </p>

        <p className="serif mt-4 text-xl italic text-[#D6B67D]">
          From your cousin, with best wishes.
        </p>

      </motion.div>
    </section>
  )
}

export default FinalSurprise
