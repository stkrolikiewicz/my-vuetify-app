<script setup lang="ts">
import { SideNavItem } from '@/components'
import { VListItemTitle } from 'vuetify/components/VList';

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <SideNavItem
    prepend-icon="$mdiVuetify"
  >
    <VListItemTitle
      class="app-title"
    >
      {{ props.title }}
    </VListItemTitle>
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