<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
//引入设置标题与logo这配置文件
import setting from '@/setting'
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: $base-menu-logo-height;
  padding: 10px;
  color: white;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin-left: 10px;
    font-size: $base-logo-title-fontSize;
  }
}
</style>
