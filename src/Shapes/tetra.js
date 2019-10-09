class Tetra extends Solid {
  constructor(radius, posX, posY, posZ, scene) {
    super(scene)
    this.color = "#003e98";
    this.wireframe = true;
    this.visible = true;
    this.geometry = new THREE.TetrahedronGeometry(radius, 0, 5);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color,
      visible: this.visible,
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX
    this.shape.position.y = posY
    this.shape.position.z = posZ
    this.scene.add(this.shape);
  }
}