<template>
  <!--SI AUN NO SE TERMINA PERO LA FECHA DE ENTREGA ES OPTIMA, PINTALA DE MORADO-->
  <button @click="show_modal(item)"
    class="bg-purple-600 w-full h-full flex flex-row items-center justify-center rounded-lg opacity-100"
    :id="item.nombre"
  >
    <div class="w-[70%] h-full flex flex-col items-center justify-center">
      <p class="w-[80%]">
        {{ item.titulo }}
      </p>
    </div>
    <div class="w-[15%] h-full flex flex-col items-center justify-center">
      <IconSVG icon="resume" color="white" class="w-1/2 aspect-square"/>
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
