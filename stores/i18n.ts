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
            return localStorage.getItem('app-locale') || ''
        },
        getFallbackLocale() {
            return localStorage.getItem('app-fallback-locale') || ''
        }
    },
    actions: {
        setLocale(locale: string) {
            localStorage.setItem('app-locale', locale)
        },
        setFallbackLocale(fallbackLocale: string) {
            localStorage.setItem('app-fallback-locale', fallbackLocale)
        }
    }
})