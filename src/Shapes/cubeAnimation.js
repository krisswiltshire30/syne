// let THREE = reqiure('three');

class Cube {
  constructor(width, height, depth, posX, posY, posZ, scene) {
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.material = new THREE.MeshNormalMaterial();
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.cube.position.x = posX
    this.cube.position.y = posY
    this.cube.position.z = posZ
    scene.add(this.cube);
  }

  changeScale(sizeScaler) {
    this.cube.scale.x = sizeScaler;
    this.cube.scale.y = sizeScaler;
    this.cube.scale.z = sizeScaler;
    
  }

  changePosition(posX, posY, posZ) {
    this.cube.position.x = posX;
    this.cube.position.y = posY;
    this.cube.position.z = posZ;
  }
}