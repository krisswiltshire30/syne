describe('AudioTool', () => {
    beforeEach(()=> {
        var audioCtx = new AudioContext;
    });

    it('Should be async and return media stream', function(done) {
        AudioTool.getAudioInput(audioCtx).then(function(result) {
            expect(result.constructor.name).toBe('MediaStreamAudioSourceNode');
            done();
        });
    });
});