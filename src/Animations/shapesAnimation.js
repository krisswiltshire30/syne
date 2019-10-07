const sphere1 = new Sphere(150, -250, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 250, 0, 0, scene);
const tetra1 = new Tetra(200, 750, 0, 0, scene);
const torus1 = new Torus(100, -750, 0, 0, scene);

sphereScale = 1;
cubeScale = 1;
tetraScale = 1;
torusScale = 1;

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    cubeScale = Mids.getScale(true);
    tetraScale = Treble.getScale(true);
    torusScale = Sub.getScale(true);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  torus1.changeScale(torusScale);
  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;
  torus1.shape.rotation.x += 0.01;
  torus1.shape.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();

