<template>
  <div class="w-full
  h-full
  lg:flex
  lg:flex-row">
    <div class="hidden
    invisible
    lg:visible
    h-full
    w-[2%]
    lg:flex
    lg:flex-row
    items-center">
      <button v-if="$store.state.practica1.vista>0"
      class="bg-slate-50
      w-full
      h-[7%]
      rounded-full
      flex
      justify-items-center
      items-center"
      @click="prev_page">
        <p class="text-center">
          &lt;
        </p>
      </button>
    </div>
    <div class="p-8
    text-slate-50
    lg:w-[98%]
    w-full
    h-full">
      <WireframePracticas1
      v-if="$store.state.practica1.desarrollo[$store.state.practica1.vista].wireframe == 0"
      :prop="$store.state.practica1.desarrollo[$store.state.practica1.vista]">
      </WireframePracticas1>
      <WireframePracticas2
      v-else-if="$store.state.practica1.desarrollo[$store.state.practica1.vista].wireframe == 1">
      </WireframePracticas2>
    </div>
    <div class="hidden
    invisible
    lg:visible
    h-full
    w-[2%]
    lg:flex
    lg:flex-row
    items-center">
      <button v-if="$store.state.practica1.vista<($store.state.practica1.desarrollo.length-1)"
      class="bg-slate-50
      w-full
      h-[7%]
      rounded-full
      justify-items-center
      items-center"
      @click="next_page">
        <p class="text-center">
          >
        </p>
      </button>
    </div>
    <div
    class="
    w-full
    h-[7%]
    my-2
    lg:hidden
    overflow-y-auto
    flex
    flex-col
    items-center
    justify-items-center">
      <button class="h-full
      w-[7%]">
        <p class="text-xl
        text-justify">
          ↓ 
        </p>
      </button>
    </div>

  </div>
 
</template>

<script>
import WireframePracticas1 from '@/components/WireframePracticas1'
import WireframePracticas2 from '@/components/WireframePracticas2'


export default {
  name: 'PracticaLab1',
  components: {
    WireframePracticas1,
    WireframePracticas2
  },
  methods: {
    next_page: function(){
      this.$store.state.practica1.vista += 1
      console.log(this.$store.state.practica1.vista)
    },
    prev_page: function(){
      this.$store.state.practica1.vista -= 1
    }
  }
}
</script>
