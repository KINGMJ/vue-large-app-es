import Vue from 'vue'
import router from './router'
import projectJson from './mock.json'
import Project from './Project.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

function bootstrap () {
  Vue.config.productionTip = false
  Vue.prototype.$project = JSON.parse(JSON.stringify(projectJson))
  Vue.use(ElementUI)
  new Vue({
    router,
    render: h => h(Project)
  }).$mount('#app')
}

bootstrap()
