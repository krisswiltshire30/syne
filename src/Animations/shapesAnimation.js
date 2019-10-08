AudioTool.setup();

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);

sphereScale = 1;
cubeScale = 1;
tetraScale = 1;

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    cubeScale = Mids.getScale(true);
    tetraScale = Treble.getScale(true);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  sphere1.changeRotation(0.01, 0, 0);
  cube1.changeRotation(0.01, 0.01, 0);
  tetra1.changeRotation(0.01, 0.01, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();