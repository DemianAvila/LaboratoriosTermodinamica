//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
practica7 = 7;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica7,
    question_type: "open",
    question: `Escriba la ecuación de la primera ley de la Termodinámica para sistemas\
    abiertos y explique cada uno de sus términos.`,
    answer_type: "math",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `Escriba la ecuación de continuidad y mencione las\ 
    unidades del gasto másico en el SI.`,
    answer_type: "math",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Cuál es la diferencia entre una bomba centrífuga\ 
    y una de desplazamiento positivo?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "many",
    question: `A partir de la ecuación de la primera ley de la Termodinámica\ 
    deduzca la ecuación de Bernoulli.`,
    answer_type: "math",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿A qué se le llama “efecto Bernoulli”?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "multiple_question",
    question: " Para un sistema abierto, ¿qué es...",
    fields: [
      {
        _id: ObjectId(),
        field: "Régimen permanente",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Estado estacionario",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Flujo unidimensional",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Qué es el trabajo de eje o trabajo de flecha?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `Escriba la ecuación para cuantificarlo`,
    answer_type: "math",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `Explique cada uno de sus términos`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Qué es la potencia de una bomba`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Cómo se obtiene?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "many",
    question: `¿Cuáles son sus unidades?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Qué es una pichancha y cómo funciona?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica7,
    question_type: "open",
    question: `¿Qué significa “purgar” y “cebar” una bomba?`,
    answer_type: "textarea",
  },
]);
