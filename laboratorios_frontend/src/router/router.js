import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";
import LoginView from "@/views/Home/LoginView.vue";
import ErrorScreen from "@/views/Home/ErrorScreen.vue";
import store from "@/store/store";
import axios from "axios";

const meta_student_auth = {
  requiresAuth: true,
  beStudent: true,
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: meta_student_auth,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/error",
    name: "error",
    component: ErrorScreen,
  },
  {
    path: "/Introducción",
    name: "practica1_introduccion",
    component: () => import("../views/Practica1/Practica1_Introduccion.vue"),
    meta: meta_student_auth,
  },
  {
    path: "/practica_1/Desarrollo",
    name: "practica1_desarrollo",
    component: () => import("../views/Practica1/Practica1_Desarrollo.vue"),
    meta: meta_student_auth,
  },
  {
    path: "/Previo",
    name: "practica1_previo",
    component: () => import("../views/Practica1/Practica1_Previo.vue"),
    meta: meta_student_auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth) {
    if (localStorage.jwt) {
      //CALL THE API
      const url = store.state.config_info.api_url + "/active_session";
      try {
        const response = await axios.post(url, {
          token: localStorage.jwt,
        });
        if (response.data.active_session === false) {
          return { name: "login" };
        }
      } catch (err) {
        console.log(err);
        return { name: "login" };
      }
    } else {
      return { name: "login" };
    }
  }
});

export default router;
