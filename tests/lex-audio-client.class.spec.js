import LexAudioClient from '../src/lex-audio-client.class'

describe('LexAudioClient', () => {
  it('has a default sampling rate of 44100.', () => {
    const client = new LexAudioClient()
    expect(client.__opts.sampleRate).toBe(44100)
  })

  it('uses provided sample rate if given.', () => {
    const client = new LexAudioClient({ sampleRate: 22050 })
    expect(client.__opts.sampleRate).toBe(22050)
  })
})
