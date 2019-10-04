class Cone {
    constructor() {
        this.geometry = new THREE.ConeGeometry( 5, 20, 32 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
        this.cone = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.cone );
    }

    animate(sizeScalerX, sizeScalerY, sizeScalerZ, position) {
        var animateShape = function(instance) {
          instance.cone.scale.x = sizeScalerX;
          instance.cone.scale.y = sizeScalerY;
          instance.cone.scale.z = sizeScalerZ;
          renderer.render(scene, camera);
      }
      this.cone.position.x = position;
      animateShape(this);
    }
};


// changing origin of rotation
// var cyl_material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
// var cyl_width = 1;
// var cyl_height = 5;
// // THREE.CylinderGeometry(bottomRadius, topRadius, height, segmentsRadius, 
//  segmentsHeight, openEnded )
//  var cylGeometry = new THREE.CylinderGeometry(cyl_width, cyl_width, cyl_height, 20, 1, false);
// // translate the cylinder geometry so that the desired point within the 
// geometry is now at the origin
// cylGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, cyl_height/2, 0 ) );
// var cylinder = new THREE.Mesh(cylGeometry, cyl_material);

// scene.add( cylinder );