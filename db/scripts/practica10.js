//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica10 = 10;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica10,
    question_type: "many",
    question: `¿Cuáles son las características de un gas ideal?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Cuál es la composición de aire seco?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Qué es una ecuación de estado?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `Anota la ecuación general del estado gaseoso en función \
    de la constante universal de los gases.`,
    answer_type: "math"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Cuál es el valor de la constante universal de los gases en el SI?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    media:
      "<p>Investiga el valor de la constante “R” de los siguientes gases: O<sub>2</sub>, N<sub>2</sub>, Ar y del aire.</p>",
    question:
      "",
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `Describa la ley de Avogadro.`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Cómo se relacionan la constante universal de los gases y la constante \
    particular de un gas cualquiera?`,
    answer_type: "textarea"
  },
])