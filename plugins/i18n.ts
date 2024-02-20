import { createI18n } from 'vue-i18n'
import en from '@/i18n/sources/en.json'
import messages from '@/i18n/messages'

type MessageSchema = typeof en

export default defineNuxtPlugin((nuxtApp) => {
    const localeCookie = useCookie('locale_cookie')
    const selectedLocale = localeCookie.value || 'en'
    const i18n = createI18n<[MessageSchema], 'en'>({
        legacy: false,
        locale: selectedLocale,
        fallbackLocale: 'en',
        allowComposition: true,
        globalInjection: true,
        messages: messages
    })

    nuxtApp.vueApp.use(i18n)
})