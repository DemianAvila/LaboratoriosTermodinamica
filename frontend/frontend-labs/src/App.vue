<template>
  <div>
    <div class="texto">
      <div id="backg"
      class="
      bg-[url('./img/movil.svg')]
      lg:bg-[url('./img/escritorio.svg')]
      bg-cover
      bg-no-repeat
      h-screen">
        <div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap');
.texto{
font-family: 'Zen Kurenaido', sans-serif;
}
</style>
