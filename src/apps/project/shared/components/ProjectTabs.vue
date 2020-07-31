<template>
  <div>
    <router-link v-for="tab in tabs" :to="tab.route">{{tab.title}}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'project-tabs',
    data () {
      return {
        tabs: [
          {
            title: '看板',
            route: '/board'
          },
          {
            title: '成员',
            route: '/member'
          },
          {
            title: '文件',
            route: '/file'
          },
          {
            title: '统计',
            route: '/stat'
          },
          {
            title: '设置',
            route: '/setting'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  a {
    margin: 0 10px;
    color: #409EFF
  }
</style>
