window.onload = function () {

  var gui = new dat.GUI({
    load: JSON
  });

  guiPresetOne();

  function guiPresetOne() {
    if (presetOne) {
      gui.remember(cube1, sphere1, tetra1, torus1, scene.background);
      // Create folders
      var cubeFolder = gui.addFolder('Cube');
      var sphereFolder = gui.addFolder('Sphere');
      var tetraFolder = gui.addFolder('Tetra');
      var torusFolder = gui.addFolder('Torus');
      var canvasFolder = gui.addFolder('Canvas');

      //Cube options
      cubeFolder.addColor(cube1, 'color').onChange(function () {
        cube1.material.color.set(cube1.color);
      });

      cubeFolder.add(cube1, 'wireframe').onChange(function () {
        cube1.material.wireframe = !cube1.material.wireframe
      });

      cubeFolder.add(animationToggles, 'cubeRotate').name('Rotate');

      cubeFolder.add(animationToggles, 'cubeRotateSpeed', -0.2, 0.5).name('Rotate speed');

      // cubeFolder.add(cube1, 'texture');

      //Sphere options
      sphereFolder.addColor(sphere1, 'color').name('Color').onChange(function () {
        sphere1.material.color.set(sphere1.color);
      });

      sphereFolder.add(sphere1, 'wireframe').name('Wireframe').onChange(function () {
        sphere1.material.wireframe = !sphere1.material.wireframe
      });

      sphereFolder.add(animationToggles, 'sphereRotate').name('Rotate');

      sphereFolder.add(animationToggles, 'sphereRotateSpeed', -0.2, 0.5).name('Rotate speed');

      //Tetra options
      tetraFolder.addColor(tetra1, 'color').onChange(function () {
        tetra1.material.color.set(tetra1.color);
      });

      tetraFolder.add(tetra1, 'wireframe').onChange(function () {
        tetra1.material.wireframe = !tetra1.material.wireframe
      });

      tetraFolder.add(animationToggles, 'tetraRotate').name('Rotate');

      tetraFolder.add(animationToggles, 'tetraRotateSpeed', -0.2, 0.5).name('Rotate speed');

      //Torus options
      torusFolder.addColor(torus1, 'color').name('Color').onChange(function () {
        torus1.material.color.set(torus1.color);
      });

      torusFolder.add(torus1, 'wireframe').name('Wireframe').onChange(function () {
        torus1.material.wireframe = !torus1.material.wireframe
      });

      torusFolder.add(animationToggles, 'torusRotate').name('Rotate');

      torusFolder.add(animationToggles, 'torusRotateSpeed', -0.2, 0.5).name('Rotate speed');

      torusFolder
      //Background colour
      canvasFolder.addColor(color, "value").name("background").onChange((value) => {
        bgColor.set(value);
      });

      canvasFolder.add(animationToggles, 'bgColor').name("Audio color");
    } // end of if statement
    else if (presetTwo) {
      gui.remember(sphere2, newObject, scene.background);

      var sphere2Folder = gui.addFolder('Centre Sphere');
      var newObjectFolder = gui.addFolder('Ringed Planet');

      //Cube options
      sphere2Folder.addColor(sphere2, 'color').onChange(function () {
        sphere2.material.color.set(sphere2.color);
      });

      sphere2Folder.add(sphere2, 'wireframe').onChange(function () {
        sphere2.material.wireframe = !sphere2.material.wireframe
      });

      sphere2Folder.add(animationToggles, 'cubeRotate').name('Rotate');

      sphere2Folder.add(animationToggles, 'cubeRotateSpeed', -0.2, 0.5).name('Rotate speed');

      // cubeFolder.add(cube1, 'texture');

      //Sphere options
      newObjectFolder.addColor(newObject, 'color').name('Color').onChange(function () {
        newObject.material.color.set(newObject.color);
      });

      newObjectFolder.add(newObject, 'wireframe').name('Wireframe').onChange(function () {
        newObject.material.wireframe = !newObject.material.wireframe
      });

      newObjectFolder.add(animationToggles, 'sphereRotate').name('Rotate');

      newObjectFolder.add(animationToggles, 'sphereRotateSpeed', -0.2, 0.5).name('Rotate speed');


      //Background colour
      canvasFolder.addColor(color, "value").name("background").onChange((value) => {
        bgColor.set(value);
      });

      canvasFolder.add(animationToggles, 'bgColor').name("Audio color");
    }

  }
  gui.add(animationToggles, 'preset', {
    Default: 'A',
    Orbit: 'B',
  }).name('Presets').onChange(function () {
    if (animationToggles.preset == 'A') {
      return guiPresetOne();
    } else {
      return guiPresetTwo();
    }
  });
}

let cameraControl = canvasFolder.add(animationToggles, 'cameraControl');
cameraControl.name('Camera controls');
cameraControl.onChange((value) => {
  if (!value) {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1500;
  } else {
    controls = this.setupOrbitCameraControls();
  }
});

function guiPresetTwo() {

  gui.remember(sphere2, newObject, scene.background);

  var sphere2Folder = gui.addFolder('Centre Sphere');
  var newObjectFolder = gui.addFolder('Ringed Planet');

  //Cube options
  sphere2Folder.addColor(sphere2, 'color').onChange(function () {
    sphere2.material.color.set(sphere2.color);
  });

  sphere2Folder.add(sphere2, 'wireframe').onChange(function () {
    sphere2.material.wireframe = !sphere2.material.wireframe
  });

  sphere2Folder.add(animationToggles, 'cubeRotate').name('Rotate');

  sphere2Folder.add(animationToggles, 'cubeRotateSpeed', -0.2, 0.5).name('Rotate speed');

  // cubeFolder.add(cube1, 'texture');

  //Sphere options
  newObjectFolder.addColor(newObject, 'color').name('Color').onChange(function () {
    newObject.material.color.set(newObject.color);
  });

  newObjectFolder.add(newObject, 'wireframe').name('Wireframe').onChange(function () {
    newObject.material.wireframe = !newObject.material.wireframe
  });

  newObjectFolder.add(animationToggles, 'sphereRotate').name('Rotate');

  newObjectFolder.add(animationToggles, 'sphereRotateSpeed', -0.2, 0.5).name('Rotate speed');


  //Background colour
  canvasFolder.addColor(color, "value").name("background").onChange((value) => {
    bgColor.set(value);
  });

  canvasFolder.add(animationToggles, 'bgColor').name("Audio color");
}