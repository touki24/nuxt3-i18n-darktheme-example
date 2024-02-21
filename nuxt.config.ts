// https://nuxt.com/docs/api/configuration/nuxt-config
import initializeTranslation from './scripts/initializeTranslation'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  colorMode: {
    classSuffix: ''
  },
  hooks: {
    'build:before': () => {
      initializeTranslation()
    }
  }
})