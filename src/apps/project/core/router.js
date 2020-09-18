import Vue from 'vue'
import VueRouter from 'vue-router'

import ProjectBoardsRoute from '../modules/project-boards/router/index'
import ProjectFilesRoute from '../modules/project-files/router/index'
import ProjectStatsRoute from '../modules/project-stats/router/index'
import ProjectMembersRoute from '../modules/project-members/router/index'
import ProjectSettingsRoute from '../modules/project-settings/router/index'

Vue.use(VueRouter)
const router = new VueRouter()

router.addRoutes(ProjectBoardsRoute)
router.addRoutes(ProjectFilesRoute)
router.addRoutes(ProjectStatsRoute)
router.addRoutes(ProjectMembersRoute)
router.addRoutes(ProjectSettingsRoute)

export default router
