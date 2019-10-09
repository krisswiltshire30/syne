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

  changeOpacity(input) {
    this.material.transparent = true;
    this.material.opacity = input;
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

function createMesh(scene) { // load the image as a texture 
  texture = new THREE.TextureLoader().load("textures/gomme.bnp"); // all we need is a simple planar mesh. 9 by 9 units with 45x45 verticies               
  var planeGeometry = new THREE.PlaneGeometry(9, 9, 45, 45); // add a uniform for the amplitude and the texture.  These are read-only                  // variables that get passed to our shaders              
  uniforms = {
    amplitude: {
      type: 'f',
      value: 0
    },
    texImage: {
      type: 't',
      value: texture
    }
  }; // these are variables with one per vertex 
  var attributes = {
    displacement: {
      type: 'f', // a float 
      value: [] // an empty array 
    }
  };

  // now populate the array of attributes.  This creates a simple parametric  
  // surface with the shape of a sine wave 

  var values = attributes.displacement.value;

  for (var y = 0; y < 46; y++) {
    for (var x = 0; x < 46; x++) {
      var sVal = Math.sin((((x / 5.0) * 40.0) / 360.0) * Math.PI * 2.0);
      var index = x + 46 * y;
      values[index] = sVal;
    }
  }


  // finally create the mesh and add it to the scene 
  var mesh = new THREE.Mesh(planeGeometry);
  scene.add(mesh);
}