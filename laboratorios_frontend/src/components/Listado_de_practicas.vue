<template>
  <div class="p-8
  text-slate-50
  grid
  grid-cols-1
  lg:grid-cols-2
  lg:gap-4">
    <h1 class="
    text-center
    text-5xl
    my-4
    lg:col-span-2">
      Prácticas
    </h1>
    <div v-for="(item, index) in $store.state.practicas.practicas" :key="index">
      <!--VERIFICA SI LA PRACTICA ESTA CONCLUIDA (100%), EN DADO CASO PINTALA DE VERDE-->
      <div v-if="$store.getters.get_usuario_practica_data(item.id).avance==100"
      class="bg-emerald-600
      w-full
      my-4
      grid 
      grid-cols-8
      gap-2
      content-center
      h-12
      rounded-lg">
        <div class="col-span-6
        text-center
        px-2">
          {{item.titulo}}
        </div>
        <div class="grid grid-cols-1 content-center">
          <img :src="$store.state.static_cont.checked" 
          alt="terminado"
          class="object-fill w-4 h-4">
        </div>
         <div class="grid grid-cols-1 content-center">
          <img :src="$store.state.static_cont.drop_down" 
          alt="menu"
          class="object-fill w-4 h-4">
        </div>
      </div> 
      <!--SI AUN NO SE TERMINA PERO LA FECHA DE ENTREGA ES OPTIMA, PINTALA DE MORADO-->
      <div v-else-if="$store.getters.get_usuario_practica_data(item.id).avance<100 &&
      item.fecha_entrega>new Date() && item.disponible"
      class="bg-purple-600
      w-full
      my-4
      grid 
      grid-cols-8
      gap-2
      content-center
      h-12
      rounded-lg">
        <div class="col-span-6
        text-center
        px-2">
          {{item.titulo}}
        </div>
        <div class="grid grid-cols-1 content-center">
          <img :src="$store.state.static_cont.checked" 
          alt="terminado"
          class="object-fill w-4 h-4">
        </div>
         <div class="grid grid-cols-1 content-center">
          <img :src="$store.state.static_cont.drop_down" 
          alt="menu"
          class="object-fill w-4 h-4">
        </div>
      </div>
      
      <!--SI AUN NO SE TERMINA PERO LA FECHA DE ENTREGA NO ES OPTIMA, PINTALA DE NARANJA-->
      <div v-else-if="$store.getters.get_usuario_practica_data(item.id).avance<100 &&
      item.fecha_entrega<new Date() && item.disponible"
      class="bg-yellow-600
      w-full
      my-4
      grid 
      grid-cols-8
      gap-2
      content-center
      h-12
      rounded-lg">
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
         <div class="grid grid-cols-1 content-center">
          <img :src="$store.state.static_cont.drop_down" 
          alt="menu"
          class="object-fill w-4 h-4">
        </div>
      </div>
      <!--SI AUN NO ESTA DISPONIBLE, PINTALA DE GRIS-->
      <div v-else-if="!item.disponible"
      class="bg-gray-600
      w-full
      my-4
      grid 
      grid-cols-8
      gap-2
      content-center
      h-12
      rounded-lg">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Listado_de_practicas',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
