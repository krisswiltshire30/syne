AudioTool.setup();

const sphere1 = new Sphere(70, 0, 0, 0, scene);
//const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
//const tetra1 = new Tetra(200, 500, 0, 0, scene);
//const sphere2 = new Sphere(100, -1000, 0, 0, scene, 600);
//const sphere3 = new Sphere(20, -750, 0, 0, scene, 3);
const newObject = new Poly(60, 1000, 0, 0, scene, 500);
const newPlanet = new Sphere(50, 1200, 0, 0, scene, 850);

newObject.orbitAngleMod = 1
newPlanet.orbitAngleMod = 2

sphereScale = 1;
//cubeScale = 1;
//tetraScale = 1;
newObjectScale = 1;
newPlanetScale = 1;

var animationToggles = {
  sphereRotate: true,
  sphereRotateSpeed: 0.01,
  cubeRotate: true,
  cubeRotateSpeed: 0.01,
  tetraRotate: true,
  tetraRotateSpeed: 0.01,
  cameraControl: true,
}

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    //cubeScale = Mids.getScale(true);
    //tetraScale = Treble.getScale(true);
    newObjectScale = Treble.getScale(true);
    newPlanetScale = Mids.getScale(true);
  }

  newObject.changeScale(newObjectScale);
  //sphere2.changeScale(sphere2Scale);
  sphere1.changeScale(sphereScale);
  //cube1.changeScale(cubeScale);
  //tetra1.changeScale(tetraScale);
  newObject.orbit(sphere1);
  newPlanet.orbit(sphere1);

  if (animationToggles.sphereRotate) {
    sphere1.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }
  //if (animationToggles.cubeRotate) {
  //  cube1.changeRotation(animationToggles.cubeRotateSpeed, animationToggles.cubeRotateSpeed, 0);
  //}
  //if (animationToggles.tetraRotate) {
  //  tetra1.changeRotation(animationToggles.tetraRotateSpeed, animationToggles.tetraRotateSpeed, 0);
  //}
  newObject.shape.rotation.y += 0.01

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