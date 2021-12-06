import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alertData: {
      isAlert: false, // on,off
      text: "", // alert 메시지
    },
  },
  mutations: {
    // alert
    alertToggle(state, alertData) {
      state.alertData.isAlert = alertData.isAlert;
      if (alertData.text) state.alertData.text = alertData.text;
    },
  },
  actions: {},
  modules: {},
});
