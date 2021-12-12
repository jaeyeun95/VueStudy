<template>
  <div>
    <MineForm />
    <div>{{ timer }}</div>
    <TableComponent />
    <div>{{ result }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import store, { INCREMENT_TIMER } from "@/store/store.js";
import TableComponent from "@/components/mine/TableComponent";
import MineForm from "@/components/mine/MineForm";

let interval;
export default {
  store,
  components: {
    TableComponent,
    MineForm,
  },
  computed: {
    ...mapState(["timer", "result", "halted"]),
  },
  methods: {},
  watch: {
    halted(value) {
      if (value === false) {
        // false 일 떄 게임 시작
        interval = setInterval(() => {
          this.$store.commit(INCREMENT_TIMER);
          // new Date(); // 자바스크립트에서 타이머는 정확하지 않을 수 있따.
        }, 1000); // 게임이 시작되면 1초마다 타이머 올림
      } else {
        // 게임 중단
        clearInterval(interval);
      }
    },
  },
};
</script>
<style>
table {
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
