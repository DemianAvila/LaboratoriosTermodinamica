import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "@/assets/css/tailwind.css";

const app = createApp(App);

app.config.globalProperties.window = window;

app.use(store).use(router).mount("#app");
