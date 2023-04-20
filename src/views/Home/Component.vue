<template>
  <Layout>
    <Center>
      <h1>Home</h1>
      <Button @click="router.push('/login')">
        Przejdź do logowania
      </Button>
    </Center>
  </Layout>
</template>

<script lang="ts" setup>
import { Button, Layout, Center } from '@/components'
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
