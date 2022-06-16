<template>
  <!--SI AUN NO SE TERMINA PERO LA FECHA DE ENTREGA NO ES OPTIMA, PINTALA DE NARANJA-->
  <div class="bg-yellow-600
  w-full
  mt-6
  grid 
  grid-cols-8
  gap-2
  content-center
  h-12
  rounded-lg"
  :id="item.nombre">
    <div class="col-span-6
    text-center
    px-2">
      {{item.titulo}}
    </div>
    <div class="grid grid-cols-1 content-center">
      <img :src="$store.state.static_cont.exclamation" 
      alt="terminado"
      class="object-fill w-5 h-5">
    </div>
    <button @click="show_modal(item.id)"
    class="grid grid-cols-1 content-center">
      <!--SI SE DA CLICK, DESPLIEGA UN MENU DE TAREAS-->
      <img :src="$store.state.static_cont.drop_down" 
      alt="menu"
      class="object-fill w-4 h-4">
    </button>
  </div>
</template>

<script>

export default {
  name: 'ButtonOutOfTime',
  props: ['item'],
  methods: {
    show_modal: function (id_practica){
      this.$store.state.practicas.modal_subtareas.show = !this.$store.state.practicas.modal_subtareas.show
      this.$store.state.practicas.modal_subtareas.id_practica = id_practica
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
