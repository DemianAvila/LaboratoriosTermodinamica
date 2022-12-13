<template>
  <div>
    <div class="w-screen h-screen">
      <div
        class="bg-scroll bg-cover bg-no-repeat bg-center w-full h-full overflow-y-hidden flex flex-col lg:bg-scroll lg:bg-cover lg:bg-no-repeat lg:w-full lg:h-full"
        style="
          background-image: url(https://drive.google.com/uc?export=view&id=1OFFEYVQzewzqZwC3sNMAUaN5v9QSVxB_);
        "
      >
        <div
          id="navbar"
          class="w-full h-[6%] max-h-[55px] flex flex-row items-center justify-between"
        >
          <div @click="home" class="p-2 px-6">
            <i class="text-white fa-solid fa-flask fa-lg"></i>
          </div>
          <div @click="show_menu" class="p-2 px-6">
            <i class="text-white fa-solid fa-bars fa-lg"></i>
          </div>
        </div>
        <div id="routing-components" class="w-full h-[94%] overflow-y-auto">
          <div
            v-if="menu"
            class="fixed h-[90%] w-full text-white flex flex-col content-end"
          >
            <div class="w-1/2 h-full overflow-y-auto self-end">
              <div
                @click="show_subtask(item)"
                v-for="(item, index) in $store.state.practicas.practicas"
                :key="index"
                class="w-full p-6 bg-slate-900 hover:bg-slate-800"
              >
                <p v-if="item.disponible">
                  <i class="text-white fa-solid fa-flask fa-lg"></i>
                  {{ item.titulo }}
                </p>
                <p v-else class="text-slate-500">
                  <i class="text-slate-500 fa-solid fa-xmark fa-lg m-2"></i>
                  {{ item.titulo }}
                </p>
                <div v-if="subtask.show && subtask.for_task == item.titulo">
                  <p
                    @click="redirect(item, subtarea)"
                    v-for="(subtarea, index2) in subtask.subtareas"
                    :key="index2"
                    class="p-3 pl-6 hover:bg-slate-600"
                  >
                    <i class="text-white fa-solid fa-circle-dot fa-sm"></i>
                    {{ subtarea }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full w-full overflow-y-auto">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap");
body {
  font-family: "Zen Kurenaido", sans-serif;
}
</style>

<script>
export default {
  name: "app",
  data: function () {
    return {
      menu: false,
      subtask: {
        for_task: null,
        show: false,
        subtareas: [],
      },
    };
  },
  methods: {
    home: function () {
      this.$router.push("/");
      this.menu = false;
      this.subtask.show = false;
      this.subtask.for_task = null;
      this.subtask.subtareas = [];
    },
    show_menu: function () {
      this.menu = !this.menu;
    },
    show_subtask: function (subt_name) {
      if (subt_name.disponible && !this.subtask.show) {
        //RESET
        this.subtask.show = false;
        this.subtask.for_task = null;
        this.subtask.subtareas = [];
        //ASSIGN
        this.subtask.show = true;
        this.subtask.for_task = subt_name.titulo;
        //FOR EACH OF THE SUBTASK ADD TO LIST
        subt_name.subtareas.forEach((item) => {
          this.subtask.subtareas.push(item.titulo);
        });
      } else if (subt_name.disponible && this.subtask.show) {
        this.subtask.show = false;
        this.subtask.for_task = null;
        this.subtask.subtareas = [];
      }
    },
    redirect: function (item, subtask) {
      this.$router.push("/" + item.nombre + "/" + subtask);
      //RESET
      this.menu = false;
      this.subtask.show = false;
      this.subtask.for_task = null;
      this.subtask.subtareas = [];
    },
  },
};
</script>
