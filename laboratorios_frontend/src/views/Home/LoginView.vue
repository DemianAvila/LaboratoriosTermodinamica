<template>
  <div id="backg" class="w-full h-full overflow-y-hidden">
    <div id="pagina" class="h-4/6 grid grid-rows-6 px-6 lg:grid lg:grid-cols-2">
      <div
        id="titulo"
        class="flex justify-center grid grid-cols-2 row-start-2 lg:col-start-1 lg:row-start-3"
      >
        <div class="col-span-2 grid grid-cols-4">
          <h1 class="text-sky-100 text-center text-4xl lg:text-7xl col-span-3">
            Laboratorio de termodinámica
          </h1>
          <img
            class="p-2 lg:p-4 lg:pr-10"
            src="https://www.nicepng.com/png/full/1010-10105314_escudo-y-lema-de-la-unam.png"
          />
        </div>
      </div>
      <div
        class="h-0 lg:h-full lg:col-start-1 lg:border-r-2 lg:border-sky-100 lg:row-start-2 lg:row-span-4"
      ></div>
      <div class="grid grid-flow-row row-start-3 lg:col-start-1 lg:w-0 lg:h-0">
        <div class="lg:border-r-2 border-sky-100"></div>
        <div class="border-t-2 border-sky-100 lg:w-0 lg:h-0"></div>
      </div>

      <div
        id="ingresa"
        class="flex justify-center grid grid-cols-2 row-start-4 lg:row-start-3 lg:col-start-2"
      >
        <div class="col-span-2">
          <h1 class="text-sky-100 text-center text-xl">
            Ingresa o regístrate con tu cuenta institucional
          </h1>
        </div>
      </div>

      <div
        class="w-full flex flex-row justify-center"
        ref="google_button"
      ></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "LoginView",
  mounted: async function () {
    let google_render = false;
    while (!google_render) {
      try {
        await window.google.accounts.id.initialize({
          client_id: this.$store.state.config_info.google_id,
          callback: getToken,
        });

        await window.google.accounts.id.renderButton(this.$refs.google_button, {
          theme: "outline",
          size: "large",
        });
        google_render = true;
      } catch (err) {
        google_render = true;
      }
    }
    const url = this.$store.state.config_info.api_url;
    const push = this.$router.push;
    async function getToken(response) {
      try {
        let session_req = await axios.post(`${url}/signin_or_login`, {
          token: response.credential,
        });
        localStorage.jwt = session_req.data.token;
        localStorage.email = session_req.data.email;
        push("/");
      } catch (err) {
        console.log(err);
        this.$store.state.config_info.full_error = err;
        push("/error");
      }
    }
  },
};
</script>
