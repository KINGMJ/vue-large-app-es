<!-- 业务组件，通常是根据最小业务状态抽象而出，大部分业务组件是一次性组件，有些业务组件也具有一定的复用性-->
<!-- 业务组件可以包含n个UI组件或展示型组件。通常我们所说的在父组件中处理业务逻辑，指的就是展示型组件中的动作放到业务组件中去实现-->
<!-- 容器组件 -> 业务组件 -> 展示型组件刚好构成三层嵌套的关系。在设计组件的时候通常不要超过三层的嵌套关系。-->
<template>
  <div>
    <project-info-show
      v-if="!showEditComponent"
      :project-info="projectInfo"
      @on-edit-btn-click="showEditComponent=true"
    />
    <project-info-edit
      v-else
      :project-info="projectInfo"
      @on-save-btn-click="handleSaveBtnClicked"
    />
  </div>
</template>

<script>
import ProjectInfoShow from './ProjectInfoShow.vue'
import ProjectInfoEdit from './ProjectInfoEdit.vue'
import { edit } from '../services/project.services'
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
  },
  data () {
    return {
      showEditComponent: false
    }
  },
  methods: {
    handleSaveBtnClicked (val) {
      this.showEditComponent = false
      this.$emit('on-project-info-changed', val)
      edit(val)
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
