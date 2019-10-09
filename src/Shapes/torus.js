class Torus extends Solid{
    constructor(radius, posX, posY, posZ, scene) {
      super(scene);
      this.color = "#003e98";
      this.wireframe = true;
      this.visible = true;
      this.geometry = new THREE.TorusGeometry(radius, 30, 64, 64);
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