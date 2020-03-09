describe('MathHelpers', () => {

    describe(':standardDeviationVariance', () => {
        it('should return standard deviation when called with true', () => {
            let stdDev = MathHelpers.standardDeviationVariance([1, 1, 1, 1], false)
            expect(stdDev).toEqual(0);
        });
        it('should return st when called with true', () => {
            let variance = MathHelpers.standardDeviationVariance([1, 2, 2, 2, 2, 2, 3, 4, 6, 10], true)
            expect(variance.toFixed(2)).toEqual('6.64');
        });
    });

    describe(':linearRegression', () => {
        it('should sort number array then return linear Regression from this', () => {
            let linR = MathHelpers.linearRegression([5, 2, 1, 4], true)
            expect(linR.toFixed(2)).toEqual('0.98');
        });

        it('should return linear Regression from number array passed to it with out sorting it first', () => {
            let linR = MathHelpers.linearRegression([1, 2, 4, 5], false)
            expect(linR.toFixed(2)).toEqual('0.98');
        });
    });
}); 