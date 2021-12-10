<template>
  <div class="layerwrap modal">
    <!-- <b-row class="my-1">
      <b-col sm="10">
        <b-form-input
          id="input-default"
          placeholder="Enter your name"
        ></b-form-input>
      </b-col>
    </b-row>
    <b-form-textarea
      id="textarea-rows"
      placeholder="Tall textarea"
      rows="8"
    ></b-form-textarea> -->
    <b-form>
      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select id="input-3" :options="foods" required></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-1" label="제목:" label-for="input-1">
        <!-- description="We'll never share your email with anyone else." -->
        <b-form-input
          id="input-1"
          type="email"
          placeholder="제목"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="내용:" label-for="input-1">
        <b-form-textarea
          id="textarea-rows"
          placeholder="Tall textarea"
          rows="8"
        ></b-form-textarea>
      </b-form-group>
      <br />
      <b-button variant="primary" @click="insertBoard()">저장</b-button> &nbsp;
      <b-button variant="danger" @click="closeModal()">닫기</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      foods: [
        // { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
    };
  },
  methods: {
    insertBoard() {
      alert("저장하기");
    },
    closeModal() {
      console.log("boardModal 닫기");
      this.$emit("closeModal", false);
    },
  },
};
</script>
