//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
practica1 = 1;
db.cuestionario_previo.insertMany([
  {
    practica_id: practica1,
    question_type: "multiple_question",
    question: "Defina:",
    fields: [
      {
        _id: ObjectId(),
        field: "Presión",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Presión absoluta",
        type: "textarea",
      },
      {
        _id: ObjectId(),
        field: "Presión relativa (manométrica y vacuométrica)",
        type: "textarea",
      },
    ],
  },
  {
    practica_id: practica1,
    question_type: "answer_list",
    question:
      "Mencione las unidades en que puede expresarse la presión (al menos cinco unidades distintas).",
    needed_answers: 5,
  },
  {
    practica_id: practica1,
    question_type: "answer_list",
    question:
      "Mencione al menos cinco instrumentos para medir la presión y explique brevemente su principio de funcionamiento.",
    needed_answers: 5,
  },
  {
    practica_id: practica1,
    question_type: "open",
    question: "¿Qué es la presión atmosférica y cómo se mide?",
  },
  {
    practica_id: practica1,
    question_type: "table",
    question:
      "Dé el valor de la presión atmosférica en las siguientes localidades:",
    table: {
      cols: ["Playa Dos Bocas", "Tabasco", "Ciudad de México"],
      rows: ["mm de mercurio", "pascales", "kilopascales"],
    },
  },
  {
    practica_id: practica1,
    question_type: "open",
    question:
      "La presión, ¿es una propiedad extensiva o intensiva? Justifique su respuesta.",
  },
  {
    practica_id: practica1,
    question_type: "attachment",
    media:
      "<table class='w-full border border-white'> <tr> <th class='border border-white'>Altura h[m]Hg</th> <th class='border border-white'>0.25</th> <th class='border border-white'>0.35</th> <th class='border border-white'>0.45</th> <th class='border border-white'>0.55</th> <th class='border border-white'>0.65</th> <th class='border border-white'>0.75</th> </tr> <tr> <td class='border border-white'><b>P<sub>atm</sub>[kPa]</b></td> <td class='border border-white'>110.90</td> <td class='border border-white'>124.03</td class='border border-white'> <td class='border border-white'>134.40</td> <td class='border border-white'>150.00</td> <td class='border border-white'>163.00</td> <td class='border border-white'>175.80</td> </tr> </table>",
    question:
      "Use el método de los mínimos cuadrados para obtener el modelo matemático de la presión en función de la altura y determine el valor de la presión atmosférica a una altura de 0.50 [m]Hg.",
  },
  {
    practica_id: practica1,
    question_type: "open",
    question:
      "Indique cómo varía la presión en un fluido que se encuentra estático",
  },
  {
    practica_id: practica1,
    question_type: "math",
    question: "Escriba la ecuación del gradiente de presión.",
  },
]);

db.diapositivas.insertMany([
  {
    practica_id: practica1,
    type: "introduccion",
    title: "Presiones",
    img: "https://static-int.testo.com/media/dc/fd/8313e81a8482/Pressure-Formula-1050x700px-EN_im4c.jpg",
    texto:
      `La presión es una propiedad intensiva, que se define como la razón de la ` +
      `fuerza normal (F), ejercida sobre un área (A) en cualquier punto de la frontera de un ` +
      `sistema. Sus unidades en el SI es el Pascal [Pa], definido como [N/m2].`,
    wireframe: 0,
  },
  {
    practica_id: practica1,
    question_type: "math",

    fragments: [
      {
        header: "Presión absoluta",
        text:
          `Es la presión en un punto determinado del sistema ` +
          `que se mide con respecto a la presión cero absoluto`,
      },
      {
        header: "Presión relativa",
        text:
          `Es la diferencia entre dos presiones absolutas (por lo ` +
          `general, la Presion atmosférica es una de ellas). La medición de la presión con un manóme
    tro es ` +
          `un ejemplo de presión relativa, y ésta puede ser positiva o negativa`,
      },
      {
        header: "Presión relativa positiva o presión manométrica",
        text:
          `Es la diferencia entre la presión absoluta de un sistema ` +
          `y la presión atmosférica, siendo la presión del sistema ` +
          `mayor que la presión atmosférica.`,
        attachment_type: "formula",
        attachment: "P_{abs} = P_{atm} + P_{man}",
      },
      {
        header: "Presión relativa negativa o presión vacuométrica",
        text:
          `Es la presión que se presenta cuando la presión atmosférica ` +
          `es mayor que la presión absoluta de un sistema. La presión ` +
          `absoluta de un sistema cuyo valor de presión manométrica es ` +
          `negativo`,
        attachment_type: "formula",
        attachment: "P_{abs} = P_{atm} - P_{vac}",
      },
      {
        header: "Presión barométrica o atmosférica",
        text:
          `Es la presión que ejerce la atmósfera, es decir, ` +
          `el peso de la atmósfera que hay por encima de un área. ` +
          `Normalmente se conoce como presión barométrica debido a que se determina ` +
          `utilizando un barómetro de Torricelli.`,
      },
    ],
    wireframe: 1,
  },
]);
