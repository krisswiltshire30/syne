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

    describe('::getBassEnergy', () => {
        it('returns an array with just the bass values', () => {
<<<<<<< HEAD
            expect(AudioTool.getBassEnergy(analyser).length).toEqual(22);
=======
            expect(AudioTool.getBassEnergy().length).toEqual(22);
        });
    });

    describe('::getSubBassEnergy', () => {
        it('returns an array with just the sub bass values', () => {
            expect(AudioTool.getSubBassEnergy().length).toEqual(3);
>>>>>>> f77a22ec54b274ba0e7fe0a0a74f4726ada35793
        });
    });
    describe('::getMidEnergy', () => {
        it('returns an array with just the mid values', () => {
            expect(AudioTool.getMidEnergy().length).toEqual(179);
        });
    });

    describe('::getSubBassEnergy', () => {
        it('returns an array with just the bass values', () => {
            expect(AudioTool.getSubBassEnergy().length).toEqual(3);
        });
    });

    describe('::getTrebleEnergy', () => {
        it('returns an array with just the treble values', () => {
            expect(AudioTool.getTrebleEnergy().length).toEqual(318);
        });
    });

    describe('::getAvg', () => {
        it('should return an average frequency value from given array', () => {
            energy = [174, 180, 194, 154]
            expect(AudioTool.getAvg(energy)).toEqual(175.5);
        });
    });

    describe('::getBassAverage', () => {
        it('should return an average value for Bass', () => {
            expect(AudioTool.getBassAverage()).toEqual(0)
        })
    });

    describe('::getSubBassAverage', () => {
        it('should return an average values for Sub Bass', () => {
            expect(AudioTool.getSubBassAverage()).toEqual(0);
        });
    });
    describe('::getMidAverage', () => {
        it('should return an average value for Mid', () => {
            expect(AudioTool.getMidAverage()).toEqual(0);
        })
    })

    describe('::getTrebleAverage', () => {
        it('should return an average value for Treble', () => {
            expect(AudioTool.getTrebleAverage()).toEqual(0);
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
            expect(AudioTool.getBassMax()).toEqual(0);
        });
    });
});