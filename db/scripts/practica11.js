//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
practica11 = 11;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Qué es un proceso de estrangulamiento?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Qué es la calidad de un vapor y qué valores puede tener?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Qué es una caldera?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Cómo se expresa la entalpia de una mezcla líquido-vapor en equilibrio, en\
    términos de las entalpias del líquido y del vapor saturados, para el caso de un\
    fluido?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "many",
    question: `¿En qué dispositivos se llevan a cabo procesos de estrangulamiento?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "attachment",
    question: `Dibuje un esquema aproximado de la curva de inversión`,
  },
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Por que se le llama curva de inversión?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "many",
    question: `Mencione algunos tipos de válvulas`,
    answer_type: "textarea",
  },
  {
    practica_id: practica11,
    question_type: "multiple_question",
    question:
      "Investigue los valores de la entalpia de evaporización a las siguientes presiones:",
    fields: [
      {
        _id: ObjectId(),
        field: "760 [mm] Hg",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "540 [mm] Hg",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "400 [mm] Hg",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica11,
    question_type: "multiple_question",
    question: `Utilizando tablas de vapor de agua, calcule la entalpia de mezcla, si la fracción
    másica del vapor es igual a 0.8 y el sistema se encuentra a una presión de 30
    [psig]. Exprese el resultado en`,
    fields: [
      {
        _id: ObjectId(),
        field: "Unidades del Sistema Internacional",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Unidades del Sistema Inglés",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica11,
    question_type: "choice",
    question: `¿Cómo se interpretan los siguientes valores del coeficiente de Joule-Thomson
    (μJT) con respecto a la temperatura?`,
    options: [
      {
        option: "a",
        answer: "positivo",
      },
      {
        option: "b",
        answer: "negativo",
      },
      {
        option: "c",
        answer: "igual a cero",
      },
    ],
  },
]);
