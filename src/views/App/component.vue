<script setup lang="ts">
import { VApp, VMain} from 'vuetify/components';
import { SideNav, Toolbar } from './_components';
import { Layout } from '@/components';
</script>

<template>
  <VApp>
    <VMain>
      <SideNav />
      <Toolbar />
      <Layout>
        <RouterView />
      </Layout>
    </VMain>
  </VApp>
</template>