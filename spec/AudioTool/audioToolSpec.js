describe('AudioTool', () => {
    describe('::getLevels', () => {

        var AudioTool;
        var audioCtx = jasmine.createSpyObj('audioCtx')

        beforeEach(function () {
            AudioTool = new AudioTool();
        });

        it('expects a promise from getAudioInput', () => {
            expect(AudioTool.getAudioInput(audioCtx)).toEqual(typeof "function")
        });
    });
});