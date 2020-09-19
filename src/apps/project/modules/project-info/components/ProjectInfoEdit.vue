<template>
  <div>
    <el-input
      ref=""
      v-model="formData.project_name"
    />
    <el-button @click="handleBtnClicked">
      保存
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
  },
  data () {
    return {
      formData: null
    }
  },
  watch: {
    projectInfo: {
      handler: function (val) {
        this.formData = val
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleBtnClicked () {
      this.$emit('on-save-btn-click', this.formData)
    }
  }
}
</script>
