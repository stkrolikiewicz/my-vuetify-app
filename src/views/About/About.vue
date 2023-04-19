<template>
  <div>
    <h1>Hello {{ route.fullPath }}</h1>
    <Button
      v-for="(item, index) of routes"
      :key="index"
      :to="getAboutItemPage(item)"
    >
      {{ item }}
    </Button>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'
import {Button} from '@/components'

const routes = [
  'item1',
  'item2',
]
const route = useRoute()
const getAboutItemPage = (routeName: string) => ({name: 'AboutItem', params: {id: routeName}})
</script>