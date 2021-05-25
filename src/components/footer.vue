<template>
  <div class="footer">
    <van-tabbar v-model="active" active-color="#ee0a24" route>
      <van-tabbar-item v-for="(item,index) in tab_list" :key="index" 
        :to="item.path" :icon="item.icon" icon-prefix="icon">
        {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      active: 0,
      notice_num: 0,
      tab_list: [{
        name: '首页',
        icon: 'index',
        path: '/home',
      },{
        name: '热榜',
        icon: 'paihangbang',
        path: '/top',
      },{
        name: '',
        icon: 'jia',
        path: '/add',
      },{
        name: '消息',
        icon: 'xiaoxi',
        path: '/notice',
      },{
        name: '我的',
        icon: 'wode',
        path: '/profile_page',
      }]
    }
  }
}
</script>

<style scoped >
.footer {
 
}
</style>
