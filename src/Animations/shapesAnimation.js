const sphere1 = new Sphere(150, -250, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 250, 0, 0, scene);
const tetra1 = new Tetra(200, 700, 0, 0, scene);
const torus1 = new Torus(100, -700, 0, 0, scene);

let sphereScale = 1;
let cubeScale = 1;
let tetraScale = 1;
let torusScale = 1;
let sphereRotation = 0.01;
let cubeRotation = 0.01;
let tetraRotation = 0.01;
let torusRotation = 0.01;

function mainLoop() {
  if (analyser) {
    sphereScale = AudioTool.getBassScale(analyser);
    cubeScale = AudioTool.getMidScale(analyser);
    tetraScale = AudioTool.getTrebleScale(analyser);
    torusScale = AudioTool.getSubBassScale(analyser);
    sphereRotation = AudioToolGraphics.getBassDecimal(analyser);
    cubeRotation = AudioToolGraphics.getMidDecimal(analyser);
    tetraRotation = AudioToolGraphics.getTrebleDecimal(analyser);
    torusRotation = AudioToolGraphics.getSubBassDecimal(analyser);

  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  torus1.changeScale(torusScale);
  sphere1.shape.rotation.z += sphereRotation;
  cube1.shape.rotation.x += cubeRotation;
  cube1.shape.rotation.y += cubeRotation;
  tetra1.shape.rotation.x += tetraRotation;
  tetra1.shape.rotation.y += tetraRotation;
  torus1.shape.rotation.x += torusRotation;
  torus1.shape.rotation.y += torusRotation;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}

mainLoop();