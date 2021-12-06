<template>
  <div class="home">
    <h1>LoginForm</h1>
    <LoginPage></LoginPage>
    <button @click="test()">alert</button>
    <Alert v-if="$store.state.alertData.isAlert" />
    <Pagination />
  </div>
</template>

<script>
import LoginPage from "@/components/Login.vue";
import Pagination from "@/components/pagination/Pagination.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    LoginPage,
    Pagination,
  },
  methods: {
    test() {
      this.$store.commit("alertToggle", {
        isAlert: true,
        text: "<h1>alertTest </h1> test <br> 부가설명",
      });
    },
  },
};
</script>
<style scoped>
button {
  /* background: red; */
  align-content: center;
  margin-left: 40%;
}
</style>
