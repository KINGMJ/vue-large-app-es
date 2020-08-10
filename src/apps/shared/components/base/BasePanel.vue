<template>
  <el-popover
    :value="visible"
    popper-class="el-popover-panel"
    :placement="placement"
    trigger="manual"
    :visible-arrow="false"
    width="260"
    transition
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <span>{{ title }}</span>
        <i
          class="el-icon el-icon-close"
          @click="close"
        />
      </div>
      <div class="panel-body">
        <slot name="body" />
      </div>
      <div class="panel-footer">
        <slot name="footer" />
      </div>
    </div>
    <slot
      slot="reference"
      name="reference"
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
    },
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },

  methods: {
    close (e) {
      this.$emit('close', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-default {
  border-color: #ddd;
}

.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}

.el-icon-close {
  float: right;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
  }
}

.panel-body {
  padding: 15px;
}

.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.panel-footer:empty {
  display: none;
}
</style>
