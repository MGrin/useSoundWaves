import React, { useState, useCallback } from 'react'

import useSoundWaves from 'use-sound-waves'

type ButtonsProps = {
  onClick: (freq: number) => void
}
const Buttons = ({ onClick }: ButtonsProps) => {
  return (
    <>
      <button onClick={() => onClick(30)}>30</button>
      <button onClick={() => onClick(35)}>35</button>
      <button onClick={() => onClick(40)}>40</button>
      <button onClick={() => onClick(45)}>45</button>
      <button onClick={() => onClick(50)}>50</button>
      <button onClick={() => onClick(55)}>55</button>
      <button onClick={() => onClick(60)}>60</button>
    </>
  )
}
const App = () => {
  const [randomFreq, setRandomFreq] = useState(20)

  const player1 = useSoundWaves()
  const player2 = useSoundWaves()
  const player3 = useSoundWaves()

  const playFrequency1 = useCallback(
    (freq) => {
      player1.play({ frequency: Number(freq), type: 'sine' })
    },
    [player1]
  )
  const playFrequency2 = useCallback(
    (freq) => {
      player2.play({ frequency: Number(freq) })
    },
    [player2]
  )
  const playFrequency3 = useCallback(() => {
    player3.play({ frequency: Number(randomFreq) })
  }, [player3, randomFreq])

  const changeRandomFreq = useCallback((e) => {
    setRandomFreq(e.target.value)
  }, [])

  return (
    <>
      <h1>useSoundWaves</h1>
      <Buttons onClick={playFrequency1} />
      <p>{JSON.stringify(player1.currentSound)}</p>
      <button onClick={player1.stop} disabled={!player1.isPlaying}>
        Stop
      </button>
      <hr />
      <Buttons onClick={playFrequency2} />
      <p>{JSON.stringify(player2.currentSound)}</p>
      <button onClick={player2.stop} disabled={!player2.isPlaying}>
        Stop
      </button>
      <hr />
      <input
        style={{ width: 600 }}
        type='range'
        min={20}
        max={20000}
        value={randomFreq}
        onChange={changeRandomFreq}
      />
      <span>{randomFreq}</span>
      <br />
      <button onClick={player3.isPlaying ? player3.stop : playFrequency3}>
        {player3.isPlaying ? 'Stop' : 'Play'}
      </button>
    </>
  )
}
export default App
