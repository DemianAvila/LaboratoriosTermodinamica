//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica12 = 12;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica12,
    question_type: "open",
    question: `¿Qué es una máquina térmica?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `¿Qué es una bomba de calor?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "attachment",
    question:
      `Dibuje un esquema de una máquina térmica y de una bomba de calor,
      indicando los flujos energéticos involucrados.`,
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `¿Qué es un compresor?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "many",
    question: `¿Qué tipos de compresores se utilizan
    industrialmente?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `Investigue las características del refrigerante R-134a.`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `Escriba la ecuación de la primera ley de la termodinámica aplicada a un ciclo`,
    answer_type: "math"
  },
  {
    practica_id: practica12,
    question_type: "many",
    question: `Explique cada uno de los términos de la ecuación 
    de la primera ley de la termodinámica`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `Con base en la primera ley de la Termodinámica escriba la ecuación que
    permita calcular el trabajo que requiere el compresor adiabático para su
    funcionamiento.`,
    answer_type: "math"
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `Escriba la ecuación del balance de entropía en un compresor`,
    answer_type: "math"
  },
  {
    practica_id: practica12,
    question_type: "many",
    question: `Explique cada uno de los términos de la ecuación 
    del balance de entropía en un compresor`,
    answer_type: "textarea"
  },
  {
    practica_id: practica12,
    question_type: "multiple_question",
    question: "Investigue y explique qué es:",
    fields: [
      {
        _id: ObjectId(),
        field: "La eficiencia",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "La eficiencia mecánica",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "La eficiencia térmica",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "La eficiencia adiabática",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica12,
    question_type: "open",
    question: `Investigue y escriba la ecuación que se aplica para calcular la eficiencia
    adiabática en un compresor.`,
    answer_type: "math"
  },
  {
    practica_id: practica12,
    question_type: "attachment",
    question:
      `Dibuje los diagramas termodinámicos (s, T), (h, P) y (v, P) para una máquina
      de refrigeración.`,
  },
])
