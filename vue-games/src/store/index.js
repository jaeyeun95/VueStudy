import Vue from "vue";
import Vuex from "vuex";

// [SET_WINNER] 로 mutation 에서 감싸주면 변수로 뺄 수 있다.
export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHNAGE_TURN = "CHNAGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";

Vue.use(Vuex); // vue 랑 vuex를 연결하겠다는 뜻

export default new Vuex.Store({
  state: {
    // vue 의 data 와 비슷
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "O",
    winner: "",
  },
  getters: {
    // vue 의 computed 와 비슷
  },
  mutations: {
    // state를 수정할 때 사용, 동기적임, 대문자로 만드는게 약속
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    // SET_WINNER(state, winner) {
    //   state.winner = winner;
    // },
    [CLICK_CELL](state, { row, cell }) {
      // state.tableData[row][cell] = state.turn;
      // vuex 에선 $set 이 없기 떄문에 Vue.set으로 사용한다.
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHNAGE_TURN](state) {
      state.turn = state.turn === "O" ? "X" : "O";
    },
    [RESET_GAME](state) {
      state.turn = "O";
      state.tableData = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    },
    [NO_WINNER](state) {
      state.winner = "";
    },
  },
  // 비동기를 사용할 떄 , 또는 여러 mutation을 연달아 실행할 때
  actions: {},
  modules: {
    //
  },
});
