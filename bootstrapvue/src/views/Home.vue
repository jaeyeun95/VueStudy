<template>
  <div class="home">
    <h1>LoginForm</h1>
    <LoginPage></LoginPage>
    <button @click="test()">alert</button>
    <Alert v-if="$store.state.alertData.isAlert" />
    <h3>회원가입 폼</h3>
    <SignIn />

    <Pagination />
  </div>
</template>

<script>
import LoginPage from "@/components/users/Login.vue";
import SignIn from "@/components/users/SignIn.vue";
import Pagination from "@/components/pagination/Pagination.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    LoginPage,
    SignIn,
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
/* !important -> 이걸 최우선으로 */
button { 
  align-content: center; 
  margin-left: 40%;
}
</style>
