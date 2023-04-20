<template>
  <h1>Logowanie</h1>
  <Button @click="router.push('/dashboard')">
    Zaloguj
  </Button>
</template>

<script lang="ts" setup>
import { Button} from '@/components'
import {useRouter} from 'vue-router'

const router = useRouter()
</script>
