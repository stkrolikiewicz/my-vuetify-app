import { createI18n } from 'vue-i18n'

export default createI18n({
  locale: 'pl', // set locale
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
