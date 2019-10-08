class Poly extends Solid {
    constructor(radius, posX, posY, posZ, scene, orbitAlt, orbitAngle = 0, orbitAngleMod = 1) {
        super(scene, orbitAlt, orbitAngle, orbitAngleMod);
        var points = [];
        for (var i = 0; i < 81; i++) {
            points.push(new THREE.Vector2(Math.sin(i * 0.1) * 50 + 200, (i - 1) * 0.1));
        }
        var box = new THREE.LatheGeometry(points);
        var smallMaterial = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: "#003e98"

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