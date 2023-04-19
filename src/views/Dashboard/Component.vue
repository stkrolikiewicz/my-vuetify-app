<template>
  <h1>Dashboard</h1>
  <Table />
  <h1>{{ app.userName }}</h1>
</template>

<script lang="ts" setup>
import {Table} from './_components'
import {useAppStore} from '@/store/app'

const app = useAppStore();

</script>
