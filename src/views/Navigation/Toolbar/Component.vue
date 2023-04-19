<script setup lang="ts">
import { SearchInput } from '@/components';
import { ToolbarContainer } from './ToolbarContainer';
import { ToolbarMenu } from './ToolbarMenu'
import { ToolbarItem } from './_components'
import { UserExternalLinks } from '@/components';


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