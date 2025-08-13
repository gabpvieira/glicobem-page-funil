
export class SoundManager {
  private static instance: SoundManager;
  private audioContext: AudioContext | null = null;
  private sounds: Map<string, AudioBuffer> = new Map();
  private volume: number = 0.4; // Reduced to 40% for subtlety
  private enabled: boolean = true;

  private constructor() {
    this.initAudioContext();
  }

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  private async initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      await this.loadSounds();
    } catch (error) {
      console.warn('Audio not supported:', error);
    }
  }

  private async loadSounds() {
    const soundFiles = {
      welcome: this.generateTone(440, 0.3, 'sine'), // Soft harmonic tone
      click: this.generateTone(800, 0.2, 'sine'), // Light minimalist click
      transition: this.generateTone([300, 400], 0.3, 'sine'), // Gentle swoosh
      progress: this.generateTone(600, 0.2, 'sine'), // Subtle ping
      success: this.generateTone([523, 659], 0.4, 'sine') // Gentle completion chord
    };

    for (const [name, audioBuffer] of Object.entries(soundFiles)) {
      this.sounds.set(name, audioBuffer);
    }
  }

  private generateTone(frequency: number | number[], duration: number, type: OscillatorType): AudioBuffer {
    if (!this.audioContext) throw new Error('AudioContext not available');

    const sampleRate = this.audioContext.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    const frequencies = Array.isArray(frequency) ? frequency : [frequency];
    
    for (let i = 0; i < length; i++) {
      let sample = 0;
      frequencies.forEach((freq) => {
        const time = i / sampleRate;
        // Smoother envelope for subtlety
        const envelope = Math.exp(-time * 2) * (1 - Math.pow(time / duration, 2));
        sample += Math.sin(2 * Math.PI * freq * time) * envelope / frequencies.length;
      });
      data[i] = sample * 0.15; // Very soft volume
    }

    return buffer;
  }

  async playSound(soundName: string) {
    if (!this.enabled || !this.audioContext || !this.sounds.has(soundName)) {
      return;
    }

    try {
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = this.sounds.get(soundName)!;
      gainNode.gain.value = this.volume;
      
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      source.start();
    } catch (error) {
      console.warn('Error playing sound:', error);
    }
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}

export const soundManager = SoundManager.getInstance();
