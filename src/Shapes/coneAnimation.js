class Cone {
    constructor() {
        this.geometry = new THREE.ConeGeometry( 5, 20, 32 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.cone = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.cone );
    }

    animate(size, position) {
        var animateShape = function(instance) {
          instance.cone.scale.x = size;
          instance.cone.scale.y = size;
          instance.cone.scale.z = size;
          renderer.render(scene, camera);
      }
      this.cone.position.y = position;
      animateShape(this);
    }
};

