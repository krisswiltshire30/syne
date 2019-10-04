describe('AudioTool', () => {

    var audioCtx = new AudioContext;

    describe('getAudioInput', () => {

      it('Should be async and return media stream', function (done) {
        AudioTool.getAudioInput(audioCtx).then(function (result) {
            expect(result.constructor.name).toBe('MediaStreamAudioSourceNode');
            done();
        });
      });

    });
    

    describe('::getAnalyser', () => {
      
      it('returns an audio analyser node', function () {
        let stream = jasmine.createSpyObj('AudioNode', {
          'connect': true
        });
        let analyser = AudioTool.getAnalyser(stream, audioCtx);

        expect(analyser.constructor.name).toEqual('AnalyserNode');
      });

    });
    
});