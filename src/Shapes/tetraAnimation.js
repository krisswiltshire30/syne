class Tetra {
  constructor(radius, posX, posY, posZ, scene) {
    // this.texture = new THREE.TextureLoader().load("textures/gomme.png");
    this.color = "#003e98"
    this.wireframe = true
    this.texture = null
    this.geometry = new THREE.TetrahedronGeometry(radius);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color
    });
    this.tetra = new THREE.Mesh(this.geometry, this.material);
    this.tetra.position.x = posX
    this.tetra.position.y = posY
    this.tetra.position.z = posZ
    scene.add(this.tetra);
  }

  changeScale(sizeScaler) {
    this.tetra.scale.x = sizeScaler;
    this.tetra.scale.y = sizeScaler;
    this.tetra.scale.z = sizeScaler;
  }

  changePosition(posX, posY, posZ) {
    this.tetra.position.x = posX;
    this.tetra.position.y = posY;
    this.tetra.position.z = posZ;
  }
}