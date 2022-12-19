/*ESTE ES EL STORE DESEADO PARA EL CONSUMO DE LA API DE LABORATORIOS
EN ESPECIFICO SE DESEA ACCEDER AL ENDPOINT DE LOS DATOS DEL USUARIO, QUE VAN
DESDE SU SESSION ID, SU NOMBRE, AVANCE DE LAS PRACTICAS GENERAL ETC.*/

export default {
  namespaced: true,
  state: {
    //SUSTITUIR POR UN FETCH CUANDO LA API ESTE LISTA
    data_usuario: {
      nombre_s: "Josue Demian",
      ap_paterno: "Avila",
      ap_materno: "Romero",
      id_grupo: 0,
      id_user: 0,
      google_session_id: 0,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
};
