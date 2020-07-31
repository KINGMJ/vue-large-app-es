import Vue from 'vue'
import VueRouter from 'vue-router'

import ProjectBoardsRoute from './project-boards/router/index'

Vue.use(VueRouter)
const router = new VueRouter()

router.addRoutes(ProjectBoardsRoute)

export default router
