import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // data
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "@/assets/images/Hoza.png",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD",
      },
    ],
  },
  getters: {
    // computed 역할
    allUsersCount(state) {
      return state.allUsers.length;
    },
    // arrow function 사용시
    // allUsersCount: state => {
    //   return state.allUsers.length;
    // }
    countOfSeoul: (state) => {
      let count = 0;
      state.allUsers.forEach((user) => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      // 2개 이상 사용시에는 괄호가 필수
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    },
  },
  mutations: {},
  actions: {},
});
