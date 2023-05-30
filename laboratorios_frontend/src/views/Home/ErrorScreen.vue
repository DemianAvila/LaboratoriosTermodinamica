<template>
  <div
    class="h-[80%] w-full flex flex-col justify-center items-center text-white"
  >
    <div class="h-full w-full flex flex-col justify-center items-center">
      <img
        src="@/assets/img/broken_flask.png"
        alt="error_img"
        class="w-full px-[4em]"
      />
      <h1 class="text-center text-3xl p-2">Tuvimos un problema...</h1>
      <h2 class="text-center text-xl p-2">
        Contacta con el desarrollador con el siguiente mensaje y tu nombre de
        usuario...
      </h2>
      <div
        class="w-[85%] bg-red-200 text-black overflow-y-scroll h-[20%] rounded-md p-2"
      >
        <p>{{ $store.state.config_info.error_description }}</p>
        <p>{{ $store.state.config_info.full_error }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorScreen",
};
</script>
