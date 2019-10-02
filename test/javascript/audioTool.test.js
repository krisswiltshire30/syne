const AudioTool = require('../../app/javascript/audioFunctions/audioTool.js')

describe('AudioTool', () => {
  
  describe('getAudioStream', () => {
    
    test('should return a promise', () => {
      expect(AudioTool.getAudioStream()).toEqual(expect.any(Promise));
    });
    
  });

});