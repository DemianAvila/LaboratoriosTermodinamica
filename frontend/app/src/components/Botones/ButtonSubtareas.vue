<template>
  <!--SI AUN NO SE TERMINA PERO LA FECHA DE ENTREGA ES OPTIMA, PINTALA DE MORADO-->
  <div
    class="bg-purple-600 w-full mt-6 grid grid-cols-8 gap-2 content-center h-12 rounded-lg opacity-100"
    :id="item.nombre"
  >
    <div class="col-span-6 text-center px-2">
      {{ item.titulo }}
    </div>
    <div class="grid grid-cols-1 content-center">
      <IconSVG icon="resume" color="white" w="100" h="100" class="w-full h-full"/>
    </div>
    <button @click="show_modal(item)" class="grid grid-cols-1 content-center">
      <!--SI SE DA CLICK, DESPLIEGA UN MENU DE TAREAS-->
      <IconSVG icon="menu" color="white" w="100" h="100" class="w-full h-full"/>
    </button>
  </div>
</template>

<script>
import IconSVG from '@/components/CustomIcons/IconSVG.vue';

export default {
  name: "ButtonSubtareas",
  components: {IconSVG},
  props: ["item"],
  methods: {
    show_modal: function (item) {
      let id =
        this.$store.state.practicas.practicas[
          this.$store.state.practicas.modal_subtareas.id_practica - 1
        ].id;
      let ruta = `${item.titulo}?practica_id=${id}`;
      console.log(ruta);
      try {
        this.$router.push(ruta);
      } catch (error) {
        console.log(error);
        alert("Esta ruta aún no está programada");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
