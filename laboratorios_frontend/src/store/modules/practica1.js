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
        },
        {
            fragments: [
                {
                    header: "Presión absoluta",
                    text: `Es la presión en un punto determinado del sistema`+
                        `que se mide con respecto a la presión cero absoluto`
                },
                {
                    header: "Presión relativa",
                    text: `Es la diferencia entre dos presiones absolutas (por lo`+
                        `general, la Patm es una de ellas). La medición de la presión con un manómetro es`+
                        `un ejemplo de presión relativa, y ésta puede ser positiva o negativa`
                },
                {
                    header: "Presión relativa positiva",
                    attachment_type: "formula",
                    attachment: "P_{abs} = P_{atm} + P_{man}"

                },
                {
                    header: "Presión relativa negativa"
                },
                {
                    header: "Presión barométrica o atmosférica"
                },
            ],
            wireframe: 1
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
