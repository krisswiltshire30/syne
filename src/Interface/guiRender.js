window.onload = function () {

  gui.remember(sphere1, cube1, tetra1, scene.background);
  
  generateGUI('sphere', sphere1, gui);
  generateGUI('cube', cube1, gui);
  generateGUI('tetra', tetra1, gui);

  //Background colour
  var canvasFolder = gui.addFolder('Canvas');

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