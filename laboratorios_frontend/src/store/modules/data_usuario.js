/*ESTE ES EL STORE DESEADO PARA EL CONSUMO DE LA API DE LABORATORIOS
EN ESPECIFICO SE DESEA ACCEDER AL ENDPOINT DE LOS DATOS DEL USUARIO, QUE VAN
DESDE SU SESSION ID, SU NOMBRE, AVANCE DE LAS PRACTICAS GENERAL ETC.*/

export default {
    namespaced: true,
    state: {
    //SUSTITUIR POR UN FETCH CUANDO LA API ESTE LISTA
        data_usuario: {
            nombre_s: "Josue Demian",
            ap_paterno: "Avila",
            ap_materno: "Romero",
            id_grupo: 0,
            id_user: 0,
            google_session_id: 0
        },
        avance_practicas: [
            {
                id_prac: 1,
                avance: 100 
            },
            {
                id_prac: 2,
                avance: 100 
            },
            {
                id_prac: 3,
                avance: 70 
            },
            {
                id_prac: 4,
                avance: 28 
            },
            {
                id_prac: 5,
                avance: 70 
            },
            {
                id_prac: 6,
                avance: 63 
            },
            {
                id_prac: 7,
                avance: 100 
            },
            {
                id_prac: 8,
                avance: 100 
            },
            {
                id_prac: 9,
                avance: 0 
            },
            {
                id_prac: 10,
                avance: 0 
            },
            {
                id_prac: 11,
                avance: 0 
            },
            {
                id_prac: 12,
                avance: 0 
            }
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
}
  