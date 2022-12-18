<template>
  <div class="w-full h-full lg:flex lg:flex-row">
    <!--BUTTON BACK PAGE CONTAINER-->
    <div
      class="hidden invisible lg:visible h-full w-[2%] lg:flex lg:flex-row items-center"
    >
      <button
        v-if="$store.state.practica1.vista > 0"
        class="bg-slate-50 w-[40px] h-[40px] rounded-full flex justify-center items-center"
        @click="prev_page"
      >
        ←
      </button>
    </div>
    <div
      class="w-full h-[7%] my-2 lg:hidden overflow-y-auto flex flex-col items-center justify-items-center"
    >
      <!--PREV PAGE BUTTON FOR MOBILE-->
      <button
        v-if="$store.state.practica1.vista > 0"
        class="bg-slate-50 w-[40px] h-[40px] rounded-full flex justify-center items-center"
        @click="prev_page"
      >
        ↑
      </button>
    </div>

    <!--DEFINED WIREFRAMES FROM BACKEND AND STORAGE-->
    <div class="p-8 text-slate-50 lg:w-[98%] w-full h-full">
      <WireframePracticas1
        v-if="
          $store.state.practica1.introduccion[$store.state.practica1.vista]
            .wireframe == 0
        "
        :prop="
          $store.state.practica1.introduccion[$store.state.practica1.vista]
        "
      >
      </WireframePracticas1>
      <WireframePracticas2
        v-else-if="
          $store.state.practica1.introduccion[$store.state.practica1.vista]
            .wireframe == 1
        "
        :prop="
          $store.state.practica1.introduccion[$store.state.practica1.vista]
        "
      >
      </WireframePracticas2>
    </div>
    <!--NEXT PAGE BUTTON-->
    <div
      class="hidden invisible lg:visible h-full- w-[2%] lg:flex lg:flex-row items-center"
    >
      <!--NEXT PAGE BUTTON DESKTOP-->
      <button
        v-if="
          $store.state.practica1.vista <
          $store.state.practica1.introduccion.length - 1
        "
        class="bg-slate-50 w-[40px] h-[40px] rounded-full flex justify-center items-center"
        @click="next_page"
      >
        →
      </button>
    </div>
    <div
      class="w-full h-[7%] my-2 lg:hidden overflow-y-auto flex flex-col items-center justify-items-center"
    >
      <!--NEXT PAGE BUTTON FOR MOBILE-->
      <button
        v-if="
          $store.state.practica1.vista <
          $store.state.practica1.introduccion.length - 1
        "
        class="bg-slate-50 w-[40px] h-[40px] rounded-full flex justify-center items-center"
        @click="next_page"
      >
        ↓
      </button>
    </div>
  </div>
</template>

<script>
import WireframePracticas1 from "@/components/Wireframes/WireframePracticas1";
import WireframePracticas2 from "@/components/Wireframes/WireframePracticas2";

export default {
  name: "PracticaLab1",
  components: {
    WireframePracticas1,
    WireframePracticas2,
  },
  methods: {
    next_page: function () {
      this.$store.state.practica1.vista += 1;
      console.log(this.$store.state.practica1.vista);
    },
    prev_page: function () {
      this.$store.state.practica1.vista -= 1;
    },
  },
};
</script>
