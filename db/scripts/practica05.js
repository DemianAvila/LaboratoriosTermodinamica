//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
practica5 = 5;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica5,
    question_type: "open",
    question: `¿Qué es la energía?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `Describa las formas mediante las cuales un sistema puede intercambiar\
    energía con su entorno.`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "answer_list",
    question: "Mencione cinco ejemplos de transformaciones de energía.",
    needed_answers: [
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
    ],
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `¿Cuál es la relación existente entre el calor y el trabajo?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `Explique la diferencia entre temperatura,\ 
    transferencia de calor y energía interna.`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `¿Qué es un proceso adiabático?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `Cuando un sistema sufre un proceso muy rápido, aunque sus paredes\ 
    no sean aislantes térmicas, dicho proceso puede considerarse adiabático, ¿por\
    qué?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `¿Qué es el trabajo?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "many",
    question: `Mencione las unidades del trabajo en el Sistema Internacional`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "multiple_question",
    question: "¿Cómo calcular el trabajo asociado a/al:",
    fields: [
      {
        _id: ObjectId(),
        field: "La compresión y expansión de un gas",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Suministro de energía eléctrica a un sistema",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Giro de un eje o flecha",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `Explique en qué consiste el experimento de Joule`,
    answer_type: "textarea",
  },
  {
    practica_id: practica5,
    question_type: "open",
    question: `¿Por qué no es conveniente hablar del contenido\ 
    de calor y del contenido de trabajo mecánico en un sistema?`,
    answer_type: "textarea",
  },
]);
