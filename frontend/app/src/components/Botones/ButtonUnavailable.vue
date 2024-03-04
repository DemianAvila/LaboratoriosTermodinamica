<template>
  <!--SI AUN NO ESTA DISPONIBLE, PINTALA DE GRIS-->
  <div
    class="bg-gray-600 w-full mt-6 grid grid-cols-8 gap-2 content-center h-12 rounded-lg"
    :id="item.nombre"
  >
    <div class="col-span-6 text-center px-2">
      {{ item.titulo }}
    </div>
    <div class="grid grid-cols-1 content-center">
      <IconSVG icon="disabled" color="white" w="100" h="100" class="w-full h-full"/>
    </div>
    <div class="grid grid-cols-1 content-center">
      <IconSVG icon="menu" color="white" w="100" h="100" class="w-full h-full"/>
    </div>
  </div>
</template>

<script>
import IconSVG from '@/components/CustomIcons/IconSVG.vue';

export default {
  name: "ButtonUnavailable",
  components: {IconSVG},
  props: ["item"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
