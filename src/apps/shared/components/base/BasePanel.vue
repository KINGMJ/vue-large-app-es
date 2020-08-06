<template>
  <el-popover
    v-model="visible"
    popper-class="el-popover-panel"
    :placement="placement"
    trigger="manual"
    :visible-arrow="false"
    transition
  >
    <slot
      slot="reference"
      @click="visible = !visible"
    />
  </el-popover>
</template>

<script>
export default {
  name: 'BasePanel',
  props: {
    placement: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
