<template>
  <Center>
    <h1>Logowanie</h1>
    <div
      class="input"
    >
      <TextField
        v-model="name"
        type="text"
        label="Name"
        :placeholder="name"
        clearable
        hint="Your name should be at least 4 letter long"
        class=""
      />
    </div>
    <Button
      :disabled="name.length < 4"
      @click="login"
    >
      Zaloguj
    </Button>
  </Center>
</template>

<script lang="ts" setup>
import { Button, TextField} from '@/components'
import { useRouter } from 'vue-router'
import { Center } from '@/components'
import {useAppStore} from '@/store/app'
import {ref} from 'vue'

const router = useRouter()

const app = useAppStore();

const name = ref(app.userName)

const login = () => {
  app.userName = name.value
  router.push('/dashboard')
}
</script>

<style scoped lang="scss">
  .input {
    width: 80vw;
    max-width: 200px;
  }
</style>
