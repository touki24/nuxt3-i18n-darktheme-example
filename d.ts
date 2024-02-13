import en from '@/i18n/sources/en.json'

type MessageSchema = typeof en

declare module 'vue-i18n' {
    export interface DefineLocaleMessage extends MessageSchema { }
}