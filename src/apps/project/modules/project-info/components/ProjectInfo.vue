<template>
  <div>
    <project-info-show :project-info= "projectInfo" />
    <project-info-edit />
  </div>
</template>

<script>
import ProjectInfoShow from './ProjectInfoShow.vue'
import ProjectInfoEdit from './ProjectInfoEdit.vue'
export default {
  name: 'ProjectInfo',
  components: {
    ProjectInfoShow,
    ProjectInfoEdit
  },
  props: {
    projectInfo: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px;
  background: #edeff0;
}
</style>
