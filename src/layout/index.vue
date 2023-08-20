<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import TabBar from './navBar/index.vue'
import Main from './main/index.vue'
import useLayOutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'

let userStore = useUserStore()
let $route = useRoute()

let LayOutSettingStore = useLayOutSettingStore()
</script>
<template>
  <el-container class="layout-container-demo">
    <!--菜单部分-->
    <el-aside
      width="230px"
      :class="{ isCollapse: !!LayOutSettingStore.isCollapse }"
    >
      <el-scrollbar>
        <el-menu
          :default-active="$route.path"
          active-text-color="#fff"
          background-color="#001529"
          text-color="#959ea6"
          :collapse="LayOutSettingStore.isCollapse"
          :router="true"
        >
          <Logo />
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <!--中间容器部分-->
    <el-container class="container">
      <!--上面的路由部分 面包屑+设置-->
      <TabBar class="tabBar" />
      <!--中间路由页面展示部分-->
      <el-main class="mainContainer">
        <!--路由展示抽出的组件-->
        <el-scrollbar>
          <Main />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.layout-container-demo {
  height: 100vh;
  .container .tabBar {
    width: 100%;
    height: $base-tabbar-height;
  }
  .container {
    .mainContainer {
      padding: 20px;
      position: absolute;
      left: 230px;
      top: $base-tabbar-height;
      transition: all 0.3s;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height - 10px);
    }
  }
}
.layout-container-demo .el-menu {
  border-right: none;
}

.el-aside {
  background-color: #001529 !important;
  transition: all 0.3s;
}
.el-header {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  z-index: 999;
}
.isCollapse {
  width: 56px;
}
</style>
