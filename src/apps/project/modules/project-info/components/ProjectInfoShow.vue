<template>
  <div>
    <h4>{{ projectInfo.project_name }}</h4>
    <small>{{ projectInfo.begin_date }} - {{ projectInfo.end_date }}</small><br>
    <el-button
      size="medium"
      @click="$emit('on-edit-btn-click')"
    >
      编辑
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfoShow',
  props: {
    projectInfo: {
      type: Object,
      default: null
    }
  }
}
</script>
