<template>
  <v-layout
    row
    wrap
    pt-5
    text-xs-center
    style="max-width: 500px; margin: 0 auto"
  >
    <v-flex xs12>
      <h1>Users</h1>
      <p>유저를 검색해 주세요.</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="userId"
        label="유저 번호를 입력하세요."
      ></v-text-field>
      <!-- <v-btn @click="$router.push({ path: userId })">검색</v-btn> -->
      <v-btn
        @click="
          $router.push({
            name: 'users-detail',
            params: {
              id: userId,
            },
          })
        "
        >검색</v-btn
      >
    </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>
  <!-- <div>
    <p>이 유저의 현재 유저 번호가 {{ userId }} 입니다.</p>
    {{ userId }}
    {{ $route.params.name }}
    <br />
    <h1>그룹 : {{ $route.query.group }}</h1>
    <h1>카테고리 : {{ $route.query.category }}</h1>
  </div> -->
</template>
<script>
export default {
  data() {
    return {
      userId: null,
    };
  },
  //   computed: {
  //     userId() {
  //       return this.$route.params.userId;
  //     },
  //   },
  beforeRouteEnter(to, from, next) {
    console.log("before Enter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Leave");
  },
  created() {
    //   console.log("router", this.$router);
    //   console.log("route", this.$route);
    console.log("created");
  },
};
</script>
<style></style>
