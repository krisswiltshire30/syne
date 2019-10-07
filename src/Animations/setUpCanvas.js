let camera, controls;

camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.y = - 800;
camera.position.z = 800;
camera.rotation.x = 0.7;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();

controls = new OrbitControls( camera, renderer.domElement );
	
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.005;
controls.screenSpacePanning = false;
controls.minDistance = 300;
controls.maxDistance = 5000;
controls.maxPolarAngle = Math.PI / 2;
