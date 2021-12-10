<template>
  <div>
    <h2>Board.vue</h2>
    <h5>
      <a
        href="https://codesandbox.io/s/3v0m1?file=/src/components/board/BoardList.vue"
        >참조사이트</a
      >
    </h5>
    <div>
      <b-table
        striped
        hover
        :items="items"
        :fields="fields"
        @row-clicked="detailBoard()"
      ></b-table>
      <!-- 페이징 -->
      <Pagination />
      <b-button @click="writeBoard()">글쓰기</b-button>
      <BoardModal v-if="insert" @closeModal="closeModal" />
      <BoardDetailModal v-if="detail" @closeModal="closeModal" />
      <div class="modal_back_shadow"></div>
    </div>
  </div>
</template>
<script>
import BoardModal from "@/views/modal/BoardModal.vue";
import BoardDetailModal from "@/views/modal/BoardDetailModal.vue";
export default {
  data() {
    return {
      fields: [
        {
          key: "content_id",
          label: "번호",
        },
        {
          key: "title",
          label: "제목",
        },
        {
          key: "user_name",
          label: "글쓴이",
        },
        {
          key: "created_at",
          label: "작성일",
        },
      ],
      items: [
        {
          content_id: 1,
          user_id: 1,
          title: "게시판 제목 1",
          context: "게시판 내용1",
          created_at: "2018-09-11",
          updated_at: null,
        },
        {
          content_id: 2,
          user_id: 3,
          title: "게시판 제목 2",
          context: "게시판 내용2",
          created_at: "2018-09-12",
          updated_at: null,
        },
        {
          content_id: 3,
          user_id: 2,
          title: "게시판 제목 3",
          context: "게시판 내용3",
          created_at: "2018-09-13",
          updated_at: null,
        },
        {
          content_id: 4,
          user_id: 4,
          title: "게시판 제목 4",
          context: "게시판 내용4",
          created_at: "2018-09-14",
          updated_at: null,
        },
        {
          content_id: 5,
          user_id: 5,
          title: "게시판 제목 5",
          context: "게시판 내용5",
          created_at: "2018-09-15",
          updated_at: null,
        },
        {
          content_id: 6,
          user_id: 1,
          title: "게시판 제목 6",
          context: "게시판 내용6",
          created_at: "2018-09-11",
          updated_at: null,
        },
        {
          content_id: 7,
          user_id: 3,
          title: "게시판 제목 7",
          context: "게시판 내용7",
          created_at: "2018-09-12",
          updated_at: null,
        },
        {
          content_id: 8,
          user_id: 2,
          title: "게시판 제목 8",
          context: "게시판 내용8",
          created_at: "2018-09-13",
          updated_at: null,
        },
        {
          content_id: 9,
          user_id: 4,
          title: "게시판 제목 9",
          context: "게시판 내용9",
          created_at: "2018-09-14",
          updated_at: null,
        },
        {
          content_id: 10,
          user_id: 5,
          title: "게시판 제목 10",
          context: "게시판 내용10",
          created_at: "2018-09-15",
          updated_at: null,
        },
        {
          content_id: 11,
          user_id: 1,
          title: "게시판 제목 11",
          context: "게시판 내용11",
          created_at: "2018-09-11",
          updated_at: null,
        },
        {
          content_id: 12,
          user_id: 3,
          title: "게시판 제목 12",
          context: "게시판 내용12",
          created_at: "2018-09-12",
          updated_at: null,
        },
        {
          content_id: 13,
          user_id: 2,
          title: "게시판 제목 13",
          context: "게시판 내용13",
          created_at: "2018-09-13",
          updated_at: null,
        },
      ],
      insert: false,
      detail: false,
    };
  },
  components: {
    BoardModal,
    BoardDetailModal,
  },
  methods: {
    // 상세보기
    detailBoard() {
      console.log("글쓰기 상세보기");
      this.detail = true;
    },
    // 글쓰기 모달창 열기
    writeBoard() {
      console.log("글쓰기 폼으로");
      this.insert = true;
      this.$el.querySelector(".modal_back_shadow").style =
        "background-color: rgb(0, 0, 0); position: fixed; inset: 0px; opacity: 0.7; z-index: 9996;";
    },
    // 글쓰기 모달창 닫기
    closeModal() {
      this.insert = false;
      this.detail = false;
      this.$el.querySelector(".modal_back_shadow").style = "";
    },
  },
};
</script>
<style></style>
