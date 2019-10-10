describe("sortingHelpers", () => {
  describe("local maxima", () => {
    it("should return local maxima when called ", () => {
      expect(SortingHelpers.getLocalMaxima([1, 3, 5, 3, 1, 1, 2, 1])).toEqual([
        {
          strength: 5,
          index: 2
        },
        {
          strength: 2,
          index: 6
        }
      ]);
    });
  });

  describe("sort array of objects", () => {
    it("should return sorted array by specified keys", () => {
      let linR = [
        {
          a: 3
        },
        {
          a: 3
        },
        {
          a: 1
        },
        {
          a: 4
        },
        {
          a: 7
        }
      ];
      expect(SortingHelpers.sortArrayOfObjects(linR, "a")).toEqual([
        {
          a: 7
        },
        {
          a: 4
        },
        {
          a: 3
        },
        {
          a: 3
        },
        {
          a: 1
        }
      ]);
    });
  });
});
