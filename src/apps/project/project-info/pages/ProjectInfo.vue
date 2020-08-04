<template>
  <div>项目详情页面</div>
</template>

<script>
export default {
  name: 'ProjectInfo',
  mounted () {
    console.log(this.$project)
  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #edeff0;
  text-align: center;
}
</style>
