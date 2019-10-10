describe('mathHelpers', () => {

    describe('standardDeviationVariance', () => {
        it('should return variance when called with true', () => {
            let stdDev = MathHelpers.standardDeviationVariance([1, 1, 1, 1], false)
            expect(stdDev).toEqual(0);
        });
        // it('should return an array of the correct length', () => {
        //     expect(Bass.getEnergy().length).toEqual(22);
        // });
        // it('should contain integer values', () => {
        //     expect(Bass.getEnergy()[0]).toEqual(jasmine.any(Number));
    });
});

// describe(':getAvg', () => {
//     it('should return a numeral', () => {
//         expect(Bass.getAvg()).toEqual(jasmine.any(Number));
//     });
//     it('should return a numeral < 1 when passed true as an argument', () => {
//         expect(Bass.getAvg(true)).toBeLessThan(1);
//     });
// });