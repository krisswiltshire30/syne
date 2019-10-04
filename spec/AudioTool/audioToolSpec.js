describe('AudioTool', () => {

    var audioCtx = new AudioContext;

    describe('::getAudioInput', () => {

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

    describe('::getLevels', () => {
        it('returns an array', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);

            expect(AudioTool.getLevels(analyser)).toEqual(jasmine.any(Uint8Array));
        });

        it('it should be the correct length', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);

            expect(AudioTool.getLevels(analyser).length).toEqual(1024);
        })
    });

    describe('::getBassEnergy', () => {
        it('returns an array with just the bass values', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
            expect(AudioTool.getBassEnergy(analyser).length).toEqual(25);
        });
    });
    describe('::getMidEnergy', () => {
        it('returns an array with just the mid values', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
            expect(AudioTool.getMidEnergy(analyser).length).toEqual(179);
        });
    });

    describe('::getTrebleEnergy', () => {
        it('returns an array with just the treble values', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
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
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);


            expect(AudioTool.getBassAverage(analyser)).toEqual(0)
        })
    })
    describe('::getMidAverage', () => {
        it('should return an average value for Mid', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);


            expect(AudioTool.getMidAverage(analyser)).toEqual(0)
        })
    })

    describe('::getTrebleAverage', () => {
        it('should return an average value for Treble', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);


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
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
            expect(AudioTool.getBassMax(analyser)).toEqual(0);
        });
    });

    describe('::getMidMax', () => {
        it('should return max bass value', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
            expect(AudioTool.getMidMax(analyser)).toEqual(0);
        });
    });

    describe('::getTrebleMax', () => {
        it('should return max bass value', () => {
            let stream = jasmine.createSpyObj('AudioNode', {
                'connect': true
            });
            let analyser = AudioTool.getAnalyser(stream, audioCtx);
            expect(AudioTool.getTrebleMax(analyser)).toEqual(0);
        });
    });
});