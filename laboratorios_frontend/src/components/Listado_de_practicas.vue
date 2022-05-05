<template>
  <div class="p-8">
    <h1 class="text-slate-50
    text-center
    text-5xl">
      Prácticas
    </h1>
    <div v-for="(item, index) in $store.state.practicas" :key="index">
      <button v-if="item.=="></button>
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
