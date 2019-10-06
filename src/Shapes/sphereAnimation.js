class Sphere {
  constructor(radius, posX, posY, posZ, scene) {
    this.color = "#003e98"
    this.wireframe = true
    this.geometry = new THREE.SphereGeometry(radius, 64, 64);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color
    });
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.sphere.position.x = posX
    this.sphere.position.y = posY
    this.sphere.position.z = posZ
    scene.add(this.sphere);
  }

  changeScale(sizeScaler) {
    this.sphere.scale.x = sizeScaler;
    this.sphere.scale.y = sizeScaler;
    this.sphere.scale.z = sizeScaler;
    return this.sphere.scale
  }

  changePosition(posX, posY, posZ) {
    this.sphere.position.x = posX;
    this.sphere.position.y = posY;
    this.sphere.position.z = posZ;
    return this.sphere.position
  }
}