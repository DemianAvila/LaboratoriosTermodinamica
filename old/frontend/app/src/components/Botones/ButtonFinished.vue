<template>
  <!--VERIFICA SI LA PRACTICA ESTA CONCLUIDA (100%), EN DADO CASO PINTALA DE VERDE-->
  <button @click="show_modal(item.id)"
    class="bg-emerald-600 bg-yellow-600 w-full h-full flex flex-row items-center justify-center rounded-lg"
    :id="item.nombre">
    <div class="w-[70%] h-full flex flex-col items-center justify-center">
      <p class="w-[80%]">
        {{ item.titulo }}
      </p>
    </div>
    <div class="w-[15%] h-full flex flex-col items-center justify-center">
      <IconSVG icon="checked" color="white" class="w-1/2 aspect-square"/>
    </div>
    <button class="w-[15%] h-full">
      <!--SI SE DA CLICK, DESPLIEGA UN MENU DE TAREAS-->
      <IconSVG icon="menu" color="white" class="w-1/2 aspect-square"/>
    </button>
  </button>
</template>

<script>
import IconSVG from '@/components/CustomIcons/IconSVG.vue';

export default {
  name: "ButtonFinished",
  components: {IconSVG},
  props: ["item"],
  methods: {
    show_modal: function (id_practica) {
      this.$store.state.practicas.modal_subtareas.show =
        !this.$store.state.practicas.modal_subtareas.show;
      this.$store.state.practicas.modal_subtareas.id_practica = id_practica;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
