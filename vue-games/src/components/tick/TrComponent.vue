<template>
  <tr>
    <TdComponent
      v-for="(cellData, index) in rowData"
      :key="index"
      :row-data="rowData"
      :cell-data="cellData"
      :cell-index="index"
      :row-index="rowIndex"
    />
  </tr>
</template>
<script>
import TdComponent from "@/components/tick/TdComponent";

export default {
  props: {
    rowData: Array,
    rowIndex: Number,
  },
  components: {
    TdComponent,
  },
  data() {
    return {
      parent: "내가 니 에비다",
    };
  },
};
</script>
