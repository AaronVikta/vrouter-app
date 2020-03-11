<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>      <router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
nav{
  background: #000;
  display: flex;
  justify-content: flex-start;
}
nav ul li{
  display: inline;
  margin: 5px;
}


body{
  margin:0px;
  padding: 0px;
}
</style>
