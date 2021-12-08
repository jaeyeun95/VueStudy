<template>
  <div>
    <div id="header">
      <h2>HEADER 영역</h2>
    </div>
    <div id="nav">
      <h2>NAV 영역</h2>
    </div>
    <div id="section">
      <p>SECTION 영역</p>
    </div>
    <div id="footer">
      <h2>FOOTER 영역</h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#header {
  background-color: lightgrey;
  height: 50px;
}
#nav {
  background-color: #339999;
  color: white;
  width: 400px;
  height: 800px;
  float: right;
}
#section {
  width: 200px;
  text-align: left;
  float: left;
  padding: 10px;
}
#footer {
  background-color: #ffcc00;
  height: 100px;
  margin-bottom: 15%;
  clear: both;
}
#header,
#nav,
#section,
#footer {
  text-align: center;
}
#header,
#footer {
  line-height: 100px;
}
#nav,
#section {
  line-height: 240px;
}
</style>
