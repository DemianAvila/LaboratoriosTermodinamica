//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica6 = 6;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica6,
    question_type: "many",
    question: `Escriba las ecuaciones que se emplean para determinar la energía en forma\
    de calor transmitida al agua cuando no hay cambio de fase y cuando si lo hay.`,
    answer_type: "math"
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `Defina la entalpia de cambio de fase.`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "multiple_question",
    question: "Indique de que fase a que fase se llevan a cabo los siguientes procesos:",
    fields: [
      {
        _id: ObjectId(),
        field: "Ebullición",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Fusión",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Sublimación",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Solidificación",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Condensación",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `A partir de la primera ley de la termodinámica para un proceso isobárico\
    compruebe que el calor involucrado en el proceso es igual al cambio de entalpia.`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `Explique en qué consiste el efecto Joule.`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "table",
    question:
      `Investigue en tablas de propiedades termodinámicas la entalpia de
      vaporización del agua en las siguientes magnitudes`,
    table: {
      cols: ["[Btu/lbm]", "[J/g]", "[kJ/kg]"],
      rows: ["1.0", "1.5", "2.0", "2.5" ,"3.0"],
    },
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `¿Qué diferencia hay entre un termo, un vaso de Dewar y un calorímetro?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "attachment",
    question: "Haga un esquema de cada uno"
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `¿Qué instrumento se utiliza para medir el consumo de energía eléctrica?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `¿Qué es una fase y qué es un estado termodinámico?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica6,
    question_type: "open",
    question: `¿De qué propiedades termodinámicas dependen los cambios de fase para\
    una sustancia pura?`,
    answer_type: "textarea"
  },
])