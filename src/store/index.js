import Vuex from "vuex";
import Vue from "vue";
// Store components
import actions from "./actions";
import mutations from "./actions";

Vue.use(Vuex);
export const store = new Vuex.Store({
  mutations,
  actions
});
