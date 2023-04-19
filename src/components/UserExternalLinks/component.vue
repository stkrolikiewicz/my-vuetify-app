<script setup lang="ts">
import { Button, Card, Icon} from '@/components'


const externalLinks = [
  {name: 'LinkedIn', destination: 'https://www.linkedin.com/in/stanis%C5%82aw-kr%C3%B3likiewicz-b712a31a9', icon: '$mdiLinkedin'},
  {name: 'GitHub', destination: '/admin', icon: '$mdiGithub'},
]
</script>

<template>
  <Card
    variant="tonal"
    class="links"
  >
    <a
      v-for="(item, i) in externalLinks"
      :key="i"
      :href="item.destination"
      target="_blank"
    >
      <Button
        variant="plain"
        :append-icon="item.icon"
        class="button"
        color="secondary"
      >
        {{ item.name }}
        <template
          #append
        >
          <Icon />
        </template>
      </Button>
    </a>
  </Card>
</template>

<style scoped lang="scss">
@import '@/styles/variables.scss';
.links {
  height: fit-content;
  display: flex;
  align-items: center;
  .button {
    width: 100%;
  }
}
</style>