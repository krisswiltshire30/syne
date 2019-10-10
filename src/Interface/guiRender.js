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

  cubeFolder.add(cube1, 'visible').name('Visible').onChange(function () {
    cube1.material.visible = !cube1.material.visible
  });

  cubeFolder.add(animationToggles, 'cubeRotate').name('Rotate');

  cubeFolder.add(animationToggles, 'cubeRotateSpeed', -0.2, 0.5).name('Rotate speed');

  let bands = {
    cubeBand: "Mids",
    sphereBand: "Bass",
    tetraBand: "Treble",
  }

  let cubeBandSelector = cubeFolder.add(bands, 'cubeBand', {
    Bass: "Bass",
    Mids: "Mids",
    Treble: "Treble"
  }).name("Band");

  cubeBandSelector.onChange(function (value) {
    switch (value) {
      case "Bass":
        animationToggles.cubeBand = Bass;
        break;

      case "Mids":
        animationToggles.cubeBand = Mids;
        break;

      case "Treble":
        animationToggles.cubeBand = Treble;
        break;

      default:
        break;
    }
  });

  // cubeFolder.add(cube1, 'texture');

  //Sphere options
  sphereFolder.addColor(sphere1, 'color').name('Color').onChange(function () {
    sphere1.material.color.set(sphere1.color);
  });

  sphereFolder.add(sphere1, 'wireframe').name('Wireframe').onChange(function () {
    sphere1.material.wireframe = !sphere1.material.wireframe
  });

  sphereFolder.add(sphere1, 'visible').name('Visible').onChange(function () {
    sphere1.material.visible = !sphere1.material.visible
  });


  sphereFolder.add(animationToggles, 'sphereRotate').name('Rotate');

  sphereFolder.add(animationToggles, 'sphereRotateSpeed', -0.2, 0.5).name('Rotate speed');

  let sphereBandSelector = sphereFolder.add(bands, 'sphereBand', {
    Bass: "Bass",
    Mids: "Mids",
    Treble: "Treble"
  }).name("Band");

  sphereBandSelector.onChange(function (value) {
    switch (value) {
      case "Bass":
        animationToggles.sphereBand = Bass;
        break;

      case "Mids":
        animationToggles.sphereBand = Mids;
        break;

      case "Treble":
        animationToggles.sphereBand = Treble;
        break;

      default:
        break;
    }
  });
  //Tetra options
  tetraFolder.addColor(tetra1, 'color').onChange(function () {
    tetra1.material.color.set(tetra1.color);
  });

  tetraFolder.add(tetra1, 'wireframe').onChange(function () {
    tetra1.material.wireframe = !tetra1.material.wireframe
  });

  tetraFolder.add(tetra1, 'visible').name('Visible').onChange(function () {
    tetra1.material.visible = !tetra1.material.visible
  });


  tetraFolder.add(animationToggles, 'tetraRotate').name('Rotate');

  tetraFolder.add(animationToggles, 'tetraRotateSpeed', -0.2, 0.5).name('Rotate speed');

  let tetraBandSelector = tetraFolder.add(bands, 'tetraBand', {
    Bass: "Bass",
    Mids: "Mids",
    Treble: "Treble"
  }).name("Band");

  tetraBandSelector.onChange(function (value) {
    switch (value) {
      case "Bass":
        animationToggles.tetraBand = Bass;
        break;

      case "Mids":
        animationToggles.tetraBand = Mids;
        break;

      case "Treble":
        animationToggles.tetraBand = Treble;
        break;

      default:
        break;
    }
  });
  //Background colour
  canvasFolder.addColor(color, "value").name("background").onChange((value) => {
    bgColor.set(value);
  });

  canvasFolder.add(animationToggles, 'bgColor').name("Audio color");

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


  gui.add(animationToggles, 'preset', {
    Default: 'A',
    Twister: 'B',
    Orbit: 'C'
  }).name('Presets');


}