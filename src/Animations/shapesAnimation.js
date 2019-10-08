AudioTool.setup();

<<<<<<< HEAD
=======
const centreSphere = new Sphere(70, 0, 0, 0, scene);
//const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
//const tetra1 = new Tetra(200, 500, 0, 0, scene);
//const sphere2 = new Sphere(100, -1000, 0, 0, scene, 600);
//const sphere3 = new Sphere(20, -750, 0, 0, scene, 3);
const sphereOrbit1 = new Poly(60, 1000, 0, 0, scene, 500);
const sphereOrbit2 = new Sphere(50, 1200, 0, 0, scene, 850);

sphereOrbit1.orbitAngleMod = 1
sphereOrbit2.orbitAngleMod = 2

sphereScale = 1;
//cubeScale = 1;
//tetraScale = 1;
sphereOrbit1Scale = 1;
sphereOrbit2Scale = 1;

>>>>>>> 7e2922c91bc3a1b77fbcd0d3f1ca14ae8b140ca5
var animationToggles = {
  sphereRotate: true,
  sphereRotateSpeed: 0.01,
  cubeRotate: true,
  cubeRotateSpeed: 0.01,
  tetraRotate: true,
  tetraRotateSpeed: 0.01,
  cameraControl: true,
  preset: 'A'
}

<<<<<<< HEAD
function shapeCreator() {
  if (presetOne) {
    this.sphere1 = new Sphere(200, -500, 0, 0, scene);
    this.cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
    this.tetra1 = new Tetra(200, 500, 0, 0, scene);
  } else if (presetTwo) {
    this.sphere2 = new Sphere(70, 0, 0, 0, scene);
    this.newObject = new Poly(60, 1000, 0, 0, scene, 500);
    this.newPlanet = new Sphere(50, 1200, 0, 0, scene, 850);
    newObject.orbitAngleMod = 1
    newPlanet.orbitAngleMod = 2
  } else {
    return
=======
function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    //cubeScale = Mids.getScale(true);
    //tetraScale = Treble.getScale(true);
    sphereOrbit1Scale = Treble.getScale(true);
    sphereOrbit2Scale = Mids.getScale(true);
>>>>>>> 7e2922c91bc3a1b77fbcd0d3f1ca14ae8b140ca5
  }
}

<<<<<<< HEAD
sphereScale = 1;
cubeScale = 1;
tetraScale = 1;
newObjectScale = 1;
newPlanetScale = 1;
presetOne = true;
presetOneShapes = false;
presetTwo = false;
presetTwoShapes = false

//Animation loop
function mainLoop() {
  if (animationToggles.preset == 'A') {
    if (!presetOneShapes) {
      shapeCreator();
      presetOneShapes = true
    }
    if (presetTwoShapes) {
      sphere1.material.visible = true;
      cube1.material.visible = true;
      tetra1.material.visible = true;
      sphere2.material.visible = false;
      newObject.material.visible = false;
      newPlanet.material.visible = false;
    }
    defaultAnimation();
  } else {
    if (!presetTwoShapes) {
      sphere1.material.visible = false;
      cube1.material.visible = false;
      tetra1.material.visible = false;
      presetOne = false
      presetTwo = true
      presetTwoShapes = true
      shapeCreator()
    }
    if (presetOneShapes) {
      sphere1.material.visible = false;
      cube1.material.visible = false;
      tetra1.material.visible = false;
      sphere2.material.visible = true;
      newObject.material.visible = true;
      newPlanet.material.visible = true;
    }
    orbitAnimation();
  }
=======
  sphereOrbit1.changeScale(sphereOrbit1Scale);
  //sphere2.changeScale(sphere2Scale);
  centreSphere.changeScale(sphereScale);
  //cube1.changeScale(cubeScale);
  //tetra1.changeScale(tetraScale);
  sphereOrbit1.orbit(centreSphere);
  sphereOrbit2.orbit(centreSphere);

  if (animationToggles.sphereRotate) {
    centreSphere.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }
  //if (animationToggles.cubeRotate) {
  //  cube1.changeRotation(animationToggles.cubeRotateSpeed, animationToggles.cubeRotateSpeed, 0);
  //}
  //if (animationToggles.tetraRotate) {
  //  tetra1.changeRotation(animationToggles.tetraRotateSpeed, animationToggles.tetraRotateSpeed, 0);
  //}
  sphereOrbit1.shape.rotation.y += 0.01
>>>>>>> 7e2922c91bc3a1b77fbcd0d3f1ca14ae8b140ca5

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


// Default animation
function defaultAnimation() {
  if (AudioTool.isSetup) {
    cubeScale = Mids.getScale(true);
    tetraScale = Treble.getScale(true);
    sphereScale = Bass.getScale(true);
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
}

//Orbit animation
function orbitAnimation() {
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
}