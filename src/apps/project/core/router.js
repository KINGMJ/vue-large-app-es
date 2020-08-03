import Vue from 'vue'
import VueRouter from 'vue-router'

import ProjectBoardsRoute from '../project-boards/router/index'
import ProjectFilesRoute from '../project-files/router/index'
import ProjectStatsRoute from '../project-stats/router/index'
import ProjectMembersRoute from '../project-members/router/index'
import ProjectSettingsRoute from '../project-settings/router/index'

Vue.use(VueRouter)
const router = new VueRouter()

router.addRoutes(ProjectBoardsRoute)
router.addRoutes(ProjectFilesRoute)
router.addRoutes(ProjectStatsRoute)
router.addRoutes(ProjectMembersRoute)
router.addRoutes(ProjectSettingsRoute)

export default router
