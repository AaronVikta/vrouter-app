<template>
  <div id="app">
    <Navigation/>
    <router-view/>

    </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input{
  border:1px solid green;
  padding:10px;
  margin-bottom:20px;
}

.btn{
  background-color: green;
  padding:10px;
  color:white;
}
</style>
