<template>
  <!--SI AUN NO ESTA DISPONIBLE, PINTALA DE GRIS-->
  <div class="bg-gray-600
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
      <img :src="$store.state.static_cont.disabled" 
      alt="terminado"
      class="object-fill w-4 h-4">
    </div>
    <div class="grid grid-cols-1 content-center">
      <img :src="$store.state.static_cont.drop_down" 
      alt="menu"
      class="object-fill w-4 h-4">
    </div>
  </div>
</template>

<script>

export default {
  name: 'ButtonUnavailable',
  props: ['item']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
