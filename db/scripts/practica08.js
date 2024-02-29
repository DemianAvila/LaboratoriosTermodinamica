//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
practica8 = 8;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica8,
    question_type: "multiple_question",
    question: "¿Qué es un proceso termodinámico casi-estático:",
    fields: [
      {
        _id: ObjectId(),
        field: "Isotérmico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Isobárico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Isométrico",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica8,
    question_type: "open",
    question: `Enuncie la ley de Charles`,
    answer_type: "textarea",
  },
  {
    practica_id: practica8,
    question_type: "answer_list",
    question: "Enuncie tres aplicaciones de la ley de Charles",
    needed_answers: ["textarea", "textarea", "textarea"],
  },
  {
    practica_id: practica8,
    question_type: "answer_list",
    question: "Mencione 10 gases a los que puede aplicarse la ley de Charles.",
    needed_answers: [
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
      "textarea",
    ],
  },
  {
    practica_id: practica8,
    question_type: "open",
    question: `¿Es lo mismo proceso que trayectoria? Justifique su respuesta.`,
    answer_type: "textarea",
  },
  {
    practica_id: practica8,
    question_type: "open",
    question: `¿Por qué es necesario el uso de la presión absoluta en los análisis \
    termodinámicos?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica8,
    question_type: "open",
    question: `¿Bajo qué condiciones un gas real tiende a comportarse como gas ideal?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica8,
    question_type: "open",
    question: `¿Cómo se obtiene el gas licuado?`,
    answer_type: "textarea",
  },
  {
    practica_id: practica8,
    question_type: "attachment",
    question: "Dibuje una isoterma para un gas en un diagrama (V-P).",
  },
  {
    practica_id: practica8,
    question_type: "multiple_question",
    question: `Se miden experimentalmente los valores de las variables r y s.\ 
    Se cree que entre ellas existe una relación lineal. Establezca los mejores valores de`,
    media:
      "<table class='w-full border border-white'> <tr> <td class='border border-white'>r</td><td class='border border-white'>4.8</td><td class='border border-white'>9.6</td><td class='border border-white'>14.4</td><td class='border border-white'>19.2</td><td class='border border-white'>24.0</td><td class='border border-white'>28.8</td><td class='border border-white'>33.6</td></tr><tr> <td class='border border-white'>s</td><td class='border border-white'>15.43</td><td class='border border-white'>19.35</td><td class='border border-white'>23.23</td><td class='border border-white'>27.15</td><td class='border border-white'>31.03</td><td class='border border-white'>34.95</td><td class='border border-white'>38.83</td></tr></table>",
    fields: [
      {
        _id: ObjectId(),
        field: "La pendiente",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Isobárico",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Isométrico",
        type: "textarea",
      },
    ],
  },
]);
