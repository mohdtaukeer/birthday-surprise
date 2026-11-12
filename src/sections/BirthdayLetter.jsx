
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Sparkles, Heart, X } from 'lucide-react'

function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-5 py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex w-full max-w-xl flex-col items-center text-center"
      >
        <Sparkles className="mb-6 text-[#D6B67D]" size={27} />

        <p className="text-[10px] tracking-[0.4em] text-[#D6B67D]">
          A FEW WORDS FROM YOUR COUSIN
        </p>

        <h2 className="serif mt-6 text-5xl leading-tight sm:text-6xl">
          A Letter
          <br />
          <span className="italic text-[#D6B67D]">
            For Shana
          </span>
        </h2>

        <p className="mt-6 max-w-sm text-sm leading-7 text-[#C5C1CE]">
          Some wishes are too special to fit
          into an ordinary birthday message.
          So here's something just for you.
        </p>

        {/* Letter Card */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative mt-12 w-full max-w-sm rounded-xl border border-[#D6B67D]/50 bg-gradient-to-br from-[#332B3A] to-[#1D2030] p-8 shadow-[0_15px_60px_rgba(214,182,125,0.12)]"
        >
          <div className="flex flex-col items-center">
            <Mail size={42} className="text-[#D6B67D]" />

            <p className="serif mt-5 text-3xl italic text-[#F3E5CF]">
              Dear Shana,
            </p>

            <div className="my-5 h-px w-20 bg-[#D6B67D]/60" />

            <p className="text-sm leading-7 text-[#C5C1CE]">
              A little note to celebrate you
              and all the wonderful memories
              we share as family.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 rounded-full border border-[#D6B67D] px-8 py-3 text-xs tracking-[0.2em] text-[#F6EBDD] transition hover:bg-[#D6B67D] hover:text-[#101421]"
            >
              READ MY LETTER
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Open Letter Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-lg rounded-2xl border border-[#D6B67D]/50 bg-[#F3E9D8] p-7 text-[#493B39] shadow-2xl sm:p-10"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-5 top-5 rounded-full p-2 text-[#493B39] hover:bg-[#D6B67D]/30"
                aria-label="Close letter"
              >
                <X size={20} />
              </button>

              <Sparkles className="mb-6 text-[#A77B45]" size={25} />

              <h3 className="serif text-3xl italic sm:text-4xl">
                Dear Shana,
              </h3>

              <div className="my-6 h-px w-full bg-[#B58B50]/40" />

              <div className="serif space-y-5 text-lg leading-8">
                <p>
                  Wishing you the happiest birthday!
                </p>

                <p>
                  Having a cousin sister like you makes
                  family gatherings, celebrations
                  and everyday moments even more
                  memorable.
                </p>

                <p>
                  May your life always be filled
                  with happiness, good health,
                  success and countless reasons
                  to smile.
                </p>

                <p>
                  Keep being the amazing person
                  you are. Never stop dreaming,
                  laughing and enjoying every
                  little moment of life.
                </p>

                <p>
                  Here's to more fun, more memories
                  and many more beautiful family
                  moments together!
                </p>
              </div>

              <div className="mt-8 border-t border-[#B58B50]/40 pt-6">
                <p className="serif text-xl italic">
                  Lots of wishes and blessings,
                </p>

                <p className="serif mt-2 text-2xl font-semibold text-[#A77B45]">
                  Your Cousin 
                 (Aman)
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default BirthdayLetter
