<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "./components/NavBar.vue";

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: white;
  background-image: url(@/assets/img/bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
