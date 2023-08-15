<template>
  <div class="bottoms">
    <h1>home</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import useUserStore from '@/store/modules/user.ts'

let userStore = useUserStore()
onMounted(() => {
  //userStore.userInfo()
})
</script>

<style scoped lang="scss"></style>
