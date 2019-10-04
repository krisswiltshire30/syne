class Tetra {
  constructor(radius, posX, posY, posZ, scene) {
        //do we want to input geometry values into constructor?
        this.geometry = new THREE.TetrahedronGeometry( radius );
        this.material = new THREE.MeshNormalMaterial( {wireframe: true} );
        this.tetra = new THREE.Mesh( this.geometry, this.material );
        this.tetra.position.x = posX
        this.tetra.position.y = posY
        this.tetra.position.z = posZ
        scene.add( this.tetra );
    }

    changeScale(sizeScaler) {
      this.tetra.scale.x = sizeScaler;
      this.tetra.scale.y = sizeScaler;
      this.tetra.scale.z = sizeScaler;
    }
  
    changePosition(posX, posY, posZ) {
      this.tetra.position.x = posX;
      this.tetra.position.y = posY;
      this.tetra.position.z = posZ;
    }
}