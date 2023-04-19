<template>
  <VCard>
    <VCardTitle primary-title>
      {{ route.params.id }}
    </VCardTitle>
  </VCard>
</template>

<script lang="ts" setup>
import { VCard, VCardTitle } from 'vuetify/components';
import {useRoute} from 'vue-router'

const route = useRoute()
</script>