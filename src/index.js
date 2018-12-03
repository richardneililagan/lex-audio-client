// :: UMD definition
//    https://github.com/umdjs/

/* global define */

import LexAudioClient from './lex-audio-client.class'

const ROOT = typeof self !== 'undefined' ? self : this
const FACTORY = () => {
  return LexAudioClient
}

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // :: AMD environment.
    //    Register as an anonymous module.
    define([], factory)
  } else if (typeof module === 'object' && module.exports) {
    // :: Node environment.
    //    Does not work with strict CommonJS, but only CommonJS-like environments
    //    that support `module.exports` like Node.
    module.exports = factory()
  } else {
    // :: Browser environment.
    //    `root` will evaluate to `window`.
    root.LexAudioClient = factory()
  }
}(ROOT, FACTORY))
