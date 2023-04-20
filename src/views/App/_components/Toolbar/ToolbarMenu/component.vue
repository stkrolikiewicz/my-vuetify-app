<script setup lang="ts">
import {Avatar, Button, Menu, Card, Icon} from '@/components'
import image from '@/assets/logo.png'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n() // use as global scope

const internalLinks = computed(() => [
  {name: 'Account', destination: '/account', variant: 'flat', icon: '$mdiAccountBox'},
  {name: 'Dashboard', destination: '/dashboard', variant: 'flat', icon: '$mdiViewDashboard'},
  {name: 'Admin', destination: '/admin', variant: 'flat', icon: '$mdiGavel'},
  {name:  t('app.toolbar.logout' ), destination: '/logout', variant: 'outlined', icon: '$mdiLogout'},
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