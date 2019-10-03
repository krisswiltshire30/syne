describe('AudioTool', () => {

    var audioCtx = new AudioContext;
    var stream = AudioTool.getAudioInput(audioCtx);

    beforeEach(() => {
        spyOn(AudioTool, 'getAnalyser').and.returnValue(AnalyserNode);
    });

    it('Should be async and return media stream', function (done) {
        AudioTool.getAudioInput(audioCtx).then(function (result) {
            expect(result.constructor.name).toBe('MediaStreamAudioSourceNode');
            done();
        });
    });

    describe('::getAnalyser', () => {
        it('returns an audio analyser node', function () {
            expect(AudioTool.getAnalyser(stream, audioCtx)).toEqual(AnalyserNode);
        })
    })
});