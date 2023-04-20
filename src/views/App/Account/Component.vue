<template>
  <h1>Account</h1>
  <Center>
    <h1>Hello {{ app.userName }}!</h1>
  </Center>
</template>

<script lang="ts" setup>
import { Center } from '@/components';
import {useAppStore} from '@/store/app'

const app = useAppStore();
</script>
