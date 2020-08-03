<!--MPA 应用每个页面对应的前端 Page， 等同于 SPA 应用的 App.vue-->
<template>
  <div>
    <app-header />
    <project-info />
    <project-tabs />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/apps/shared/pages/AppHeader.vue'
import ProjectInfo from '../project-info/pages/ProjectInfo.vue'
import ProjectTabs from '../shared/components/ProjectTabs.vue'

export default {
  name: 'Project',
  components: {
    AppHeader,
    ProjectInfo,
    ProjectTabs
  }
}
</script>
