import { createStore } from "vuex";
import practicas from "./modules/practicas";
import data_usuario from "./modules/data_usuario";
import static_cont from "./modules/static_cont";
import practica1 from "./modules/practica1";
import config_info from "./modules/config_info";

export default createStore({
  state: {
    practicas: practicas.state,
    data_usuario: data_usuario.state.data_usuario,
    avance_practicas: data_usuario.state.avance_practicas,
    static_cont: static_cont.state.static_cont,
    practica1: practica1.state,
    config_info: config_info.state,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    practicas,
    data_usuario,
  },
});
