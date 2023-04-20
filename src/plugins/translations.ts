import { createI18n } from 'vue-i18n'

export default createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'pl', // set locale
  allowComposition: true, // you need to specify that!
  fallbackLocale: 'en', // set fallback locale
  messages: {
    pl: {
      auth: {},
      app: {
        toolbar: {
          logout: 'wyloguj',
        },
      },
    },
    en: {
      auth: {},
      app: {
        toolbar: {
          logout: 'logout',
        },
      },
    },
  }, // set locale messages
})
