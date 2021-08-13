import React, { useCallback, useEffect } from 'react'

import useSoundWaves from 'use-sound-waves'

type KeyProps = {
  name: string
  frequency: number
  keyboardKey: string
  secondary?: boolean
}

const Key = ({ frequency, secondary, keyboardKey }: KeyProps) => {
  const { isPlaying, play, stop } = useSoundWaves()

  const onMouseDown = useCallback(() => {
    play({ frequency })
  }, [play, frequency])

  const onMouseUp = useCallback(() => {
    stop()
  }, [stop])

  useEffect(() => {
    const onKeyDown = (e: Event) => {
      if ((e as KeyboardEvent).key === keyboardKey) {
        onMouseDown()
      }
    }

    const onKeyUp = (e: Event) => {
      if ((e as KeyboardEvent).key === keyboardKey) {
        onMouseUp()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
    }
  }, [onMouseDown, onMouseUp, keyboardKey])

  return (
    <div
      className={`key ${isPlaying ? 'active' : ''} ${
        secondary ? 'secondary' : ''
      }`}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <span className='button'>{keyboardKey}</span>
    </div>
  )
}

const notes = [
  {
    name: 'A4',
    frequency: 440,
    secondary: false,
    key: 'a'
  },
  {
    name: 'A4A♯4/B♭4',
    frequency: 466.1638,
    secondary: true,
    key: 'w'
  },
  {
    name: 'B4',
    frequency: 493.8833,
    secondary: false,
    key: 's'
  },
  {
    name: 'C5',
    frequency: 523.2511,
    secondary: false,
    key: 'd'
  },
  {
    name: 'C♯5/D♭5',
    frequency: 554.3653,
    secondary: true,
    key: 'e'
  },
  {
    name: 'D5',
    frequency: 587.3295,
    secondary: false,
    key: 'f'
  },
  {
    name: 'D♯5/E♭5',
    frequency: 622.254,
    secondary: true,
    key: 'r'
  },
  {
    name: 'E5',
    frequency: 659.2551,
    secondary: false,
    key: 'g'
  },
  {
    name: 'F5',
    frequency: 698.4565,
    secondary: false,
    key: 'h'
  }
]

const App = () => {
  return (
    <div className='app'>
      <div className='keyboard'>
        {notes.map((note) => (
          <Key {...note} keyboardKey={note.key} key={note.key} />
        ))}
      </div>
    </div>
  )
}
export default App
