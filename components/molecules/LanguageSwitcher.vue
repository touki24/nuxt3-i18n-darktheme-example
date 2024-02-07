<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()

const languages: any[][] = locales.value.map(item => [{
    label: item.name,
    click: () => {
        setLocale(item.code)
    }
}])

const languageName = computed(() => {
    const lang = locales.value.find(item => item.code == locale.value)
    return lang?.name || "Language"
})


</script>

<template>
    <UDropdown :items="languages" mode="click">
        <UButton color="white" :label="languageName" />
    </UDropdown>
</template>