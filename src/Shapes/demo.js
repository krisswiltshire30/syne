class Demo extends Solid {
    constructor(radius, posX, posY, posZ, scene, orbitAlt, orbitAngle = 0, orbitAngleMod = 1) {
        super(scene, orbitAlt, orbitAngle, orbitAngleMod);
        var box = new THREE.SphereGeometry((radius / 4), 64, 64);
        var sphere = new THREE.SphereGeometry(radius, 64, 64);

        var singleGeometry = new THREE.Geometry();
        var boxMesh = new THREE.Mesh(box);
        var sphereMesh = new THREE.Mesh(sphere);
        boxMesh.updateMatrix(); // as needed
        this.geometry = singleGeometry.merge(boxMesh.geometry, boxMesh.matrix);

        sphereMesh.updateMatrix(); // as needed
        this.material = new THREE.MeshNormalMaterial({
            wireframe: true
        });
        this.shape = new THREE.Mesh(this.geometry, this.material);
        this.shape.position.x = posX
        this.shape.position.y = posY
        this.shape.position.z = posZ
        this.scene.add(this.shape);
    }
}