class Cube {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
    this.camera.position.z = 4;
  }

  animate(size) {
    var animateShape = function (instance) {
      instance.cube.scale.set(size, size, size);
      requestAnimationFrame(animateShape(this));
      instance.renderer.render(instance.scene, instance.camera);
    }
    animateShape(this);
  }
}