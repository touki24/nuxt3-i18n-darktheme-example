import fs from 'fs'
import path from 'path'

import type { Locale } from '~/interfaces/Locale'

const sourcesDir = path.join(__dirname, '../i18n', 'sources')

export default async function initializeTranslation() {
    const sourceFiles = await readSource()
    const locales = await createLocales(sourceFiles)
    await createMessages(locales)
}

async function readSource() {
    return await fs.promises.readdir(sourcesDir)
}

async function createLocales(files: string[]) {
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
            locales.push({
                name: jsonData.locale.name,
                code: jsonData.locale.code,
                iso: jsonData.locale.iso,
                file: jsonData.locale.file
            })
        } catch (error) {
            console.error(`Error reading ${file}:`, error)
        }
    }


    const localesContent =
        `export default ${JSON.stringify(locales, null, 2)}
        `

    const i18nPath = path.resolve(__dirname, '../i18n');
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'locales.ts'), localesContent.trim())
    console.log('Locales created: ' + JSON.stringify(locales, null, 2))

    return locales
}

async function createMessages(locales: Locale[]) {

    const imports: string[] = []
    const messages: string[] = []

    for (const locale of locales) {
        imports.push(`import ${locale.code} from './sources/${locale.file}'`)
        messages.push(`${locale.code}: ${locale.code}`)
    }

    const messagesContent =
        `${imports.join('\n')}

export default {
    ${messages.join(',\n\t')}
}
    `

    const i18nPath = path.resolve(__dirname, '../i18n')
    fs.mkdirSync(i18nPath, { recursive: true })
    fs.writeFileSync(path.join(i18nPath, 'messages.ts'), messagesContent.trim())

    console.log('Messages created: ' + messagesContent)
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