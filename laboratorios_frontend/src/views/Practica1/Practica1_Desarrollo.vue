<template>
  <div
    class="w-full h-full lg:flex lg:flex-row flex flex-col justify-center items-center text-slate-50"
  >
    <div
      class="fixed h-full w-full flex flex-col bg-[rgba(0,0,0,0.9)]"
      v-if="this.$store.state.practica1.modal_instrucciones.show               "
    >
      <ModalInstruciones/>
    </div>
    <div class="h-[10%] w-full flex flex-col justify-center items-center" >
      <button
        class="bg-emerald-600 rounded-lg text-xl p-2"
        @click="this.$store.state.practica1.modal_instrucciones.show = true"
      >
        Instrucciones
      </button>
    </div>
    <div
      class="h-[90%] w-[90%] my-8 rounded-lg bg-white relative flex flex-row items-center"
      ref="canvatd"
      id="canvatd"
      v-if="!this.$store.state.practica1.modal_instrucciones.show"
    >
      <button
        class="absolute w-[10%] h-[10%] bg-white -translate-x-1/2 rounded-full"
        @click="this.$store.commit('deploymentViewChange', -1)"
        v-if="this.$store.state.development_view.backward"
      >
          <i class="fa-solid fa-backward text-black"></i>
      </button>
      <button
        class="absolute w-[10%] h-[10%] bg-white -translate-x-1/2 left-full rounded-full"
        @click="this.$store.commit('deploymentViewChange', 1)"
        v-if="this.$store.state.development_view.forward"
      >
        <i class="fa-solid fa-forward text-black"></i>
      </button>
      <!--<div
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
      </div>-->
    </div>
  </div>
</template>

<script>
//IMPORT THE THREE JS LIBRARY

//import ModalValoresExperimentales from "@/components/Modales/ModalValoresExperimentales.vue";
import ModalInstruciones from "../../components/Instructiones/ModalInstruciones.vue";
//import MeasureButtons from "@/components/Botones/MeasureButtons.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import loadGLB from "@/3d-classes/loadGLB.js"

export default {
  name: "PracticaDesarrollo",
  data: function () {
    return {
      metadata: null,
      texture: null,
      models: null,
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
  watch: {
    "this.$store.state.development_view.currentSubpractice"(newValue, oldValue){
      console.log(newValue, oldValue)
    },
    "this.$store.state.development_view.currentVariation"(newValue, oldValue){
      console.log(newValue, oldValue)
    }
    }, 
  mounted: async function(){
    //const data = this
    //GET THE 3D MODELS
    var payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id: this.$route.query.practica_id,
    };
    await this.$store.dispatch("getModels", payload);
    //GET METADATA
    payload = {
      url: this.$store.state.config_info.api_url,
      token: localStorage.jwt,
      practica_id: this.$route.query.practica_id,
    };
    await this.$store.dispatch("getMetadata", payload);
    this.metadata = this.$store.state.metadata_practice.metadata;
    //GET THE TEXTURES
    this.textures = this.$store.state.textures;
    for (let j=0; j<this.metadata.subpractices.length; j++){
      for (let i = 0; i < this.metadata.subpractices[j].needed_textures.length; i++) {
        payload = {
          url: this.$store.state.config_info.api_url,
          token: localStorage.jwt,
          texture: this.metadata.subpractices[j].needed_textures[i],
        };
        await this.$store.dispatch("getTexture", payload);
      }
    }
    //SET THE DATAURL
    this.models = this.$store.state.models3d.current_data.models;
    //const dataUrl = `data:${models[0].glb.$type};base64,${models[0].glb.$binary}`;
    //this.$store.state.metadata_practice.dataUrl = `data:${models[0].glb.$type};base64,${models[0].glb.$binary}`;
    this.models.map( x=> this.$store.commit('setDataURLModels', `data:${x.glb.$type};base64,${x.glb.$binary}`))
    this.$store.state.development_view.subpractices = this.$store.state.metadata_practice.metadata.subpractices.length
    this.$store.state.development_view.currentSubpractice = 0
    this.$store.state.development_view.variations = this.$store.state.metadata_practice.metadata.subpractices[this.$store.state.development_view.currentSubpractice].variation_nums
    this.$store.state.development_view.currentVariation = 0 
  },
  methods: {
    mount3DImage: async function () {
     
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
      
      loadGLB({
        model: this.$store.state.metadata_practice.dataURLs[this.$store.state.development_view.currentSubpractice],
        ThreeInstance: THREE,
        height: height, 
        width: width,
        offsetX: offsetX,
        offsetY: offsetY,
        scene: scene,
        metadata: this.metadata.subpractices[this.$store.state.development_view.currentSubpractice],
        textures: this.textures,
        renderer: renderer,
        camera: camera,
        mixer: mixer,
        controls: controls,
        canvas: canvas
      })
    }
  },
  components: { 
    //ModalValoresExperimentales, 
    ModalInstruciones,
    //MeasureButtons 
  },
};
</script>
