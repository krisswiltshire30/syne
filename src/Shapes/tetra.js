class Tetra extends Solid {
  constructor(radius, posX, posY, posZ, scene) {
    super(scene)
    this.color = "#003e98";
    this.wireframe = true;
    this.geometry = new THREE.TetrahedronGeometry(radius, 0, 5);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: this.color,
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.shape.position.x = posX
    this.shape.position.y = posY
    this.shape.position.z = posZ
    this.scene.add(this.shape);
  }

  twistCube() {
    //look into Euler Vectors and Quaternion methods
    const quaternion = new THREE.Quaternion();
    for (let i = 0; i < this.shape.geometry.vertices.length; i++) {
      const yPos = this.shape.geometry.vertices[i].y;

      const upVec = new THREE.Vector3(0, -1, 0);
      var a = new THREE.Euler(0, 1, 1.57, 'XYZ');
      quaternion.setFromEuler(a, 2);

      this.shape.geometry.vertices[i].applyQuaternion(quaternion);
    }
    this.shape.geometry.verticesNeedUpdate = true;

  }
}