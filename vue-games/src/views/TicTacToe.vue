<template>
  <div>
    <h1>TicTacToe</h1>
    <TableComponent :table-data="tableData" />
    <div>{{ turn }} 님의 턴입니다.</div>
  </div>
</template>
<script>
import TableComponent from "@/components/tick/TableComponent";

export default {
  name: "TicTacToe",
  data() {
    return {
      tableData: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      turn: "O",
    };
  },
  components: {
    TableComponent,
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  watch: {},
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
