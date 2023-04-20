<script setup lang="ts">
import { TextField } from '@/components';
interface Props {
  label: string
}

const props = defineProps<Props>()

</script>

<template>
  <TextField
    :label="props.label"
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