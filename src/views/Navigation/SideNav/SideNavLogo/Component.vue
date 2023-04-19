<script setup lang="ts">
import { SideNavItem } from '../_components'
import { ListItemTitle } from '@/components';

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <SideNavItem
    prepend-icon="$mdiVuetify"
  >
    <ListItemTitle
      class="app-title"
    >
      {{ props.title }}
    </ListItemTitle>
  </SideNavItem>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
  * {
    color: rgb(3,218,197)
  }
  .app-title {
    font-size: 1.3rem;
    font-weight: bold;
    white-space: nowrap;
  }
</style>