
import { useRef, useState } from 'react'
import { Music, Pause, Play } from 'lucide-react'

function MusicControl() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState(false)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
      return
    }

    try {
      setError(false)
      await audioRef.current.play()
    } catch (err) {
      console.error('Audio error:', err)
      setError(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setError(true)}
      />

      <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-center gap-2">

        <button
          onClick={toggleMusic}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B67D] bg-[#242033] text-[#D6B67D] shadow-xl"
        >
          {playing ? <Pause size={22} /> : <Music size={22} />}
        </button>

        {error && (
          <p className="rounded bg-[#242033] px-3 py-2 text-xs text-white">
            Music file not loading!
          </p>
        )}

      </div>
    </>
  )
}

export default MusicControl
