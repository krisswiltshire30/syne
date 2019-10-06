class Octa extends Solid{
    constructor(radius, posX, posY, posZ, scene) {
      super(scene)
      this.geometry = new THREE.OctahedronGeometry( radius );
      this.material = new THREE.MeshNormalMaterial( {wireframe: true} );
      this.shape = new THREE.Mesh( this.geometry, this.material );
      this.shape.position.x = posX
      this.shape.position.y = posY
      this.shape.position.z = posZ
      this.scene.add( this.shape );
    }
  }