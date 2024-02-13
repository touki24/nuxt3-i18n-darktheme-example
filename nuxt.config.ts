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
  // i18n: {
  //   strategy: 'no_prefix',
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: 'i18n_redirected',
  //     redirectOn: 'root',
  //   },
  // lazy: true,
  // defaultLocale: 'en',
  // langDir: 'i18n/sources',
  // locales: locales
  // },
  pinia: {
    storesDirs: ['./stores/**'],
  }
})