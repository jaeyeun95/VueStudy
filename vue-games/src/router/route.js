import Vue from "vue";
import VueRouter from "vue-router";
import NumberBaseBall from "@/views/NumberBaseBall.vue";
import ResponseCheck from "@/views/ResponseCheck";

Vue.use(VueRouter);

export default VueRouter({
  routes: [
    { path: "/number-baseball", components: NumberBaseBall },
    { path: "/response-check", components: ResponseCheck },
  ],
});
