class Cube extends Solid{
  constructor(width, height, depth, posX, posY, posZ, scene) {
    super(scene);
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX;
    this.shape.position.y = posY;
    this.shape.position.z = posZ;
    this.scene.add(this.shape);
  }
}