<<<<<<< HEAD
const sphere1 = new Sphere(150, -250, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 250, 0, 0, scene);
const tetra1 = new Tetra(200, 750, 0, 0, scene);
const torus1 = new Torus(100, -750, 0, 0, scene);
=======
AudioTool.setup();

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);
>>>>>>> f77a22ec54b274ba0e7fe0a0a74f4726ada35793

let sphereScale = 1;
let cubeScale = 1;
let tetraScale = 1;
let torusScale = 1;

<<<<<<< HEAD
function mainLoop(){
  if (analyser) {
    sphereScale = AudioTool.getBassScale(analyser);
    cubeScale = AudioTool.getMidScale(analyser);
    tetraScale = AudioTool.getTrebleScale(analyser);
    torusScale = AudioTool.getSubBassScale(analyser);
=======
function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = 1 + AudioTool.getBassAverage(true);
    cubeScale = 1 + AudioTool.getMidAverage(true);
    tetraScale = 1 + AudioTool.getTrebleAverage(true);
>>>>>>> f77a22ec54b274ba0e7fe0a0a74f4726ada35793
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  torus1.changeScale(torusScale);
  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;
  torus1.shape.rotation.x += 0.01;
  torus1.shape.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();