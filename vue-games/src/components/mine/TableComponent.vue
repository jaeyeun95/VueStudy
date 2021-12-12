<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td
        v-for="(cellData, cellIndex) in rowData"
        :key="cellIndex"
        :style="cellDataStyle(rowIndex, cellIndex)"
        @click="onClickTd(rowIndex, cellIndex)"
        @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
      >
        {{ cellDataText(rowIndex, cellIndex) }}
      </td>
    </tr>
  </table>
</template>
<script>
import store from "@/store/store.js";
import { mapState } from "vuex";
import {
  CODE,
  OPEN_CELL,
  NORMALIZE_CELL,
  FLAG_CELL,
  QUESTION_CELL,
} from "@/store/store.js";

export default {
  store,
  computed: {
    ...mapState(["tableData", "halted"]),
    // cellDataStyle: (state) => (row, cell) => {
    cellDataStyle() {
      // console.log("state", state, this.$store.state);
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE:
            return {
              background: "#444",
            };
          case CODE.CLICK_MINE:
          case CODE.OPENED:
            return {
              background: "white",
            };
          case CODE.FLAG:
          case CODE.FLAG_MINE:
            return {
              background: "red",
            };
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: "yellow",
            };
          default:
            return {};
        }
      };
    },
    // this를 사용하려면 ?
    cellDataText() {
      // 고차함수
      return (row, cell) => {
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.MINE:
            return "X";
          case CODE.NORMAL:
            return "";
          case CODE.FLAG_MINE:
          case CODE.FLAG:
            return "!";
          case CODE.QUESTION_MINE:
          case CODE.QUESTION:
            return "?";
          case CODE.CLICK_MINE:
            return "펑";
          default:
            return "";
        }
      };
    },
  },
  methods: {
    onClickTd(row, cell) {
      if (this.halted) {
        return; // halted 된 경우 게임 중단
      }
      this.$store.commit(OPEN_CELL, { row, cell });
    },
    onRightClickTd(row, cell) {
      if (this.halted) {
        return; // halted 된 경우 게임 중단
      }
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
        case CODE.MINE:
          this.$store.commit(FLAG_CELL, {
            row: row,
            cell: cell,
          });
          return;
        case CODE.FLAG_MINE:
        case CODE.FLAG:
          this.$store.commit(QUESTION_CELL, {
            row: row,
            cell: cell,
          });
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          this.$store.commit(NORMALIZE_CELL, {
            row: row,
            cell: cell,
          });
          return;
      }
    },
  },
};
</script>
