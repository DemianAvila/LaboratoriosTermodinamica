import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/practica_1/Introducción",
    name: "practica1_introduccion",
    component: () => import("../views/Practica1/Practica1_Introduccion.vue"),
  },
  {
    path: "/practica_1/Desarrollo",
    name: "practica1_desarrollo",
    component: () => import("../views/Practica1/Practica1_Desarrollo.vue"),
  },
  {
    path: "/practica_1/Previo",
    name: "practica1_previo",
    component: () => import("../views/Practica1/Practica1_Previo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
