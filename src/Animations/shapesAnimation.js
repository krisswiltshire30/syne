var THREE = require('three');

const sphere1 = new Sphere(150, -500, 0, 0, scene);
const cube1 = new Cube(200, 200, 200, 0, 0, 0, scene);
const tetra1 = new Tetra(200, 500, 0, 0, scene);

let sphereScale = 1;
let cubeScale = 1;
let tetraScale = 1;

function mainLoop(){
  if (analyser) {
    sphereScale = AudioTool.getBassScale(analyser);
    cubeScale = AudioTool.getMidScale(analyser);
    tetraScale = AudioTool.getTrebleScale(analyser);
  }

  sphere1.changeScale(sphereScale);
  cube1.changeScale(cubeScale);
  tetra1.changeScale(tetraScale);
  sphere1.sphere.rotation.z += 0.01;
  cube1.cube.rotation.x += 0.01;
  cube1.cube.rotation.y += 0.01;
  tetra1.tetra.rotation.x += 0.01;
  tetra1.tetra.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();