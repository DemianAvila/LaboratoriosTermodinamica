<template>
    <div class="w-full h-full flex flex-col items-center overflow-y-auto overflow-x-hidden">
      
      <div class="w-full h-[20%] mx-6 my-6">
        <h1 class="text-center text-5xl">
          Prácticas
        </h1>
      </div> 

      <div class="w-[80%] min-h-[8%] my-6"
        v-for="(item, index) in $store.state.practicas.practicas"
        :key="index">
        <ButtonFinished v-if="item.avance == 100" :item="item" :index="index" />
        <ButtonUnfinished v-if="item.avance < 100 && item.fecha_entrega > Date.now() && item.disponible" :item="item" :index="index" />
        <ButtonOutOfTime v-if=" item.avance < 100 && item.fecha_entrega < Date.now() && item.disponible" :item="item" :index="index"/>
        <ButtonUnavailable v-if="!item.disponible" :item="item" :index="index"/>
      </div>
    </div>

    <ModalPracticas
      v-if="$store.state.practicas.modal_subtareas.show"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full bg-[rgba(0,0,0,0.9)]"
    />

</template>

<script>
import ButtonFinished from "@/components/Botones/ButtonFinished.vue";
import ButtonUnfinished from "@/components/Botones/ButtonUnfinished.vue";
import ButtonOutOfTime from "@/components/Botones/ButtonOutOfTime.vue";
import ButtonUnavailable from "@/components/Botones/ButtonUnavailable.vue";
import ModalPracticas from "@/components/Modales/ModalPracticas.vue";
import axios from "axios";

export default {
  name: "Listado_de_practicas",
  components: {
    ButtonFinished,
    ButtonUnfinished,
    ButtonOutOfTime,
    ButtonUnavailable,
    ModalPracticas,
  },
  async mounted() {
    const url = this.$store.state.config_info.api_url + "/practicas";
    const push_route = this.$router.push;

    try {
      const response = await axios({
        url: url,
        method: "get",
        headers: {
          token: localStorage.jwt,
        },
      });

      this.$store.state.practicas.practicas = response.data.practicas;
    } catch (err) {
      console.log(err);
      this.$store.state.config_info.full_error = err;
      push_route("/error");
    }

    const url_avances = `${this.$store.state.config_info.api_url}/get_avances?email=${localStorage.email}`;
    try {
      const response = await axios({
        url: url_avances,
        method: "get",
        headers: {
          token: localStorage.jwt,
        },
      });
      for (let avance of response.data.avance_practicas) {
        let practica = this.$store.state.practicas.practicas.filter(
          (x) => x.id == avance.id_prac
        );
        practica[0].avance = avance.avance;
      }
    } catch (err) {
      console.log(err);
      this.$store.state.config_info.full_error = err;
      push_route("/error");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
