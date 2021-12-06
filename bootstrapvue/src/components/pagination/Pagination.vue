<template>
  <!-- <div class="mt-5">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div> -->
  <div class="mt-3">
    <h6 class="text-center">Center alignment</h6>
    <b-pagination v-model="currentPage" align="center"></b-pagination>
    <!-- :total-rows="rows" -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: null,
    };
  },
};
</script>
