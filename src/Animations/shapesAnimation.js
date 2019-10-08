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

  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;
  //Background color animation loop
  if (animationToggles.bgColor) {
    bgColor.r = color1;
    bgColor.g = color2;
    bgColor.b = color3;
  }
  //Cube color animation loop
  if (animationToggles.cubeColor) {
    cube1.material.color.r = color1;
    cube1.material.color.g = color2;
    cube1.material.color.b = color3;
  }

  if (animationToggles.sphereColor) {
    sphere1.material.color.r = color1;
    sphere1.material.color.g = color3;
    sphere1.material.color.b = color2;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();