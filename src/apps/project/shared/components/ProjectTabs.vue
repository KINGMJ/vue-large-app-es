<template>
  <div>
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.route"
    >
      {{ tab.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProjectTabs',
  data () {
    return {
      tabs: [
        {
          id: 1,
          title: '看板',
          route: '/board'
        },
        {
          id: 2,
          title: '成员',
          route: '/member'
        },
        {
          id: 3,
          title: '文件',
          route: '/file'
        },
        {
          id: 4,
          title: '统计',
          route: '/stat'
        },
        {
          id: 5,
          title: '设置',
          route: '/setting'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  margin: 0 10px;
  color: #409eff;
}
</style>
