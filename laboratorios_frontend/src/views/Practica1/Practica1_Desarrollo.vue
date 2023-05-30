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
      class="h-full w-[90%] my-8 rounded-lg bg-white relative"
      ref="canvatd"
      id="canvatd"
    >
      <div v-if="showMeasuresDiv"
      class="absolute bottom-0 right-0 bg-black w-[50%]">
        <p v-for="(measure, index) in measures" :key="index" class="text-xl m-3">
          {{ measure.value }}{{ measure.key }}
        </p>
      </div>
      <div
        class="absolute top-[25%] right-0  w-[10%] h-[50%] overflow-y-scroll">
          <MeasureButtons v-for="(instrument, index) in instrumentButtons" 
          :key="index" 
          :properties="instrument"
          v-model:inUse="instrument.inUse"/>
      </div>
    </div>
  </div>
</template>

<script>
//IMPORT THE THREE JS LIBRARY
import * as THREE from "three";
import Submesh from "@/3d-classes/submesh.js"
import GeneralMesh from "@/3d-classes/generalMesh.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import ModalValoresExperimentales from "@/components/Modales/ModalValoresExperimentales.vue";
import MeasureButtons from "@/components/Botones/MeasureButtons.vue"

export default {
  name: "PracticaDesarrollo",
  data: function(){
    return {
      showMeasuresDiv: false,
      measures: [],
      instrumentButtons: [
        {
          name: "ruler",
          inUse: false
        }  
      ]
    }
  },
  mounted: async function () {
    //const data = this
    //GET THE 3D MODELS
    var payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id:  this.$route.query.practica_id,
    }
    await this.$store.dispatch('getModels',
      payload
    )
    let models = this.$store.state.models3d.current_data.models
    const dataUrl = `data:${models[0].glb.$type};base64,${models[0].glb.$binary}`;
    //GET METADATA
    payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id:  this.$route.query.practica_id,
    }
    await this.$store.dispatch('getMetadata',
      payload
    )
    var metadata = this.$store.state.metadata_practice.metadata
    //GET THE TEXTURES
    var textures = this.$store.state.textures
    for (let i=0; i<metadata.needed_textures.length; i++){
      payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      texture:  metadata.needed_textures[i],
    }
      await this.$store.dispatch('getTexture',
      payload
      )
    }

    
    //ANIMATE MY MODEL
    const loader = new GLTFLoader();
    loader.load(dataUrl, (gltf) => {
      //===========================================
      //VALUES OF INIT THREEJS
      //GET THE SIZE OF THE COMPONENT
      const canvas = this.$refs.canvatd
      var height = canvas.clientHeight;
      var width = canvas.clientWidth;
      /*
      var isMouseDown = false;
      var inCampana = false;
      var clickCampana = false;
      var yWhenClick = 0;
      var animation_time = 0;*/
      const rect = this.$refs.canvatd.getBoundingClientRect();
      const offsetX = rect.left;
      const offsetY = rect.top;
      // Set a timeout variable
      //var timeout = null;
      //BUILD THE COMPONENT
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 0, 5);

      const renderer = new THREE.WebGLRenderer({  });
      renderer.setSize(width, height);
      renderer.setClearColor(0xf5ede0, 0.1);

      //const axesHelper = new THREE.AxesHelper(30);
      //scene.add(axesHelper);
      //const light = new THREE.AmbientLight(0xFFFFFF, 10);
      //scene.add(light);
      
      const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 4);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);
      const backLight = new THREE.DirectionalLight(0xFFFFFF, 3);
      backLight.position.set(-10, -10, -10);
      scene.add(backLight);


      //CONTROL CAMERAS
      const controls = new OrbitControls(camera, renderer.domElement);
      //GET THE DIV
      const div_canva = document.getElementById("canvatd");
      //PAINT CANVA
      div_canva.appendChild(renderer.domElement);
  
    
      

      //==========================================
      var generalMesh = new GeneralMesh([],
        {
          ThreeInstance: THREE,
          height: height,
          width: width,
          offsetX: offsetX,
          offsetY: offsetY,
          camera: camera,
          scene: scene,
          metadata: metadata,
          canvas: canvas
        }
      )
      var mixer = new THREE.AnimationMixer(scene);
        //ADD TEXTURES AND ANIMATIONS TO EACH OBJECT
        gltf.scene.traverse((object) =>{
          if(metadata.scene_meshes.includes(object.name)){
            console.log(object.name)
            console.log(metadata.textures[object.name])
            console.log(textures[ metadata.textures[object.name]])
            generalMesh.addMesh(
              new Submesh(
                {
                  name: object.name,
                  mesh: object,
                  texture: new THREE.MeshPhysicalMaterial(
                    textures[ metadata.textures[object.name]]
                  ),
                  userControlled: metadata.userControlledObjects.includes(object.name) ? true : false,
                  timeControlled: metadata.timeControlledObjects.includes(object.name) ? true : false,
                }
              )
            )
            //submesh.setTexture(textures[ metadata.textures[object.name]])  
            if (THREE.AnimationClip.findByName(gltf.animations, object.name) != null){
              generalMesh.getMeshByName(object.name).setClipAction(
                THREE.AnimationClip.findByName(gltf.animations, object.name),
                mixer,
                THREE.LoopOnce, 
                1,
              )           
            }
          }
        }
      )
      
      generalMesh.initializeAnimationSystem()
      // get the bounding box of the loaded model
      const box = new THREE.Box3().setFromObject(generalMesh.getMeshByName("Cube").getMesh());

      const center = new THREE.Vector3();
      box.getCenter(center);

      const size = new THREE.Vector3();
      box.getSize(size);

      const distance = size.length() * 0.5 / Math.tan(Math.PI / 180.0 * camera.fov * 0.5);

      camera.position.copy(center);
      camera.position.add(new THREE.Vector3(0, 0, distance));
      camera.lookAt(center);


      gltf.scene.position.set(0, 0, 0);
      scene.add(gltf.scene)

      window.addEventListener('mousemove', (event) => {
        generalMesh.onMouseMove(event)
      }, false);

      window.addEventListener('mousedown', (event)=>{
        generalMesh.onMouseDown(event)
      }, false);

      console.log(generalMesh)

      
      /*
      //ANIMATIONS
      var clip_manguera = THREE.AnimationClip.findByName(gltf.animations, 'manguera');
      var manguera_action = mixer.clipAction(clip_manguera);
      manguera_action.loop = THREE.LoopOnce;
      manguera_action.timeScale = 1;

      var clip_campana = THREE.AnimationClip.findByName(gltf.animations, 'campana');
      var campana_action = mixer.clipAction(clip_campana)
      campana_action.loop = THREE.LoopOnce;
      campana_action.timeScale = 1;

      var fluido_1_clip = THREE.AnimationClip.findByName(gltf.animations, 'fluido1');
      var fluido_1 = mixer.clipAction(fluido_1_clip)
      fluido_1.loop = THREE.LoopOnce;
      fluido_1.timeScale = 1;

      var fluido_2_clip = THREE.AnimationClip.findByName(gltf.animations, 'fluido2');
      var fluido_2 = mixer.clipAction(fluido_2_clip)
      fluido_2.loop = THREE.LoopOnce;
      fluido_2.timeScale = 1;*/
    
      /*
      var object = gltf.scene.getObjectByName("campana")
      const pointer = new THREE.Vector2()
      const raycaster = new THREE.Raycaster()
      const onMouseMove =   (event) => {
        if (clickCampana){
          const maxY= height-(height-yWhenClick)
          const pointerY = event.clientY
          const y =  maxY-pointerY;
          //console.log(y)
          //RULE OF 3
          animation_time = (y*10) / (maxY)
          manguera_action.time = animation_time
          campana_action.time = animation_time
          fluido_1.time = animation_time
          fluido_2.time = animation_time
          //console.log(animation_time)
          manguera_action.play()
          campana_action.play()
          fluido_1.play()
          fluido_2.play()
        }
        //CHECK BELL
        pointer.x = (event.clientX - offsetX) / width * 2 - 1;
        pointer.y = -(event.clientY - offsetY) / height * 2 + 1;
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


      var placeRuler = 0;
      var ruler = []
      var line = undefined

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
        if (!inCampana){
          //IS THE RULER ACTIVATED
          var rulerActivated = data.instrumentButtons.filter(x => x.name=="ruler")
          rulerActivated = rulerActivated[0].inUse
          if (rulerActivated){
            if (placeRuler<=1){
            
            const sphere = new THREE.SphereGeometry( .5 );
            const sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
            const sphereMesh = new THREE.Mesh( sphere, sphereMaterial );
            var mouse = new THREE.Vector2();
            mouse.x = (event.clientX - offsetX) / width * 2 - 1;
            mouse.y = -(event.clientY - offsetY) / height * 2 + 1;

            var raycaster = new THREE.Raycaster();
            raycaster.setFromCamera( mouse, camera );

            var intersects = raycaster.intersectObjects( scene.children );
            if ( intersects.length > 0 ) {

              var point = intersects[0].point;
            
              sphereMesh.position.copy( point );
              scene.add( sphereMesh );
              placeRuler ++
              ruler.push(sphereMesh)
            }
            if (placeRuler == 2){
              const positions = new Float32Array([
                ruler[0].position.x,
                ruler[0].position.y,
                ruler[0].position.z,
                ruler[0].position.x,
                ruler[1].position.y,
                ruler[0].position.z
              ]);
              // create a buffer attribute from the positions
              const positionsAttribute = new THREE.BufferAttribute(positions, 3);

              // create a BufferGeometry and add the positions attribute
              const lineGeometry = new THREE.BufferGeometry();
              lineGeometry.setAttribute('position', positionsAttribute);

              // create a material for the line
              const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });

              // create the line
              line = new THREE.Line(lineGeometry, lineMaterial);

              // add the line to the scene
              scene.add(line);
              data.showMeasuresDiv=true
              data.measures.push({
                value: Math.abs(ruler[1].position.y - ruler[0].position.y),
                key: "cm"
              })
            }
          }
          else{
              placeRuler=0
              for (let i=0; i<ruler.length; i++){
                scene.remove(ruler[i])
              }
              scene.remove(line)
              ruler=[]
              data.showMeasuresDiv = false
              data.measures = []
            }
          }
          else {
            placeRuler=0
            for (let i=0; i<ruler.length; i++){
                scene.remove(ruler[i])
              }
            scene.remove(line)
            ruler=[]
            data.showMeasuresDiv = false
            data.measures = []
          }        
        }               
      }

      function onMouseUp() {
        isMouseDown = false;
      }
      */
    function animate() {
      requestAnimationFrame(animate);
      mixer.update(new THREE.Clock().getDelta())
      renderer.render(scene, camera);
      controls.update();

    }
    animate();
  
    
  });
        
  },
  components: { ModalValoresExperimentales,
   MeasureButtons},
};
</script>
