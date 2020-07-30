import Home from './Home.vue'
import VueRouter from 'vue-router'
const routeConfig = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default {
  install(Vue) {
    VueRouter.addRoutes(routeConfig)
  }
}
