const AudioTool = require('../../app/javascript/audioFunctions/audioTool.js')

describe('AudioTool', () => {
  
  describe('getAudioStream', () => {
    
    test('should return a promise', () => {
      expect(AudioTool.getAudioStream()).toEqual(expect.any(Promise));
    });

    test('should return an object when resolved', () => {
  
      expect(AudioTool.getAudioStream()).resolves.toEqual(expect.any(Object));
    });
    
  });

});