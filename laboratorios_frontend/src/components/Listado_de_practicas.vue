<template>
  <div class="p-8
  text-slate-50
  grid
  grid-cols-1
  lg:grid-cols-2
  lg:gap-4">
    <ModalPracticas
    v-if="$store.state.practicas.modal_subtareas.show"
    class="overflow-y-auto
    overflow-x-hidden 
    fixed 
    top-0 
    right-0 
    left-0 
    z-50 
    w-full
    h-full
    bg-[rgba(0,0,0,0.9)]">
    </ModalPracticas>
    <div class="w-full h-full overflow-y-auto">
      <h1 class="
      text-center
      text-5xl
      my-4
      lg:col-span-2">
        Prácticas
      </h1>
      <div v-for="(item, index) in $store.state.practicas.practicas" 
      :key="index">
        <ButtonFinished  
        v-if="$store.getters.get_usuario_practica_data(item.id).avance==100"
        :item="item"
        :index="index">
        </ButtonFinished>      
        <ButtonUnfinished
        v-else-if="$store.getters.get_usuario_practica_data(item.id).avance<100 &&
        item.fecha_entrega>new Date() && item.disponible"
        :item="item"
        :index="index">
        </ButtonUnfinished>
        <ButtonOutOfTime
        v-else-if="$store.getters.get_usuario_practica_data(item.id).avance<100 &&
        item.fecha_entrega<new Date() && item.disponible"
        :item="item"
        :index="index">
        </ButtonOutOfTime>
        <ButtonUnavailable
        v-else-if="!item.disponible"
        :item="item"
        :index="index">
        </ButtonUnavailable>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonFinished from '@/components/ButtonFinished.vue'
import ButtonUnfinished from '@/components/ButtonUnfinished.vue'
import ButtonOutOfTime from '@/components/ButtonOutOfTime.vue'
import ButtonUnavailable from '@/components/ButtonUnavailable.vue'
import ModalPracticas from '@/components/ModalPracticas.vue'


export default {
  name: 'Listado_de_practicas',
  components: {
    ButtonFinished,
    ButtonUnfinished,
    ButtonOutOfTime,
    ButtonUnavailable,
    ModalPracticas
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
