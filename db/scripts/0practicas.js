db = db.getSiblingDB("laboratorio_info");
db.practicas.insertMany([
  {
    id: 1,
    nombre: "practica_1",
    titulo: "Presiones",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 2,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Introducción",
      },
      {
        id_subtarea: 3,
        titulo: "Desarrollo",
      },
      {
        id_subtarea: 4,
        titulo: "Conslusiones",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 2,
    nombre: "practica_2",
    titulo: "Temperatura",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 3,
    nombre: "practica_3",
    titulo: "Calorimetría",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 4,
    nombre: "practica_4",
    titulo: "Capacidad térmica específica de metales",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 5,
    nombre: "practica_5",
    titulo: "Conversión de trabajo en calor",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 6,
    nombre: "practica_6",
    titulo: "Entalpia de transformación",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 7,
    nombre: "practica_7",
    titulo: "Gasto másico, potencia y eficiencia de una bomba",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 8,
    nombre: "practica_8",
    titulo: "Ley de Charles",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 9,
    nombre: "practica_9",
    titulo: "Ley de Boyle-Mariotte",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 10,
    nombre: "practica_10",
    titulo: "Constante particular del aire",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 11,
    nombre: "practica_11",
    titulo: "Coeficiente de Joule-Thomson",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
  {
    id: 12,
    nombre: "practica_12",
    titulo: "Análisis energético en un compresor",
    disponible: true,
    fecha_entrega: Date.now(),
    subtareas: [
      {
        id_subtarea: 1,
        titulo: "Previo",
      },
      {
        id_subtarea: 2,
        titulo: "Desarrollo",
      },
    ],
    mostrar_subtareas: false,
  },
]);
