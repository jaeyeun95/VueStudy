<template>
  <div>
    <!-- :style="{
        background: 'uri(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0',
      }" -->
    <div id="computer" :style="computedStyleObject"></div>
    <!-- <img src="@/assets/images/23182267.jpg" /> -->
    <div>
      <button @click="onClickBtn('바위')">바위</button>
      <button @click="onClickBtn('가위')">가위</button>
      <button @click="onClickBtn('보')">보</button>
    </div>
    <div>{{ result }}</div>
    <div>현재 {{ score }} 점</div>
  </div>
</template>
<script>
const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

// 요 주석 생기니까 에러가 사라짐..
// eslint-disable-next-line no-unused-vars
let interval = null;

export default {
  name: "RockScissorsPapper",
  data() {
    return {
      imgCoord: rspCoords.바위,
      result: "",
      score: 0,
    };
  },
  computed: {
    // 캐싱? 해싱효과를 받을 수 있게
    computedStyleObject() {
      return {
        background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
      };
    },
  },
  methods: {
    changeHandle() {
      interval = setInterval(() => {
        if (this.imgCoord === rspCoords.바위) {
          this.imgCoord = rspCoords.가위;
        } else if (this.imgCoord === rspCoords.가위) {
          this.imgCoord = rspCoords.보;
        } else if (this.imgCoord === rspCoords.보) {
          this.imgCoord = rspCoords.바위;
        }
      }, 100);
    },
    onClickBtn(choice) {
      clearInterval(interval);
      const myScore = scores[choice];
      const cpuScore = this.score[computerChoice(this.imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        this.result = "비겼습니다";
      } else if ([-1, 2].includes(diff)) {
        this.result = "이겼습니다";
        this.score += 1;
      } else {
        this.result = "졌습니다.";
        this.score -= 1;
      }
      setTimeout(() => {
        this.changeHandle();
      }, 1000);
    },
  },
  created() {
    // 보여지지만 화면에 나타나기 전
  },
  mounted() {
    // 보여지지만 화면에 나타난 후
    console.log("mounted");
    this.changeHandle();
  },
  updated() {},
  beforeDestroy() {
    console.log("beforeDestroy");
    clearInterval(interval);
  },
};
</script>
<style scoped>
#computer {
  width: 142px;
  height: 200px;
  background-position: 0 0;
}
</style>
