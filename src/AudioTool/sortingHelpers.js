const SortingHelpers = {

  splitEnergyArrays: function (usArray, quartile, sorted) {
    var array1 = []
    if (sorted) {
      array1 = this.sortNumberArray(usArray);
    } else {
      array1 = usArray;
    }

    var x = (array1.length / 4);

    return array1.slice(((quartile - 1) * x), ((quartile) * x))

  },

  getLocalMaxima: function (array) {
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

  sortArrayOfObjects: function (obArray, key) {
    obAarray.sort(function (a, b) {
      return a[key] < b[key]
    });
    return obArray;
  },

  sortNumberArray: function (array) {
    array.sort(function (a, b) {
      return a - b;
    })
    return array;
  },

  getIndexOfMax: function (arr) {
    let i = arr.indexOf(Math.max(...arr));
    return i;
  }
};