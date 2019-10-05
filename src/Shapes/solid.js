class Solid {
  constructor(scene) {
    this.scene = scene;
  }

  changeOpacity(sizeScaler) {
    //temporary conversion into scaler between 0-1.0
    var sizeScalerDecimal = (sizeScaler - 1);
    this.shape.material.transparent = true;
    this.shape.material.opacity = sizeScalerDecimal;
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