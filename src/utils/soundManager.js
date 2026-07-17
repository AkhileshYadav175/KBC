// Dual-mode Sound Manager for KBC: Loads real MP3 assets with synthesis fallback
class KBCSoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    
    // HTML5 Audio elements for real KBC files
    this.audioAssets = {
      theme: "/intro.mp3",
      bachchanIntro: "https://raw.githubusercontent.com/aditya-obj/Quiz-App---Kaun-Banega-Crorepati/main/AmitabhBachchanIntro.mp3",
      background: "https://raw.githubusercontent.com/aditya-obj/Quiz-App---Kaun-Banega-Crorepati/main/Millionairekbc.mp3",
      lock: "/lock.mp3",
      correct: "/correct.mp3",
      wrong: "/wrong.mp3",
      clock: "/clock-sound.mp3",
      nextQuestion: "https://raw.githubusercontent.com/aditya-obj/Quiz-App---Kaun-Banega-Crorepati/main/Question.mp3",
      hooter: "/Hooter.mp3",
      alarm: "/IPhone “Alarm” Ringtone.m4a",
      nextQuestionIntro: "/WhatsApp Audio 2026-07-17 at 9.41.00 PM.mp3"
    };

    this.sounds = {};
    this.isInitialized = false;
    this.currentFreshLockAudio = null;
  }

  init() {
    if (this.isInitialized) return;
    
    // Initialize Web Audio API Context (for ticking/lifeline fallback)
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContextClass();
    } catch (e) {
      console.warn("Web Audio API context fallback not supported", e);
    }

    // Preload HTML5 Audio objects
    Object.keys(this.audioAssets).forEach((key) => {
      try {
        const audio = new Audio(this.audioAssets[key]);
        audio.preload = "auto";
        // Handle background, theme, and clock looping
        if (key === "background" || key === "theme" || key === "clock") {
          audio.loop = true;
        }
        this.sounds[key] = audio;
      } catch (e) {
        console.error(`Failed to preload audio asset: ${key}`, e);
      }
    });

    this.isInitialized = true;
  }

  setMute(state) {
    this.muted = state;
    if (state) {
      this.stopAll();
    } else {
      // Resume background loop if in game
      if (this.sounds.background && this.sounds.background.paused && this.ctx && this.ctx.state === "running") {
        this.startBackgroundTension();
      }
    }
  }

  stopAll() {
    Object.keys(this.sounds).forEach((key) => {
      try {
        const audio = this.sounds[key];
        audio.pause();
        audio.currentTime = 0;
      } catch(e) {}
    });
  }

  // --- Real Audio Playback Methods ---

  playTheme(loop = true) {
    this.init();
    if (this.muted) return;
    this.stopAll();
    
    const audio = this.sounds.theme;
    if (audio) {
      audio.loop = loop;
      audio.volume = 0.45;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        console.warn("Autoplay blocked or theme load failed. Falling back to synth.", e);
        this.synthesizeTheme();
      });
    } else {
      this.synthesizeTheme();
    }
  }

  startBackgroundTension(level = "easy") {
    this.init();
    if (this.muted) return;
    
    // Pause other themes
    if (this.sounds.theme) this.sounds.theme.pause();
    if (this.sounds.bachchanIntro) this.sounds.bachchanIntro.pause();

    const audio = this.sounds.background;
    if (audio) {
      audio.volume = 0.25;
      audio.play().catch((e) => {
        console.warn("Background music load failed. Falling back to drone synth.", e);
        this.synthesizeBackgroundTension(level);
      });
    } else {
      this.synthesizeBackgroundTension(level);
    }
  }

  stopBackgroundTension() {
    const audio = this.sounds.background;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    this.stopSynthesizedBackground();
  }

  playLock(loop = false) {
    this.init();
    if (this.muted) return;
    
    // Play lock sound
    const audio = this.sounds.lock;
    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.loop = loop;
      } catch (e) {
        console.warn("Error resetting lock sound:", e);
      }
      audio.volume = 1.0;
      audio.play().catch((e) => {
        console.warn("Preloaded lock sound play failed, trying new Audio:", e);
        try {
          if (this.currentFreshLockAudio) {
            try { this.currentFreshLockAudio.pause(); } catch (err) {}
          }
          const freshAudio = new Audio(this.audioAssets.lock);
          freshAudio.volume = 1.0;
          freshAudio.loop = loop;
          this.currentFreshLockAudio = freshAudio;
          freshAudio.play().catch(() => this.synthesizeLock());
        } catch (err) {
          this.synthesizeLock();
        }
      });
    } else {
      this.synthesizeLock();
    }
  }

  stopLock() {
    const audio = this.sounds.lock;
    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
        audio.loop = false;
      } catch (e) {}
    }
    if (this.currentFreshLockAudio) {
      try {
        this.currentFreshLockAudio.pause();
        this.currentFreshLockAudio.currentTime = 0;
        this.currentFreshLockAudio.loop = false;
      } catch (e) {}
      this.currentFreshLockAudio = null;
    }
  }

  playCorrect() {
    this.init();
    if (this.muted) return;
    this.stopBackgroundTension();
    this.stopClock();

    const audio = this.sounds.correct;
    if (audio) {
      audio.volume = 0.5;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        this.synthesizeCorrect();
      });
    } else {
      this.synthesizeCorrect();
    }
  }

  playWrong() {
    this.init();
    if (this.muted) return;
    this.stopBackgroundTension();
    this.stopClock();

    const audio = this.sounds.wrong;
    if (audio) {
      audio.volume = 0.5;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        this.synthesizeWrong();
      });
    } else {
      this.synthesizeWrong();
    }
  }

  playLifeline() {
    this.init();
    if (this.muted) return;
    
    // Play a short synth chime (zero latency, sounds authentic and crisp)
    this.synthesizeLifeline();
  }

  playHooter() {
    this.init();
    if (this.muted) return;
    this.stopBackgroundTension();
    
    const audio = this.sounds.hooter;
    if (audio) {
      audio.volume = 0.7;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        console.warn("Hooter play failed", e);
      });
    }
  }

  playAlarm(onEndedCallback) {
    this.init();
    if (this.muted) {
      if (onEndedCallback) onEndedCallback();
      return;
    }
    this.stopBackgroundTension();
    
    const audio = this.sounds.alarm;
    if (audio) {
      audio.volume = 0.7;
      audio.currentTime = 0;
      if (onEndedCallback) {
        audio.onended = () => {
          audio.onended = null;
          onEndedCallback();
        };
      }
      audio.play().catch((e) => {
        console.warn("Alarm play failed", e);
        if (onEndedCallback) onEndedCallback();
      });
    } else {
      if (onEndedCallback) onEndedCallback();
    }
  }

  playNextQuestion() {
    this.init();
    if (this.muted) return;
    
    const audio = this.sounds.nextQuestion;
    if (audio) {
      audio.volume = 0.45;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        console.warn("Next question sound play failed", e);
      });
    }
  }

  playNextQuestionIntro(loop = true) {
    this.init();
    if (this.muted) return;
    
    const audio = this.sounds.nextQuestionIntro;
    if (audio) {
      audio.loop = loop;
      audio.volume = 0.55;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        console.warn("Autoplay blocked or nextQuestionIntro play failed.", e);
      });
    }
  }

  stopNextQuestionIntro() {
    const audio = this.sounds.nextQuestionIntro;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  playTick(fast = false) {
    if (this.muted) return;
    this.init();
    
    const audio = this.sounds.clock;
    if (audio) {
      audio.playbackRate = fast ? 1.5 : 1.0;
      audio.volume = fast ? 0.95 : 0.65;
      audio.currentTime = 0;
      audio.play().catch((e) => {
        console.warn("Failed to play local clock tick sound:", e);
      });
    }
  }

  startClock() {
    this.init();
    if (this.muted) return;
    
    const audio = this.sounds.clock;
    if (audio) {
      audio.currentTime = 0;
      audio.volume = 0.75;
      audio.playbackRate = 1.0;
      audio.play().catch((e) => {
        console.warn("Failed to play clock sound:", e);
      });
    }
  }

  stopClock() {
    const audio = this.sounds.clock;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  pauseClock() {
    const audio = this.sounds.clock;
    if (audio) {
      audio.pause();
    }
  }

  resumeClock() {
    this.init();
    if (this.muted) return;
    const audio = this.sounds.clock;
    if (audio) {
      audio.play().catch((e) => {
        console.warn("Failed to resume clock sound:", e);
      });
    }
  }

  setClockVolume(volume) {
    const audio = this.sounds.clock;
    if (audio) {
      audio.volume = this.muted ? 0 : volume;
    }
  }

  // --- SYNTHESIZER FALLBACKS (Web Audio API) ---

  synthesizeTheme() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const progression = [
      { chords: [130.81, 155.56, 196.00], time: 0 },
      { chords: [103.83, 130.81, 155.56], time: 1.2 },
      { chords: [116.54, 146.83, 174.61], time: 2.4 },
      { chords: [130.81, 155.56, 196.00, 261.63], time: 3.6 }
    ];
    progression.forEach((step) => {
      step.chords.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, t + step.time);
        gain.gain.setValueAtTime(0, t + step.time);
        gain.gain.linearRampToValueAtTime(0.12, t + step.time + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + step.time + 1.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(t + step.time);
        osc.stop(t + step.time + 1.5);
      });
    });
  }

  synthesizeBackgroundTension(level = "easy") {
    if (!this.ctx) return;
    this.stopSynthesizedBackground();
    
    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";

    let baseFreq = 110;
    if (level === "easy-medium") baseFreq = 98;
    if (level === "medium") baseFreq = 87.31;
    if (level === "advanced") baseFreq = 73.42;

    osc1.frequency.setValueAtTime(baseFreq, t);
    osc2.frequency.setValueAtTime(baseFreq * 1.5, t);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(200, t);
    filter.frequency.linearRampToValueAtTime(400, t + 5);
    filter.Q.setValueAtTime(3, t);

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.08, t + 1.5);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(t);
    osc2.start(t);

    this.bgNode = {
      oscillators: [osc1, osc2],
      gain: gain,
      stop: (stopTime) => {
        try {
          gain.gain.cancelScheduledValues(stopTime);
          gain.gain.setValueAtTime(gain.gain.value, stopTime);
          gain.gain.exponentialRampToValueAtTime(0.001, stopTime + 0.5);
          osc1.stop(stopTime + 0.6);
          osc2.stop(stopTime + 0.6);
        } catch(e) {}
      }
    };
  }

  stopSynthesizedBackground() {
    if (this.bgNode) {
      if (this.ctx) {
        this.bgNode.stop(this.ctx.currentTime);
      }
      this.bgNode = null;
    }
  }

  synthesizeLock() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.linearRampToValueAtTime(60, t + 0.4);
    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.5);
  }

  synthesizeCorrect() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const notes = [
      { f: 261.63, delay: 0 },
      { f: 329.63, delay: 0.1 },
      { f: 392.00, delay: 0.2 },
      { f: 523.25, delay: 0.3 }
    ];
    notes.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(note.f, t + note.delay);
      gain.gain.setValueAtTime(0, t + note.delay);
      gain.gain.linearRampToValueAtTime(0.18, t + note.delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + note.delay + 0.8);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + note.delay);
      osc.stop(t + note.delay + 0.9);
    });
  }

  synthesizeWrong() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const frequencies = [180, 185];
    frequencies.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.linearRampToValueAtTime(60, t + 0.8);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 1.0);
    });
  }

  synthesizeLifeline() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const freqList = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
    freqList.forEach((freq, idx) => {
      const delay = idx * 0.05;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, t + delay);
      gain.gain.setValueAtTime(0, t + delay);
      gain.gain.linearRampToValueAtTime(0.08, t + delay + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + delay);
      osc.stop(t + delay + 0.35);
    });
  }
}

export const soundManager = new KBCSoundManager();
