//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica11 = 11;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica11,
    question_type: "open",
    question: `¿Qué es un proceso de estrangulamiento?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Qué es la calidad de un vapor y qué valores puede tener?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Qué es una caldera?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "open",
    question: `¿Cómo se expresa la entalpia de una mezcla líquido-vapor en equilibrio, en\
    términos de las entalpias del líquido y del vapor saturados, para el caso de un\
    fluido?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica10,
    question_type: "many",
    question: `¿En qué dispositivos se llevan a cabo procesos de estrangulamiento?`,
    answer_type: "textarea"
  },
  {
    practica_id: practica1,
    question_type: "attachment",
    question:
      "Use el método de los mínimos cuadrados para obtener el modelo matemático de la presión en función de la altura y determine el valor de la presión atmosférica a una altura de 0.50 [m]Hg.",
  },
])