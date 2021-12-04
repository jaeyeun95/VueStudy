import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import Status from "./Status.vue";

// 컴포넌트 전역 등록
// Vue.component('컴포넌트명', 옵션);
Vue.component("AppStatus", Status);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
