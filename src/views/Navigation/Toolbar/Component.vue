<script setup lang="ts">
import { SearchInput } from '@/components';
import { ToolbarContainer } from './ToolbarContainer';
import { ToolbarMenu } from './ToolbarMenu'
import { ToolbarItem } from './_components'
import { UserExternalLinks, Button } from '@/components';
import i18n from '@/plugins/translations'

const changeLocale = () => {
  i18n.global.locale.value = i18n.global.locale.value === 'pl' ? 'en' : 'pl'
}

const appName = 'MY APP'
</script>

<template>
  <ToolbarContainer
    :title="appName"
  >
    <ToolbarItem class="app-title">
      {{ appName }}
    </ToolbarItem>
    <ToolbarItem>
      <SearchInput />
      <Card />
    </ToolbarItem>
    <ToolbarItem>
      <UserExternalLinks />
    </ToolbarItem>
    <ToolbarItem>
      <Button
        @click="changeLocale"
      >
        change lang
      </Button>
    </ToolbarItem>
    <ToolbarItem>
      <ToolbarMenu />
    </ToolbarItem>
  </ToolbarContainer>
</template>

<style scoped lang="scss">
  .app-title {
    font-size: 1.3rem;
    font-weight: bold;
    white-space: nowrap;
  }
</style>