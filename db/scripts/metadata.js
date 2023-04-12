//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
db.textures.insertMany([
    {
        name: "glass",
        color: 0xefefef, // glass color
        metalness: 0, // non-metallic
        roughness: 0, // very smooth surface
        transmission: 0.9, // high transparency
        transparent: true, // enable transparency
        opacity: 0.7, // set the opacity of the material
        refrmanguera_actionRatio: 0.98, // refractive index of glass (1.5) divided by air (1.0)
    },
    {
        name: "genericWater",
        color: 0xffffff,
        metalness: 0.9,
        roughness: 0.1,
        transmission: 0.9,
        transparent: true,
        opacity: 0.8
    },
    {
        name: "plastic",
        color: 0x000000,
        metalness: 0.1,
        roughness: 0.5,
    },
    {
        name: "invisible",
        opacity: 0,
        transparent: true
    }
])

db.metadata.insertOne({
    practica_id: 1,
    metadata: {
        textures: {
            fluido1: "genericWater",
            fluido2: "genericWater",
            fluido_fondo: "genericWater",
            fluido_vaso: "genericWater",
            campana: "glass",
            vaso: "glass",
            tubo_fluido: "glass",
            Cube: "invisible",
            manguera: "plastic"
        },
        needed_textures: [
            "genericWater",
            "glass",
            "invisible",
            "plastic"
        ],
        camera: {
            x: 18.753411591436535, 
            y: 51.20418663790184, 
            z: 65.35275764024483 
        },
        clickableColors: {
            hover: 0xFFFF00,
            click: 0x002A77,
        }
    }
})