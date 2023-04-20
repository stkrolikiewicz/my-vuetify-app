<script setup lang="ts">
import { NavigationDrawer } from './NavigationDrawer'
import { SideNavLogo } from './SideNavLogo';
import { SideNavItem } from './SideNavItem';
import { useTranslator } from '@/plugins/translator';
import { computed } from 'vue';

const {tr} = useTranslator()
const appName = computed(() => tr().app.toolbar.title)

const navItems = computed(() => [
  {title:  tr().app.sidenav.dashboard, value: 'dashboard', icon: '$mdiViewDashboard'},
  {title: tr().app.sidenav.account, value: 'account', icon: '$mdiAccountBox'},
  {title: tr().app.sidenav.admin, value: 'admin', icon: '$mdiGavel'},
])

</script>

<template>
  <NavigationDrawer>
    <template #logo>
      <SideNavLogo
        :title="appName"
      />
    </template>
    <SideNavItem
      v-for="(item, i) in navItems"
      :key="i"
      :prepend-icon="item.icon"
      :title="item.title"
      :value="item.value"
      :to="`/${item.value}`"
      active-color="secondary"
    />
  </NavigationDrawer>
</template>
