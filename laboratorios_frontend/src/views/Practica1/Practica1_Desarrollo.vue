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
      <div
        v-if="showMeasuresDiv"
        class="absolute bottom-0 right-0 bg-black w-[50%]"
      >
        <p
          v-for="(measure, index) in measures"
          :key="index"
          class="text-xl m-3"
        >
          {{ measure.value }}{{ measure.key }}
        </p>
      </div>
      <div class="absolute top-[25%] right-0 w-[10%] h-[50%] overflow-y-scroll">
        <MeasureButtons
          v-for="(instrument, index) in instrumentButtons"
          :key="index"
          :properties="instrument"
          v-model:inUse="instrument.inUse"
        />
      </div>
    </div>
  </div>
</template>

<script>
//IMPORT THE THREE JS LIBRARY

import ModalValoresExperimentales from "@/components/Modales/ModalValoresExperimentales.vue";
import MeasureButtons from "@/components/Botones/MeasureButtons.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Submesh from "@/3d-classes/submesh.js";
import GeneralMesh from "@/3d-classes/generalMesh.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default {
  name: "PracticaDesarrollo",
  data: function () {
    return {
      showMeasuresDiv: false,
      measures: [],
      instrumentButtons: [
        {
          name: "ruler",
          inUse: false,
        },
      ],
    };
  },
  mounted: async function () {
    //const data = this
    //GET THE 3D MODELS
    var payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id: this.$route.query.practica_id,
    };
    await this.$store.dispatch("getModels", payload);
    let models = this.$store.state.models3d.current_data.models;
    const dataUrl = `data:${models[0].glb.$type};base64,${models[0].glb.$binary}`;
    //GET METADATA
    payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id: this.$route.query.practica_id,
    };
    await this.$store.dispatch("getMetadata", payload);
    var metadata = this.$store.state.metadata_practice.metadata;
    //GET THE TEXTURES
    var textures = this.$store.state.textures;
    for (let i = 0; i < metadata.needed_textures.length; i++) {
      payload = {
        url: this.$store.state.config_info.api_url,
        token: localStorage.jwt,
        texture: metadata.needed_textures[i],
      };
      await this.$store.dispatch("getTexture", payload);
    }
    //LOAD THE VALUES NEEDED FOR THREE JS INITIALIZATION
    //========================================================
    //-------CANVAS CONTAINER, HEIGHT, WIDTH AND OFFSIDES
    const canvas = this.$refs.canvatd;
    const height = canvas.clientHeight;
    const width = canvas.clientWidth;
    const rect = this.$refs.canvatd.getBoundingClientRect();
    const offsetX = rect.left;
    const offsetY = rect.top;
    //-----------SCENE, CAMERA AND RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 3000);
    camera.position.set(0, 0, 5);
    const renderer = new THREE.WebGLRenderer({});
    renderer.setSize(width, height);
    renderer.setClearColor(0xf5ede0, 0.1);
    //---------CONTROLS AND MIXER
    const controls = new OrbitControls(camera, renderer.domElement);
    var mixer = new THREE.AnimationMixer(scene);
    canvas.appendChild(renderer.domElement);
    //--------------ADD LIGHTS THO THE SCENE
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 4);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);
    /*const backLight = new THREE.DirectionalLight(0xFFFFFF, 3);
    backLight.position.set(-10, -10, -10);
    scene.add(backLight);*/
    //------------------INITIALIZE THE GENERAL MESH OBJECT TO MANIPULATE THE 3D GLB
    var generalMesh = new GeneralMesh([], {
      ThreeInstance: THREE,
      height: height,
      width: width,
      offsetX: offsetX,
      offsetY: offsetY,
      camera: camera,
      scene: scene,
      metadata: metadata,
      canvas: canvas,
    });
    //ADD TEXTURES AND ANIMATIONS TO EACH OBJECT
    const loader = new GLTFLoader();
    loader.load(dataUrl, (gltf) => {
      gltf.scene.traverse((object) => {
        object.frustumCulled = false;
        if (metadata.scene_meshes.includes(object.name)) {
          let submesh = new Submesh({
              name: object.name,
              mesh: object,
              /*texture: new THREE.MeshPhysicalMaterial(
                textures[metadata.textures[object.name]]
              ),*/
              material: new THREE.MeshPhysicalMaterial(
                textures[metadata.textures[object.name]]
              ),
              userControlled: metadata.userControlledObjects.includes(
                object.name
              )
                ? true
                : false,
              timeControlled: metadata.timeControlledObjects.includes(
                object.name
              )
                ? true
                : false,
              ThreeInstance: THREE,
              scene: scene, 
              renderer: renderer,
              camera: camera,
              boxTest: false
            });
          generalMesh.addMesh(submesh);
              
          //submesh.setTexture(textures[ metadata.textures[object.name]])
          if (
            THREE.AnimationClip.findByName(gltf.animations, object.name) != null
          ) {
            generalMesh
              .getMeshByName(object.name)
              .setClipAction(
                THREE.AnimationClip.findByName(gltf.animations, object.name),
                mixer,
                THREE.LoopOnce,
                1
              );
          }
        }
      });
      //--------INITIALIZE ANIMATION     
      generalMesh.initializeAnimationSystem()
      

      //------------PAINT THE LOADED GLB
      gltf.scene.position.set(0, 0, 0);
      scene.add(gltf.scene)

      window.addEventListener('mousemove', (event) => {
        generalMesh.onMouseMove(event)
      }, false);

      window.addEventListener('mousedown', (event)=>{
        generalMesh.onMouseDown(event)
      }, false);
    });

    

    function animate() {
      requestAnimationFrame(animate);
      mixer.update(new THREE.Clock().getDelta());
      renderer.render(scene, camera);
      controls.update();
    }
    animate();

  },
  components: { ModalValoresExperimentales, MeasureButtons },
};
</script>
