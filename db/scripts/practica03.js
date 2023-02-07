//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica3 = 3;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica3,
    question_type: "open",
    question: "Defina el concepto de calor",
    answer_type: "textarea"
  },
  {
    practica_id: practica3,
    question_type: "open",
    question: "Explique en que consiste la técnica llamada calorimetría",
    answer_type: "textarea" 
  },
  {
    practica_id: practica3,
    question_type: "open",
    question: "Explique que es un calorímetro",
    answer_type: "textarea" 
  },
  {
    practica_id: practica3,
    question_type: "open",
    question: `Defina el concepto de energía interna considerando \
    un enfoque macroscópico`,
    answer_type: "textarea" 
  },
  {
    practica_id: practica3,
    question_type: "multiple_question",
    question: "Describa los mecanismos de propagación de calor por:",
    fields: [
      {
        _id: ObjectId(),
        field: "Conducción",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Convección",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Radiación",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica3,
    question_type: "open",
    question: `Explique por qué un abrigo no permite que la persona\
     que lo usa sienta frío`,
    answer_type: "textarea" 
  },
  {
    practica_id: practica3,
    question_type: "open",
    question: `¿Por qué no es conveniente hablar de la cantidad de\
    calor contenido en un cuerpo?`,
    answer_type: "textarea" 
  },

]);