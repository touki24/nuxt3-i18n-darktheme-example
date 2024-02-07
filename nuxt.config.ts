// https://nuxt.com/docs/api/configuration/nuxt-config
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
  i18n: {
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'id',
    locales: [
      {
        name: 'Indonesia',
        code: 'id',
        iso: 'id',
        file: 'id.ts'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en',
        file: 'en.ts'
      }
    ]
  }
})