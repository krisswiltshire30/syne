class Sphere extends Solid {
  constructor(radius, posX, posY, posZ, scene) {
    super(scene);
    this.color = "#003e98";
    this.wireframe = true;
    this.geometry = new THREE.SphereGeometry(radius, 64, 64);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: this.color
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX
    this.shape.position.y = posY
    this.shape.position.z = posZ
    this.scene.add(this.shape);
  }
}