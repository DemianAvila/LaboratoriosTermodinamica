<template>
  <div id="backg" class="w-full h-full overflow-y-hidden flex flex-col items-center justify-center
  sm:justify-start">
    <div id="pagina" class="flex flex-col w-full h-[80%] 
    sm:flex-row">
      <div
        id="titulo"
        class="flex flex-col w-full h-[40%] items-center justify-center
        sm:w-[60%] sm:h-full sm:flex-row">
        <div class="w-full h-[40%] flex flex-row items-center justify-center py-6
        sm:h-full sm:w-[70%]">
          <h1 class="text-sky-100 text-center text-4xl">
            Laboratorio de termodinámica
          </h1>
        </div>
        <div class="flex flex-row w-full h-[60%] items-center justify-center py-6
        sm:h-full sm:w-[30%]">
          <img class="max-w-full max-h-full"
            src="https://www.nicepng.com/png/full/1010-10105314_escudo-y-lema-de-la-unam.png"
          />
        </div>
      </div>
      <div id="separador"
      class="flex flex-col w-full h-[5%] items-center justify-center 
      sm:w-[4%] sm:h-full">
        <div class="border-t-2 border-sky-100 w-[90%] sm:hidden"></div>
        <div class="border-l-2 border-sky-100 h-[90%] hidden sm:block"></div>
      </div> 
      <div
        id="ingresa"
        class="flex flex-col w-full h-[40%] items-center justify-center
        sm:w-[36%] sm:h-full"
      >
        <div class="w-full h-[30%] flex flex-col items-center justify-center sm:h-[30%]">
          <h1 class="text-sky-100 text-center text-xl w-[80%]">
            Ingresa o regístrate con tu cuenta institucional
          </h1>
        </div>
        <div
        class="w-full h-[50%] flex flex-col items-center justify-center sm:h-[20%]"
        ref="google_button"
        ></div>
      </div>
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
        google_render = false;
      }
    }
    const url = this.$store.state.config_info.api_url;
    const router = this.$router;
    const config_info = this.$store.state.config_info;
    async function getToken(response) {
      try {
        console.log(url);
        let session_req = await axios.post(`${url}/signin_or_login`, {
          token: response.credential,
        });

        localStorage.jwt = session_req.data.token;
        localStorage.email = session_req.data.email;
        router.push("/");
      } catch (err) {
        console.log(err);
        config_info.full_error = err;
        router.push("/error");
      }
    }
  },
};
</script>
