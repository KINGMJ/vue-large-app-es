<template>
  <div>
    <h4>{{ projectInfo.project_name }}</h4>
    <small>{{ projectInfo.begin_date }} - {{ projectInfo.end_date }}</small>
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
