class Cube {
  constructor(width, height, depth, posX, posY, posZ, scene) {
    // this.texture = new THREE.TextureLoader().load("textures/gomme.png");
    this.color = "#003e98"
    this.wireframe = true
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.material = new THREE.MeshBasicMaterial({
      // map: this.texture,
      color: this.color,
      wireframe: this.wireframe
    });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.x = posX;
    this.cube.position.y = posY;
    this.cube.position.z = posZ;
    scene.add(this.cube);
  }

  changeScale(sizeScaler) {
    this.cube.scale.x = sizeScaler;
    this.cube.scale.y = sizeScaler;
    this.cube.scale.z = sizeScaler;
    return this.cube.scale
  }

  changePosition(posX, posY, posZ) {
    this.cube.position.x = posX;
    this.cube.position.y = posY;
    this.cube.position.z = posZ;
    return this.cube.position
  }
}