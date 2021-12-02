<template>
  <div class="alert-wrapper">
    <div class="alertwrap">
      <h3 style="text-align: center" v-html="txt"></h3>
      <div class="btn_center">
        <a href="#" class="btn_blue b-close" @click.prevent="onCloseModal">
            <!-- a태그의 스타일은 상황에 따라서 스타일링을 해줘야 함 -->
          확인
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onCloseModal() {
      this.$store.commit("alertToggle", { isAlert: false });
    },
  },
  computed: {
    txt() {
      return this.$store.state.alertData.text;
    },
  },
};
</script>

<style scoped>
.alert-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.alertwrap {
  position: relative;
  width: 500px;
  /* padding: 20px 30px 30px 30px; */
  padding: 40px 30px;
  /* line-height: 20px; */
  line-height: 30px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
}

/* 모바일 버전 */
@media only all and (max-width: 767px) {
  .alertwrap {
    position: relative;
    width: 90%;
    margin: 0;
    padding: 20px 30px 30px 30px;
    line-height: 20px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
}

.btn_blue {display:inline-block;min-width:100px;padding:0 15px;margin-left:3px;height:40px;line-height:38px;text-align:none;font-size:15px;color:#fff !important;vertical-align:middle;white-space:nowrap;background:#1a5ec1;white-space:nowrap;border-radius:3px;}
.btn_blue.type2 {margin:0 6px 0 0;}
.btn_blue_s {display:inline-block;min-width:60px;padding:0 10px;height:30px;line-height:28px;text-align:center;font-size:13px;color:#fff !important;vertical-align:middle;background:#1a5ec1;white-space:nowrap;border-radius:3px;}
</style>
