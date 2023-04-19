<script setup lang="ts">
import { Navigation } from './views';
import {useAppStore} from '@/store/app'

const app = useAppStore();

setTimeout(() => {
  app.userName = 'hello'
}, 3000)
</script>

<template>
  <Navigation>
    <RouterView />
  </Navigation>
</template>