describe('Bass', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Bass.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Bass.getEnergy().length).toEqual(22);
        });
        it('should contain integer values', () => {
            expect(Bass.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });

    describe(':getAvg', () => {
        it('should return a numeral', () => {
            expect(Bass.getAvg()).toEqual(jasmine.any(Number));
        });
        it('should return a numeral < 1 when passed true as an argument', () => {
            expect(Bass.getAvg(true)).toBeLessThan(1);
        });
    });

    describe(':sum', () => {
        beforeEach(function() {
            spyOn(Bass,'getEnergy').and.returnValue([200, 100, 50]);
        })
        it('should return a numeral', () => {
            expect(Bass.sum(Bass.getEnergy())).toEqual(jasmine.any(Number));
        });
        it('should return the total of an array of values', () => {
            expect(Bass.sum(Bass.getEnergy())).toEqual(350);
        });
    });

    describe(':getMaxLevel', () => {
        beforeEach(function() {
            spyOn(Bass,'getEnergy').and.returnValue([200, 100, 50]);
        });
        it('should return a numeral', () => {
            expect(Bass.getMaxLevel()).toEqual(jasmine.any(Number));
        });
        it('should return 200 when passed [200, 100, 50]', () => {
            expect(Bass.getMaxLevel()).toEqual(200);
        });
    });

    describe(':getScale', () => {
        it('should return a numeral', () => {
            expect(Bass.getScale()).toEqual(jasmine.any(Number));
        });
        it('should return a value between 1 and 2', () => {
            expect(Bass.getScale()).toBeGreaterThanOrEqual(1);
            expect(Bass.getScale()).toBeLessThanOrEqual(2);
        });
    });
});