describe('Solid', () => {

  var scene = new THREE.Scene();
  var solid = new Solid(scene);

  describe('changeOpacity', () => {

    it("changes a solid's opacity", () => {
      expect(solid.changeOpacity(0.4)).toBeCloseTo(0.4);
    });

  });

});