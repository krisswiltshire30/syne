class Solid {
  constructor(scene) {
    this.scene = scene;
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true
    });
  }

  changeOpacity(sizeScaler) {
    //temporary conversion into scaler between 0-1.0
    var sizeScalerDecimal = (sizeScaler - 1);

    this.material.transparent = true;
    this.material.opacity = sizeScalerDecimal;

    return this.material.opacity;
  }

  changeScale(sizeScaler) {
    this.shape.scale.x = sizeScaler;
    this.shape.scale.y = sizeScaler;
    this.shape.scale.z = sizeScaler;
    return this.shape.scale
  }

  changePosition(posX, posY, posZ) {
    this.shape.position.x = posX;
    this.shape.position.y = posY;
    this.shape.position.z = posZ;
    return this.shape.position
  }
}