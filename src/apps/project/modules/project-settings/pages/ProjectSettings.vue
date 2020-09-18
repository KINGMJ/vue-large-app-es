<template>
  <div class="container">
    <h4>项目设置</h4>
    <base-panel
      placement="left-start"
      title="成员"
      :visible="visible"
      @close="visible=false"
    >
      <div slot="body">
        <p>123</p>
        <p>123</p>
        <p>123</p>
      </div>

      <div slot="footer">
        <a href="#">添加成员</a>
      </div>
      <el-button
        slot="reference"
        @click="visible=!visible"
      >
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
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background: #fff;
  padding-top: 20px;
}
</style>
