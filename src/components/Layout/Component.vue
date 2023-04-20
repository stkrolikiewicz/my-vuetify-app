<script setup lang="ts">
import { VApp } from 'vuetify/components';
</script>

<template>
  <VApp>
    <div class="container">
      <slot />
    </div>
  </VApp>
</template>

  <style scoped lang="scss">
    .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 16px;
  }
</style>