import { defineStore } from 'pinia'
import type { Locale } from '~/interfaces/Locale'
import locales from '@/i18n/locales'

interface State {
    locales: Locale[]
}


export const useI18nStore = defineStore('i18n_store', {
    state: (): State => {
        return {
            locales: locales
        }
    },
    getters: {
        getLocale() {
            return useCookie('locale_cookie').value || 'en'
        },

    },
    actions: {
        setLocale(locale: string) {
            useCookie('locale_cookie').value = locale
        }
    }
})