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
  sphereBand: Bass,
  cubeRotate: true,
  cubeRotateSpeed: 0.01,
  cubeBand: Mids,
  tetraRotate: true,
  tetraRotateSpeed: 0.01,
  tetraBand: Treble,
  cameraControl: true,
}

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = animationToggles.sphereBand.getScale();
    cubeScale = animationToggles.cubeBand.getScale();
    tetraScale = animationToggles.tetraBand.getScale();
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);

  if (animationToggles.sphereRotate) {
    sphere1.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }
  if (animationToggles.cubeRotate) {
    cube1.changeRotation(animationToggles.cubeRotateSpeed, animationToggles.cubeRotateSpeed, 0);
  }
  if (animationToggles.tetraRotate) {
    tetra1.changeRotation(animationToggles.tetraRotateSpeed, animationToggles.tetraRotateSpeed, 0);
  }

  cameraUpdate();  

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();

function cameraUpdate() {
  if (animationToggles.cameraControl) {
    controls.update();
  }
}