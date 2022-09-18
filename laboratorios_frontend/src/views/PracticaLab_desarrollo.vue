<template>
  <div class="w-full
  h-full
  lg:flex
  lg:flex-row">
    <div class="w-full
    h-[10%]">
    </div>
    <div class="w-full
    h-[90%]"
    ref="canvatd"
    id="canvatd">

    </div>
  </div>
 
</template>

<script>
//IMPORT THE THREE JS LIBRARY
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'PracticaDesarrollo',
  mounted: function(){

    //GET THE SIZE OF THE COMPONENT
    let height = this.$refs.canvatd.clientHeight; 
    let width = this.$refs.canvatd.clientWidth;
    //BUILD THE COMPONENT
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize( width, height );
    renderer.setClearColor( 0x000000, 0 );
    const axesHelper = new THREE.AxesHelper( 30 );
    scene.add( axesHelper );
    const light = new THREE.AmbientLight( 0x808080 );
    scene.add( light );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
    scene.add( directionalLight );
    //CONTROL CAMERAS
    const controls = new OrbitControls( camera, renderer.domElement );
    //GET THE DIV
    const div_canva = document.getElementById("canvatd");
    //PAINT CANVA
    div_canva.appendChild( renderer.domElement );
    //camera.position.set(5, 15, 70);
    camera.position.set(5, 15, 70);
    controls.update()
    function animate() {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    }
    animate();  
    //GET THE ROUTE THAT CONTAINS THE ANIMATION
    let elements = this.$route.path.split('/');
    //ANIMATION ROUTE
    let anim_route = "/"+elements[1]+"/"+elements[1]+".glb";
    //ANIMATE MY MODEL
    const loader = new GLTFLoader();
    loader.load(anim_route, function(gltf) {
        scene.add(gltf.scene);
    }, undefined, function(error) {
        console.error(error);
    } );
  }
}
</script>
