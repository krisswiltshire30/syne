const MathHelpers = {

    standardDeviationVariance: function (values, varianceTrue) {
        let avg = this.average(values);

        let squareDiffs = values.map(function (value) {
            let diff = value - avg;
            let sqrDiff = diff * diff;
            return sqrDiff;
        });

        let variance = this.average(squareDiffs);

        if (varianceTrue) {
            return variance;
        }

        let stdDev = Math.sqrt(variance);
        return stdDev;
    },

    average: function (data) {
        let sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0);

        let avg = sum / data.length;
        return avg;
    },

    linearRegression: function (dataArray, sorted) {
        if (sorted) {
            dataArray = SortingHelpers.sortNumberArray(dataArray)
        }


        let freqBands = [];
        let n = dataArray.length

        for (var i = 1; i <= n; i++) {
            freqBands.push(i);
        }

        let sum_x = 0
        let sum_y = 0;
        let sum_xy = 0;
        let sum_xx = 0;
        let sum_yy = 0;

        for (var j = 0; j < n; j++) {
            sum_x += dataArray[j];
            sum_y += freqBands[j];
            sum_xy += (dataArray[j] * freqBands[j]);
            sum_xx += (dataArray[j] * dataArray[j]);
            sum_yy += (freqBands[j] * freqBands[j]);
        }

        return Math.pow((n * sum_xy - sum_x * sum_y) / Math.sqrt((n * sum_xx - sum_x * sum_x) * (n * sum_yy - sum_y * sum_y)), 2);
    }

}