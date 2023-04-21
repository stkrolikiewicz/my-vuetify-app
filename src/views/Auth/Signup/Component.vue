<template>
  <Center>
    <h1>Stwórz Konto</h1>
    <form @submit.prevent="handleSubmit">
      <input
        name="email"
        placeholder="email"
        type="email"
      >
      <input
        name="password"
        placeholder="password"
        type="password"
      >
      <Button type="submit">
        Sign Up
      </Button>
    </form>
    <p>Already have account?</p>
    <RouterLink to="/login">
      Log In
    </RouterLink>
  </Center>
</template>

<script lang="ts" setup>
import { Button } from '@/components'
import { RouterLink } from 'vue-router'
import { Center } from '@/components'
import { FirebaseError } from '@firebase/util'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth()

interface Credentials extends HTMLFormControlsCollection{
  email: HTMLInputElement,
  password: HTMLInputElement,
}

const handleSubmit = async (e: Event) => {
  const target = e.target as HTMLFormElement
  const {email, password} = target.elements as Credentials
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
    alert('Account created! You logged in!')
  } catch (err) {
    if (err instanceof FirebaseError)
      alert(err.message)
    else
      alert('Unexpected error' + err)
  }
}
</script>

<style scoped lang="scss">
  .input {
    width: 80vw;
    max-width: 200px;
  }
</style>
