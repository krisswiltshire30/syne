// let THREE = reqiure('three');

class Cube {
  constructor() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    scene.add(this.cube);
  }

  animate(size, position) {
    var animateShape = function (instance) {
      requestAnimationFrame(animate);
      instance.cube.scale.set(size, size, size);
      renderer.render(scene, camera);
    };
    this.cube.position.y = (position, position, position);
    animateShape(this);
  }
}