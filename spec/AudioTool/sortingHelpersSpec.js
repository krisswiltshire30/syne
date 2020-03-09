describe("SortingHelpers", () => {
    describe(":getLocalMaxima", () => {
        it("should return local maxima when called ", () => {
            expect(SortingHelpers.getLocalMaxima([1, 3, 5, 3, 1, 1, 2, 1])).toEqual([{
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

    describe(":sortArrayOfObjects", () => {
        it("should return sorted array by specified keys", () => {
            let linR = [{
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
            expect(SortingHelpers.sortArrayOfObjects(linR, "a")).toEqual([{
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

    describe(":splitEnergyArrays", () => {
        it("should split array into specified number of sub-arrays ", () => {
            expect(SortingHelpers.splitEnergyArrays([1, 3, 5, 3, 1, 1, 2, 1], 4, 2, false)).toEqual([5, 3])
        });
    });

    describe(":getIndexOfMax", () => {
        it("should find index of Max value in array ", () => {
            expect(SortingHelpers.getIndexOfMax([1, 3, 5, 3, 1, 1, 2, 1])).toEqual(2)
        });
    });
}); 