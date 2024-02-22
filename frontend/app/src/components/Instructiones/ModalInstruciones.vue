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
        <div class="py-6 px-6 w-full h-full overflow-y-scroll">
          <button
            class="bg-emerald-600 rounded-lg text-xl p-2 w-full"
            @click="shows.materials = !shows.materials"
          >
            Materiales
          </button>
          <div v-if="shows.materials">
            <ListMaterialShow v-for="material, index in $store.state.metadata_practice.metadata.subpractices[
              this.$store.state.development_view.currentSubpractice
            ].materials" :key="index" :material="material" :index="index"
            class="w-full h-[30rem] mt-6" />
          </div>
         
          
        
          <!--{{ $store.state.metadata_practice.metadata }}

          {{ $store.state.models3d.current_data }}-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ListMaterialShow from "@/components/Instructiones/ListMaterialShow.vue"
export default {
  name: "ModalInstrucciones",
  data: function () {
    return {
      shows: {
        materials: false,
        development: false,
      },
    };
  },
  components: {
    ListMaterialShow
  }
};
</script>
