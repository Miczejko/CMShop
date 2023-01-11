<template>
  <nav>
    <div class="center">
      <a href="/">CMShop</a>
    </div>
    <div class="right">
      <a href="/admin">Admin panel</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
  width: 100%;
  height: 100px;
  /* background-color: rgba(204, 204, 204, 0.13); */
}
a{
  color: rgba(240, 248, 255, 0.459);
  font-size: 30px;
  text-decoration: none;
}
a:hover{
  text-shadow: 3px 3px 4px rgb(161, 161, 161);
}
.right{
  float: left;
}
.center{
  float:left;
  margin-left: 45%;
  margin-right: 20%;
}
</style>
