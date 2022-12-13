<template>
  <!--SIMPLE IMAGE - TEXT WIREFRAME -->
  <div class="h-full w-full">
    <div id="titulo" class="w-full h-[6%] lg:h-[10%] my-2 lg:w-1/2">
      <h1 class="text-5xl">
        {{ prop.title }}
      </h1>
    </div>
    <div class="flex lg:flex-row h-full flex-col">
      <div
        id="foto"
        class="w-full h-[35%] my-2 lg:w-1/2 lg:mx-2 lg:h-[70%] flex items-center justify-items-center"
      >
        <img :src="prop.img" />
      </div>
      <div
        id="texto"
        class="w-full h-[30%] my-2 lg:w-1/2 lg:mx-20 lg:h-[70%] overflow-y-auto flex items-center justify-items-center"
      >
        <p class="text-xl text-justify">
          {{ prop.texto }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WireframePracticas1",
  props: ["prop"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
