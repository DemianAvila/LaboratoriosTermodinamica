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
      h-[7%]"
      @click="prev_page">
        &lt;
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
      h-[7%]"
      @click="next_page">
        >
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
    },
    prev_page: function(){
      this.$store.state.practica1.vista -= 1
    }
  }
}
</script>
