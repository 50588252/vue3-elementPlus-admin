<template>
  <div class="bottoms">
    <h1>home</h1>
  </div>

  <el-button v-has="`cuser.detail`">测试按钮权限1</el-button>
  <el-button v-has="`cuser.detail3`">测试按钮权限2</el-button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('进入首页了')
})
</script>

<style scoped lang="scss"></style>
