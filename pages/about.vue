<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="flex">{{ t('about') }}</h1>
        <AtomsButton :label="t('goToHome')" @click="() => {
            useRouter().push('/')
        }" />
    </div>
</template>