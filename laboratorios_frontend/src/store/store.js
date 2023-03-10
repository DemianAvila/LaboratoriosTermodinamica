import { createStore } from "vuex";
import practicas from "./modules/practicas";
import data_usuario from "./modules/data_usuario";
import static_cont from "./modules/static_cont";
import practica1 from "./modules/practica1";
import config_info from "./modules/config_info";
import axios from "axios";


export default createStore({
  state: {
    practicas: practicas.state,
    data_usuario: data_usuario.state.data_usuario,
    avance_practicas: data_usuario.state.avance_practicas,
    static_cont: static_cont.state.static_cont,
    practica1: practica1.state,
    config_info: config_info.state,
    models3d: {},
  },
  getters: {},
  mutations: {},
  actions: {
    async getModels (a ,payload){
      try{
          let models = await axios(
              {
                  url: `${payload.url}/modelo3d?practica_id=${payload.practica_id}`,
                  method: "get",
                  headers: {
                      token: payload.token
                  }
              }   
          ) 
          a.state.models3d.current_data = models.data
      } catch(error){
          console.log(error)
      }
      
  }
  },
  modules: {
    practicas,
    data_usuario,
  },
});
