class Torus extends Solid{
    constructor(radius, posX, posY, posZ, scene) {
        super(scene);
        this.geometry = new THREE.TorusGeometry(radius, 30, 16, 100);
        this.material = new THREE.MeshNormalMaterial({
           wireframe: true
        });
        this.shape = new THREE.Mesh(this.geometry, this.material );
        this.shape.position.x = posX
        this.shape.position.y = posY
        this.shape.position.z = posZ
        scene.add( this.shape );
    }
}
  