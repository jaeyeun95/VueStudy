<template>
  <div>
    <h1>GameMatcher</h1>
  </div>
</template>
<script>
export default {
  name: "GameMatcher",
  mounted() {
    console.log(this.$router);
    console.log("route :: ", this.$route);
  },
};
</script>
<style></style>
