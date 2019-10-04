describe('Cube', () => {
  let cube;

  beforeEach(() => {
    cube = new Cube();
  })

  it('Constructs a cube', () => {
    expect(cube).toEqual({});
  });

  it('Can change the scale of the cube', () => {
    cube.animate(10, 10)
    expect(cube.cube.scale).toEqual({
      x: 10,
      y: 10,
      z: 10
    })
  })


});