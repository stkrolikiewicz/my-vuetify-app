import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, Unsubscribe, User } from 'firebase/auth'
import { ref, onMounted ,onUnmounted, computed } from 'vue'
import config from '../firebaseConfig'

export const firebaseApp = initializeApp(config)

export const getUserState = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(getAuth(), resolve, reject)
  })
}

export const useAuthState = () => {
  const user = ref<User | null>()
  const error = ref<Error>()

  const auth = getAuth()
  let unsubscribe: Unsubscribe
  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e => (error.value = e),
    )
  })
  onUnmounted(() => unsubscribe())

  const isAuthenticated = computed(() => user.value != null)

  return { user, error, isAuthenticated}
}