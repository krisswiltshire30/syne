describe('Energy', () => {

    beforeEach(function() {
        spyOn(Mids, 'getEnergy').and.returnValue([200, 100, 50]);
    });

    describe(':getAvg', () => {
        it('should return a numeral', () => {
            expect(Mids.getAvg()).toEqual(jasmine.any(Number));
        });
        it('should return a numeral < 1 when passed true as an argument', () => {
            expect(Mids.getAvg(true)).toBeLessThan(1);
        });
    });

    describe(':sum', () => {
        it('should return a numeral', () => {
            expect(Mids.sum(Mids.getEnergy())).toEqual(jasmine.any(Number));
        });
        it('should return the total of an array of values', () => {
            expect(Mids.sum(Mids.getEnergy())).toEqual(350);
        });
    });

    describe(':getMaxLevel', () => {
        it('should return a numeral', () => {
            expect(Mids.getMaxLevel()).toEqual(jasmine.any(Number));
        });
        it('should return 200 when passed [200, 100, 50]', () => {
            expect(Mids.getMaxLevel()).toEqual(200);
        });
    });

    describe(':getScale', () => {
        it('should return a numeral', () => {
            expect(Mids.getScale()).toEqual(jasmine.any(Number));
        });
        it('should return a value between 1 and 2', () => {
            expect(Mids.getScale()).toBeGreaterThanOrEqual(1);
            expect(Mids.getScale()).toBeLessThanOrEqual(2);
        });
    });
});