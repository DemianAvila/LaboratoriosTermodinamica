<template>
  <div class="w-full h-full">
    <ListadoPracticas />
  </div>
</template>

<script>
// @ is an alias to /src
import ListadoPracticas from "@/components/Practicas/ListadoPracticas.vue";

export default {
  name: "HomeView",
  components: {
    ListadoPracticas,
  },
};
</script>
