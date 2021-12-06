<template>
  <div>
    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>My First Bootstrap Page</h1>
      <p>Resize this responsive page to see the effect!</p>
    </div>
    <button @click="checkAlert()">alert</button>
    <Alert v-if="$store.state.alertData.isAlert" />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer,
  },
  methods: {
    checkAlert() {
      this.$store.commit("alertToggle", {
        isAlert: true,
        text: "<h1>alertTest </h1> test <br> 부가설명",
      });
    },
  },
};
</script>
