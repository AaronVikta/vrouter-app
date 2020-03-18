<template>
  <div class="">
    <div class="form">
      <div class="">
        <label for="Username">Username</label>
        <input type="text" v-model="username">
      </div>
      <div class="">
        <label for="password">Password</label>
        <input type="text" v-model="password">
      </div>
      <div class="">
        <button @click="login" class="btn">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store"
export default {
  data(){
    return{
      username:null,
      password:null
    }
  },
  methods:{
    login(){
      store.user =this.username
      this.$router.push("/user")
    }
  }
}
</script>

<style lang="css" scoped>
.form{
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
