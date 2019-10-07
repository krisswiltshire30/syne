describe('Treble', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Treble.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Treble.getEnergy().length).toEqual(318);
        });
        it('should contain integer values', () => {
            expect(Treble.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });

    describe(':getAvg', () => {
        it('should return a numeral', () => {
            expect(Treble.getAvg()).toEqual(jasmine.any(Number));
        });
        it('should return a numeral < 1 when passed true as an argument', () => {
            expect(Treble.getAvg(true)).toBeLessThan(1);
        });
    });

    describe(':sum', () => {
        beforeEach(function() {
            spyOn(Treble,'getEnergy').and.returnValue([200, 100, 50]);
        })
        it('should return a numeral', () => {
            expect(Treble.sum(Treble.getEnergy())).toEqual(jasmine.any(Number));
        });
        it('should return the total of an array of values', () => {
            expect(Treble.sum(Treble.getEnergy())).toEqual(350);
        });
    });

    describe(':getMaxLevel', () => {
        beforeEach(function() {
            spyOn(Treble,'getEnergy').and.returnValue([200, 100, 50]);
        });
        it('should return a numeral', () => {
            expect(Treble.getMaxLevel()).toEqual(jasmine.any(Number));
        });
        it('should return 200 when passed [200, 100, 50]', () => {
            expect(Treble.getMaxLevel()).toEqual(200);
        });
    });

    describe(':getScale', () => {
        it('should return a numeral', () => {
            expect(Treble.getScale()).toEqual(jasmine.any(Number));
        });
        it('should return a value between 1 and 2', () => {
            expect(Treble.getScale()).toBeGreaterThanOrEqual(1);
            expect(Treble.getScale()).toBeLessThanOrEqual(2);
        });
    });
});