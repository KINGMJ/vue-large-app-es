import Vue from 'vue'
import router from './router'

import Project from './Project.vue'

function bootstrap () {
  Vue.config.productionTip = false
  new Vue({
    router,
    render: h => h(Project)
  }).$mount('#app')
}

bootstrap()
