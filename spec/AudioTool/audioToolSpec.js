describe('AudioTool', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
      'connect': true
    });

    let analyser = AudioTool.getAnalyser();

    describe('::getAnalyser', () => {

        it('returns an audio analyser node', function () {
            expect(analyser.constructor.name).toEqual('AnalyserNode');
        });

    });

    describe('::getLevels', () => {
        it('returns an array', () => {
            expect(AudioTool.getLevels()).toEqual(jasmine.any(Uint8Array));
        });

        it('it should be the correct length', () => {
            expect(AudioTool.getLevels().length).toEqual(1024);
        })
    });
});