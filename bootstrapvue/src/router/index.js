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
    path: "/main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Main.vue"),
  },
  {
    path: "/side",
    name: "Side",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Side.vue"),
  },
  {
    path: "/board",
    name: "Board",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Board.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Layout1.vue"),
  },
  {
    path: "/bootstrap",
    name: "bootstrap",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Bootstrap.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
