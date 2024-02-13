import fs from 'fs'
import path from 'path'
import type { Locale } from '~/interfaces/Locale'

export default async function initializeTranslation() {
    const { messages, locales } = await generateLocalesAndMessages()
    await createMessages(messages)
    await createLocales(locales)
}

async function createLocales(locales: Locale[]) {
    const localesContent =
        `export default ${JSON.stringify(locales, null, 2)}
        `

    const i18nPath = path.resolve(__dirname, '../i18n');
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'locales.ts'), localesContent)
}

async function createMessages(messages: Messages) {
    const messagesContent =
        `export default ${JSON.stringify(messages, null, 2)}
        `
    const i18nPath = path.resolve(__dirname, '../i18n')
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'messages.ts'), messagesContent)
}


interface Messages {
    [key: string]: any
}


async function generateLocalesAndMessages() {
    const sourcesDir = path.join(__dirname, '../i18n', 'sources')
    const files = await fs.promises.readdir(sourcesDir)

    const messages: Messages = {}
    const locales: Locale[] = []

    for (const file of files) {
        if (!file.endsWith('.json')) continue

        try {
            const data = await fs.promises.readFile(path.join(sourcesDir, file), 'utf8')
            const jsonData = JSON.parse(data)

            // Validate the JSON structure and handle missing properties
            if (!jsonData || !jsonData.locale || !isLocale(jsonData.locale)) {
                console.error(`Invalid JSON structure in ${file}:`, jsonData)
                continue
            }

            // Extract and add locale data
            messages[jsonData.locale.code] = jsonData

            locales.push({
                name: jsonData.locale.name,
                code: jsonData.locale.code,
                iso: jsonData.locale.iso,
                file: jsonData.locale.file
            });
        } catch (error) {
            console.error(`Error reading ${file}:`, error)
        }
    }

    console.log('Message created: ' + JSON.stringify(messages, null, 2))

    return {
        messages: messages,
        locales: locales
    }
}

function isLocale(obj: any): obj is Locale {
    return (
        typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.code === 'string' &&
        typeof obj.iso === 'string' &&
        typeof obj.file === 'string'
    )
}