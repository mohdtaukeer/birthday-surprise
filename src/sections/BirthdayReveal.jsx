
import { motion } from 'framer-motion'
import { Sparkles, Gift, Star } from 'lucide-react'

function BirthdayReveal() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center"
    >

      {/* Birthday Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <Sparkles
          size={30}
          className="mx-auto mb-6 text-[#D6B67D]"
        />

        <p className="text-[10px] tracking-[0.4em] text-[#D6B67D]">
          TODAY THE WORLD CELEBRATES YOU
        </p>

        <h1 className="serif mt-5 text-5xl leading-tight sm:text-7xl">
          Happy Birthday
          <br />
          <span className="italic text-[#D6B67D]">
            Shana!
          </span>
        </h1>
      </motion.div>

      {/* Shana's Photo */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative mt-12 w-full max-w-[280px] rounded-t-[140px] rounded-b-2xl border border-[#D6B67D]/50 bg-gradient-to-b from-[#D6B67D]/20 to-[#65465F]/20 p-2 shadow-[0_0_60px_rgba(214,182,125,0.15)]"
      >
        <img
          src="/images/S12.jpeg"
          alt="Birthday girl Shana"
          className="h-[380px] w-full rounded-t-[135px] rounded-b-xl object-cover object-top"
        />

        <div className="absolute -right-3 -top-3 rounded-full border border-[#D6B67D]/50 bg-[#242033] p-3">
          <Star
            size={19}
            fill="#D6B67D"
            color="#D6B67D"
          />
        </div>
      </motion.div>

      {/* Cousin Birthday Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-8 max-w-sm"
      >
        <Gift
          size={23}
          className="mx-auto mb-4 text-[#D6B67D]"
        />

        <p className="serif text-2xl italic leading-relaxed text-[#E6D4B8]">
          "Life is more beautiful with a cousin sister like you.
          Keep smiling, keep shining and keep being amazing!"
        </p>

        <p className="mt-6 text-[10px] tracking-[0.25em] text-[#AFA9BB]">
          LOTS OF HAPPINESS, LAUGHTER & BLESSINGS
        </p>
      </motion.div>

    </motion.section>
  )
}

export default BirthdayReveal
