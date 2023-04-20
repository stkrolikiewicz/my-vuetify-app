<script setup lang="ts">
import {useAppStore} from '@/store/app'

const app = useAppStore();

setTimeout(() => {
  app.userName = 'hello'
}, 3000)
</script>

<template>
  <RouterView />
</template>