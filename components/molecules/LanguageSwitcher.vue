<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const cachedLocales = ref(locales.value);
watch(locales, (newValue) => {
    cachedLocales.value = newValue;
});

const languages: any[][] = cachedLocales.value.map(item => [{
    label: item.name,
    click: () => {
        setLocale(item.code)
    }
}])

const languageName = computed(() => {
    const { name = locale.value === 'en' ? 'Language' : 'Indonesia' } =
        cachedLocales.value.find((item) => item.code === locale.value) || {};
    return name;
});

</script>

<template>
    <UDropdown :items="languages" mode="click">
        <UButton color="white" :label="languageName" />
    </UDropdown>
</template>