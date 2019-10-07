AudioTool.setup();

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);

sphereScale = 1;
cubeScale = 1;
tetraScale = 1;

var animationToggles = {
  sphereRotate: true,
  sphereRotateSpeed: 0.01,
  cubeRotate: true,
  cubeRotateSpeed: 0.01,
  tetraRotate: true,
  tetraRotateSpeed: 0.01,
}

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    cubeScale = Mids.getScale(true);
    tetraScale = Treble.getScale(true);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  if (animationToggles.sphereRotate) {
    sphere1.shape.rotation.z += animationToggles.sphereRotateSpeed;
  }
  if (animationToggles.cubeRotate) {
    cube1.shape.rotation.x += animationToggles.cubeRotateSpeed;
    cube1.shape.rotation.y += animationToggles.cubeRotateSpeed;
  }
  if (animationToggles.tetraRotate) {
    tetra1.shape.rotation.x += animationToggles.tetraRotateSpeed;
    tetra1.shape.rotation.y += animationToggles.tetraRotateSpeed;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();