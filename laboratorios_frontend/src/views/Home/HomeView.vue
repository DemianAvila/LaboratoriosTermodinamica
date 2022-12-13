<template>
  <div class="home">
    <Listado_de_practicas />
  </div>
</template>

<script>
// @ is an alias to /src
import Listado_de_practicas from "@/views/Home/Listado_de_practicas.vue";

export default {
  name: "HomeView",
  components: {
    Listado_de_practicas,
  },
};
</script>
