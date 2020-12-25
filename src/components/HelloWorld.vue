<template>
  <div class="hello">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <!-- 左边菜单 -->
      <a-layout-sider v-model="collapsed" collapsible>
        <div class="logo" />
        <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
          <a-sub-menu key="sub0">
            <span slot="title"
              ><a-icon type="user" /><span>个人中心</span></span
            >
            <a-menu-item key="1">
              <router-link to="/PersonalCenter/PersonalFile">
                <span>个人资料</span>
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="2">
            <router-link to="/ProjectList">
              <a-icon type="pie-chart" />
              <span>项目列表</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <router-link to="/Option2">
              <a-icon type="desktop" />
              <span>问题中心</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title"
              ><a-icon type="user" /><span>交流中心</span></span
            >
            <a-menu-item key="5">
              <router-link to="/Community/LifeCenter">生活中心</router-link>
            </a-menu-item>
            <a-menu-item key="6">
              <router-link to="/Community/LearnCenter">学习中心</router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <!-- 右边内容 -->
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb>
            <a-breadcrumb-item
              class="breadcrumbItem"
              v-for="item in this.$router.history.current.meta.breadcrumb"
              :key="item.name"
            >
              {{ item.name }}
            </a-breadcrumb-item>
          </a-breadcrumb>

          <div class="innerContent" :style="{}">
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      collapsed: false,
      routes: [],
    };
  },
  created() {
    // this.routes=Array(this.$route);
    console.log(this.$route);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.ant-breadcrumb > span:last-child {
  margin-left: 10px;
  font-size: 16px;
}
</style>
