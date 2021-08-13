import { useState, useEffect, useRef, useCallback } from 'react';

var audioCtx = window.AudioContext ? new window.AudioContext() : undefined;

var useSoundWaves = function useSoundWaves() {
  var _useState = useState(false),
      isPlaying = _useState[0],
      setIsPlaying = _useState[1];

  var _useState2 = useState(),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(),
      currentSound = _useState3[0],
      setCurrentSound = _useState3[1];

  useEffect(function () {
    if (!audioCtx) {
      setError(new Error('No AudioContext is available.'));
    }
  }, []);
  var oscillatorRef = useRef();
  var stop = useCallback(function () {
    setIsPlaying(false);
    setCurrentSound(undefined);

    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = undefined;
    }
  }, []);
  var play = useCallback(function (params) {
    if (!audioCtx) {
      return;
    }

    if (isPlaying) {
      stop();
    }

    oscillatorRef.current = audioCtx.createOscillator();
    oscillatorRef.current.type = params.type || 'sine';
    oscillatorRef.current.frequency.setValueAtTime(params.frequency, audioCtx.currentTime);
    oscillatorRef.current.connect(audioCtx.destination);
    oscillatorRef.current.start();
    setIsPlaying(true);
    setCurrentSound(params);
  }, [stop, isPlaying]);
  return {
    isPlaying: isPlaying,
    currentSound: currentSound,
    oscillator: oscillatorRef.current,
    play: play,
    stop: stop,
    error: error
  };
};

export default useSoundWaves;
//# sourceMappingURL=index.modern.js.map
