<template>
  <div>
    <h1>MainPage</h1>
    <h5>입찰버튼용</h5>
    <b-button pill variant="outline-secondary">Button</b-button>

    <h5>Avatar</h5>
    <div class="mb-4">
      <b-avatar></b-avatar>
    </div>

    <div>
      <b-button-group>
        <b-avatar></b-avatar>
        <b-button>Button 2</b-button>
        <b-button>Button 3</b-button>
      </b-button-group>
    </div>

    <div>
      <table>
        <tr>
          <th>기업명</th>
          <th>프로젝트</th>
        </tr>
        <tr>
          <td v-b-modal.modal-scrollable>CJ대한통운</td>
          <td>자율주행</td>
        </tr>
      </table>

      <!-- <b-button v-b-modal.modal-scrollable>Launch scrolling modal</b-button> -->

      <b-modal id="modal-scrollable" scrollable size="xl">
        <!-- <h2>sdfasdf</h2> -->
        <b-button pill variant="outline-secondary" style="margin-left: 79%"
          >입찰</b-button
        >
        <p class="my-4" v-for="i in 20" :key="i">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {};
</script>
