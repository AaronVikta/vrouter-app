import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Navigation from './components/Navigation.vue'
import AboutName from './components/AboutName'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import store from './store'
// const AboutName = {
//   props:['name'],
//   template:`<h1> Hello {{name}}</h1>`,
// }
Vue.component('Navigation', Navigation);
const routes=[
  {
    path:'/', component:Home
  },
  {
    path:'/about', component:About
  },
  {
    path:'/about/:name',component:AboutName,
    props:true
  },
  {
    path:'/user',
    name:'user',
    component:Profile,
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

Vue.use(VueRouter)
export const router = new VueRouter({
  routes
});

router.beforeEach((to,from ,next)=>{
  if(to.meta.requiresAuth){
    // need to login
    if(!store.user){
      next({
        name:"login"
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
