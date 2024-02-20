<script setup lang="ts">
import locales from '@/i18n/locales'

const { locale } = useI18n()
const store = useI18nStore()

const languages: any[][] = locales.map(item => [{
    label: item.name,
    click: () => {
        locale.value = item.code
        store.setLocale(item.code)
    }
}])


const languageName = computed(() => {
    const selectedLocale = locale.value
    const { name = 'Select Language' } = locales.find((item) => item.code === selectedLocale) || {}
    return name
})

</script>

<template>
    <UDropdown :items="languages" mode="click">
        <UButton color="white" :label="languageName" />
    </UDropdown>
</template>