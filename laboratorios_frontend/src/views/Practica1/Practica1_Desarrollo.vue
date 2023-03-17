<template>
  <div
    class="w-full h-full lg:flex lg:flex-row flex flex-col justify-center items-center text-slate-50"
  >
    <div
      class="fixed h-full w-full flex flex-col bg-[rgba(0,0,0,0.9)]"
      v-if="this.$store.state.practica1.valores_experimentales.modal"
    >
      <ModalValoresExperimentales
        tipo="plano_cartesiano"
        :eje_x="
          this.$store.state.practica1.valores_experimentales.general_data.eje_x
        "
        :eje_y="
          this.$store.state.practica1.valores_experimentales.general_data.eje_y
        "
      >
      </ModalValoresExperimentales>
    </div>
    <div>
      <button
        class="bg-emerald-600 rounded-lg text-xl p-2"
        @click="this.$store.state.practica1.valores_experimentales.modal = true"
      >
        Agregar valores experimentales
      </button>
    </div>
    <div
      class="h-full w-[90%] my-8 rounded-lg bg-white"
      ref="canvatd"
      id="canvatd"
    ></div>
  </div>
</template>

<script>
//IMPORT THE THREE JS LIBRARY
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ModalValoresExperimentales from "@/components/Modales/ModalValoresExperimentales.vue";

export default {
  name: "PracticaDesarrollo",
  mounted: async function () {
    
    const payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id:  this.$route.query.practica_id,
    }

    await this.$store.dispatch('getModels',
      payload
    )

    let models = this.$store.state.models3d.current_data.models
    const dataUrl = `data:${models[0].glb.$type};base64,${models[0].glb.$binary}`;
    
   

    // Load the model from the data URL using the GLTFLoader
    /*
    const loader = new GLTFLoader();
    loader.load(dataUrl, (gltf) => {
      // Add the loaded model to the scene
      const mesh = gltf.scene;
      mesh.position.set(0, 0, 0);
      scene.add(mesh);
      

    });*/

    
    //GET THE SIZE OF THE COMPONENT
    var height = this.$refs.canvatd.clientHeight;
    var width = this.$refs.canvatd.clientWidth;
    var isMouseDown = false;
    var inCampana = false;
    var clickCampana = false;
    var yWhenClick = 0;
    var animation_time = 0;
    // Set a timeout variable
    var timeout = null;
    //BUILD THE COMPONENT
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(15790320, 0.1);
    const axesHelper = new THREE.AxesHelper(30);
    scene.add(axesHelper);
    const light = new THREE.AmbientLight(15790320);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(16777215, 2);
    directionalLight.position.set(15, 15, 15);
    scene.add(directionalLight);
    //CONTROL CAMERAS
    const controls = new OrbitControls(camera, renderer.domElement);
    //GET THE DIV
    const div_canva = document.getElementById("canvatd");
    //PAINT CANVA
    div_canva.appendChild(renderer.domElement);
    //camera.position.set(5, 15, 70);
    camera.position.set(5, 10, 70);
    controls.update();
    //var x = 0
    

    //ANIMATE MY MODEL
    const loader = new GLTFLoader();
    loader.load(dataUrl, (gltf) => {
      
        //ADD TEXTURES TO EACH OBJECT
        gltf.scene.traverse((object) =>{
        if (object.name=="vaso" || 
        object.name=="campana" || 
        object.name=="tubo_fluido"){
          let glass = new THREE.MeshBasicMaterial({
            name: "glass",
            color: 0xffffff, // glass color
            metalness: 0, // non-metallic
            roughness: 0, // very smooth surface
            transmission: 0.9, // high transparency
            transparent: true, // enable transparency
            opacity: 0.7, // set the opacity of the material
            refrmanguera_actionRatio: 0.98, // refractive index of glass (1.5) divided by air (1.0)
          });
          object.material = glass
        }
        else if (object.name=="fluido_tubo1" ||
        object.name=="fluido_fondo" ||
        object.name=="fluido_tubo2" ||
        object.name=="fluido_vaso"){
          var water = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0.9,
            roughness: 0.1,
            transmission: 0.9,
            transparent: true,
            opacity: 0.8
          });
          object.material = water
        }
        else if (object.name=="manguera"){
          var plastic = new THREE.MeshStandardMaterial({
            color: 0x000000,
            metalness: 0.1,
            roughness: 0.5,
          });
          object.material = plastic
        }
      })
      gltf.scene.position.set(0, 0, 0);
      scene.add(gltf.scene)
     
      console.log(gltf.animations)
      //ANIMATIONS
      var total_clips = 4
      var mixer = new THREE.AnimationMixer(scene);
      var clip_manguera = THREE.AnimationClip.findByName(gltf.animations, 'manguera_action');
      var manguera_action = mixer.clipAction(clip_manguera);
      manguera_action.loop = THREE.LoopOnce;
      manguera_action.timeScale = 1;
      manguera_action.weight = 1/total_clips

      var clip_campana = THREE.AnimationClip.findByName(gltf.animations, 'campana_action');
      var campana_action = mixer.clipAction(clip_campana)
      campana_action.loop = THREE.LoopOnce;
      campana_action.timeScale = 1;
      campana_action.weight = 1/total_clips

      var fluido_1_clip = THREE.AnimationClip.findByName(gltf.animations, 'Armature.001Action');
      var fluido_1 = mixer.clipAction(fluido_1_clip)
      fluido_1.loop = THREE.LoopOnce;
      fluido_1.timeScale = 1;
      fluido_1.weight = 1/total_clips

      var fluido_2_clip = THREE.AnimationClip.findByName(gltf.animations, 'ArmatureAction');
      var fluido_2 = mixer.clipAction(fluido_2_clip)
      fluido_2.loop = THREE.LoopOnce;
      fluido_2.timeScale = 1;
      fluido_2.weight = 1/total_clips
      
      var object = gltf.scene.getObjectByName("campana")
      const pointer = new THREE.Vector2()
      const raycaster = new THREE.Raycaster()
      const onMouseMove =   (event) => {
        if (clickCampana){
          const maxY= window.innerHeight-(window.innerHeight-yWhenClick)
          const pointerY = event.clientY
          const y =  maxY-pointerY;
          //console.log(y)
          //RULE OF 3
          animation_time = (y*20) / (maxY)
          manguera_action.time = animation_time
          campana_action.time = animation_time
          fluido_1.time = animation_time
          fluido_2.time = animation_time
          console.log(animation_time)
          manguera_action.play()
          campana_action.play()
          fluido_1.play()
          fluido_2.play()
        }
       
       
        //CHECK BELL
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children);
        let isCampana = intersects.filter(x => x.object.name=="campana")
        if (isCampana.length>0){
          inCampana = true
          if (!clickCampana){
            object.material.color.set("blue");
          }
        }
        else {
          inCampana = false
          if (!clickCampana){
            object.material.color.set( 0xffffff );
          }
        }

        if (inCampana && isMouseDown){
          clickCampana = !clickCampana
        }

        // Clear the previous timeout
        clearTimeout(timeout);

        // Set a new timeout
        timeout = setTimeout(function() {
          // Function to execute when the mouse stops moving
          manguera_action.paused = true
        }, 500); // Time in milliseconds before the function is executed

        
      };
     
      window.addEventListener('mousemove', onMouseMove, false);
      document.addEventListener('mousedown', onMouseDown, false);
      document.addEventListener('mouseup', onMouseUp, false);

      function onMouseDown(event) {
        isMouseDown = true;
        yWhenClick = event.clientY
        if (inCampana) {
          clickCampana = !clickCampana
        }
        if (!inCampana && clickCampana){
          clickCampana=false
        }
        if (clickCampana){
          object.material.color.set("yellow");
        }
        else {
          if (inCampana){
            object.material.color.set( "blue" );
          }
          else {
            object.material.color.set( 0xffffff );
          }
        }
      }

      function onMouseUp() {
        isMouseDown = false;
      }

    function animate() {
      requestAnimationFrame(animate);
      mixer.update(new THREE.Clock().getDelta())
      renderer.render(scene, camera);
      
    }
    animate();
  
    
  });
        
  },
  components: { ModalValoresExperimentales },
};
</script>
