describe('AudioToolGraphics', () => {
    let stream = jasmine.createSpyObj('AudioNode', {
        'connect': true
    });
    let audioCtx = new AudioContext;
    let analyser = AudioTool.getAnalyser(stream, audioCtx);

    describe('::getBassScale', () => {
        it('returns a single integer between 1 and 2 with just the bass value', () => {
            expect(AudioToolGraphics.getBassScale(analyser)).toEqual('1.00');
        });
    });

    describe('::getTrebleScale', () => {
        it('returns a single integer between 1 and 2 with just the treble value', () => {
            expect(AudioToolGraphics.getTrebleScale(analyser)).toEqual('1.00');
        });
    });

    describe('::getMidScale', () => {
        it('returns a single integer between 1 and 2 with just the mid value', () => {
            expect(AudioToolGraphics.getMidScale(analyser)).toEqual('1.00');
        });
    });
})