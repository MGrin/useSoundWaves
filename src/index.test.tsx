import { renderHook, act } from '@testing-library/react-hooks'
import useSoundWaves from '.'

describe('useSoundWaves', () => {
  it('is truthy', () => {
    expect(typeof useSoundWaves).toBe('function')
  })

  it('returns valid object with an error in case of missing AudioContext', () => {
    const { result } = renderHook(() => useSoundWaves())
    expect(result.current.error).toBeTruthy()
    expect(result.current.error?.message).toBe('No AudioContext is available.')
    expect(result.current.currentSound).toBe(undefined)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.oscillator).toBe(undefined)

    act(() => {
      result.current.play({ frequency: 20 })
    })

    expect(result.current.isPlaying).toBe(false)
  })
})
