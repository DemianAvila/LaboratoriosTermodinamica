/*ESTE ES EL STORE DESEADO PARA EL CONSUMO DE LA API DE LABORATORIOS
EN ESPECIFICO SE DESEA ACCEDER AL ENDPOINT DE
LAS PROPIEDADES DE LAS PRACTICAS*/

export default {
  namespaced: true,
  state: {
    //SUSTITUIR POR UN FETCH CUANDO LA API ESTE LISTA
    vista: 0,
    desarrollo: [
        {
            title: "Presiones",
            img: "https://static-int.testo.com/media/dc/fd/8313e81a8482/Pressure-Formula-1050x700px-EN_im4c.jpg",
            texto: `La presión es una propiedad intensiva, que se define como la razón de la `+
                `fuerza normal (F), ejercida sobre un área (A) en cualquier punto de la frontera de un `+
                `sistema. Sus unidades en el SI es el Pascal [Pa], definido como [N/m2].`,
            wireframe: 0
        }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}
