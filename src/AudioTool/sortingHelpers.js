const sortingHelpers = {
    splitEnergyArrays = function (usArray, quartile, sorted) {

        if (sorted) {
            var array = this.sortNumberArray(usArray);
        } else {
            var array = usArray;
        }

        var x = (array.length / 4);

        return array.slice(((quartile - 1) * x), ((quartile) * x))

    },

    getLocalMaxima = function (array) {
        var a = array;
        maxes = []
        for (var i = 1; i < a.length - 1; ++i) {
            if (a[i - 1] < a[i] && a[i] > a[i + 1])
                maxes.push({
                    strength: a[i],
                    index: i
                })
        }
        return this.sortArrayOfObjectsArray(maxes, strength);
    },

    sortArrayOfObjects = function (array, key) {
        array.sort(function (a, b) {
            return a[key] < b[key]
        });
        return array;
    },

    sortNumberArray = function (array) {
        array.sort(function (a, b) {
            return a - b;
        })
        return array;
    },


    getIndexOfMax = function (arr) {
        let i = arr.indexOf(Math.max(...arr));
        return i;
    }
};