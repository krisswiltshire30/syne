class Sphere extends Solid{
  constructor(radius, posX, posY, posZ, scene) {
    super(scene, posX, posY, posZ);
    this.geometry = new THREE.SphereGeometry(radius, 64, 64);
    this.shape = new THREE.Mesh( this.geometry, this.material );
    this.shape.position.x = posX
    this.shape.position.y = posY
    this.shape.position.z = posZ
    this.scene.add(this.shape);
  }
}