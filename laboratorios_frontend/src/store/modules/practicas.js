/*ESTE ES EL STORE DESEADO PARA EL CONSUMO DE LA API DE LABORATORIOS
EN ESPECIFICO SE DESEA ACCEDER AL ENDPOINT DE
LAS PROPIEDADES DE LAS PRACTICAS*/

export default {
  namespaced: true,
  state: {
    //SUSTITUIR POR UN FETCH CUANDO LA API ESTE LISTA
    modal_subtareas: {
      show: false,
      id_practica: null,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
};
