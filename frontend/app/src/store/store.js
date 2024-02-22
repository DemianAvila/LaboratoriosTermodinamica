import { createStore } from "vuex";
import practicas from "./modules/practicas";
import data_usuario from "./modules/data_usuario";
import static_cont from "./modules/static_cont";
import practica1 from "./modules/practica1";
import config_info from "./modules/config_info";
import axios from "axios";

export default createStore({
  state: {
    practicas: practicas.state,
    data_usuario: data_usuario.state.data_usuario,
    avance_practicas: data_usuario.state.avance_practicas,
    static_cont: static_cont.state.static_cont,
    practica1: practica1.state,
    config_info: config_info.state,
    models3d: {},
    metadata_practice: {},
    textures: {},
    development_view: {
      forward: true,
      backward: false,
    },
  },
  getters: {
    getDataURLs(state) {
      return state.metadata_practice.dataURLs;
    },
  },
  mutations: {
    setDataURLModels(state, payload) {
      if (!("dataURLs" in state.metadata_practice)) {
        state.metadata_practice.dataURLs = [];
      }
      state.metadata_practice.dataURLs.push(payload);
    },
    deploymentViewChange(state, number) {
      if (number === 1) {
        if (
          state.development_view.currentVariation <
          state.development_view.variations - 1
        ) {
          state.development_view.currentVariation++;
          state.development_view.backward = true;
          state.development_view.forward = true;
        } else {
          if (
            state.development_view.currentSubpractice <
            state.development_view.subpractices - 1
          ) {
            state.development_view.currentVariation = 0;
            state.development_view.currentSubpractice++;
            state.development_view.variations =
              state.metadata_practice.metadata.subpractices[
                state.development_view.currentSubpractice
              ].variation_nums;
            state.development_view.backward = true;
            state.development_view.forward = true;
          } else {
            state.development_view.backward = true;
            state.development_view.forward = false;
          }
        }
      } else if (number === -1) {
        if (state.development_view.currentVariation > 0) {
          state.development_view.currentVariation--;
          state.development_view.backward = true;
          state.development_view.forward = true;
        } else {
          if (state.development_view.currentSubpractice > 0) {
            state.development_view.currentVariation = 0;
            state.development_view.currentSubpractice--;
            state.development_view.variations =
              state.metadata_practice.metadata.subpractices[
                state.development_view.currentSubpractice
              ].variation_nums;
            state.development_view.forward = true;
            state.development_view.backward = true;
          } else {
            state.development_view.backward = false;
            state.development_view.forward = true;
          }
        }
      }
    },
  },
  actions: {
    async getModels(a, payload) {
      try {
        let models = await axios({
          url: `${payload.url}/modelo3d?practica_id=${payload.practica_id}`,
          method: "get",
          headers: {
            token: payload.token,
          },
        });
        a.state.models3d.current_data = models.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getMetadata(a, payload) {
      try {
        let metadata = await axios({
          url: `${payload.url}/get_metadata?practica_id=${payload.practica_id}`,
          method: "get",
          headers: {
            token: payload.token,
          },
        });
        a.state.metadata_practice = metadata.data.metadata;
      } catch (error) {
        console.log(error);
      }
    },
    async getTexture(a, payload) {
      try {
        let texture = await axios({
          url: `${payload.url}/get_texture?texture=${payload.texture}`,
          method: "get",
          headers: {
            token: payload.token,
          },
        });
        a.state.textures[texture.data.texture.name] = texture.data.texture;
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
    practicas,
    data_usuario,
  },
});
