class Solid {
  constructor(scene) {
    this.scene = scene;
    this.material = new THREE.MeshNormalMaterial({
      wireframe: true
    });
  }

  changeOpacity(scalingValue) {
    //temporary conversion into scaler between 0-1.0
    var scalingValueDecimal = (scalingValue - 1);

    this.material.transparent = true;
    this.material.opacity = scalingValueDecimal;

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