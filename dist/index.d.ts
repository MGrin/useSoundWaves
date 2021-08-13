declare type SoundParams = {
    frequency: number;
    type?: OscillatorType;
};
declare type UseSoundWavesResult = {
    isPlaying: boolean;
    currentSound?: number;
    play: (params: SoundParams) => void;
    stop: () => void;
    oscillator?: OscillatorNode;
    error?: Error;
};
declare const useSoundWaves: () => UseSoundWavesResult;
export default useSoundWaves;
