class Cube extends Solid {
  constructor(width, height, depth, posX, posY, posZ, scene) {
    super(scene);
    this.color = "#003e98";
    this.wireframe = true;
    this.segments = 1;
    this.visible = true;
    this.geometry = new THREE.BoxGeometry(width, height, depth, this.segments, this.segments, this.segments);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: this.wireframe,
      color: this.color,
      visible: this.visible,
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX;
    this.shape.position.y = posY;
    this.shape.position.z = posZ;
    this.scene.add(this.shape);
  }

  twistCube() {
    const quaternion = new THREE.Quaternion();
    for (let i = 0; i < this.shape.geometry.vertices.length; i++) {
      const yPos = this.shape.geometry.vertices[i].y;

      const upVec = new THREE.Vector3(0, 1, 0);

      quaternion.setFromAxisAngle(upVec, (Math.PI / 180) * yPos);
      this.shape.geometry.vertices[i].applyQuaternion(quaternion);
    }
    this.shape.geometry.verticesNeedUpdate = true;

  }
}