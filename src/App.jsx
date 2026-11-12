
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import StarBackground from './components/StarBackground'
import Welcome from './sections/Welcome'
import BirthdayReveal from './sections/BirthdayReveal'
import Memories from './sections/Memories'
import BirthdayLetter from './sections/BirthdayLetter'
import FinalSurprise from './sections/FinalSurprise'
import MusicControl from './components/MusicControl'

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101421] text-[#F6EBDD]">

      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#34283d_0%,#171b2b_45%,#101421_100%)]" />

      <StarBackground />

      <AnimatePresence mode="wait">
        {!opened ? (
          <Welcome
            key="welcome"
            onOpen={() => setOpened(true)}
          />
        ) : (
          <div key="birthday-experience">
            <BirthdayReveal />
            <Memories />
            <BirthdayLetter />
            <FinalSurprise />
            <MusicControl />
          </div>
        )}
      </AnimatePresence>

    </main>
  )
}

export default App
