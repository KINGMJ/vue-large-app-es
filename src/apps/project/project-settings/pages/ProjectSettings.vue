<template>
  <div>
    <h4>项目设置</h4>
    <base-panel placement="left-start">
      <el-button slot="reference">
        打开panel
      </el-button>
    </base-panel>
  </div>
</template>

<script>
import BasePanel from '@/apps/shared/components/base/BasePanel.vue'
export default {
  name: 'ProjectSettings',
  components: {
    BasePanel
  }
}
</script>

<style scoped>
div {
  width: 100%;
  background: #fff;
  padding-top: 20px;
}
</style>
