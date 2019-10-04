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
            expect(AudioTool.getTrebleEnergy(analyser).length).toEqual(820);
        });
    });

    describe('::getAvg', () => {
      it('should return an average frequency value from given array', () => {
          energy = [174, 180, 194, 154]
          function sum(array) { array.reduce((a,b) => a+b, 0)}
          expect(AudioTool.getAvg(energy)).toEqual(175);
      });
    });

});