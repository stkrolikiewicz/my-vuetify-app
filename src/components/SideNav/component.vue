<script setup lang="ts">
import {VNavigationDrawer, VList} from 'vuetify/components'
</script>

<template>
  <VNavigationDrawer
    id="side-nav"
    expand-on-hover
    rail
    theme="dark"
  >
    <VList
      id="logo"
    >
      <slot
        name="logo"
      />
    </VList>
    <VList
      density="compact"
      nav
    >
      <slot />
    </VList>
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