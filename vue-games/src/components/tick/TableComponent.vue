<template>
  <table>
    <TrComponent
      v-for="(rowData, index) in tableData"
      :key="index"
      :row-data="rowData"
      :row-index="index"
    />
  </table>
</template>
<script>
import TrComponent from "@/components/tick/TrComponent";
export default {
  props: {
    tableData: Array,
  },
  components: {
    TrComponent,
  },
};
</script>
