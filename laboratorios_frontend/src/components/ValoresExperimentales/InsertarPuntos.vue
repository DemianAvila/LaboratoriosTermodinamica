<template>
  <div class="h-full
  w-full
  flex
  flex-col">
  <div class="flex
    flex-row">
    <p class="w-[47%] m-3">{{eje_x}}</p>
    <p class="w-[47%] m-3">{{eje_y}}</p>
    <div class="w-[6%]"></div>
  </div>
  <div class="flex
    flex-row"
    v-for="punto, index in this.$store.state.practica1.valores_experimentales.puntos" :key="index">
      <input type="number" :v-model="punto[0]" class="w-[45%] m-3">
      <input type="number" :v-model="punto[1]" class="w-[45%] m-3">
      <button class="w-[10%]" @click="this.$store.state.practica1.valores_experimentales.puntos.splice(index, 1)">
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
    <div class="flex
    flex-row
    justify-center
    items-center">
      <button @click="this.$store.state.practica1.valores_experimentales.puntos.push([0,0])">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsertarPuntos",
  props: ["eje_x", "eje_y", ],
}
</script>

