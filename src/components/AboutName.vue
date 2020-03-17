<template>
<div class="">
  <p>Hello {{name}}</p>
</div>
</template>

<script>
export default {
  props:['name'],
  created(){
    console.log(`Hello ${this.name}`);
  }
}
</script>

<style lang="css" scoped>
</style>
