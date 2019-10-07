var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.y = -800;
camera.position.z = 800;
camera.rotation.x = 0.70;

//background color set - important for dat.gui
bgColor = new THREE.Color(0x000000);
scene.background = bgColor;
var color = {
  value: bgColor.getHex()
}

var color1 = Bass.getAvg(true);
var color2 = Mids.getAvg(true);
var color3 = Treble.getAvg(true);

function changeColor(red, green, blue) {
  bgColor.r = red;
  bgColor.g = green;
  bgColor.b = blue;
  return bgColor;
}