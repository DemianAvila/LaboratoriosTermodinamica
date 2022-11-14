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
  mounted: function () {
    //GET THE SIZE OF THE COMPONENT
    let height = this.$refs.canvatd.clientHeight;
    let width = this.$refs.canvatd.clientWidth;
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
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
    //GET THE ROUTE THAT CONTAINS THE ANIMATION
    let elements = this.$route.path.split("/");
    //ANIMATION ROUTE
    let anim_route = "/" + elements[1] + "/" + elements[1] + ".glb";
    //ANIMATE MY MODEL
    const loader = new GLTFLoader();
    loader.load(
      anim_route,
      function (gltf) {
        const model = gltf.scene;
        model.position.set(0, -30, 0);
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  },
  components: { ModalValoresExperimentales },
};
</script>
