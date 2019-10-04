var THREE = require('three');

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.y = -800;
camera.position.z = 800;
camera.rotation.x = 0.70;
var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );