import Vue from 'vue'
import HomeModule from './module/home/index'
import App from './App.vue'
import router from './router'
import store from './store'

function bootstrap() {
  Vue.config.productionTip = false
  HomeModule.install()
}

bootstrap()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
