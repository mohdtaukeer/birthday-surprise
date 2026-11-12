
import { motion } from 'framer-motion'
import { Sparkles, Gift } from 'lucide-react'

function Welcome({ onOpen }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center"
    >
      <Sparkles className="mb-7 text-[#D6B67D]" size={25} />

      <p className="text-[10px] tracking-[0.4em] text-[#C7B9D7]">
        A SPECIAL DAY · A SPECIAL PERSON
      </p>

      <h1 className="serif mt-7 text-5xl leading-tight sm:text-7xl">
        A Little Surprise
        <br />
        <span className="italic text-[#D6B67D]">
          For Shana
        </span>
      </h1>

      <p className="mt-6 max-w-sm text-sm leading-7 text-[#C5C1CE]">
        To my wonderful cousin,
        here's a little surprise filled with
        laughter, memories and family moments.
      </p>

      {/* Correct Golden Envelope */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative mt-14 mb-10"
      >
        <div className="relative h-36 w-56 overflow-hidden rounded-lg border border-[#E8C98D]/60 bg-gradient-to-br from-[#B58B50] via-[#E0C28B] to-[#80603E] shadow-[0_15px_60px_rgba(214,182,125,0.25)]">

          {/* Envelope back / paper */}
          <div className="absolute left-4 right-4 top-[-20px] h-24 rounded-t-md bg-[#F6EBDD]/90" />

          {/* Envelope side folds */}
          <div
            className="absolute inset-0 z-10"
            style={{
              clipPath: 'polygon(0 0, 50% 58%, 100% 0, 100% 100%, 0 100%)',
              background: 'linear-gradient(135deg, #E7C991, #A77B45)',
            }}
          />

          {/* Lower envelope flap */}
          <div
            className="absolute inset-0 z-20"
            style={{
              clipPath: 'polygon(0 100%, 50% 43%, 100% 100%)',
              background: 'linear-gradient(135deg, #A77B45, #D6B67D)',
            }}
          />

          {/* Center seal */}
          <div className="absolute left-1/2 top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#80603E] bg-[#F4E3BD] shadow-lg">
            <Gift size={21} color="#80603E" />
          </div>
        </div>

        <p className="mt-4 text-[10px] tracking-[0.3em] text-[#D6B67D]">
          A LITTLE GIFT FOR YOU
        </p>
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={onOpen}
        className="rounded-full border border-[#D6B67D] px-10 py-4 text-xs tracking-[0.25em] text-[#F6EBDD] transition hover:bg-[#D6B67D] hover:text-[#101421]"
      >
        OPEN YOUR BIRTHDAY GIFT ✨
      </motion.button>

      <p className="mt-8 text-[10px] tracking-[0.2em] text-[#827D91]">
        FROM YOUR COUSIN, WITH BEST WISHES
      </p>
    </motion.section>
  )
}

export default Welcome
