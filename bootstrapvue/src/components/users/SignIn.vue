<template>
  <div>
    <div class="container mt-3">
      <h2>회원 가입</h2>
      <div class="mb-3 mt-3">
        <label for="id">ID:</label>
        <input
          type="text"
          class="form-control"
          placeholder="아이디를 입력하세요"
          v-model="user.id"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="password">비밀번호:</label>
        <input
          type="text"
          class="form-control"
          placeholder="비밀번호를 입력하세요"
          v-model="user.pwd"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="password">비밀번호 확인:</label>
        <input
          type="text"
          class="form-control"
          placeholder="비밀번호를 입력하세요"
          v-model="user.pwd2"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="name">이름:</label>
        <input
          type="text"
          class="form-control"
          placeholder="이름을 입력하세요"
          v-model="user.name"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="birthday">생년월일:</label>
        <input
          type="text"
          class="form-control"
          placeholder="생년월일 입력하세요"
          v-model="user.birthday"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="gender">성별:</label> <br />
        <input
          type="radio"
          class="form-check-input"
          v-model="user.gender"
          value="남자"
        />
        남자
        <input
          type="radio"
          class="form-check-input"
          v-model="user.gender"
          value="여자"
        />
        여자
      </div>
      <div class="mb-3 mt-3">
        <label for="email">Email:</label>
        <input
          type="email"
          class="form-control"
          placeholder="Enter email"
          v-model="user.email"
        />
      </div>
      <div class="mb-3 mt-3">
        <label for="phone">Phone:</label>
        <!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel -->
        <input
          type="tel"
          class="form-control"
          v-model="user.phone"
          placeholder="전화번호를 입력해 주세요. (-제외)"
        />
      </div>
      <!-- Remember me 버튼 -->
      <!-- <div class="form-check mb-3">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox" name="remember" />
          Remember me
        </label>
      </div> -->
      <button type="submit" class="btn btn-primary" @click="signIn()">
        가입하기
      </button>
      &nbsp;
      <button class="btn btn-primary">취소</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      //   gender: "",
    };
  },
  methods: {
    signIn() {
      console.log("회원가입 정보 : ", this.user);
    },
    // 취소 클릭시엔 로그인 페이지로
  },
};
</script>
<style></style>
