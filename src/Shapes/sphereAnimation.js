class Sphere {
  constructor(radius, posX, posY, posZ, scene) {
    this.geometry = new THREE.SphereGeometry(radius, 64, 64);
    this.material = new THREE.MeshNormalMaterial( {wireframe: true}  );
    this.sphere = new THREE.Mesh(this.geometry, this.material );
    this.sphere.position.x = posX
    this.sphere.position.y = posY
    this.sphere.position.z = posZ
    scene.add( this.sphere );
  }

  changeScale(sizeScaler) {
    this.sphere.scale.x = sizeScaler;
    this.sphere.scale.y = sizeScaler;
    this.sphere.scale.z = sizeScaler;
    
  }

  changePosition(posX, posY, posZ) {
    this.sphere.position.x = posX;
    this.sphere.position.y = posY;
    this.sphere.position.z = posZ;
  }
}
