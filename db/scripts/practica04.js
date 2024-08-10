//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica4 = 4;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica4,
    question_type: "open",
    question: `Escriba la relación matemática que se utiliza\
    para cuantificar la capacidad térmica especifica de un metal`,
    answer_type: "math",
  },
  {
    practica_id: practica4,
    question_type: "table",
    question: `Investigue en la literatura la capacidad térmica\
       específica de las siguientes sustancias:`,
    table: {
      cols: ["cal/g°C", "kJ/kg°C"],
      rows: ["Plomo", "Aluminio", "Cinc"],
    },
  },
  {
    practica_id: practica4,
    question_type: "multiple_question",
    question: "Acerca de la parafina:",
    fields: [
      {
        _id: ObjectId(),
        field: "¿Qué es?",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "¿Cómo se obtiene?",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "¿Para qué se usa?",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica4,
    question_type: "open",
    question: `Un trozo de plomo de 250 [g] se calienta hasta 101 [°C] y se coloca\ 
    en un calorímetro de cobre de 350 [g], el cual contiene 2 [l] de agua a 19 [°C].\
    Determine la temperatura final del plomo`,
    answer_type: "math",
  },
  {
    practica_id: practica4,
    question_type: "open",
    question: `Para determinar la capacidad térmica específica de un bloque de 110 [g] de\
    cierto material se introduce éste en un calorímetro de cobre de 30 [g] que\
    contiene 65 [g] de agua. El sistema inicialmente se encuentra a 27 [°C].\
    Posteriormente se añaden 115 [ml] de agua a 78 [°C] al calorímetro. Cuando\
    se alcanza el equilibrio térmico, la temperatura del agua es de 51 [°C].\
    Determine la capacidad térmica específica del bloque, en [kJ/kgoC].`,
    answer_type: "math",
  },
  {
    practica_id: practica4,
    question_type: "open",
    question: `Explique cómo funciona el calibrador con Vernier`,
    answer_type: "textarea",
  },
  {
    practica_id: practica4,
    question_type: "open",
    question: `Explique cómo funciona la balanza de triple brazo.`,
    answer_type: "textarea",
  },
]);
