<template>
  <div>
    <h1>RouterTest</h1>
    <!-- layout -->
    <div>
      <router-link to="/">숫자야구</router-link> <br />
      <router-link to="/about">반응속도체크</router-link>
    </div>
    <router />
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import router from "@/router/route";
export default {
  name: "RouterTest",
  components: {
    router,
  },
};
</script>
