window.onload = function () {


  var gui = new dat.GUI({
    load: JSON
  });

  gui.remember(cube1, sphere1, tetra1, scene.background);

  // Create folders
  var cubeFolder = gui.addFolder('Cube');
  var sphereFolder = gui.addFolder('Sphere');
  var tetraFolder = gui.addFolder('Tetra');
  var canvasFolder = gui.addFolder('Canvas');

  //Cube options
  cubeFolder.addColor(cube1, 'color').onChange(function () {
    cube1.material.color.set(cube1.color);
  });

  cubeFolder.add(cube1, 'wireframe').onChange(function () {
    cube1.material.wireframe = !cube1.material.wireframe
  });

  // cubeFolder.add(cube1, 'texture');

  //Sphere options
  sphereFolder.addColor(sphere1, 'color').name('Color').onChange(function () {
    sphere1.material.color.set(sphere1.color);
  });

  sphereFolder.add(sphere1, 'wireframe').name('Wireframe').onChange(function () {
    sphere1.material.wireframe = !sphere1.material.wireframe
  });

  //Tetra options
  tetraFolder.addColor(tetra1, 'color').onChange(function () {
    tetra1.material.color.set(tetra1.color);
  });

  tetraFolder.add(tetra1, 'wireframe').onChange(function () {
    tetra1.material.wireframe = !tetra1.material.wireframe
  });

  //Background colour
  canvasFolder.addColor(color, "value").name("background").onChange((value) => {
    bgColor.set(value);
  });

  canvasFolder.add(animationToggles, 'bgColor').name("Audio color")

}