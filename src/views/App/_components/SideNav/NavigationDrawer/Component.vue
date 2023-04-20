<script setup lang="ts">
import {VNavigationDrawer} from 'vuetify/components'
import {List} from '@/components'
</script>

<template>
  <VNavigationDrawer
    id="side-nav"
    expand-on-hover
    rail
    theme="dark"
  >
    <List
      id="logo"
    >
      <slot
        name="logo"
      />
    </List>
    <List
      density="compact"
      nav
    >
      <slot />
    </List>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
  @import'@/styles/variables';
  #logo {
    height: $toolbar-height;
    //background-color: $toolbar-color;
    display: flex;
    border-bottom: 1px solid $dark;
  }
</style>