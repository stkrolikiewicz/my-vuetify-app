<script setup lang="ts">
import { VApp, VMain} from 'vuetify/components';
import { SideNav, Toolbar } from './_components';
</script>

<template>
  <VApp>
    <VMain>
      <SideNav />
      <Toolbar />
      <RouterView />
    </VMain>
  </VApp>
</template>