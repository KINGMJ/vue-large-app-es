import Vue from 'vue'
import router from './router'
import projectJson from './mock.json'
import Project from './Project.vue'

function bootstrap () {
  Vue.config.productionTip = false
  Vue.prototype.$project = JSON.parse(JSON.stringify(projectJson))
  new Vue({
    router,
    render: h => h(Project)
  }).$mount('#app')
}

bootstrap()
