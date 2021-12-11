<template>
  <td @click="onClickTd">{{ cellData }}</td>
</template>
<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      //   console.log(this.$root.$data); // 최상위 컴포넌트
      //   console.log(this.$parent.$data); // 부모 컴포넌트
      const rootData = this.$root.$data;
      console.log(rootData);
      this.$set(
        rootData.tableData[this.rowIndex],
        this.cellIndex,
        rootData.turn
      );
      rootData.turn = rootData.turn === "O" ? "X" : "O";
    },
  },
};
</script>
