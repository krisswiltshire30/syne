class Cone {
    constructor() {
        //do we want to input geometry values into constructor?
        this.geometry = new THREE.ConeGeometry( 5, 20, 32 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.cone = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.cone );
        renderer.render(scene, camera);
    }

    animate(sizeScalerX, sizeScalerY, sizeScalerZ) {
        var animateShape = function(instance) {
          instance.cone.scale.x = sizeScalerX;
          instance.cone.scale.y = sizeScalerY;
          instance.cone.scale.z = sizeScalerZ;
          renderer.render(scene, camera);
      }
      animateShape(this);
    }
};