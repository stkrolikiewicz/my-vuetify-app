<script setup lang="ts">
import { NavigationDrawer } from './NavigationDrawer'
import { SideNavLogo } from './SideNavLogo';
import { SideNavItem } from './SideNavItem';

const appName = 'MY APP'

const navItems = [
  {title: 'Dashboard', value: 'dashboard', icon: '$mdiViewDashboard'},
  {title: 'Account', value: 'account', icon: '$mdiAccountBox'},
  {title: 'Admin', value: 'admin', icon: '$mdiGavel'},
]

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
