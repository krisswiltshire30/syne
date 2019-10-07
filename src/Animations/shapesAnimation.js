AudioTool.setup();

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);
const sphere2 = new Sphere(100, -1000, 0, 0, scene, 600);
const sphere3 = new Sphere(20, -750, 0, 0, scene, 300);

sphere3.orbitAngleMod = 5

let sphereScale = 1;
let cubeScale = 1;
let tetraScale = 1;
let sphere2Scale = 1;

function mainLoop() {
  if (AudioTool.isSetup) {
    sphereScale = 1 + AudioTool.getBassAverage(true);
    cubeScale = 1 + AudioTool.getMidAverage(true);
    tetraScale = 1 + AudioTool.getTrebleAverage(true);
    sphere2Scale = 1 + AudioTool.getBassAverage(true);
    //sphere2.orbitAngleMod = ((AudioTool.getBassAverage(true) + 1) * 5);
  }

  sphere2.changeScale(sphere2Scale);
  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  sphere2.shape.rotation.x += 0.01;
  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;
  sphere2.orbit(sphere1);
  sphere3.orbit(sphere2);

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();