const SortingHelpers = {

  splitEnergyArrays: function (usArray, segments, segment, sorted) {
    let array = []
    if (sorted) {
      array = this.sortNumberArray(usArray);
    } else {
      array = usArray;
    }

    let x = (array.length / segments);

    return array.slice(((segment - 1) * x), ((segment) * x))

  },

  getLocalMaxima: function (array) {
    let a = array;
    let maxesArray = []
    for (var i = 1; i < a.length - 1; ++i) {
      if (a[i - 1] < a[i] && a[i] > a[i + 1])
        maxesArray.push({
          strength: a[i],
          index: i
        })
    }
    return this.sortArrayOfObjects(maxesArray, "strength");
  },

  sortArrayOfObjects: function (obArray, key) {
    obArray.sort(function (a, b) {
      return b[key] - a[key]
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