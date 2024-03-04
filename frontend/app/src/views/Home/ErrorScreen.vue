<template>
  <div
    class="h-full w-full flex flex-col justify-center items-center text-white"
  >
    <div class="h-[90%] w-full flex flex-col justify-center items-center
    sm:flex-row">
      <div class="h-[40%] w-full flex flex-col justify-center items-center
      sm:h-full w-[40%]">
          <img
          src="@/assets/img/broken_flask.png"
          alt="error_img"
          class="max-w-full h-full"
        />
      </div>
      <div class="h-[40%] w-full flex flex-col justify-center items-center
      sm:h-full w-[60%]">
        <h1 class="text-center text-3xl p-2 h-[20%]">Tuvimos un problema...</h1>
        <h2 class="text-center text-xl p-2 h-[30%]">
          Contacta con el desarrollador con el siguiente mensaje y tu nombre de
          usuario...
        </h2>
        <div
          class="w-[85%] bg-red-200 text-black overflow-y-scroll h-[50%] rounded-md p-2
          "
        >
          <p>{{ $store.state.config_info.error_description }}</p>
          <p>{{ $store.state.config_info.full_error }}</p>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorScreen",
};
</script>
