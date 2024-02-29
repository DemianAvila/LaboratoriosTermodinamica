//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
practica2 = 2;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica2,
    question_type: "multiple_question",
    question: "Defina:",
    fields: [
      {
        _id: ObjectId(),
        field: "Equilibrio",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Equilibrio térmico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Equilibrio termodinámico",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica2,
    question_type: "open",
    question: "¿Qué establece la ley cero de la Termodinámica?",
    answer_type: "textarea",
  },
  {
    practica_id: practica2,
    question_type: "open",
    question:
      "¿Cuáles son las escalas de temperatura absoluta y relativa en el sistema internacional y en el sistema inglés?",
    answer_type: "textarea",
  },

  {
    practica_id: practica2,
    question_type: "open",
    question:
      "¿Qué es la temperatura desde el punto de vista de la termodinámica clásica?",
    answer_type: "textarea",
  },
  {
    practica_id: practica2,
    question_type: "attachment",
    question:
      "Dibuje un esquema de la curva de calentamiento del agua y explíquela.",
    answer_type: "textarea",
  },
  {
    practica_id: practica2,
    question_type: "open",
    question:
      "¿Cuáles son los puntos de referencia para determinar las escalas empíricas de temperatura?",
    answer_type: "textarea",
  },
  {
    practica_id: practica2,
    question_type: "multiple_question",
    question:
      "Explique el principio de funcionamiento de los termómetros siguientes:",
    fields: [
      {
        _id: ObjectId(),
        field: "De bulbo con alcohol o de inmersión,",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Termopar",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Bimetálico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "De gas a volumen constante",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "De gas a presión constante",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica2,
    question_type: "multiple_question",
    question: "Investigue:",
    fields: [
      {
        _id: ObjectId(),
        field: "Punto de ebullición del agua a nivel del mar",
        type: "textarea",
      },

      {
        _id: ObjectId(),
        field: "Punto de fusión del agua a nivel del mar",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Punto de ebullición del agua en la Ciudad de México",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Punto de fusión del agua en la Ciudad de México",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica2,
    question_type: "open",
    question: "¿Qué es el cero absoluto de temperatura?",
    answer_type: "textarea",
  },
]);

db.diapositivas.insertMany([
  {
    practica_id: practica2,
    type: "introduccion",
    title: "Temperatura",
    img: "https://aprendihoy.com/wp-content/uploads/2021/10/termometro-frio-y-caliente-que-es-la-temperatura.png",
    texto:
      `Definir la temperatura no es sencillo, frecuentemente se dice que la` +
      `temperatura es una propiedad termodinámica intensiva que ayuda a clasificar a los` +
      `sistemas como calientes o fríos. Esta forma de definir a esta propiedad en ocasiones` +
      `es confusa y ambigua.`,
    wireframe: 0,
  },
  {
    practica_id: practica2,
    type: "introduccion",
    title: "",
    img: "",
    texto:
      `Sin embargo, podemos decir que la temperatura es la` +
      `propiedad termodinámica que se encuentra asociada al equilibrio térmico, o bien,` +
      `es la propiedad que establece cuando dos o más sistemas que interaccionan entre` +
      `sí, se encuentra en un estado térmico de equilibrio.`,
    wireframe: 0,
  },
]);
