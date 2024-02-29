//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorios");
db.textures.insertMany([
  {
    name: "glass",
    color: 0xefefef, // glass color
    metalness: 0.1, // non-metallic
    roughness: 0.1, // very smooth surface
    transmission: 0.9, // high transparency
    transparent: true, // enable transparency
    opacity: 0.3, // set the opacity of the material
    needsUpdate: true,
  },
  {
    name: "genericWater",
    color: 0x000000,
    metalness: 0.9,
    roughness: 0.1,
    transmission: 0.9,
    transparent: true,
    opacity: 0.5,
    needsUpdate: true,
  },
  {
    name: "plastic",
    color: 0x000000,
    metalness: 0.1,
    roughness: 0.5,
    needsUpdate: true,
  },
  {
    name: "invisible",
    opacity: 0,
    transparent: true,
  },
]);

db.metadata.insertOne({
  practica_id: 1,
  metadata: {
    subpractices: [
      {
        file_name: "practica1.glb",
        variation_nums: 5,
        variations: {
          textures: {
            fluido_vaso: {
              color: [0x000000, 0x040075, 0xc700a2, 0x18b300, 0xe8ca07],
            },
            fluido_tubo: {
              color: [0x000000, 0xc700a2, 0x040075, 0xe8ca07, 0x18b300],
            },
          },
        },
        materials: [
          {
            name: "Campana de inmersion",
            meshes: ["campana", "manguera"],
            visibleBoxes: ["armature_campana", "armature_manguera"]
          },
          {
            name: "Manometro diferencial",
            meshes: ["tubo_fluido", "fluido_tubo"],
            visibleBoxes: ["tubo_fluido", "fluido_tubo"]
          },
          {
            name: "Vaso de precipitado con multiples fluidos",
            meshes: ["vaso", "fluido_vaso"],
            visibleBoxes: ["vaso", "fluido_vaso"]
          },
        ],
        instructions: [
          [
            {
              type: "text",
              text: `Sumergir la campana de inmersión, que se encuentra conectada al manómetro \
                            diferencial, en cadauno de los líquidos contenidos en los vasos de precipitados \
                            de 1 litro y observar el cambio en el nivel del líquido manométrico.`,
            },
          ],
          [
            {
              type: "text",
              text: `Tomar lecturas de la diferencia de niveles del líquido manométrico que se \
                            establece entre los ramales del manómetro, cuando se sumerge la \
                            campana de inmersión a distintas profundidades en un líquido estático. \
                            Repetir el procedimiento para cada uno de los líquidos proporcionados y \
                            registrar los datos obtenidos.`,
            },
          ],
          [
            {
              type: "text",
              text: `Calcular las diferencias de presión obtenidas con la siguiente formula`,
            },
            {
              type: "formula",
              formula: "P_{rel}=P_{abs}-P_{atm}=\\rho_{fm}gZ",
            },
          ],
        ],
        textures: {
          fluido_tubo: "genericWater",
          fluido_vaso: "genericWater",
          campana: "glass",
          vaso: "glass",
          tubo_fluido: "glass",
          Cube: "invisible",
          manguera: "plastic",
        },
        scene_meshes: [
          "fluido_tubo",
          "fluido_vaso",
          "campana",
          "vaso",
          "tubo_fluido",
          "Cube",
          "manguera",
        ],
        needed_textures: ["genericWater", "glass", "invisible", "plastic"],
        animations_info: [
          {
            main_animation: {
              name: "campana",
            },
            dependant_animations: [
              {
                name: "fluido_tubo",
                play: "normal",
                time_relations: 1,
              },
              {
                name: "manguera",
                play: "normal",
                time_relations: 1,
              },
            ],
            interactions: ["mouseY", "range"],
          },
        ],
        camera: {
          x: 18.753411591436535,
          y: 51.20418663790184,
          z: 65.35275764024483,
        },
        clickableColors: {
          hover: 0xffff00,
          click: 0x002a77,
        },
        userControlledObjects: ["campana"],
        timeControlledObjects: [],
      },
    ],
  },
});
