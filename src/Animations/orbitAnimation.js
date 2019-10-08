AudioTool.setup();

var orbitToggles = {
  sphereRotate: true,
  sphereRotateSpeed: 0.01,
  cubeRotate: true,
  cubeRotateSpeed: 0.01,
  tetraRotate: true,
  tetraRotateSpeed: 0.01,
  cameraControl: true,
  preset: 'A'
}

this.sphere2 = new Sphere(70, 0, 0, 0, scene);
this.newObject = new Poly(60, 1000, 0, 0, scene, 500);
this.newPlanet = new Sphere(50, 1200, 0, 0, scene, 850);
newObject.orbitAngleMod = 1
newPlanet.orbitAngleMod = 2


sphereScale = 1;
cubeScale = 1;
tetraScale = 1;
newObjectScale = 1;
newPlanetScale = 1;
presetNumber = 0;

function mainLoop2() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    newObjectScale = Treble.getScale(true);
    newPlanetScale = Mids.getScale(true);
  }

  newObject.changeScale(newObjectScale);
  sphere2.changeScale(sphereScale);
  newObject.orbit(sphere2);
  newPlanet.orbit(sphere2);

  if (animationToggles.sphereRotate) {
    sphere2.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }

  newObject.shape.rotation.y += 0.01

  cameraUpdate();

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop2();

function cameraUpdate() {
  if (animationToggles.cameraControl) {
    controls.update();
  }
}