import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const About = () => {
  return import("./views/About.vue");
};

const Users = () => {
  return import("./views/Users.vue");
};

const UsersDetail = () => {
  return import("./views/UsersDetail.vue");
};
const UsersEdit = () => {
  return import("./views/UsersEdit.vue");
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.

      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About,
    },
    {
      path: "/users",
      name: "users",
      // beforeEnter: (to, from, next) => {
      //   console.log("beforeEnter");
      //   next();
      // },
      component: Users,
      children: [
        {
          path: ":id",
          name: "users-detail",
          component: UsersDetail,
        },
        {
          path: ":id/edit",
          name: "users-edit",
          component: UsersEdit,
        },
      ],
    },
    // params, query 예시
    // {
    //   path: "/users/:userId",
    //   name: "users",
    //   component: Users,
    // },
    {
      path: "/redirect-me", // /redirect-me 가 들어오면 아래의 redirect 로 보내달라는 의미
      redirect: { name: "users" },
    },
    {
      path: "/*", // 설정한 라우트주소 외에 다른 값이 들어온다면
      redirect: { name: "home" },
    },
  ],
});
