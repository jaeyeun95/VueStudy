<template>
  <div class="home">
    <h1>LoginForm</h1>
    <LoginPage></LoginPage>
    <Pagination/>
  </div>
</template>

<script>
import LoginPage from '@/components/Login.vue';
import Pagination from '@/components/pagination/Pagination.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    LoginPage,
    Pagination,
  },
};
</script>
