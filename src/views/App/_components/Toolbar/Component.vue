<script setup lang="ts">
import {computed} from 'vue'
import { SearchInput } from '@/components';
import { ToolbarContainer } from './ToolbarContainer';
import { ToolbarMenu } from './ToolbarMenu'
import { ToolbarItem } from './_components'
import { UserExternalLinks } from '@/components';
import { useTranslator } from '@/plugins/translator';


const locales = [
  'en',
  'pl',
]
const {locale, tr} = useTranslator()
const appName = computed(() => tr().app.toolbar.title)
const searchLabel = computed(() => tr().app.toolbar.search)
</script>

<template>
  <ToolbarContainer
    :title="appName"
  >
    <ToolbarItem class="app-title">
      {{ appName }}
    </ToolbarItem>
    <ToolbarItem>
      <SearchInput :label="searchLabel" />
      <Card />
    </ToolbarItem>
    <ToolbarItem>
      <UserExternalLinks />
    </ToolbarItem>
    <div class="locales">
      <div
        v-for="l of locales"
        :key="l"
        :class="['locale', {'locale--active': l === locale}]"
        @click="locale = l"
      >
        {{ l }}
      </div>
    </div>
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
  .locales {
    display: flex;
    gap: 30px;
  }
  .locale {
    cursor: pointer;

    &--active {
      font-weight: bold;
    }
  }
</style>