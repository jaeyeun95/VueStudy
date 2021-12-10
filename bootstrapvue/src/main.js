import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// vue bootstrap 관련 설정
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// 모달 css
import "@/assets/css/contents.css";

// 전역 컴포넌트
import Alert from "@/components/alert/Alert";
import Pagination from "@/components/pagination/Pagination";

Vue.component("Alert", Alert);
Vue.component("Pagination", Pagination);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
