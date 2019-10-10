AudioTool.setup();

var animationToggles = {
  bgColor: false,
  cubeColor: false,
  sphereColor: false,
  tetraColor: false,
  cubeVisible: true,
  sphereVisible: true,
  tetraVisible: true,
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
  preset: 'A'
}

function shapeCreator() {
  if (presetOne) {
    this.sphere1 = new Sphere(150, -700, 0, 0, scene);
    this.cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
    this.tetra1 = new Tetra(200, 700, 0, 0, scene);
  } else if (presetTwo) {
    this.sphere2 = new Sphere(70, 0, 0, 0, scene);
    this.sphere3 = new Sphere(20, 0, 0, 0, scene);
    this.newObject = new Poly(60, 1000, 0, 0, scene, 500);
    this.newPlanet = new Sphere(50, 1200, 0, 0, scene, 850);
    newObject.orbitAngleMod = 1
    newPlanet.orbitAngleMod = 2
  } else {
    return
  }
}

sphereScale = 1;
cubeScale = 1;
tetraScale = 1;
newObjectScale = 1;
newPlanetScale = 1;
presetOne = true;
presetOneShapes = false;
presetTwo = false;
presetTwoShapes = false

let linRegress = 0;
let twistScale = 0;

function twister(cube1, array) {
  twistScale = MathHelpers.linearRegression(array, false)
  if (twistScale > 0.71) {
    cube1.twistCube();
  }
}

let freqArray = Array(40).fill(0);
let freqArray2 = Array(40).fill(0);
let timeOfLastReading = performance.now();
let pulseScale = 0;
let pulseScale2 = 0;

function realTimeStdDev(energyVal, energyVal2) {
  if (performance.now() - timeOfLastReading > 20) {
    freqArray.push(energyVal)
    freqArray2.push(energyVal2)
    freqArray.shift()
    freqArray2.shift()
    timeOfLastReading = performance.now()
    pulseScale = MathHelpers.linearRegression(freqArray2, false)
    pulseScale2 = MathHelpers.linearRegression(freqArray, false)
  }
}

//Main animation loop
function mainLoop() {
  if (animationToggles.preset == 'A') {
    defaultPresets();
    defaultAnimation();
  } else if (animationToggles.preset == 'B') {
    defaultPresets();
    twistPulseAnimation();
  } else {
    orbitsPresets();
    orbitAnimation();
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

//Animation preset loops
function defaultPresets() {
  if (!presetOneShapes) {
    shapeCreator();
    presetOneShapes = true
  }
  if (presetTwoShapes) {

    sphere1.material.visible = true;
    cube1.material.visible = true;
    tetra1.material.visible = true;
    sphere2.material.visible = false;
    sphere3.material.visible = false;
    newObject.changePosition(0, 0, 200000)
    newPlanet.material.visible = false;
    presetTwoShapes = false;
  }
}

function orbitsPresets() {
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
    sphere3.material.visible = true;
    newObject.material.visible = true;
    newPlanet.material.visible = true;
  }
}

//default2
function twistPulseAnimation() {
  if (AudioTool.isSetup) {
    sphereScale = animationToggles.sphereBand.getScale();
    cubeScale = animationToggles.cubeBand.getScale();
    tetraScale = animationToggles.tetraBand.getScale();
    var color1 = Bass.getAvg(true);
    var color2 = Mids.getAvg(true);
    var color3 = Treble.getAvg(true);
    var x = Bass.getEnergy();
    var y = Treble.getEnergy();
    twister(cube1, x);
    realTimeStdDev(x[6], y[6]);


  }
  tetra1.changeOpacity((pulseScale * 2))
  sphere1.changeOpacity(pulseScale2)
  sphere1.changeScale(sphereScale, tetraScale, tetraScale);
  cube1.changeScale(cubeScale, cubeScale, cubeScale);
  tetra1.changeScale(tetraScale, tetraScale, tetraScale);

  //Background color animation loop

  if (animationToggles.bgColor) {
    bgColor.r = color1;
    bgColor.g = color2;
    bgColor.b = color3;
  }
  //Rotation loops
  if (animationToggles.sphereRotate) {
    sphere1.changeRotation(
      animationToggles.sphereRotateSpeed,
      0,
      0
    );
  }
  if (animationToggles.cubeRotate) {
    cube1.changeRotation(
      animationToggles.cubeRotateSpeed,
      animationToggles.cubeRotateSpeed,
      0
    );
  }
  if (animationToggles.tetraRotate) {
    tetra1.changeRotation(
      animationToggles.tetraRotateSpeed,
      animationToggles.tetraRotateSpeed,
      0
    );
  }
}
// Default animation
function defaultAnimation() {
  if (AudioTool.isSetup) {
    sphereScale = animationToggles.sphereBand.getScale();
    cubeScale = animationToggles.cubeBand.getScale();
    tetraScale = animationToggles.tetraBand.getScale();
    var color1 = Bass.getAvg(true);
    var color2 = Mids.getAvg(true);
    var color3 = Treble.getAvg(true);
  }

  sphere1.changeScale(sphereScale, sphereScale, sphereScale);
  cube1.changeScale(cubeScale, cubeScale, cubeScale);
  tetra1.changeScale(tetraScale, tetraScale, tetraScale);

  //Background color animation loop
  if (animationToggles.bgColor) {
    bgColor.r = color1;
    bgColor.g = color2;
    bgColor.b = color3;
  }
  //Rotation loops
  if (animationToggles.sphereRotate) {
    sphere1.changeRotation(
      animationToggles.sphereRotateSpeed,
      0,
      0
    );
  }
  if (animationToggles.cubeRotate) {
    cube1.changeRotation(
      animationToggles.cubeRotateSpeed,
      animationToggles.cubeRotateSpeed,
      0
    );
  }
  if (animationToggles.tetraRotate) {
    tetra1.changeRotation(
      animationToggles.tetraRotateSpeed,
      animationToggles.tetraRotateSpeed,
      0
    );
  }
}
mainLoop();


//Orbit animation
function orbitAnimation() {
  if (AudioTool.isSetup) {
    sphereScale = Bass.getScale(true);
    newObjectScale = Treble.getScale(true);
    newPlanetScale = Mids.getScale(true);
    var color1 = Bass.getAvg(true);
    var color2 = Mids.getAvg(true);
    var color3 = Treble.getAvg(true);
  }

  if (animationToggles.bgColor) {
    bgColor.r = color1;
    bgColor.g = color2;
    bgColor.b = color3;
  }

  newObject.changeScale(newObjectScale, newObjectScale, newObjectScale);
  sphere2.changeScale(sphereScale, sphereScale, sphereScale);
  newObject.orbit(sphere3);
  newPlanet.orbit(sphere2);

  if (animationToggles.sphereRotate) {
    sphere2.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }

  newObject.shape.rotation.y += 0.01
}