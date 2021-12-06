<template>
  <div class="home">
    <h1>LoginForm</h1>
    <LoginPage></LoginPage>
  </div>
</template>

<script>
import LoginPage from '@/components/Login.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    LoginPage,
  },
};
</script>
