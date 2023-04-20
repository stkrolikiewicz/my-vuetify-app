<script setup lang="ts">
import {VToolbar} from 'vuetify/components/VToolbar'
</script>

<template>
  <VToolbar
    class="toolbar"
    theme="dark"
  >
    <div class="content">
      <slot />
    </div>
  </VToolbar>
</template>

<style scoped lang="scss">
@import '@/styles/variables';
.toolbar {
  height: $toolbar-height;
  border-bottom: 1px solid $dark;
  padding-inline: 16px;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}
</style>