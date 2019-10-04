class Sphere {
    constructor() {
       this.geometry = new THREE.SphereGeometry(5, 32, 32);
       this.material = new THREE.MeshBasicMaterial( {color: 0xffff00}  );
       this.sphere = new THREE.Mesh(this.geometry, this.material );
       scene.add( this.sphere );
    }

    animate(size, position) {
        var animateShape = function(instance) {
          instance.sphere.scale.x = size;
          instance.sphere.scale.y = size;
          instance.sphere.scale.z = size;
          renderer.render(scene, camera);
      }
      this.sphere.position.y = (position, position, position);
      animateShape(this);
    }
};
