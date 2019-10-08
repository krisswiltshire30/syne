class Poly extends Solid {
    constructor(radius, posX, posY, posZ, scene, orbitAlt, orbitAngle = 0, orbitAngleMod = 1) {
        super(scene, orbitAlt, orbitAngle, orbitAngleMod);
        var points = [];
        this.wireframe = true;
        for (var i = 0; i < 80; i++) {
            points.push(new THREE.Vector2(Math.sin(i * 100) * 40 + 200, (i - 1) * 10));
        }
        var box = new THREE.LatheGeometry(points);
        var smallMaterial = new THREE.MeshNormalMaterial({
            color: new THREE.Color('green'),
            wireframe: this.wireframe
        });
        var boxMesh = new THREE.Mesh(box, smallMaterial);
        var avocado = new THREE.SphereGeometry(radius, 64, 64);

        boxMesh.updateMatrix(); // as needed

        avocado.merge(boxMesh.geometry, boxMesh.matrix, 10);

        this.shape = new THREE.Mesh(avocado, smallMaterial);
        this.shape.position.x = posX
        this.shape.position.y = posY
        this.shape.position.z = posZ
        this.scene.add(this.shape);
    }
}