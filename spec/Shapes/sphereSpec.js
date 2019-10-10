describe('Sphere', () => {

  beforeEach(() => {
    scene = setupScene();
    sphere = new Sphere(1, 1, 2, 3, scene);
  })

  it('Can change the position of the sphere', () => {
    expect(sphere.changePosition(400, 100, 200)).toEqual(new THREE.Vector3(400, 100, 200))
  })

  it('Can change the scale of the sphere', () => {
    expect(sphere.changeScale(10, 10, 10)).toEqual(new THREE.Vector3(10, 10, 10))
  })
});