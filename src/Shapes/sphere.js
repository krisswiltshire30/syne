class Sphere extends Solid {
  constructor(radius, posX, posY, posZ, scene) {
    super(scene);
    this.color = "#003e98";
    this.wireframe = true;
    this.thetaLength = (2 * Math.PI)
    this.geometry = new THREE.SphereGeometry(radius, 64, 64, 100, this.thetaLength);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX
    this.shape.position.y = posY
    this.shape.position.z = posZ
    this.scene.add(this.shape);
  }

  setTheta = function (x) {
    this.shape.scale.set.y = x
    // var x = (Math.random() * (2 * Math.PI))
    // this.shape.geometry.thetaLength = x
  }

  // twistSphere() {
  //   //use values between 0 - 1, but then use the inverse of these to return to original
  //   const quaternion = new THREE.Quaternion();
  //   for (let i = 0; i < this.shape.geometry.vertices.length; i++) {
  //     const yPos = this.shape.geometry.vertices[i].y;

  //     const upVec = new THREE.Vector3(0, -1, 0);

  //     quaternion.setFromAxisAngle(upVec, (Math.PI / 180) * yPos);
  //     this.shape.geometry.vertices[i].applyQuaternion(quaternion);
  //   }
  //   this.shape.geometry.verticesNeedUpdate = true;

  // }

}