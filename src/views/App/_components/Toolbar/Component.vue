<script setup lang="ts">
import {computed} from 'vue'
import { SearchInput } from '@/components';
import { ToolbarContainer } from './ToolbarContainer';
import { ToolbarMenu } from './ToolbarMenu'
import { ToolbarItem } from './_components'
<<<<<<< HEAD:src/views/App/_components/Toolbar/Component.vue
import { UserExternalLinks } from '@/components';
import { useTranslator } from '@/plugins/translator';
=======
import { UserExternalLinks, Button } from '@/components';
import i18n from '@/plugins/translations'
>>>>>>> feature/internationalization:src/views/Navigation/Toolbar/Component.vue

const changeLocale = () => {
  i18n.global.locale.value = i18n.global.locale.value === 'pl' ? 'en' : 'pl'
}

const locales = [
  'en',
  'pl',
]
const {locale, tr} = useTranslator()
const appName = computed(() => tr().app.toolbar.title)
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