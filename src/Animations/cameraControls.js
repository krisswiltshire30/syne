function setupOrbitCameraControls() {
  let controls = new OrbitControls( camera, renderer.domElement );

  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.01;
  controls.screenSpacePanning = false;
  controls.minDistance = 300;
  controls.maxDistance = 5000;
  controls.maxPolarAngle = Math.PI / 2;
  return controls
}