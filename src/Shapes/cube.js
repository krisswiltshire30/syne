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

  twistCube(twistValue) {
    //use values between 0 - 1, but then use the inverse of these to return to original shape
    const quaternion = new THREE.Quaternion();
    for (let i = 0; i < this.shape.geometry.vertices.length; i++) {
      const yPos = this.shape.geometry.vertices[i].y;
      const twistAmount = twistValue;
      const upVec = new THREE.Vector3(0, 1, 0);

      quaternion.setFromAxisAngle(
        upVec, 
        (Math.PI / 180) * (yPos / twistAmount)
      );
      this.shape.geometry.vertices[i].applyQuaternion(quaternion);
    }
    this.shape.geometry.verticesNeedUpdate = true;
  }
}