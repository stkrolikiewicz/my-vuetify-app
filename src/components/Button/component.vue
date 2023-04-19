<script setup lang="ts">
import {VBtn} from 'vuetify/components/VBtn'
</script>

<template>
  <VBtn size="large">
    <slot>
      Default
    </slot>
    <slot name="right" />
  </VBtn>
</template>