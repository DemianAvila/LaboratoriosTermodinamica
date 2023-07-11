<template>
  <div
    class="w-full h-full bg-[rgba(0,0,0,0.9) flex flex-col justify-center items-center rounded-lg"
  >
    <div class="bg-slate-900 w-[90%] h-[90%] overflow-y-scroll">
      <div class="flex flex-col h-full w-full">
        <div class="flex flex-row-reverse">
          <button
            class="mx-3"
            @click="
              this.$store.state.practica1.modal_instrucciones.show = false
            "
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="flex flex-col py-6 px-6">
          <button  class="bg-emerald-600 rounded-lg text-xl p-2"
          @click="shows.materials=!shows.materials">
            Materiales
          </button>
          {{ $store.state.metadata_practice.metadata }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "ModalInstrucciones",
  data: function(){
    return {
      shows: {
        materials: false,
        development: false,
      }
    }
  }
  
};
</script>
