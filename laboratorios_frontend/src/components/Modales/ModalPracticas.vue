<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-center text-5xl my-4 lg:col-span-2">
      {{
        $store.state.practicas.practicas[
          $store.state.practicas.modal_subtareas.id_practica - 1
        ].titulo
      }}
    </h1>
    <div
      class="w-5/6 lg:w-1/2"
      v-for="(item, index) in $store.state.practicas.practicas[
        $store.state.practicas.modal_subtareas.id_practica - 1
      ].subtareas"
      :key="index"
    >
      <ButtonSubtareas :item="item" :index="index"> </ButtonSubtareas>
    </div>
    <div class="w-5/6 lg:w-1/2">
      <button
        @click="salir_modal()"
        class="bg-purple-600 w-full h-full mt-6 flex items-center justify-center h-12 rounded-lg opacity-100"
      >
        <h1 class="text-center">Salir</h1>
      </button>
    </div>
  </div>
</template>

<script>
import ButtonSubtareas from "@/components/Botones/ButtonSubtareas.vue";

export default {
  name: "ModalPracticas",
  components: {
    ButtonSubtareas,
  },
  methods: {
    salir_modal: function () {
      this.$store.state.practicas.modal_subtareas.show =
        !this.$store.state.practicas.modal_subtareas.show;
      this.$store.state.practicas.modal_subtareas.id_practica = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
