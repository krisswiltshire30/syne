AudioTool.setup();

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);

sphereScale = 1;
cubeScale = 1;
tetraScale = 1;

var animationToggles = {
  bgColor: false,
  cubeColor: false,
  sphereColor: false,
  tetraColor: false,
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
    var color1 = Bass.getAvg(true);
    var color2 = Mids.getAvg(true);
    var color3 = Treble.getAvg(true);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);

  //Background color animation loop
  if (animationToggles.bgColor) {
    bgColor.r = color1;
    bgColor.g = color2;
    bgColor.b = color3;
  }
  //Cube color animation loop
  if (animationToggles.cubeColor) {
    cube1.material.color.r = color2;
    cube1.material.color.g = color3;
    cube1.material.color.b = color1;
  } else {
    cube1.material.color = new THREE.Color("#003e98")
  }
  //Sphere color animation loop
  if (animationToggles.sphereColor) {
    sphere1.material.color.r = color1;
    sphere1.material.color.g = color3;
    sphere1.material.color.b = color2;
  } else {
    sphere1.material.color = new THREE.Color("#003e98")
  }
  //Tetra color animation loop
  if (animationToggles.tetraColor) {
    tetra1.material.color.r = color3;
    tetra1.material.color.g = color2;
    tetra1.material.color.b = color1;
  } else {
    tetra1.material.color = new THREE.Color("#003e98")
  }
  //Rotation loops
  if (animationToggles.sphereRotate) {
    sphere1.changeRotation(animationToggles.sphereRotateSpeed, 0, 0);
  }
  if (animationToggles.cubeRotate) {
    cube1.changeRotation(animationToggles.cubeRotateSpeed, animationToggles.cubeRotateSpeed, 0);
  }
  if (animationToggles.tetraRotate) {
    tetra1.changeRotation(animationToggles.tetraRotateSpeed, animationToggles.tetraRotateSpeed, 0);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();