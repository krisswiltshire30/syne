describe('Tetra', () => {

  beforeEach(() => {
    scene = setupScene();
    tetra = new Tetra(1, 1, 2, 3, scene);
  });

  it('Can change the position of the tetra', () => {
    expect(tetra.changePosition(400, 100, 200)).toEqual(new THREE.Vector3(400, 100, 200))
  })

  it('Can change the scale of the tetra', () => {
    expect(tetra.changeScale(10, 10, 10)).toEqual(new THREE.Vector3(10, 10, 10))
  })
});