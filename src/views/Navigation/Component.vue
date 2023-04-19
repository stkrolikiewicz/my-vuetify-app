<script setup lang="ts">
import { VApp, VMain} from 'vuetify/components';
import { SideNav } from './SideNav';
import { Toolbar } from './Toolbar';
</script>

<template>
  <VApp>
    <VMain>
      <SideNav />
      <Toolbar />
      <slot />
    </VMain>
  </vapp>
</template>