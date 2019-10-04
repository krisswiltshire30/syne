class Sphere {
    constructor() {
       this.geometry = new THREE.SphereGeometry( 5, 32, 32 );
       this.material = new THREE.MeshBasicMaterial( {color: 0xffff00}  );
       this.sphere = new THREE.Mesh(this.geometry, this.material );
       scene.add( this.sphere );
       renderer.render(scene, camera);
    }

    animate(sizeScalerX, sizeScalerY, sizeScalerZ) {
        var animateShape = function(instance) {
          instance.sphere.scale.x = sizeScalerX;
          instance.sphere.scale.y = sizeScalerY;
          instance.sphere.scale.z = sizeScalerZ;
          renderer.render(scene, camera);
      }

      animateShape(this);
    }
};
