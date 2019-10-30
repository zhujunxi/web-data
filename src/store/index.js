import Vue from "vue";
import Vuex from "vuex";
import index from "./modules/index";
import common from "./modules/common";

import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    index,
    common
  }
});
