<template>
  <div
    class="w-full h-full bg-[rgba(0,0,0,0.9) flex flex-col justify-center items-center rounded-lg">
    <div class="bg-slate-900 w-[90%] h-[90%] overflow-y-scroll">
      <div class="flex
      flex-col"> 
        <div class="flex
        flex-row-reverse">
          <button class="mx-3"
          @click="this.$store.state.practica1.valores_experimentales.modal=false">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <button v-for="item, index in this.$store.state.practica1.valores_experimentales.menus" 
        :key="index"
        class="bg-emerald-600 rounded-lg m-2"
        @click="show_menu(index)">
          <p v-if="index=='puntos'">Insertar puntos</p>
          <p v-if="index=='plano'">Ver plano cartesiano</p>
        </button>
        <InsertarPuntos v-if="this.$store.state.practica1.valores_experimentales.menus.puntos" :eje_x="eje_x" :eje_y="eje_y"></InsertarPuntos>
      </div>
    </div>
  </div>
</template>
<script>
import InsertarPuntos from "./ValoresExperimentales/InsertarPuntos.vue";
export default {
  name: "ModalValoresExperimentales",
  props: ["tipo", "eje_x", "eje_y"],
  methods: {
    show_menu: function (item) {
      for (let propr in this.$store.state.practica1.valores_experimentales.menus){
        if (propr != item){
          this.$store.state.practica1.valores_experimentales.menus[propr] = false;
        }
        else {
          this.$store.state.practica1.valores_experimentales.menus[propr] = true;
        }
      }
    }
  },
  components: { InsertarPuntos },
};
</script>
