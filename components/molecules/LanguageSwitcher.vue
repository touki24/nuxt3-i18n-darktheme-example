<script setup lang="ts">
import locales from '@/i18n/locales'

const { locale } = useI18n()

const setLocale = (newLocale: string) => {
    locale.value = newLocale
    useCookie('locale_cookie').value = newLocale
}

const getLocale = () => {
    const localeCookie = useCookie('locale_cookie')
    return localeCookie.value || 'en'
}

const languages: any[][] = locales.map(item => [{
    label: item.name,
    click: () => {
        setLocale(item.code)
    }
}])


const languageName = computed(() => {
    const selectedLocale = locale.value
    const { name = 'English' } = locales.find((item) => item.code === selectedLocale) || {}
    return name
})

</script>

<template>
    <UDropdown :items="languages" mode="click">
        <UButton color="white" :label="languageName" />
    </UDropdown>
</template>