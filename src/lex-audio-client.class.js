const DEFAULT_OPTS = {
  sampleRate: 44100
}

class LexAudioClient {
  constructor (opts = {}) {
    this.__opts = { ...DEFAULT_OPTS, ...opts }
  }
}

export default LexAudioClient
