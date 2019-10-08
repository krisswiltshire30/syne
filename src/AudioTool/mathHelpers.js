const MathHelpers = {

    standardDeviationVariance: function (values, varianceTrue) {
        var avg = average(values);

        var squareDiffs = values.map(function (value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });

        var variance = average(squareDiffs);

        if (varianceTrue) {
            return variance
        }

        var stdDev = Math.sqrt(variance);
        return stdDev;
    },

    average: function (data) {
        var sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0);

        var avg = sum / data.length;
        return avg;
    },

    linearRegression: function (dataArray) {

        var freqBands = [];
        let n = dataArray.length

        for (var i = 1; i <= n; i++) {
            freqBands.push(i);
        }

        let sum_x = 0
        let sum_y = 0;
        let sum_xy = 0;
        let sum_xx = 0;
        let sum_yy = 0;

        for (var i = 0; i < n; i++) {
            sum_x += dataArray[i];
            sum_y += freqBands[i];
            sum_xy += (dataArray[i] * freqBands[i]);
            sum_xx += (dataArray[i] * dataArray[i]);
            sum_yy += (freqBands[i] * freqBands[i]);
        }

        return Math.pow((n * sum_xy - sum_x * sum_y) / Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)), 2);
    }

}