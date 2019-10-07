class Solid {
  constructor(scene, orbitAlt, orbitAngle, orbitAngleMod) {
    this.scene = scene;
    this.material = new THREE.MeshNormalMaterial({
      wireframe: true
    });
    this.orbitAlt = orbitAlt;
    this.orbitAngle = orbitAngle;
    this.orbitAngleMod = orbitAngleMod;
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

  orbit(object) {
    this.shape.position.x = object.shape.position.x + this.orbitAlt * Math.cos((this.orbitAngle));
    this.shape.position.y = object.shape.position.y + this.orbitAlt * Math.sin((this.orbitAngle));
    this.orbitAngle = this.orbitAngle + this.orbitAngleMod;
    if (this.orbitAngle >= 360) {
      this.orbitAngle = 0;
    }
  }
}