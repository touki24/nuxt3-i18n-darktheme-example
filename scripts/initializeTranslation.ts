import fs from 'fs'
import path from 'path'

export default async function initializeTranslation() {
    await createMessages()
    await createLocales()
}

async function createLocales() {
    const localesContent =
        `export default [
    {
        name: 'Indonesia',
        code: 'id',
        iso: 'id'
    },
    {
        name: 'English',
        code: 'en',
        iso: 'en'
    },
    {
        name: 'Japanese',
        code: 'ja',
        iso: 'ja'
    }
]
`

    const i18nPath = path.resolve(__dirname, '../i18n');
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'locales.ts'), localesContent)
}

async function createMessages() {
    const messagesContent =
        `import en from './sources/en.json'
import id from './sources/id.json'
import ja from './sources/ja.json'

export default {
    en: en,
    id: id,
    ja: ja
}
`
    const i18nPath = path.resolve(__dirname, '../i18n')
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'messages.ts'), messagesContent)
}