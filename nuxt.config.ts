// https://nuxt.com/docs/api/configuration/nuxt-config
import initializeTranslation from './scripts/initializeTranslation'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
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
  },
  pinia: {
    storesDirs: ['./stores/**'],
  }
})