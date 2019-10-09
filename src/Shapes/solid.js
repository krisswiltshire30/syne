class Solid {
  constructor(scene, orbitAlt, orbitAngle = 0, orbitAngleMod = 1) {
    this.scene = scene;
    this.material = new THREE.MeshBasicMaterial({
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
    this.shape.position.x = object.shape.position.x + this.orbitAlt * Math.cos(this.radians(this.orbitAngle));
    //this.shape.position.y = object.shape.position.y + this.orbitAlt * Math.sin(this.radians(this.orbitAngle));
    this.shape.position.z = object.shape.position.z + this.orbitAlt * Math.sin(this.radians(this.orbitAngle));

    this.orbitAngle = this.orbitAngle + this.orbitAngleMod;
    if (this.orbitAngle >= 360) {
      this.orbitAngle = 0;
    }
  }

  radians(degrees) {
    return (degrees * Math.PI / 180)
  }
  changeRotation(rotationX, rotationY, rotationZ) {
    this.rotateX(rotationX);
    this.rotateY(rotationY);
    this.rotateZ(rotationZ);
  }

  rotateX(value) {
    this.shape.rotation.x += value;
    if (this.shape.rotation.x > 360) {
      this.shape.rotation.x -= 360
    }
  }

  rotateY(value) {
    this.shape.rotation.y += value;
    if (this.shape.rotation.y > 360) {
      this.shape.rotation.y -= 360
    }
  }

  rotateZ(value) {
    this.shape.rotation.z += value;
    if (this.shape.rotation.z > 360) {
      this.shape.rotation.z -= 360
    }
  }
}