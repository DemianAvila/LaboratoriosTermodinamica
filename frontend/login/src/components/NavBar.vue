<template>
  <nav class="navbar">
    <div class="size">a</div>
    <div class="size">b</div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-class-component";

@Component
export default class NavBar extends Vue {
  hello = "fuck";
}
</script>

<style>
.navbar {
  width: 100%;
  height: 10%;
  min-height: 5em;
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.size {
  height: 100%;
  width: 50%;
}
</style>
