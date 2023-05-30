//INSERTAR CUESTIONARIO PREVIO
db = db.getSiblingDB("laboratorio_info");
db.textures.insertMany([
    {
        name: "glass",
        color: 0xefefef, // glass color
        metalness: 0.1, // non-metallic
        roughness: 0.1, // very smooth surface
        transmission: 0.9, // high transparency
        transparent: true, // enable transparency
        opacity: 0.3, // set the opacity of the material
        needsUpdate: true
    },
    {
        name: "genericWater",
        color: 0x008000,
        metalness: 0.9,
        roughness: 0.1,
        transmission: 0.9,
        transparent: true,
        opacity: 0.4,
        needsUpdate: true
    },
    {
        name: "plastic",
        color: 0x000000,
        metalness: 0.1,
        roughness: 0.5,
        needsUpdate: true
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
            fluido_tubo: "genericWater",
            fluido_vaso: "genericWater",
            campana: "glass",
            vaso: "glass",
            tubo_fluido: "invisible",
            Cube: "invisible",
            manguera: "plastic"
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
        needed_textures: [
            "genericWater",
            "glass",
            "invisible",
            "plastic"
        ],
        animations_info:[
            {
                main_animation: {
                    name: "campana",
                },
                dependant_animations: [
                    {
                        name: "fluido_tubo",
                        play: "normal",
                        time_relations:[1]
                    },
                    {
                        name: "manguera",
                        play: "normal",
                        time_relations:[1]
                    }
                ],
                interactions:[
                    "mouseY",
                    "range"
                ]
            }
        ],
        camera: {
            x: 18.753411591436535, 
            y: 51.20418663790184, 
            z: 65.35275764024483 
        },
        clickableColors: {
            hover: 0xFFFF00,
            click: 0x002A77,
        },
        userControlledObjects: [
            "campana"
        ],
        timeControlledObjects: []
    }
})