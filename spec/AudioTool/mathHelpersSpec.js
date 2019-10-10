describe('mathHelpers', () => {

    describe('standardDeviationVariance', () => {
        it('should return standard deviation when called with true', () => {
            let stdDev = MathHelpers.standardDeviationVariance([1, 1, 1, 1], false)
            expect(stdDev).toEqual(0);
        });
        it('should return st when called with true', () => {
            let variance = MathHelpers.standardDeviationVariance([1, 2, 2, 2, 2, 2, 3, 4, 6, 10], true)
            expect(variance.toFixed(2)).toEqual('6.64');
        });
    });

    describe('linear regression', () => {
        it('should return linear Regression', () => {
            let linR = MathHelpers.linearRegression([5, 2, 1, 4], true)
            expect(linR.toFixed(2)).toEqual('0.98');
        });

        it('should return linear Regression', () => {
            let linR = MathHelpers.linearRegression([1, 2, 4, 5], false)
            expect(linR.toFixed(2)).toEqual('0.98');
        });
    });
});