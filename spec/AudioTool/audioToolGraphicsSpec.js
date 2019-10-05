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

    describe('::getLevels1to2', () => {
        it('returns an array with numbers between 1 and 2', () => {
            expect(AudioToolGraphics.getLevels1to2(analyser)).toEqual(jasmine.any(Array));
        });
    })

    describe('::getBass1to2', () => {
        it('returns an array with numbers between 1 and 2', () => {
            expect(AudioToolGraphics.getBass1to2(analyser)).toEqual(jasmine.any(Array));
        });
    })

    describe('::getMid1to2', () => {
        it('returns an array with numbers between 1 and 2', () => {
            expect(AudioToolGraphics.getMid1to2(analyser)).toEqual(jasmine.any(Array));
        });
    })

    describe('::getTreble1to2', () => {
        it('returns an array with numbers between 1 and 2', () => {
            expect(AudioToolGraphics.getTreble1to2(analyser)).toEqual(jasmine.any(Array));
        });
    })

})