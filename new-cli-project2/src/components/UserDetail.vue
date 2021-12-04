<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <!-- <p>{{ nameOfChild }}</p>
    <p>{{ sayHello }}</p>
    <v-btn @click="switchName()"> 이름 변경 </v-btn> -->
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>이름:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ name }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>주소:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ address }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>전화번호:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ phone }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>반려견유무:</v-list-tile-content>
        <v-list-tile-content class="align-end">
          {{ hasDogKr }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ["name", "address", "phone", "hasDog"],
  // props: {
  //   name: {
  //     type: String, // props 받은 이름 : 데이터 형식
  //     required: false, // 필요한지 안한지
  //     default: "Lego", // default 값
  //   },
  // },
  data() {
    return {
      age: 30,
    };
  },
  computed: {
    sayHello() {
      return this.nameOfChild + " 안녕하세요";
    },
    hasDogKr() {
      return this.hasDog === true ? "있음" : "없음";
    },
  },
  methods: {
    switchName() {
      this.nameOfChild = "컴퓨터";
    },
  },
};
</script>
