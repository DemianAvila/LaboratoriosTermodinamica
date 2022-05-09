/*ESTE ES EL STORE DESEADO PARA EL CONSUMO DE LA API DE LABORATORIOS
EN ESPECIFICO SE DESEA ACCEDER AL ENDPOINT DE
LAS PROPIEDADES DE LAS PRACTICAS*/

export default {
  namespaced: true,
  state: {
    //SUSTITUIR POR UN FETCH CUANDO LA API ESTE LISTA
    practicas : [
      {
        id: 1,
        titulo: "Presiones",
        disponible: true,
        fecha_entrega: new Date(2021, 11, 17),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 2,
        titulo: "Temperatura",
        disponible: true,
        fecha_entrega: new Date(2022, 0, 17),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 3,
        titulo: "Calorimetría",
        disponible: true,
        fecha_entrega: new Date(2022, 1, 17),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 4,
        titulo: "Capacidad térmica específica de metales",
        disponible: true,
        fecha_entrega: new Date(2022, 2, 17),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 5,
        titulo: "Conversión de trabajo en calor",
        disponible: true,
        fecha_entrega: new Date(2022, 3, 17),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 6,
        titulo: "Entalpia de transformación",
        disponible: true,
        fecha_entrega: new Date(2022, 3, 20),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ] 
      },
      {
        id: 7,
        titulo: "Gasto másico, potencia y eficiencia de una bomba",
        disponible: true,
        fecha_entrega: new Date(2022, 3, 23),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ] 
      },
      {
        id: 8,
        titulo: "Ley de Charles",
        disponible: true,
        fecha_entrega: new Date(2022, 3, 29),
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 9,
        titulo: "Ley de Boyle-Mariotte",
        disponible: false,
        fecha_entrega: null,
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 10,
        titulo: "Constante particular del aire",
        disponible: false,
        fecha_entrega: null,
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 11,
        titulo: "Coeficiente de Joule-Thomson",
        disponible: false,
        fecha_entrega: null,
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
      },
      {
        id: 12,
        titulo: "Análisis energético en un compresor",
        disponible: false,
        fecha_entrega: null,
        subtareas: [
          {
            id_subtarea: 1,
            titulo: "Previo"
          },
          {
            id_subtarea: 2,
            titulo: "Desarrollo"
          }
        ]
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
