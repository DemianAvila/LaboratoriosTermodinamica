<template>
  <div class="h-full
  w-full">
    <div id="titulo"
    class="
    w-full
    h-[6%]
    lg:h-[10%]
    my-2
    lg:w-1/2">
      <h1>
        {{ prop.title }}
      </h1>
    </div>
    <div class="flex 
    lg:flex-row
    h-full
    flex-col">
      <div id="foto"
      class="
      w-full
      h-[35%]
      my-2
      lg:w-1/2
      lg:mx-2
      lg:h-[70%]">
      </div>
      <div id="texto"
      class="
      w-full
      h-[40%]
      my-2
      lg:w-1/2
      lg:mx-2
      lg:h-[70%]
      overflow-y-auto">
        <p>
          {{ prop.texto }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'WireframePracticas1',
  props: ['prop']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
