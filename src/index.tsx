import { useCallback, useEffect, useRef, useState } from 'react'

type SoundParams = {
  frequency: number
  type?: OscillatorType
}

type UseSoundWavesResult = {
  isPlaying: boolean
  currentSound?: number
  play: (params: SoundParams) => void
  stop: () => void
  oscillator?: OscillatorNode
  error?: Error
}

const audioCtx = window.AudioContext ? new window.AudioContext() : undefined

const useSoundWaves = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState<Error>()
  const [currentSound, setCurrentSound] = useState()

  useEffect(() => {
    if (!audioCtx) {
      setError(new Error('No AudioContext is available.'))
    }
  }, [])

  const oscillatorRef = useRef<OscillatorNode>()

  const stop = useCallback(() => {
    setIsPlaying(false)
    setCurrentSound(undefined)
    if (oscillatorRef.current) {
      oscillatorRef.current.stop()
      oscillatorRef.current = undefined
    }
  }, [])

  const play = useCallback(
    (params) => {
      if (!audioCtx) {
        return
      }
      if (isPlaying) {
        stop()
      }

      oscillatorRef.current = audioCtx.createOscillator()
      oscillatorRef.current.type = params.type || 'sine'
      oscillatorRef.current.frequency.setValueAtTime(
        params.frequency,
        audioCtx.currentTime
      )
      oscillatorRef.current.connect(audioCtx.destination)

      oscillatorRef.current.start()

      setIsPlaying(true)
      setCurrentSound(params)
    },
    [stop, isPlaying]
  )

  return {
    isPlaying,
    currentSound,
    oscillator: oscillatorRef.current,
    play,
    stop,
    error
  } as UseSoundWavesResult
}

export default useSoundWaves
