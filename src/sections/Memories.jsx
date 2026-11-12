
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const photos = [
  {
    src: '/images/S1.jpeg',
    caption: 'Simply Beautiful',
    rotate: -3,
    position: 'center 50%',
  },
  {
    src: '/images/S2.jpeg',
    caption: 'A Beautiful Smile',
    rotate: 3,
    position: 'center 5%',
  },
  {
    src: '/images/S3.jpeg',
    caption: 'Little Moments',
    rotate: -2,
    position: 'center 10%',
  },
  {
    src: '/images/S5.jpeg',
    caption: 'Pure Elegance',
    rotate: 2,
    position: 'center 40%',
  },
  {
    src: '/images/S6.jpeg',
    caption: 'Forever Special',
    rotate: -3,
    position: 'center 5%',
  },
  {
    src: '/images/S7.jpeg',
    caption: 'Golden Memories',
    rotate: 3,
    position: 'center 50%',
  },
  {
    src: '/images/S8.jpeg',
    caption: 'Just Being You',
    rotate: -2,
    position: 'center 50%',
  },
  {
    src: '/images/S9.jpeg',
    caption: 'One of a Kind',
    rotate: 2,
    position: 'center 50%',
  },
  {
  src: '/images/S11.jpeg',
  caption: 'Another Beautiful Memory',
  rotate: -2,
  position: 'center 5%',
},
]

function Memories() {
  return (
    <section className="relative z-10 w-full px-5 py-24">

      <div className="mx-auto w-full max-w-5xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 flex w-full flex-col items-center text-center"
        >
          <Sparkles
            size={26}
            className="mb-6 text-[#D6B67D]"
          />

          <p className="text-center text-[10px] tracking-[0.4em] text-[#D6B67D]">
            A COLLECTION OF BEAUTIFUL MOMENTS
          </p>

          <h2 className="serif mt-6 text-center text-5xl leading-tight sm:text-7xl">
            Little Pieces of
            <br />
            <span className="italic text-[#D6B67D]">
              Happiness
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-sm text-center text-sm leading-7 text-[#C5C1CE]">
            Every picture tells a story.
            Here are a few moments worth celebrating.
          </p>
        </motion.div>

        {/* PHOTO GALLERY */}
        <div className="mx-auto grid w-full max-w-4xl grid-cols-2 items-start gap-x-5 gap-y-12 sm:grid-cols-3 sm:gap-10">

          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{
                opacity: 0,
                y: 35,
                rotate: photo.rotate,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.1,
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="w-full overflow-hidden rounded-md border border-[#D6B67D]/40 bg-[#F3E9D8] p-2 pb-4 shadow-xl"
            >

              {/* IMAGE FRAME */}
              <div className="h-[250px] w-full overflow-hidden sm:h-[320px]">
                <img
                  src={photo.src}
                  alt={`Shana memory ${index + 1}`}
                  loading="lazy"
                  style={{
                    objectPosition: photo.position,
                  }}
                  className="block h-full w-full object-cover"
                />
              </div>

              {/* PHOTO CAPTION */}
              <p className="serif mt-3 text-center text-base italic text-[#493B39] sm:text-lg">
                {photo.caption}
              </p>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM MESSAGE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="serif mt-20 text-center text-2xl italic text-[#D6B67D]"
        >
          Every memory is a reason to smile.
        </motion.p>

      </div>
    </section>
  )
}

export default Memories
