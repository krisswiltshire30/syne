class Text extends Solid {
    constructor(size, height) {
        var loader = new THREE.FontLoader();
        super(scene);
        loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

            this.geometry = new THREE.TextGeometry( 'Hello three.js!', {
                font: font,
                size: size,
                height: height,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5
            });
        });
    }
}