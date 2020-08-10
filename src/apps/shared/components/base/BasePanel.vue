<template>
  <el-popover
    :value="true"
    popper-class="el-popover-panel"
    :placement="placement"
    trigger="manual"
    :visible-arrow="false"
    transition
  >
    <div class="panel panel-default">
      <div class="panel-heading">
        <span>添加成员</span>
        <i class="el-icon el-icon-close" />
      </div>
      <div class="panel-body">
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
      </div>
      <div class="panel-footer">
        <a href>新建标签</a>
      </div>
    </div>

    <slot slot="reference" />
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
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-popover {
  width: 260px;
}

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
</style>
