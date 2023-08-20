<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
import LayoutTabsBar from '@/layout/tabbar/index.vue'
</script>
<template>
  <div class="main">
    <el-header style="text-align: right; font-size: 12px">
      <div class="toolbar">
        <div class="toolbar_left">
          <BreadCrumb />
        </div>
        <div class="toolbar_right">
          <Setting />
        </div>
      </div>
      <div class="toolbar_bars">
        <LayoutTabsBar />
      </div>
    </el-header>
  </div>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .toolbar {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .toolbar_left {
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    .toolbar_right {
      display: flex;
      align-items: center;
    }
  }
  .toolbar_bars {
    height: 100%;
    //align-items: center;
  }
}
</style>
