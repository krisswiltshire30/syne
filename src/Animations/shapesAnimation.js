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
  tetra1.changeOpacity(tetraScale);
  sphere1.changeOpacity(sphereScale);
  sphere1.shape.rotation.z += 0.01;
  cube1.shape.rotation.x += 0.01;
  cube1.shape.rotation.y += 0.01;
  tetra1.shape.rotation.x += 0.01;
  tetra1.shape.rotation.y += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(mainLoop);
}
mainLoop();