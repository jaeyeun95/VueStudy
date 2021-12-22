<template>
  <div>
    <h1>Welcome to Home! {{ title }}</h1>
    <input type="text" value="abc" v-model="input1">
    <button @click="getData">Get</button>
    <button @click="setData">Set</button>

    <select class="form-control" v-model="region" @change="changeRegion">
      <option v-for="(d,i) in options" :key="i" :value="d.v">{{ d.t }} </option>
    </select>

    <table class="table table-bordered" v-if="tableShow">
      <tr v-for="(d,i) in options" :key="i">
        <td>{{ d.v }}</td>
        <td>{{ d.t }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default{
  data(){
    return{
      title: "개발자의 품격",
      input1:"abcd",
      options: [
        {v:"S", t:"Seoul"},
        {v:"J", t:"Jeju"},
        {v:"B", t:"Busan"},
      ],
      region:"J",
      tableShow: false,
    } 
  },
  watch : {
    input1(){
      console.log(this.input1);
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData(){
      this.input1 = '12345';
    },
    changeRegion(){
      alert(this.region);
    }
  },
  beforeCreate() {
    
  },
}
</script>
