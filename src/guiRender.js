window.onload = function () {

  var gui = new dat.GUI({
    load: JSON
  });

  gui.remember(cube, sphere, tetra, scene);



  // Create folders
  var cubeFolder = gui.addFolder('Cube');
  var sphereFolder = gui.addFolder('Sphere');
  var tetraFolder = gui.addFolder('Tetra');
  var canvasFolder = gui.addFolder('Canvas');

  //Cube options
  cubeFolder.addColor(cube, 'color').onChange(function () {
    cube.material.color.set(cube.color);
  });

  cubeFolder.add(cube, 'wireframe').onChange(function () {
    if (cube.material.wireframe) {
      cube.material.wireframe = false
    } else {
      cube.material.wireframe = true
      return
    }
  });

  // cubeFolder.add(cube, 'texture1')

  //Sphere options
  sphereFolder.addColor(sphere, 'color').onChange(function () {
    sphere.material.color.set(sphere.color);
  });

  sphereFolder.add(sphere, 'wireframe').onChange(function () {
    if (sphere.material.wireframe) {
      sphere.material.wireframe = false
    } else {
      sphere.material.wireframe = true
      return
    }
  });


  //Tetra options
  tetraFolder.addColor(tetra, 'color').onChange(function () {
    tetra.material.color.set(tetra.color);
  });

  tetraFolder.add(tetra, 'wireframe').onChange(function () {
    if (tetra.material.wireframe) {
      tetra.material.wireframe = false
    } else {
      tetra.material.wireframe = true
      return
    }
  });

  //Background colour
  canvasFolder.addColor(color, "value").name("background").onChange((value) => {
    c.set(value);
  })

  gui.add('FullScreen')




  var elem = scene

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
}