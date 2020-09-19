<!--MPA 应用每个页面对应的前端 Page， 等同于 SPA 应用的 App.vue-->
<!-- Page 本身是一个容器组件， 它可以访问 state、router和视图对象-->
<template>
  <div>
    <app-header />
    <project-info
      :project-info="projectInfo"
      @on-project-info-changed="changeProjectInfo"
    />
    <project-tabs />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/apps/shared/components/AppHeader.vue'
import ProjectInfo from '../modules/project-info/components/ProjectInfo.vue'
import ProjectTabs from '../shared/components/ProjectTabs.vue'

export default {
  name: 'Project',
  components: {
    AppHeader,
    ProjectInfo,
    ProjectTabs
  },
  data () {
    return {
      projectInfo: this.$project.project_info
    }
  },
  methods: {
    changeProjectInfo (val) {
      this.projectInfo = val
    }
  }
}
</script>
