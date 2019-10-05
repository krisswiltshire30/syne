describe('AudioTool', () => {

    let stream = jasmine.createSpyObj('AudioNode', {
        'connect': true
    });
    let audioCtx = new AudioContext;
    let analyser = AudioTool.getAnalyser(stream, audioCtx);

    describe('::getAnalyser', () => {

        it('returns an audio analyser node', function () {
            expect(analyser.constructor.name).toEqual('AnalyserNode');
        });

    });

    describe('::getLevels', () => {
        it('returns an array', () => {
            expect(AudioTool.getLevels(analyser)).toEqual(jasmine.any(Uint8Array));
        });

        it('it should be the correct length', () => {
            expect(AudioTool.getLevels(analyser).length).toEqual(1024);
        })
    });

    describe('::getBassEnergy', () => {
        it('returns an array with just the bass values', () => {
            expect(AudioTool.getBassEnergy(analyser).length).toEqual(17);
        });
    });
    describe('::getMidEnergy', () => {
        it('returns an array with just the mid values', () => {
            expect(AudioTool.getMidEnergy(analyser).length).toEqual(179);
        });
    });

    describe('::getTrebleEnergy', () => {
        it('returns an array with just the treble values', () => {
            expect(AudioTool.getTrebleEnergy(analyser).length).toEqual(318);
        });
    });

    describe('::getAvg', () => {
        it('should return an average frequency value from given array', () => {
            energy = [174, 180, 194, 154]

            function sum(array) {
                array.reduce((a, b) => a + b, 0)
            }
            expect(AudioTool.getAvg(energy)).toEqual(175);
        });
    });

    describe('::getBassAverage', () => {
        it('should return an average value for Bass', () => {
            expect(AudioTool.getBassAverage(analyser)).toEqual(0)
        })
    })
    describe('::getMidAverage', () => {
        it('should return an average value for Mid', () => {
            expect(AudioTool.getMidAverage(analyser)).toEqual(0)
        })
    })

    describe('::getTrebleAverage', () => {
        it('should return an average value for Treble', () => {
            expect(AudioTool.getTrebleAverage(analyser)).toEqual(0);
        });
    });

    describe('::getMaxLevel', () => {
        it('should return the highest value in an array', () => {
            energy = [174, 180, 194, 154]
            expect(AudioTool.getMaxLevel(energy)).toEqual(194);
        });
    });

    describe('::getBassMax', () => {
        it('should return max bass value', () => {
            expect(AudioTool.getBassMax(analyser)).toEqual(0);
        });
    });

    describe('::getMidMax', () => {
        it('should return max bass value', () => {
            expect(AudioTool.getMidMax(analyser)).toEqual(0);
        });
    });

    describe('::getTrebleMax', () => {
        it('should return max bass value', () => {
            expect(AudioTool.getTrebleMax(analyser)).toEqual(0);
        });
    });

    describe('::getBassScale', () => {
        it('should return a fixed float to 2 decimal places', () => {
            expect(AudioTool.getBassScale(analyser)).toEqual('1.00');
        });
    });

    describe('::getMidScale', () => {
        it('should return a fixed float to 2 decimal places', () => {
            expect(AudioTool.getMidScale(analyser)).toEqual('1.00');
        });
    });

    describe('::getTrebleScale', () => {
        it('should return a fixed float to 2 decimal places', () => {
            expect(AudioTool.getTrebleScale(analyser)).toEqual('1.00');
        });
    });
});