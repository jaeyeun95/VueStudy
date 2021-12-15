import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/rock",
    name: "RockScissorsPapper",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RockScissorsPapper.vue"),
  },
  {
    path: "/lotto",
    name: "LottoGenerator",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LottoGenerator.vue"),
  },
  {
    path: "/tic",
    name: "TicTacToe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TicTacToe.vue"),
  },
  {
    path: "/mine",
    name: "MineSweeper",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MineSweeper.vue"),
  },
  {
    path: "/route",
    name: "RouterTest",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/route/Router.vue"),
  },
  {
    path: "/game/:name",
    // :name 부분이 계속 바뀐다고 생각하면된다.
    name: "GameMatcher",
    component: () => import("../views/route/GameMatcher.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // history 가 추가되면 url에 # 이 없어짐, 대신 새로고침하면 서버로 요청하기 때문에 페이지가 뜨지 않는다.
  base: process.env.BASE_URL,
  routes,
});

export default router;
