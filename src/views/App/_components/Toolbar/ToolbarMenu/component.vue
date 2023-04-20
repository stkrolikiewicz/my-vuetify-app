<script setup lang="ts">
import {Avatar, Button, Menu, Card, Icon} from '@/components'
import image from '@/assets/logo.png'
import { useTranslator } from '@/plugins/translator';
import { computed } from 'vue';

const {tr} = useTranslator()


const internalLinks = computed(() => [
  {name: tr().app.toolbar.menu.account, destination: '/account', variant: 'flat', icon: '$mdiAccountBox'},
  {name: tr().app.toolbar.menu.dashboard, destination: '/dashboard', variant: 'flat', icon: '$mdiViewDashboard'},
  {name: tr().app.toolbar.menu.admin, destination: '/admin', variant: 'flat', icon: '$mdiGavel'},
  {name: tr().app.toolbar.menu.logout, destination: '/', variant: 'outlined', icon: '$mdiLogout'},
])
</script>

<template>
  <Menu
    transition="slide-x-reverse-transition"
    open-on-click
  >
    <Card
      class="menu"
    >
      <Button
        v-for="(item, i) in internalLinks
        "
        :key="i"
        :variant="item.variant"
        :to="item.destination"
        :append-icon="item.icon"
        color="secondary"
        :class="(i === internalLinks
          .length - 1) && `last`"
      >
        {{ item.name }}
        <template
          #append
        >
          <Icon />
        </template>
      </Button>
    </Card>
    <template
      #activator="{ props }"
    >
      <Avatar
        :image="image"
        v-bind="props"
        color="secondary"
        variant="tonal"
        size="50"
        class="avatar"
      />
    </template>
  </Menu>
</template>

<style scoped lang="scss">
  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 16px;
    padding: 10px;
    *:not(.last) {
      margin-bottom: 7px;
    }
    .button {
      width: 100%;
    }
  }
  .avatar {
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    } 
</style>