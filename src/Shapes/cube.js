class Cube extends Solid {
  constructor(width, height, depth, posX, posY, posZ, scene) {
    super(scene);
    this.color = new THREE.Color("#003e98");
    this.wireframe = true;
    this.segments = 20;
    this.geometry = new THREE.BoxGeometry(width, height, depth, this.segments, this.segments, this.segments);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color,
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX;
    this.shape.position.y = posY;
    this.shape.position.z = posZ;
    this.scene.add(this.shape);
  }
}