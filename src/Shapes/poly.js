class Poly extends Solid {
    constructor(radius, posX, posY, posZ, scene, orbitAlt, orbitAngle = 0, orbitAngleMod = 1) {
        super(scene, orbitAlt, orbitAngle, orbitAngleMod);
        var points = [];
<<<<<<< HEAD
        this.visible;
        for (var i = 0; i < 81; i++) {
            points.push(new THREE.Vector2(Math.sin(i * 0.1) * 50 + 200, (i - 1) * 0.1));
        }
        var box = new THREE.LatheGeometry(points);
        var smallMaterial = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: "#003e98",
            visible: this.visible,

=======
        this.wireframe = true;
        for (var i = 0; i < 80; i++) {
            points.push(new THREE.Vector2(Math.sin(i * 100) * 40 + 200, (i - 1) * 10));
        }
        var box = new THREE.LatheGeometry(points);
        var smallMaterial = new THREE.MeshNormalMaterial({
            color: new THREE.Color('green'),
            wireframe: this.wireframe
>>>>>>> 7e2922c91bc3a1b77fbcd0d3f1ca14ae8b140ca5
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