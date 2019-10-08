var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.y = -1500;
camera.position.z = 2000;
camera.rotation.x = 0.70;

//background color set - important for dat.gui
bgColor = new THREE.Color(0x000000);
scene.background = bgColor;
var color = {
  value: bgColor.getHex()
}