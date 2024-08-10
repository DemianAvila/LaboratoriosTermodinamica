//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica9 = 9;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica9,
    question_type: "open",
    question: `Explique en qué consiste el experimento de Boyle-Mariotte.`,
    answer_type: "textarea",
  },
  {
    practica_id: practica9,
    question_type: "open",
    question: `¿Qué representa el área bajo la curva en un diagrama (V-P) para una\
    sustancia simple compresible?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica9,
    question_type: "open",
    question: `¿Cómo se calcula el trabajo de expansión-comprensión de un gas?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica9,
    question_type: "multiple_question",
    question: "¿Qué es",
    fields: [
      {
        _id: ObjectId(),
        field: "Up proceso politrópico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "El indice politrópico",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica9,
    question_type: "answer_list",
    question: "Mencione tres aplicaciones de la ley de Boyle.",
    needed_answers: ["textarea", "textarea", "textarea"],
  },
  {
    practica_id: practica9,
    question_type: "open",
    question: `¿Por qué es vital para un buzo conocer la ley de Boyle?`,
    answer_type: "textarea",
  },
]);
