// https://nuxt.com/docs/api/configuration/nuxt-config
import initializeTranslation from "./scripts/initializeTranslation"
import locales from './i18n/locales'

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
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    locales: locales
  }
})