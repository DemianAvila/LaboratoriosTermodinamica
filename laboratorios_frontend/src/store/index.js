import { createStore } from 'vuex'
import practicas from './modules/practicas'
import data_usuario from './modules/data_usuario'

export default createStore({
  state: {
    practicas : practicas.state,
    data_usuario: data_usuario.state.data_usuario,
    avance_practicas: data_usuario.state.avance_practicas
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    practicas
  }
})
