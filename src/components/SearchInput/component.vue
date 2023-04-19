<script setup lang="ts">
import { TextField } from '@/components';
</script>

<template>
  <TextField
    label="Search"
    prepend-inner-icon="$mdiMagnify"
    color="secondary"
    clearable
    density="compact"
    class="search-input"
  />
</template>

<style scoped lang="scss">

  .search-input {
    margin: auto 0;
    display: flex;
  }
</style>