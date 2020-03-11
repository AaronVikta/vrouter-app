import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Navigation from './components/Navigation.vue'
import AboutName from './components/AboutName'

Vue.component('Navigation', Navigation);

Vue.config.productionTip = false

const routes=[
  {
    path:'/', component:Home
  },
  {
    path:'/about', component:About
  },
  {
    path:'/about/:name',component:AboutName
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
