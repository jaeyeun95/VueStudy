<template>
  <div id="app">

    <!-- modal -->
    <div class="black-bg" v-if="modal">
      <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용</p>
        <button @click="closeModal">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(item, index) in menus" :key="index">{{ item }}</a>
    </div>



    <!-- <div v-for="(item, index) in products" :key="index">
      <h4>{{ item }}</h4>
      <p>{{ price[index] }}</p>
    </div> -->
    <div v-for="(item, index) in onerooms" :key="index">
      <img :src="item.image" class="room-img">
      <h4 @click="openModal">{{ item.title }}</h4>
      <p> {{ item.price }} 원</p>
      <button @click="btnReport(0)">허위매물신고</button> <span>신고수 : {{ count[0] }}</span>
    </div>
    <!-- <div>
      <img src="@/assets/images/room1.jpg" class="room-img">
      <h4>{{ products[1]}} 원룸</h4>
      <p>60 만원</p>
      <button @click="btnReport(1)">허위매물신고</button> <span>신고수 : {{ count[1] }}</span>
    </div>
    <div>
      <img src="@/assets/images/room2.jpg" class="room-img">
      <h4>{{ products[2]}} 원룸</h4>
      <p>70 만원</p>
      <button @click="btnReport(2)">허위매물신고</button> <span>신고수 : {{ count[2] }}</span>
    </div> -->
  </div>
</template>
<script>
import rooms from '@/assets/rooms';
export default {
  name:"App",
  data() {
    return {
      modal : false,
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : ['50만원', '가격은 아무거나', '가격은 아무거나'],
      menus: ['Home', 'Shop', 'About'],
      count: [0,0,0],
      onerooms : rooms,
    }
  },
  methods: {
    btnReport(idx) {
      console.log('신고하기', idx);
      console.log('count ::', this.count);
      this.count[idx]++;
      this.$set(this.count, idx, this.count[idx]++);
    },
    openModal(){
      this.modal = true;
    },
    closeModal(){
      this.modal = false;
    }
  },
    
}
</script>

<style>
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding-left: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

body {
  margin:0;
}
div{
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
