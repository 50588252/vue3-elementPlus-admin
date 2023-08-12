<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar">456</div>
    <div class="layout_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    color: white;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: green;
  }

  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
  }
}
</style>
