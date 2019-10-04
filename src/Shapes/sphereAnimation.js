class Sphere {
    constructor() {
       this.geometry = new THREE.SphereGeometry(5, 32, 32);
       this.material = new THREE.MeshBasicMaterial( {color: 0xffff00}  );
       this.sphere = new THREE.Mesh(this.geometry, this.material );
       scene.add( this.sphere );
    }

    animate(sizeScaler, position) {
        var animateShape = function(instance) {
          instance.sphere.scale.x = sizeScaler;
          instance.sphere.scale.y = sizeScaler;
          instance.sphere.scale.z = sizeScaler;
          renderer.render(scene, camera);
      }
      this.sphere.position.y = position;
      animateShape(this);
    }
};
