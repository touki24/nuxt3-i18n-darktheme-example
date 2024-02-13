import { createI18n } from 'vue-i18n'
import en from '@/i18n/sources/en.json'
import messages from '@/i18n/messages'

type MessageSchema = typeof en

export default defineNuxtPlugin({
    name: 'i18n-plugin',
    async setup(nuxtApp) {
        let selectedLocale = ''
        let fallbackLocale = ''
        if (process.server) {
            selectedLocale = 'id'
            return
        }

        if (process.client) {
            selectedLocale = localStorage.getItem('app-locale') || 'en'
            fallbackLocale = localStorage.getItem('app-fallback-locale') || 'en'
        }
        // const nuxtApp = useNuxtApp()
        // const selectedLocale = 'en'
        console.log('selected locale ' + selectedLocale)

        const i18n = createI18n<[MessageSchema], 'en'>({
            legacy: false,
            locale: selectedLocale,
            fallbackLocale: fallbackLocale,
            allowComposition: true,
            globalInjection: true,
            messages: messages
        })

        nuxtApp.vueApp.use(i18n)
    },
    // hooks: {
    //     'app:created'() {
    //         if (process.server) return
    //         const selectedLocale = localStorage.getItem('app-locale') || 'en'
    //         const nuxtApp = useNuxtApp()
    //         // const selectedLocale = 'en'
    //         console.log('selected locale ' + selectedLocale)

    //         const i18n = createI18n<[MessageSchema], 'en'>({
    //             legacy: false,
    //             locale: selectedLocale,
    //             fallbackLocale: 'en',
    //             allowComposition: true,
    //             globalInjection: true,
    //             messages: messages
    //         })

    //         nuxtApp.vueApp.use(i18n)
    //     }
    // }
})

// export default defineNuxtPlugin(({ vueApp }) => {
//     if (process.server) return

//     const selectedLocale = localStorage.getItem('app-ocale') || 'en'
//     // const selectedLocale = 'en'
//     const i18n = createI18n<[MessageSchema], 'en'>({
//         legacy: false,
//         locale: selectedLocale,
//         fallbackLocale: 'en',
//         allowComposition: true,
//         globalInjection: true,
//         messages: messages
//     })

//     vueApp.use(i18n)
// })