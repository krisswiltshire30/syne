describe('Sub', () => {

    AudioTool.source = jasmine.createSpyObj('AudioNode', {
        'connect': true
    }); 

    describe(':getEnergy', () => {
        it('should return a Uint8Array', () => {
            expect(Sub.getEnergy()).toEqual(jasmine.any(Uint8Array));
        });
        it('should return an array of the correct length', () => {
            expect(Sub.getEnergy().length).toEqual(3);
        });
        it('should contain integer values', () => {
            expect(Sub.getEnergy()[0]).toEqual(jasmine.any(Number));
        });
    });

    describe(':getAvg', () => {
        it('should return a numeral', () => {
            expect(Sub.getAvg()).toEqual(jasmine.any(Number));
        });
        it('should return a numeral < 1 when passed true as an argument', () => {
            expect(Sub.getAvg(true)).toBeLessThan(1);
        });
    });

    describe(':sum', () => {
        beforeEach(function() {
            spyOn(Sub,'getEnergy').and.returnValue([200, 100, 50]);
        })
        it('should return a numeral', () => {
            expect(Sub.sum(Sub.getEnergy())).toEqual(jasmine.any(Number));
        });
        it('should return the total of an array of values', () => {
            expect(Sub.sum(Sub.getEnergy())).toEqual(350);
        });
    });

    describe(':getMaxLevel', () => {
        beforeEach(function() {
            spyOn(Sub,'getEnergy').and.returnValue([200, 100, 50]);
        });
        it('should return a numeral', () => {
            expect(Sub.getMaxLevel()).toEqual(jasmine.any(Number));
        });
        it('should return 200 when passed [200, 100, 50]', () => {
            expect(Sub.getMaxLevel()).toEqual(200);
        });
    });

    describe(':getScale', () => {
        it('should return a numeral', () => {
            expect(Sub.getScale()).toEqual(jasmine.any(Number));
        });
        it('should return a value between 1 and 2', () => {
            expect(Sub.getScale()).toBeGreaterThanOrEqual(1);
            expect(Sub.getScale()).toBeLessThanOrEqual(2);
        });
    });
});