import { createStore } from 'vuex'
import practicas from './modules/practicas'
import data_usuario from './modules/data_usuario'
import static_cont from './modules/static_cont'
import practica1 from './modules/practica1'

export default createStore({
  state: {
    practicas : practicas.state,
    data_usuario: data_usuario.state.data_usuario,
    avance_practicas: data_usuario.state.avance_practicas,
    static_cont: static_cont.state.static_cont,
    practica1: practica1.state
  },
  getters: {
    //ITERAR SOBRE CADA UNO DE LOS AVANCES DEL USUARIO
    //RETORNAR AQUEL QUE COINCIDA CON EL ID ARGUMENTO
    get_usuario_practica_data: (state) => (id) =>{
      let coincide_id = null;
      state.avance_practicas.forEach(element => {
        if (element.id_prac==id){
          coincide_id = element;
        }
      });
      return coincide_id; 
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    practicas,
    data_usuario
  }
})
